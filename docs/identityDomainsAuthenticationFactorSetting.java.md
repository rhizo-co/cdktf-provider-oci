# `identityDomainsAuthenticationFactorSetting` Submodule <a name="`identityDomainsAuthenticationFactorSetting` Submodule" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityDomainsAuthenticationFactorSetting <a name="IdentityDomainsAuthenticationFactorSetting" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting oci_identity_domains_authentication_factor_setting}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_authentication_factor_setting.IdentityDomainsAuthenticationFactorSetting;

IdentityDomainsAuthenticationFactorSetting.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .authenticationFactorSettingId(java.lang.String)
    .bypassCodeEnabled(java.lang.Boolean)
    .bypassCodeEnabled(IResolvable)
    .bypassCodeSettings(IdentityDomainsAuthenticationFactorSettingBypassCodeSettings)
    .clientAppSettings(IdentityDomainsAuthenticationFactorSettingClientAppSettings)
    .compliancePolicy(IResolvable)
    .compliancePolicy(java.util.List<IdentityDomainsAuthenticationFactorSettingCompliancePolicy>)
    .endpointRestrictions(IdentityDomainsAuthenticationFactorSettingEndpointRestrictions)
    .idcsEndpoint(java.lang.String)
    .mfaEnrollmentType(java.lang.String)
    .notificationSettings(IdentityDomainsAuthenticationFactorSettingNotificationSettings)
    .pushEnabled(java.lang.Boolean)
    .pushEnabled(IResolvable)
    .schemas(java.util.List<java.lang.String>)
    .securityQuestionsEnabled(java.lang.Boolean)
    .securityQuestionsEnabled(IResolvable)
    .smsEnabled(java.lang.Boolean)
    .smsEnabled(IResolvable)
    .totpEnabled(java.lang.Boolean)
    .totpEnabled(IResolvable)
    .totpSettings(IdentityDomainsAuthenticationFactorSettingTotpSettings)
//  .attributes(java.lang.String)
//  .attributeSets(java.util.List<java.lang.String>)
//  .authorization(java.lang.String)
//  .autoEnrollEmailFactorDisabled(java.lang.Boolean)
//  .autoEnrollEmailFactorDisabled(IResolvable)
//  .emailEnabled(java.lang.Boolean)
//  .emailEnabled(IResolvable)
//  .emailSettings(IdentityDomainsAuthenticationFactorSettingEmailSettings)
//  .fidoAuthenticatorEnabled(java.lang.Boolean)
//  .fidoAuthenticatorEnabled(IResolvable)
//  .hideBackupFactorEnabled(java.lang.Boolean)
//  .hideBackupFactorEnabled(IResolvable)
//  .identityStoreSettings(IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings)
//  .ocid(java.lang.String)
//  .phoneCallEnabled(java.lang.Boolean)
//  .phoneCallEnabled(IResolvable)
//  .resourceTypeSchemaVersion(java.lang.String)
//  .tags(IResolvable)
//  .tags(java.util.List<IdentityDomainsAuthenticationFactorSettingTags>)
//  .thirdPartyFactor(IdentityDomainsAuthenticationFactorSettingThirdPartyFactor)
//  .timeouts(IdentityDomainsAuthenticationFactorSettingTimeouts)
//  .urnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings(IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings)
//  .urnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings(IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings)
//  .userEnrollmentDisabledFactors(java.util.List<java.lang.String>)
//  .yubicoOtpEnabled(java.lang.Boolean)
//  .yubicoOtpEnabled(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.authenticationFactorSettingId">authenticationFactorSettingId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#authentication_factor_setting_id IdentityDomainsAuthenticationFactorSetting#authentication_factor_setting_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.bypassCodeEnabled">bypassCodeEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#bypass_code_enabled IdentityDomainsAuthenticationFactorSetting#bypass_code_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.bypassCodeSettings">bypassCodeSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettings">IdentityDomainsAuthenticationFactorSettingBypassCodeSettings</a></code> | bypass_code_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.clientAppSettings">clientAppSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings">IdentityDomainsAuthenticationFactorSettingClientAppSettings</a></code> | client_app_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.compliancePolicy">compliancePolicy</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicy">IdentityDomainsAuthenticationFactorSettingCompliancePolicy</a>></code> | compliance_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.endpointRestrictions">endpointRestrictions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictions">IdentityDomainsAuthenticationFactorSettingEndpointRestrictions</a></code> | endpoint_restrictions block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.idcsEndpoint">idcsEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#idcs_endpoint IdentityDomainsAuthenticationFactorSetting#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.mfaEnrollmentType">mfaEnrollmentType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#mfa_enrollment_type IdentityDomainsAuthenticationFactorSetting#mfa_enrollment_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.notificationSettings">notificationSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettings">IdentityDomainsAuthenticationFactorSettingNotificationSettings</a></code> | notification_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.pushEnabled">pushEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#push_enabled IdentityDomainsAuthenticationFactorSetting#push_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.schemas">schemas</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#schemas IdentityDomainsAuthenticationFactorSetting#schemas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.securityQuestionsEnabled">securityQuestionsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#security_questions_enabled IdentityDomainsAuthenticationFactorSetting#security_questions_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.smsEnabled">smsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#sms_enabled IdentityDomainsAuthenticationFactorSetting#sms_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.totpEnabled">totpEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#totp_enabled IdentityDomainsAuthenticationFactorSetting#totp_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.totpSettings">totpSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings">IdentityDomainsAuthenticationFactorSettingTotpSettings</a></code> | totp_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.attributes">attributes</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#attributes IdentityDomainsAuthenticationFactorSetting#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.attributeSets">attributeSets</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#attribute_sets IdentityDomainsAuthenticationFactorSetting#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.authorization">authorization</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#authorization IdentityDomainsAuthenticationFactorSetting#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.autoEnrollEmailFactorDisabled">autoEnrollEmailFactorDisabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#auto_enroll_email_factor_disabled IdentityDomainsAuthenticationFactorSetting#auto_enroll_email_factor_disabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.emailEnabled">emailEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#email_enabled IdentityDomainsAuthenticationFactorSetting#email_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.emailSettings">emailSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettings">IdentityDomainsAuthenticationFactorSettingEmailSettings</a></code> | email_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.fidoAuthenticatorEnabled">fidoAuthenticatorEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#fido_authenticator_enabled IdentityDomainsAuthenticationFactorSetting#fido_authenticator_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.hideBackupFactorEnabled">hideBackupFactorEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#hide_backup_factor_enabled IdentityDomainsAuthenticationFactorSetting#hide_backup_factor_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.identityStoreSettings">identityStoreSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings">IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings</a></code> | identity_store_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.ocid">ocid</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#ocid IdentityDomainsAuthenticationFactorSetting#ocid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.phoneCallEnabled">phoneCallEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#phone_call_enabled IdentityDomainsAuthenticationFactorSetting#phone_call_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#resource_type_schema_version IdentityDomainsAuthenticationFactorSetting#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.tags">tags</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTags">IdentityDomainsAuthenticationFactorSettingTags</a>></code> | tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.thirdPartyFactor">thirdPartyFactor</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactor">IdentityDomainsAuthenticationFactorSettingThirdPartyFactor</a></code> | third_party_factor block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeouts">IdentityDomainsAuthenticationFactorSettingTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.urnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings">urnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings</a></code> | urnietfparamsscimschemasoracleidcsextensionfido_authentication_factor_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.urnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings">urnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings</a></code> | urnietfparamsscimschemasoracleidcsextensionthird_party_authentication_factor_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.userEnrollmentDisabledFactors">userEnrollmentDisabledFactors</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#user_enrollment_disabled_factors IdentityDomainsAuthenticationFactorSetting#user_enrollment_disabled_factors}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.yubicoOtpEnabled">yubicoOtpEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#yubico_otp_enabled IdentityDomainsAuthenticationFactorSetting#yubico_otp_enabled}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authenticationFactorSettingId`<sup>Required</sup> <a name="authenticationFactorSettingId" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.authenticationFactorSettingId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#authentication_factor_setting_id IdentityDomainsAuthenticationFactorSetting#authentication_factor_setting_id}.

---

##### `bypassCodeEnabled`<sup>Required</sup> <a name="bypassCodeEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.bypassCodeEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#bypass_code_enabled IdentityDomainsAuthenticationFactorSetting#bypass_code_enabled}.

---

##### `bypassCodeSettings`<sup>Required</sup> <a name="bypassCodeSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.bypassCodeSettings"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettings">IdentityDomainsAuthenticationFactorSettingBypassCodeSettings</a>

bypass_code_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#bypass_code_settings IdentityDomainsAuthenticationFactorSetting#bypass_code_settings}

---

##### `clientAppSettings`<sup>Required</sup> <a name="clientAppSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.clientAppSettings"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings">IdentityDomainsAuthenticationFactorSettingClientAppSettings</a>

client_app_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#client_app_settings IdentityDomainsAuthenticationFactorSetting#client_app_settings}

---

##### `compliancePolicy`<sup>Required</sup> <a name="compliancePolicy" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.compliancePolicy"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicy">IdentityDomainsAuthenticationFactorSettingCompliancePolicy</a>>

compliance_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#compliance_policy IdentityDomainsAuthenticationFactorSetting#compliance_policy}

---

##### `endpointRestrictions`<sup>Required</sup> <a name="endpointRestrictions" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.endpointRestrictions"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictions">IdentityDomainsAuthenticationFactorSettingEndpointRestrictions</a>

endpoint_restrictions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#endpoint_restrictions IdentityDomainsAuthenticationFactorSetting#endpoint_restrictions}

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.idcsEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#idcs_endpoint IdentityDomainsAuthenticationFactorSetting#idcs_endpoint}.

---

##### `mfaEnrollmentType`<sup>Required</sup> <a name="mfaEnrollmentType" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.mfaEnrollmentType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#mfa_enrollment_type IdentityDomainsAuthenticationFactorSetting#mfa_enrollment_type}.

---

##### `notificationSettings`<sup>Required</sup> <a name="notificationSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.notificationSettings"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettings">IdentityDomainsAuthenticationFactorSettingNotificationSettings</a>

notification_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#notification_settings IdentityDomainsAuthenticationFactorSetting#notification_settings}

---

##### `pushEnabled`<sup>Required</sup> <a name="pushEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.pushEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#push_enabled IdentityDomainsAuthenticationFactorSetting#push_enabled}.

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.schemas"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#schemas IdentityDomainsAuthenticationFactorSetting#schemas}.

---

##### `securityQuestionsEnabled`<sup>Required</sup> <a name="securityQuestionsEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.securityQuestionsEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#security_questions_enabled IdentityDomainsAuthenticationFactorSetting#security_questions_enabled}.

---

##### `smsEnabled`<sup>Required</sup> <a name="smsEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.smsEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#sms_enabled IdentityDomainsAuthenticationFactorSetting#sms_enabled}.

---

##### `totpEnabled`<sup>Required</sup> <a name="totpEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.totpEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#totp_enabled IdentityDomainsAuthenticationFactorSetting#totp_enabled}.

---

##### `totpSettings`<sup>Required</sup> <a name="totpSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.totpSettings"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings">IdentityDomainsAuthenticationFactorSettingTotpSettings</a>

totp_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#totp_settings IdentityDomainsAuthenticationFactorSetting#totp_settings}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.attributes"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#attributes IdentityDomainsAuthenticationFactorSetting#attributes}.

---

##### `attributeSets`<sup>Optional</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.attributeSets"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#attribute_sets IdentityDomainsAuthenticationFactorSetting#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.authorization"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#authorization IdentityDomainsAuthenticationFactorSetting#authorization}.

---

##### `autoEnrollEmailFactorDisabled`<sup>Optional</sup> <a name="autoEnrollEmailFactorDisabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.autoEnrollEmailFactorDisabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#auto_enroll_email_factor_disabled IdentityDomainsAuthenticationFactorSetting#auto_enroll_email_factor_disabled}.

---

##### `emailEnabled`<sup>Optional</sup> <a name="emailEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.emailEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#email_enabled IdentityDomainsAuthenticationFactorSetting#email_enabled}.

---

##### `emailSettings`<sup>Optional</sup> <a name="emailSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.emailSettings"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettings">IdentityDomainsAuthenticationFactorSettingEmailSettings</a>

email_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#email_settings IdentityDomainsAuthenticationFactorSetting#email_settings}

---

##### `fidoAuthenticatorEnabled`<sup>Optional</sup> <a name="fidoAuthenticatorEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.fidoAuthenticatorEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#fido_authenticator_enabled IdentityDomainsAuthenticationFactorSetting#fido_authenticator_enabled}.

---

##### `hideBackupFactorEnabled`<sup>Optional</sup> <a name="hideBackupFactorEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.hideBackupFactorEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#hide_backup_factor_enabled IdentityDomainsAuthenticationFactorSetting#hide_backup_factor_enabled}.

---

##### `identityStoreSettings`<sup>Optional</sup> <a name="identityStoreSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.identityStoreSettings"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings">IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings</a>

identity_store_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#identity_store_settings IdentityDomainsAuthenticationFactorSetting#identity_store_settings}

---

##### `ocid`<sup>Optional</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.ocid"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#ocid IdentityDomainsAuthenticationFactorSetting#ocid}.

---

##### `phoneCallEnabled`<sup>Optional</sup> <a name="phoneCallEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.phoneCallEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#phone_call_enabled IdentityDomainsAuthenticationFactorSetting#phone_call_enabled}.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.resourceTypeSchemaVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#resource_type_schema_version IdentityDomainsAuthenticationFactorSetting#resource_type_schema_version}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.tags"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTags">IdentityDomainsAuthenticationFactorSettingTags</a>>

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#tags IdentityDomainsAuthenticationFactorSetting#tags}

---

##### `thirdPartyFactor`<sup>Optional</sup> <a name="thirdPartyFactor" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.thirdPartyFactor"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactor">IdentityDomainsAuthenticationFactorSettingThirdPartyFactor</a>

third_party_factor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#third_party_factor IdentityDomainsAuthenticationFactorSetting#third_party_factor}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeouts">IdentityDomainsAuthenticationFactorSettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#timeouts IdentityDomainsAuthenticationFactorSetting#timeouts}

---

##### `urnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings`<sup>Optional</sup> <a name="urnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.urnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings</a>

urnietfparamsscimschemasoracleidcsextensionfido_authentication_factor_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#urnietfparamsscimschemasoracleidcsextensionfido_authentication_factor_settings IdentityDomainsAuthenticationFactorSetting#urnietfparamsscimschemasoracleidcsextensionfido_authentication_factor_settings}

---

##### `urnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings`<sup>Optional</sup> <a name="urnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.urnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings</a>

urnietfparamsscimschemasoracleidcsextensionthird_party_authentication_factor_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#urnietfparamsscimschemasoracleidcsextensionthird_party_authentication_factor_settings IdentityDomainsAuthenticationFactorSetting#urnietfparamsscimschemasoracleidcsextensionthird_party_authentication_factor_settings}

---

##### `userEnrollmentDisabledFactors`<sup>Optional</sup> <a name="userEnrollmentDisabledFactors" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.userEnrollmentDisabledFactors"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#user_enrollment_disabled_factors IdentityDomainsAuthenticationFactorSetting#user_enrollment_disabled_factors}.

---

##### `yubicoOtpEnabled`<sup>Optional</sup> <a name="yubicoOtpEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.yubicoOtpEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#yubico_otp_enabled IdentityDomainsAuthenticationFactorSetting#yubico_otp_enabled}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putBypassCodeSettings">putBypassCodeSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putClientAppSettings">putClientAppSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putCompliancePolicy">putCompliancePolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putEmailSettings">putEmailSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putEndpointRestrictions">putEndpointRestrictions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putIdentityStoreSettings">putIdentityStoreSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putNotificationSettings">putNotificationSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putTags">putTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putThirdPartyFactor">putThirdPartyFactor</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putTotpSettings">putTotpSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings">putUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings">putUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetAttributeSets">resetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetAutoEnrollEmailFactorDisabled">resetAutoEnrollEmailFactorDisabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetEmailEnabled">resetEmailEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetEmailSettings">resetEmailSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetFidoAuthenticatorEnabled">resetFidoAuthenticatorEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetHideBackupFactorEnabled">resetHideBackupFactorEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetIdentityStoreSettings">resetIdentityStoreSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetOcid">resetOcid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetPhoneCallEnabled">resetPhoneCallEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetResourceTypeSchemaVersion">resetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetThirdPartyFactor">resetThirdPartyFactor</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings">resetUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings">resetUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetUserEnrollmentDisabledFactors">resetUserEnrollmentDisabledFactors</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetYubicoOtpEnabled">resetYubicoOtpEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBypassCodeSettings` <a name="putBypassCodeSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putBypassCodeSettings"></a>

```java
public void putBypassCodeSettings(IdentityDomainsAuthenticationFactorSettingBypassCodeSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putBypassCodeSettings.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettings">IdentityDomainsAuthenticationFactorSettingBypassCodeSettings</a>

---

##### `putClientAppSettings` <a name="putClientAppSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putClientAppSettings"></a>

```java
public void putClientAppSettings(IdentityDomainsAuthenticationFactorSettingClientAppSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putClientAppSettings.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings">IdentityDomainsAuthenticationFactorSettingClientAppSettings</a>

---

##### `putCompliancePolicy` <a name="putCompliancePolicy" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putCompliancePolicy"></a>

```java
public void putCompliancePolicy(IResolvable OR java.util.List<IdentityDomainsAuthenticationFactorSettingCompliancePolicy> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putCompliancePolicy.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicy">IdentityDomainsAuthenticationFactorSettingCompliancePolicy</a>>

---

##### `putEmailSettings` <a name="putEmailSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putEmailSettings"></a>

```java
public void putEmailSettings(IdentityDomainsAuthenticationFactorSettingEmailSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putEmailSettings.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettings">IdentityDomainsAuthenticationFactorSettingEmailSettings</a>

---

##### `putEndpointRestrictions` <a name="putEndpointRestrictions" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putEndpointRestrictions"></a>

```java
public void putEndpointRestrictions(IdentityDomainsAuthenticationFactorSettingEndpointRestrictions value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putEndpointRestrictions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictions">IdentityDomainsAuthenticationFactorSettingEndpointRestrictions</a>

---

##### `putIdentityStoreSettings` <a name="putIdentityStoreSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putIdentityStoreSettings"></a>

```java
public void putIdentityStoreSettings(IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putIdentityStoreSettings.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings">IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings</a>

---

##### `putNotificationSettings` <a name="putNotificationSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putNotificationSettings"></a>

```java
public void putNotificationSettings(IdentityDomainsAuthenticationFactorSettingNotificationSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putNotificationSettings.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettings">IdentityDomainsAuthenticationFactorSettingNotificationSettings</a>

---

##### `putTags` <a name="putTags" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putTags"></a>

```java
public void putTags(IResolvable OR java.util.List<IdentityDomainsAuthenticationFactorSettingTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putTags.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTags">IdentityDomainsAuthenticationFactorSettingTags</a>>

---

##### `putThirdPartyFactor` <a name="putThirdPartyFactor" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putThirdPartyFactor"></a>

```java
public void putThirdPartyFactor(IdentityDomainsAuthenticationFactorSettingThirdPartyFactor value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putThirdPartyFactor.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactor">IdentityDomainsAuthenticationFactorSettingThirdPartyFactor</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putTimeouts"></a>

```java
public void putTimeouts(IdentityDomainsAuthenticationFactorSettingTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeouts">IdentityDomainsAuthenticationFactorSettingTimeouts</a>

---

##### `putTotpSettings` <a name="putTotpSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putTotpSettings"></a>

```java
public void putTotpSettings(IdentityDomainsAuthenticationFactorSettingTotpSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putTotpSettings.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings">IdentityDomainsAuthenticationFactorSettingTotpSettings</a>

---

##### `putUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings` <a name="putUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings"></a>

```java
public void putUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings(IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings</a>

---

##### `putUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings` <a name="putUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings"></a>

```java
public void putUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings(IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings</a>

---

##### `resetAttributes` <a name="resetAttributes" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetAttributes"></a>

```java
public void resetAttributes()
```

##### `resetAttributeSets` <a name="resetAttributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetAttributeSets"></a>

```java
public void resetAttributeSets()
```

##### `resetAuthorization` <a name="resetAuthorization" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetAuthorization"></a>

```java
public void resetAuthorization()
```

##### `resetAutoEnrollEmailFactorDisabled` <a name="resetAutoEnrollEmailFactorDisabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetAutoEnrollEmailFactorDisabled"></a>

```java
public void resetAutoEnrollEmailFactorDisabled()
```

##### `resetEmailEnabled` <a name="resetEmailEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetEmailEnabled"></a>

```java
public void resetEmailEnabled()
```

##### `resetEmailSettings` <a name="resetEmailSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetEmailSettings"></a>

```java
public void resetEmailSettings()
```

##### `resetFidoAuthenticatorEnabled` <a name="resetFidoAuthenticatorEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetFidoAuthenticatorEnabled"></a>

```java
public void resetFidoAuthenticatorEnabled()
```

##### `resetHideBackupFactorEnabled` <a name="resetHideBackupFactorEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetHideBackupFactorEnabled"></a>

```java
public void resetHideBackupFactorEnabled()
```

##### `resetIdentityStoreSettings` <a name="resetIdentityStoreSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetIdentityStoreSettings"></a>

```java
public void resetIdentityStoreSettings()
```

##### `resetOcid` <a name="resetOcid" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetOcid"></a>

```java
public void resetOcid()
```

##### `resetPhoneCallEnabled` <a name="resetPhoneCallEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetPhoneCallEnabled"></a>

```java
public void resetPhoneCallEnabled()
```

##### `resetResourceTypeSchemaVersion` <a name="resetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetResourceTypeSchemaVersion"></a>

```java
public void resetResourceTypeSchemaVersion()
```

##### `resetTags` <a name="resetTags" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetTags"></a>

```java
public void resetTags()
```

##### `resetThirdPartyFactor` <a name="resetThirdPartyFactor" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetThirdPartyFactor"></a>

```java
public void resetThirdPartyFactor()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings` <a name="resetUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings"></a>

```java
public void resetUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings()
```

##### `resetUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings` <a name="resetUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings"></a>

```java
public void resetUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings()
```

##### `resetUserEnrollmentDisabledFactors` <a name="resetUserEnrollmentDisabledFactors" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetUserEnrollmentDisabledFactors"></a>

```java
public void resetUserEnrollmentDisabledFactors()
```

##### `resetYubicoOtpEnabled` <a name="resetYubicoOtpEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetYubicoOtpEnabled"></a>

```java
public void resetYubicoOtpEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityDomainsAuthenticationFactorSetting resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_authentication_factor_setting.IdentityDomainsAuthenticationFactorSetting;

IdentityDomainsAuthenticationFactorSetting.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_authentication_factor_setting.IdentityDomainsAuthenticationFactorSetting;

IdentityDomainsAuthenticationFactorSetting.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_authentication_factor_setting.IdentityDomainsAuthenticationFactorSetting;

IdentityDomainsAuthenticationFactorSetting.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_authentication_factor_setting.IdentityDomainsAuthenticationFactorSetting;

IdentityDomainsAuthenticationFactorSetting.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IdentityDomainsAuthenticationFactorSetting.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a IdentityDomainsAuthenticationFactorSetting resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IdentityDomainsAuthenticationFactorSetting to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IdentityDomainsAuthenticationFactorSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the IdentityDomainsAuthenticationFactorSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.bypassCodeSettings">bypassCodeSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference">IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.clientAppSettings">clientAppSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference">IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.compartmentOcid">compartmentOcid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.compliancePolicy">compliancePolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList">IdentityDomainsAuthenticationFactorSettingCompliancePolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.deleteInProgress">deleteInProgress</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.domainOcid">domainOcid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.emailSettings">emailSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference">IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.endpointRestrictions">endpointRestrictions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference">IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.idcsCreatedBy">idcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList">IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.idcsLastModifiedBy">idcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList">IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.idcsLastUpgradedInRelease">idcsLastUpgradedInRelease</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.idcsPreventedOperations">idcsPreventedOperations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.identityStoreSettings">identityStoreSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference">IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList">IdentityDomainsAuthenticationFactorSettingMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.mfaEnabledCategory">mfaEnabledCategory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.notificationSettings">notificationSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference">IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList">IdentityDomainsAuthenticationFactorSettingTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.tenancyOcid">tenancyOcid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.thirdPartyFactor">thirdPartyFactor</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference">IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference">IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.totpSettings">totpSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference">IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.urnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings">urnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.urnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings">urnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.attributeSetsInput">attributeSetsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.attributesInput">attributesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.authenticationFactorSettingIdInput">authenticationFactorSettingIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.authorizationInput">authorizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.autoEnrollEmailFactorDisabledInput">autoEnrollEmailFactorDisabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.bypassCodeEnabledInput">bypassCodeEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.bypassCodeSettingsInput">bypassCodeSettingsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettings">IdentityDomainsAuthenticationFactorSettingBypassCodeSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.clientAppSettingsInput">clientAppSettingsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings">IdentityDomainsAuthenticationFactorSettingClientAppSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.compliancePolicyInput">compliancePolicyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicy">IdentityDomainsAuthenticationFactorSettingCompliancePolicy</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.emailEnabledInput">emailEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.emailSettingsInput">emailSettingsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettings">IdentityDomainsAuthenticationFactorSettingEmailSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.endpointRestrictionsInput">endpointRestrictionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictions">IdentityDomainsAuthenticationFactorSettingEndpointRestrictions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.fidoAuthenticatorEnabledInput">fidoAuthenticatorEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.hideBackupFactorEnabledInput">hideBackupFactorEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.idcsEndpointInput">idcsEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.identityStoreSettingsInput">identityStoreSettingsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings">IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.mfaEnrollmentTypeInput">mfaEnrollmentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.notificationSettingsInput">notificationSettingsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettings">IdentityDomainsAuthenticationFactorSettingNotificationSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.ocidInput">ocidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.phoneCallEnabledInput">phoneCallEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.pushEnabledInput">pushEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.resourceTypeSchemaVersionInput">resourceTypeSchemaVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.schemasInput">schemasInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.securityQuestionsEnabledInput">securityQuestionsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.smsEnabledInput">smsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.tagsInput">tagsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTags">IdentityDomainsAuthenticationFactorSettingTags</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.thirdPartyFactorInput">thirdPartyFactorInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactor">IdentityDomainsAuthenticationFactorSettingThirdPartyFactor</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeouts">IdentityDomainsAuthenticationFactorSettingTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.totpEnabledInput">totpEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.totpSettingsInput">totpSettingsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings">IdentityDomainsAuthenticationFactorSettingTotpSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.urnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsInput">urnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.urnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsInput">urnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.userEnrollmentDisabledFactorsInput">userEnrollmentDisabledFactorsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.yubicoOtpEnabledInput">yubicoOtpEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.attributes">attributes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.attributeSets">attributeSets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.authenticationFactorSettingId">authenticationFactorSettingId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.authorization">authorization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.autoEnrollEmailFactorDisabled">autoEnrollEmailFactorDisabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.bypassCodeEnabled">bypassCodeEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.emailEnabled">emailEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.fidoAuthenticatorEnabled">fidoAuthenticatorEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.hideBackupFactorEnabled">hideBackupFactorEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.idcsEndpoint">idcsEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.mfaEnrollmentType">mfaEnrollmentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.phoneCallEnabled">phoneCallEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.pushEnabled">pushEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.schemas">schemas</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.securityQuestionsEnabled">securityQuestionsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.smsEnabled">smsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.totpEnabled">totpEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.userEnrollmentDisabledFactors">userEnrollmentDisabledFactors</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.yubicoOtpEnabled">yubicoOtpEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bypassCodeSettings`<sup>Required</sup> <a name="bypassCodeSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.bypassCodeSettings"></a>

```java
public IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference getBypassCodeSettings();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference">IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference</a>

---

##### `clientAppSettings`<sup>Required</sup> <a name="clientAppSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.clientAppSettings"></a>

```java
public IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference getClientAppSettings();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference">IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference</a>

---

##### `compartmentOcid`<sup>Required</sup> <a name="compartmentOcid" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.compartmentOcid"></a>

```java
public java.lang.String getCompartmentOcid();
```

- *Type:* java.lang.String

---

##### `compliancePolicy`<sup>Required</sup> <a name="compliancePolicy" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.compliancePolicy"></a>

```java
public IdentityDomainsAuthenticationFactorSettingCompliancePolicyList getCompliancePolicy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList">IdentityDomainsAuthenticationFactorSettingCompliancePolicyList</a>

---

##### `deleteInProgress`<sup>Required</sup> <a name="deleteInProgress" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.deleteInProgress"></a>

```java
public IResolvable getDeleteInProgress();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `domainOcid`<sup>Required</sup> <a name="domainOcid" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.domainOcid"></a>

```java
public java.lang.String getDomainOcid();
```

- *Type:* java.lang.String

---

##### `emailSettings`<sup>Required</sup> <a name="emailSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.emailSettings"></a>

```java
public IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference getEmailSettings();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference">IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference</a>

---

##### `endpointRestrictions`<sup>Required</sup> <a name="endpointRestrictions" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.endpointRestrictions"></a>

```java
public IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference getEndpointRestrictions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference">IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `idcsCreatedBy`<sup>Required</sup> <a name="idcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.idcsCreatedBy"></a>

```java
public IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList getIdcsCreatedBy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList">IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList</a>

---

##### `idcsLastModifiedBy`<sup>Required</sup> <a name="idcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.idcsLastModifiedBy"></a>

```java
public IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList getIdcsLastModifiedBy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList">IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList</a>

---

##### `idcsLastUpgradedInRelease`<sup>Required</sup> <a name="idcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.idcsLastUpgradedInRelease"></a>

```java
public java.lang.String getIdcsLastUpgradedInRelease();
```

- *Type:* java.lang.String

---

##### `idcsPreventedOperations`<sup>Required</sup> <a name="idcsPreventedOperations" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.idcsPreventedOperations"></a>

```java
public java.util.List<java.lang.String> getIdcsPreventedOperations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityStoreSettings`<sup>Required</sup> <a name="identityStoreSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.identityStoreSettings"></a>

```java
public IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference getIdentityStoreSettings();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference">IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference</a>

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.meta"></a>

```java
public IdentityDomainsAuthenticationFactorSettingMetaList getMeta();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList">IdentityDomainsAuthenticationFactorSettingMetaList</a>

---

##### `mfaEnabledCategory`<sup>Required</sup> <a name="mfaEnabledCategory" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.mfaEnabledCategory"></a>

```java
public java.lang.String getMfaEnabledCategory();
```

- *Type:* java.lang.String

---

##### `notificationSettings`<sup>Required</sup> <a name="notificationSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.notificationSettings"></a>

```java
public IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference getNotificationSettings();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference">IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.tags"></a>

```java
public IdentityDomainsAuthenticationFactorSettingTagsList getTags();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList">IdentityDomainsAuthenticationFactorSettingTagsList</a>

---

##### `tenancyOcid`<sup>Required</sup> <a name="tenancyOcid" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.tenancyOcid"></a>

```java
public java.lang.String getTenancyOcid();
```

- *Type:* java.lang.String

---

##### `thirdPartyFactor`<sup>Required</sup> <a name="thirdPartyFactor" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.thirdPartyFactor"></a>

```java
public IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference getThirdPartyFactor();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference">IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.timeouts"></a>

```java
public IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference">IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference</a>

---

##### `totpSettings`<sup>Required</sup> <a name="totpSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.totpSettings"></a>

```java
public IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference getTotpSettings();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference">IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference</a>

---

##### `urnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings`<sup>Required</sup> <a name="urnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.urnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings"></a>

```java
public IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference getUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference</a>

---

##### `urnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings`<sup>Required</sup> <a name="urnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.urnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings"></a>

```java
public IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference getUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference</a>

---

##### `attributeSetsInput`<sup>Optional</sup> <a name="attributeSetsInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.attributeSetsInput"></a>

```java
public java.util.List<java.lang.String> getAttributeSetsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.attributesInput"></a>

```java
public java.lang.String getAttributesInput();
```

- *Type:* java.lang.String

---

##### `authenticationFactorSettingIdInput`<sup>Optional</sup> <a name="authenticationFactorSettingIdInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.authenticationFactorSettingIdInput"></a>

```java
public java.lang.String getAuthenticationFactorSettingIdInput();
```

- *Type:* java.lang.String

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.authorizationInput"></a>

```java
public java.lang.String getAuthorizationInput();
```

- *Type:* java.lang.String

---

##### `autoEnrollEmailFactorDisabledInput`<sup>Optional</sup> <a name="autoEnrollEmailFactorDisabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.autoEnrollEmailFactorDisabledInput"></a>

```java
public java.lang.Object getAutoEnrollEmailFactorDisabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `bypassCodeEnabledInput`<sup>Optional</sup> <a name="bypassCodeEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.bypassCodeEnabledInput"></a>

```java
public java.lang.Object getBypassCodeEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `bypassCodeSettingsInput`<sup>Optional</sup> <a name="bypassCodeSettingsInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.bypassCodeSettingsInput"></a>

```java
public IdentityDomainsAuthenticationFactorSettingBypassCodeSettings getBypassCodeSettingsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettings">IdentityDomainsAuthenticationFactorSettingBypassCodeSettings</a>

---

##### `clientAppSettingsInput`<sup>Optional</sup> <a name="clientAppSettingsInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.clientAppSettingsInput"></a>

```java
public IdentityDomainsAuthenticationFactorSettingClientAppSettings getClientAppSettingsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings">IdentityDomainsAuthenticationFactorSettingClientAppSettings</a>

---

##### `compliancePolicyInput`<sup>Optional</sup> <a name="compliancePolicyInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.compliancePolicyInput"></a>

```java
public java.lang.Object getCompliancePolicyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicy">IdentityDomainsAuthenticationFactorSettingCompliancePolicy</a>>

---

##### `emailEnabledInput`<sup>Optional</sup> <a name="emailEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.emailEnabledInput"></a>

```java
public java.lang.Object getEmailEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `emailSettingsInput`<sup>Optional</sup> <a name="emailSettingsInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.emailSettingsInput"></a>

```java
public IdentityDomainsAuthenticationFactorSettingEmailSettings getEmailSettingsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettings">IdentityDomainsAuthenticationFactorSettingEmailSettings</a>

---

##### `endpointRestrictionsInput`<sup>Optional</sup> <a name="endpointRestrictionsInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.endpointRestrictionsInput"></a>

```java
public IdentityDomainsAuthenticationFactorSettingEndpointRestrictions getEndpointRestrictionsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictions">IdentityDomainsAuthenticationFactorSettingEndpointRestrictions</a>

---

##### `fidoAuthenticatorEnabledInput`<sup>Optional</sup> <a name="fidoAuthenticatorEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.fidoAuthenticatorEnabledInput"></a>

```java
public java.lang.Object getFidoAuthenticatorEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hideBackupFactorEnabledInput`<sup>Optional</sup> <a name="hideBackupFactorEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.hideBackupFactorEnabledInput"></a>

```java
public java.lang.Object getHideBackupFactorEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idcsEndpointInput`<sup>Optional</sup> <a name="idcsEndpointInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.idcsEndpointInput"></a>

```java
public java.lang.String getIdcsEndpointInput();
```

- *Type:* java.lang.String

---

##### `identityStoreSettingsInput`<sup>Optional</sup> <a name="identityStoreSettingsInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.identityStoreSettingsInput"></a>

```java
public IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings getIdentityStoreSettingsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings">IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings</a>

---

##### `mfaEnrollmentTypeInput`<sup>Optional</sup> <a name="mfaEnrollmentTypeInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.mfaEnrollmentTypeInput"></a>

```java
public java.lang.String getMfaEnrollmentTypeInput();
```

- *Type:* java.lang.String

---

##### `notificationSettingsInput`<sup>Optional</sup> <a name="notificationSettingsInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.notificationSettingsInput"></a>

```java
public IdentityDomainsAuthenticationFactorSettingNotificationSettings getNotificationSettingsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettings">IdentityDomainsAuthenticationFactorSettingNotificationSettings</a>

---

##### `ocidInput`<sup>Optional</sup> <a name="ocidInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.ocidInput"></a>

```java
public java.lang.String getOcidInput();
```

- *Type:* java.lang.String

---

##### `phoneCallEnabledInput`<sup>Optional</sup> <a name="phoneCallEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.phoneCallEnabledInput"></a>

```java
public java.lang.Object getPhoneCallEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `pushEnabledInput`<sup>Optional</sup> <a name="pushEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.pushEnabledInput"></a>

```java
public java.lang.Object getPushEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `resourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="resourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.resourceTypeSchemaVersionInput"></a>

```java
public java.lang.String getResourceTypeSchemaVersionInput();
```

- *Type:* java.lang.String

---

##### `schemasInput`<sup>Optional</sup> <a name="schemasInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.schemasInput"></a>

```java
public java.util.List<java.lang.String> getSchemasInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityQuestionsEnabledInput`<sup>Optional</sup> <a name="securityQuestionsEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.securityQuestionsEnabledInput"></a>

```java
public java.lang.Object getSecurityQuestionsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `smsEnabledInput`<sup>Optional</sup> <a name="smsEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.smsEnabledInput"></a>

```java
public java.lang.Object getSmsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.tagsInput"></a>

```java
public java.lang.Object getTagsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTags">IdentityDomainsAuthenticationFactorSettingTags</a>>

---

##### `thirdPartyFactorInput`<sup>Optional</sup> <a name="thirdPartyFactorInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.thirdPartyFactorInput"></a>

```java
public IdentityDomainsAuthenticationFactorSettingThirdPartyFactor getThirdPartyFactorInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactor">IdentityDomainsAuthenticationFactorSettingThirdPartyFactor</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeouts">IdentityDomainsAuthenticationFactorSettingTimeouts</a>

---

##### `totpEnabledInput`<sup>Optional</sup> <a name="totpEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.totpEnabledInput"></a>

```java
public java.lang.Object getTotpEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `totpSettingsInput`<sup>Optional</sup> <a name="totpSettingsInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.totpSettingsInput"></a>

```java
public IdentityDomainsAuthenticationFactorSettingTotpSettings getTotpSettingsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings">IdentityDomainsAuthenticationFactorSettingTotpSettings</a>

---

##### `urnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsInput`<sup>Optional</sup> <a name="urnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.urnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsInput"></a>

```java
public IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings getUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings</a>

---

##### `urnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsInput`<sup>Optional</sup> <a name="urnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.urnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsInput"></a>

```java
public IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings getUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings</a>

---

##### `userEnrollmentDisabledFactorsInput`<sup>Optional</sup> <a name="userEnrollmentDisabledFactorsInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.userEnrollmentDisabledFactorsInput"></a>

```java
public java.util.List<java.lang.String> getUserEnrollmentDisabledFactorsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `yubicoOtpEnabledInput`<sup>Optional</sup> <a name="yubicoOtpEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.yubicoOtpEnabledInput"></a>

```java
public java.lang.Object getYubicoOtpEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.attributes"></a>

```java
public java.lang.String getAttributes();
```

- *Type:* java.lang.String

---

##### `attributeSets`<sup>Required</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.attributeSets"></a>

```java
public java.util.List<java.lang.String> getAttributeSets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authenticationFactorSettingId`<sup>Required</sup> <a name="authenticationFactorSettingId" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.authenticationFactorSettingId"></a>

```java
public java.lang.String getAuthenticationFactorSettingId();
```

- *Type:* java.lang.String

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.authorization"></a>

```java
public java.lang.String getAuthorization();
```

- *Type:* java.lang.String

---

##### `autoEnrollEmailFactorDisabled`<sup>Required</sup> <a name="autoEnrollEmailFactorDisabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.autoEnrollEmailFactorDisabled"></a>

```java
public java.lang.Object getAutoEnrollEmailFactorDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `bypassCodeEnabled`<sup>Required</sup> <a name="bypassCodeEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.bypassCodeEnabled"></a>

```java
public java.lang.Object getBypassCodeEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `emailEnabled`<sup>Required</sup> <a name="emailEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.emailEnabled"></a>

```java
public java.lang.Object getEmailEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `fidoAuthenticatorEnabled`<sup>Required</sup> <a name="fidoAuthenticatorEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.fidoAuthenticatorEnabled"></a>

```java
public java.lang.Object getFidoAuthenticatorEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hideBackupFactorEnabled`<sup>Required</sup> <a name="hideBackupFactorEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.hideBackupFactorEnabled"></a>

```java
public java.lang.Object getHideBackupFactorEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.idcsEndpoint"></a>

```java
public java.lang.String getIdcsEndpoint();
```

- *Type:* java.lang.String

---

##### `mfaEnrollmentType`<sup>Required</sup> <a name="mfaEnrollmentType" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.mfaEnrollmentType"></a>

```java
public java.lang.String getMfaEnrollmentType();
```

- *Type:* java.lang.String

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `phoneCallEnabled`<sup>Required</sup> <a name="phoneCallEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.phoneCallEnabled"></a>

```java
public java.lang.Object getPhoneCallEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `pushEnabled`<sup>Required</sup> <a name="pushEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.pushEnabled"></a>

```java
public java.lang.Object getPushEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.resourceTypeSchemaVersion"></a>

```java
public java.lang.String getResourceTypeSchemaVersion();
```

- *Type:* java.lang.String

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.schemas"></a>

```java
public java.util.List<java.lang.String> getSchemas();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityQuestionsEnabled`<sup>Required</sup> <a name="securityQuestionsEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.securityQuestionsEnabled"></a>

```java
public java.lang.Object getSecurityQuestionsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `smsEnabled`<sup>Required</sup> <a name="smsEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.smsEnabled"></a>

```java
public java.lang.Object getSmsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `totpEnabled`<sup>Required</sup> <a name="totpEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.totpEnabled"></a>

```java
public java.lang.Object getTotpEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `userEnrollmentDisabledFactors`<sup>Required</sup> <a name="userEnrollmentDisabledFactors" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.userEnrollmentDisabledFactors"></a>

```java
public java.util.List<java.lang.String> getUserEnrollmentDisabledFactors();
```

- *Type:* java.util.List<java.lang.String>

---

##### `yubicoOtpEnabled`<sup>Required</sup> <a name="yubicoOtpEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.yubicoOtpEnabled"></a>

```java
public java.lang.Object getYubicoOtpEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityDomainsAuthenticationFactorSettingBypassCodeSettings <a name="IdentityDomainsAuthenticationFactorSettingBypassCodeSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_authentication_factor_setting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettings;

IdentityDomainsAuthenticationFactorSettingBypassCodeSettings.builder()
    .helpDeskCodeExpiryInMins(java.lang.Number)
    .helpDeskGenerationEnabled(java.lang.Boolean)
    .helpDeskGenerationEnabled(IResolvable)
    .helpDeskMaxUsage(java.lang.Number)
    .length(java.lang.Number)
    .maxActive(java.lang.Number)
    .selfServiceGenerationEnabled(java.lang.Boolean)
    .selfServiceGenerationEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettings.property.helpDeskCodeExpiryInMins">helpDeskCodeExpiryInMins</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#help_desk_code_expiry_in_mins IdentityDomainsAuthenticationFactorSetting#help_desk_code_expiry_in_mins}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettings.property.helpDeskGenerationEnabled">helpDeskGenerationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#help_desk_generation_enabled IdentityDomainsAuthenticationFactorSetting#help_desk_generation_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettings.property.helpDeskMaxUsage">helpDeskMaxUsage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#help_desk_max_usage IdentityDomainsAuthenticationFactorSetting#help_desk_max_usage}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettings.property.length">length</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#length IdentityDomainsAuthenticationFactorSetting#length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettings.property.maxActive">maxActive</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#max_active IdentityDomainsAuthenticationFactorSetting#max_active}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettings.property.selfServiceGenerationEnabled">selfServiceGenerationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#self_service_generation_enabled IdentityDomainsAuthenticationFactorSetting#self_service_generation_enabled}. |

---

##### `helpDeskCodeExpiryInMins`<sup>Required</sup> <a name="helpDeskCodeExpiryInMins" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettings.property.helpDeskCodeExpiryInMins"></a>

```java
public java.lang.Number getHelpDeskCodeExpiryInMins();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#help_desk_code_expiry_in_mins IdentityDomainsAuthenticationFactorSetting#help_desk_code_expiry_in_mins}.

---

##### `helpDeskGenerationEnabled`<sup>Required</sup> <a name="helpDeskGenerationEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettings.property.helpDeskGenerationEnabled"></a>

```java
public java.lang.Object getHelpDeskGenerationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#help_desk_generation_enabled IdentityDomainsAuthenticationFactorSetting#help_desk_generation_enabled}.

---

##### `helpDeskMaxUsage`<sup>Required</sup> <a name="helpDeskMaxUsage" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettings.property.helpDeskMaxUsage"></a>

```java
public java.lang.Number getHelpDeskMaxUsage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#help_desk_max_usage IdentityDomainsAuthenticationFactorSetting#help_desk_max_usage}.

---

##### `length`<sup>Required</sup> <a name="length" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettings.property.length"></a>

```java
public java.lang.Number getLength();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#length IdentityDomainsAuthenticationFactorSetting#length}.

---

##### `maxActive`<sup>Required</sup> <a name="maxActive" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettings.property.maxActive"></a>

```java
public java.lang.Number getMaxActive();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#max_active IdentityDomainsAuthenticationFactorSetting#max_active}.

---

##### `selfServiceGenerationEnabled`<sup>Required</sup> <a name="selfServiceGenerationEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettings.property.selfServiceGenerationEnabled"></a>

```java
public java.lang.Object getSelfServiceGenerationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#self_service_generation_enabled IdentityDomainsAuthenticationFactorSetting#self_service_generation_enabled}.

---

### IdentityDomainsAuthenticationFactorSettingClientAppSettings <a name="IdentityDomainsAuthenticationFactorSettingClientAppSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_authentication_factor_setting.IdentityDomainsAuthenticationFactorSettingClientAppSettings;

IdentityDomainsAuthenticationFactorSettingClientAppSettings.builder()
    .deviceProtectionPolicy(java.lang.String)
    .initialLockoutPeriodInSecs(java.lang.Number)
    .keyPairLength(java.lang.Number)
    .lockoutEscalationPattern(java.lang.String)
    .maxFailuresBeforeLockout(java.lang.Number)
    .maxFailuresBeforeWarning(java.lang.Number)
    .maxLockoutIntervalInSecs(java.lang.Number)
    .minPinLength(java.lang.Number)
    .policyUpdateFreqInDays(java.lang.Number)
    .requestSigningAlgo(java.lang.String)
    .sharedSecretEncoding(java.lang.String)
    .unlockAppForEachRequestEnabled(java.lang.Boolean)
    .unlockAppForEachRequestEnabled(IResolvable)
    .unlockAppIntervalInSecs(java.lang.Number)
    .unlockOnAppForegroundEnabled(java.lang.Boolean)
    .unlockOnAppForegroundEnabled(IResolvable)
    .unlockOnAppStartEnabled(java.lang.Boolean)
    .unlockOnAppStartEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.deviceProtectionPolicy">deviceProtectionPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#device_protection_policy IdentityDomainsAuthenticationFactorSetting#device_protection_policy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.initialLockoutPeriodInSecs">initialLockoutPeriodInSecs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#initial_lockout_period_in_secs IdentityDomainsAuthenticationFactorSetting#initial_lockout_period_in_secs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.keyPairLength">keyPairLength</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#key_pair_length IdentityDomainsAuthenticationFactorSetting#key_pair_length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.lockoutEscalationPattern">lockoutEscalationPattern</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#lockout_escalation_pattern IdentityDomainsAuthenticationFactorSetting#lockout_escalation_pattern}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.maxFailuresBeforeLockout">maxFailuresBeforeLockout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#max_failures_before_lockout IdentityDomainsAuthenticationFactorSetting#max_failures_before_lockout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.maxFailuresBeforeWarning">maxFailuresBeforeWarning</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#max_failures_before_warning IdentityDomainsAuthenticationFactorSetting#max_failures_before_warning}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.maxLockoutIntervalInSecs">maxLockoutIntervalInSecs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#max_lockout_interval_in_secs IdentityDomainsAuthenticationFactorSetting#max_lockout_interval_in_secs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.minPinLength">minPinLength</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#min_pin_length IdentityDomainsAuthenticationFactorSetting#min_pin_length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.policyUpdateFreqInDays">policyUpdateFreqInDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#policy_update_freq_in_days IdentityDomainsAuthenticationFactorSetting#policy_update_freq_in_days}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.requestSigningAlgo">requestSigningAlgo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#request_signing_algo IdentityDomainsAuthenticationFactorSetting#request_signing_algo}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.sharedSecretEncoding">sharedSecretEncoding</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#shared_secret_encoding IdentityDomainsAuthenticationFactorSetting#shared_secret_encoding}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.unlockAppForEachRequestEnabled">unlockAppForEachRequestEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#unlock_app_for_each_request_enabled IdentityDomainsAuthenticationFactorSetting#unlock_app_for_each_request_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.unlockAppIntervalInSecs">unlockAppIntervalInSecs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#unlock_app_interval_in_secs IdentityDomainsAuthenticationFactorSetting#unlock_app_interval_in_secs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.unlockOnAppForegroundEnabled">unlockOnAppForegroundEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#unlock_on_app_foreground_enabled IdentityDomainsAuthenticationFactorSetting#unlock_on_app_foreground_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.unlockOnAppStartEnabled">unlockOnAppStartEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#unlock_on_app_start_enabled IdentityDomainsAuthenticationFactorSetting#unlock_on_app_start_enabled}. |

---

##### `deviceProtectionPolicy`<sup>Required</sup> <a name="deviceProtectionPolicy" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.deviceProtectionPolicy"></a>

```java
public java.lang.String getDeviceProtectionPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#device_protection_policy IdentityDomainsAuthenticationFactorSetting#device_protection_policy}.

---

##### `initialLockoutPeriodInSecs`<sup>Required</sup> <a name="initialLockoutPeriodInSecs" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.initialLockoutPeriodInSecs"></a>

```java
public java.lang.Number getInitialLockoutPeriodInSecs();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#initial_lockout_period_in_secs IdentityDomainsAuthenticationFactorSetting#initial_lockout_period_in_secs}.

---

##### `keyPairLength`<sup>Required</sup> <a name="keyPairLength" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.keyPairLength"></a>

```java
public java.lang.Number getKeyPairLength();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#key_pair_length IdentityDomainsAuthenticationFactorSetting#key_pair_length}.

---

##### `lockoutEscalationPattern`<sup>Required</sup> <a name="lockoutEscalationPattern" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.lockoutEscalationPattern"></a>

```java
public java.lang.String getLockoutEscalationPattern();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#lockout_escalation_pattern IdentityDomainsAuthenticationFactorSetting#lockout_escalation_pattern}.

---

##### `maxFailuresBeforeLockout`<sup>Required</sup> <a name="maxFailuresBeforeLockout" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.maxFailuresBeforeLockout"></a>

```java
public java.lang.Number getMaxFailuresBeforeLockout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#max_failures_before_lockout IdentityDomainsAuthenticationFactorSetting#max_failures_before_lockout}.

---

##### `maxFailuresBeforeWarning`<sup>Required</sup> <a name="maxFailuresBeforeWarning" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.maxFailuresBeforeWarning"></a>

```java
public java.lang.Number getMaxFailuresBeforeWarning();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#max_failures_before_warning IdentityDomainsAuthenticationFactorSetting#max_failures_before_warning}.

---

##### `maxLockoutIntervalInSecs`<sup>Required</sup> <a name="maxLockoutIntervalInSecs" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.maxLockoutIntervalInSecs"></a>

```java
public java.lang.Number getMaxLockoutIntervalInSecs();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#max_lockout_interval_in_secs IdentityDomainsAuthenticationFactorSetting#max_lockout_interval_in_secs}.

---

##### `minPinLength`<sup>Required</sup> <a name="minPinLength" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.minPinLength"></a>

```java
public java.lang.Number getMinPinLength();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#min_pin_length IdentityDomainsAuthenticationFactorSetting#min_pin_length}.

---

##### `policyUpdateFreqInDays`<sup>Required</sup> <a name="policyUpdateFreqInDays" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.policyUpdateFreqInDays"></a>

```java
public java.lang.Number getPolicyUpdateFreqInDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#policy_update_freq_in_days IdentityDomainsAuthenticationFactorSetting#policy_update_freq_in_days}.

---

##### `requestSigningAlgo`<sup>Required</sup> <a name="requestSigningAlgo" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.requestSigningAlgo"></a>

```java
public java.lang.String getRequestSigningAlgo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#request_signing_algo IdentityDomainsAuthenticationFactorSetting#request_signing_algo}.

---

##### `sharedSecretEncoding`<sup>Required</sup> <a name="sharedSecretEncoding" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.sharedSecretEncoding"></a>

```java
public java.lang.String getSharedSecretEncoding();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#shared_secret_encoding IdentityDomainsAuthenticationFactorSetting#shared_secret_encoding}.

---

##### `unlockAppForEachRequestEnabled`<sup>Required</sup> <a name="unlockAppForEachRequestEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.unlockAppForEachRequestEnabled"></a>

```java
public java.lang.Object getUnlockAppForEachRequestEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#unlock_app_for_each_request_enabled IdentityDomainsAuthenticationFactorSetting#unlock_app_for_each_request_enabled}.

---

##### `unlockAppIntervalInSecs`<sup>Required</sup> <a name="unlockAppIntervalInSecs" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.unlockAppIntervalInSecs"></a>

```java
public java.lang.Number getUnlockAppIntervalInSecs();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#unlock_app_interval_in_secs IdentityDomainsAuthenticationFactorSetting#unlock_app_interval_in_secs}.

---

##### `unlockOnAppForegroundEnabled`<sup>Required</sup> <a name="unlockOnAppForegroundEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.unlockOnAppForegroundEnabled"></a>

```java
public java.lang.Object getUnlockOnAppForegroundEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#unlock_on_app_foreground_enabled IdentityDomainsAuthenticationFactorSetting#unlock_on_app_foreground_enabled}.

---

##### `unlockOnAppStartEnabled`<sup>Required</sup> <a name="unlockOnAppStartEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.unlockOnAppStartEnabled"></a>

```java
public java.lang.Object getUnlockOnAppStartEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#unlock_on_app_start_enabled IdentityDomainsAuthenticationFactorSetting#unlock_on_app_start_enabled}.

---

### IdentityDomainsAuthenticationFactorSettingCompliancePolicy <a name="IdentityDomainsAuthenticationFactorSettingCompliancePolicy" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_authentication_factor_setting.IdentityDomainsAuthenticationFactorSettingCompliancePolicy;

IdentityDomainsAuthenticationFactorSettingCompliancePolicy.builder()
    .action(java.lang.String)
    .name(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicy.property.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#action IdentityDomainsAuthenticationFactorSetting#action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicy.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#name IdentityDomainsAuthenticationFactorSetting#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicy.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#value IdentityDomainsAuthenticationFactorSetting#value}. |

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicy.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#action IdentityDomainsAuthenticationFactorSetting#action}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#name IdentityDomainsAuthenticationFactorSetting#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicy.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#value IdentityDomainsAuthenticationFactorSetting#value}.

---

### IdentityDomainsAuthenticationFactorSettingConfig <a name="IdentityDomainsAuthenticationFactorSettingConfig" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_authentication_factor_setting.IdentityDomainsAuthenticationFactorSettingConfig;

IdentityDomainsAuthenticationFactorSettingConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .authenticationFactorSettingId(java.lang.String)
    .bypassCodeEnabled(java.lang.Boolean)
    .bypassCodeEnabled(IResolvable)
    .bypassCodeSettings(IdentityDomainsAuthenticationFactorSettingBypassCodeSettings)
    .clientAppSettings(IdentityDomainsAuthenticationFactorSettingClientAppSettings)
    .compliancePolicy(IResolvable)
    .compliancePolicy(java.util.List<IdentityDomainsAuthenticationFactorSettingCompliancePolicy>)
    .endpointRestrictions(IdentityDomainsAuthenticationFactorSettingEndpointRestrictions)
    .idcsEndpoint(java.lang.String)
    .mfaEnrollmentType(java.lang.String)
    .notificationSettings(IdentityDomainsAuthenticationFactorSettingNotificationSettings)
    .pushEnabled(java.lang.Boolean)
    .pushEnabled(IResolvable)
    .schemas(java.util.List<java.lang.String>)
    .securityQuestionsEnabled(java.lang.Boolean)
    .securityQuestionsEnabled(IResolvable)
    .smsEnabled(java.lang.Boolean)
    .smsEnabled(IResolvable)
    .totpEnabled(java.lang.Boolean)
    .totpEnabled(IResolvable)
    .totpSettings(IdentityDomainsAuthenticationFactorSettingTotpSettings)
//  .attributes(java.lang.String)
//  .attributeSets(java.util.List<java.lang.String>)
//  .authorization(java.lang.String)
//  .autoEnrollEmailFactorDisabled(java.lang.Boolean)
//  .autoEnrollEmailFactorDisabled(IResolvable)
//  .emailEnabled(java.lang.Boolean)
//  .emailEnabled(IResolvable)
//  .emailSettings(IdentityDomainsAuthenticationFactorSettingEmailSettings)
//  .fidoAuthenticatorEnabled(java.lang.Boolean)
//  .fidoAuthenticatorEnabled(IResolvable)
//  .hideBackupFactorEnabled(java.lang.Boolean)
//  .hideBackupFactorEnabled(IResolvable)
//  .identityStoreSettings(IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings)
//  .ocid(java.lang.String)
//  .phoneCallEnabled(java.lang.Boolean)
//  .phoneCallEnabled(IResolvable)
//  .resourceTypeSchemaVersion(java.lang.String)
//  .tags(IResolvable)
//  .tags(java.util.List<IdentityDomainsAuthenticationFactorSettingTags>)
//  .thirdPartyFactor(IdentityDomainsAuthenticationFactorSettingThirdPartyFactor)
//  .timeouts(IdentityDomainsAuthenticationFactorSettingTimeouts)
//  .urnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings(IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings)
//  .urnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings(IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings)
//  .userEnrollmentDisabledFactors(java.util.List<java.lang.String>)
//  .yubicoOtpEnabled(java.lang.Boolean)
//  .yubicoOtpEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.authenticationFactorSettingId">authenticationFactorSettingId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#authentication_factor_setting_id IdentityDomainsAuthenticationFactorSetting#authentication_factor_setting_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.bypassCodeEnabled">bypassCodeEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#bypass_code_enabled IdentityDomainsAuthenticationFactorSetting#bypass_code_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.bypassCodeSettings">bypassCodeSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettings">IdentityDomainsAuthenticationFactorSettingBypassCodeSettings</a></code> | bypass_code_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.clientAppSettings">clientAppSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings">IdentityDomainsAuthenticationFactorSettingClientAppSettings</a></code> | client_app_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.compliancePolicy">compliancePolicy</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicy">IdentityDomainsAuthenticationFactorSettingCompliancePolicy</a>></code> | compliance_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.endpointRestrictions">endpointRestrictions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictions">IdentityDomainsAuthenticationFactorSettingEndpointRestrictions</a></code> | endpoint_restrictions block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.idcsEndpoint">idcsEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#idcs_endpoint IdentityDomainsAuthenticationFactorSetting#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.mfaEnrollmentType">mfaEnrollmentType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#mfa_enrollment_type IdentityDomainsAuthenticationFactorSetting#mfa_enrollment_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.notificationSettings">notificationSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettings">IdentityDomainsAuthenticationFactorSettingNotificationSettings</a></code> | notification_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.pushEnabled">pushEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#push_enabled IdentityDomainsAuthenticationFactorSetting#push_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.schemas">schemas</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#schemas IdentityDomainsAuthenticationFactorSetting#schemas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.securityQuestionsEnabled">securityQuestionsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#security_questions_enabled IdentityDomainsAuthenticationFactorSetting#security_questions_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.smsEnabled">smsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#sms_enabled IdentityDomainsAuthenticationFactorSetting#sms_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.totpEnabled">totpEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#totp_enabled IdentityDomainsAuthenticationFactorSetting#totp_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.totpSettings">totpSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings">IdentityDomainsAuthenticationFactorSettingTotpSettings</a></code> | totp_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.attributes">attributes</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#attributes IdentityDomainsAuthenticationFactorSetting#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.attributeSets">attributeSets</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#attribute_sets IdentityDomainsAuthenticationFactorSetting#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.authorization">authorization</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#authorization IdentityDomainsAuthenticationFactorSetting#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.autoEnrollEmailFactorDisabled">autoEnrollEmailFactorDisabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#auto_enroll_email_factor_disabled IdentityDomainsAuthenticationFactorSetting#auto_enroll_email_factor_disabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.emailEnabled">emailEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#email_enabled IdentityDomainsAuthenticationFactorSetting#email_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.emailSettings">emailSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettings">IdentityDomainsAuthenticationFactorSettingEmailSettings</a></code> | email_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.fidoAuthenticatorEnabled">fidoAuthenticatorEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#fido_authenticator_enabled IdentityDomainsAuthenticationFactorSetting#fido_authenticator_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.hideBackupFactorEnabled">hideBackupFactorEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#hide_backup_factor_enabled IdentityDomainsAuthenticationFactorSetting#hide_backup_factor_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.identityStoreSettings">identityStoreSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings">IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings</a></code> | identity_store_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.ocid">ocid</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#ocid IdentityDomainsAuthenticationFactorSetting#ocid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.phoneCallEnabled">phoneCallEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#phone_call_enabled IdentityDomainsAuthenticationFactorSetting#phone_call_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#resource_type_schema_version IdentityDomainsAuthenticationFactorSetting#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.tags">tags</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTags">IdentityDomainsAuthenticationFactorSettingTags</a>></code> | tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.thirdPartyFactor">thirdPartyFactor</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactor">IdentityDomainsAuthenticationFactorSettingThirdPartyFactor</a></code> | third_party_factor block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeouts">IdentityDomainsAuthenticationFactorSettingTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.urnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings">urnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings</a></code> | urnietfparamsscimschemasoracleidcsextensionfido_authentication_factor_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.urnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings">urnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings</a></code> | urnietfparamsscimschemasoracleidcsextensionthird_party_authentication_factor_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.userEnrollmentDisabledFactors">userEnrollmentDisabledFactors</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#user_enrollment_disabled_factors IdentityDomainsAuthenticationFactorSetting#user_enrollment_disabled_factors}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.yubicoOtpEnabled">yubicoOtpEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#yubico_otp_enabled IdentityDomainsAuthenticationFactorSetting#yubico_otp_enabled}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authenticationFactorSettingId`<sup>Required</sup> <a name="authenticationFactorSettingId" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.authenticationFactorSettingId"></a>

```java
public java.lang.String getAuthenticationFactorSettingId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#authentication_factor_setting_id IdentityDomainsAuthenticationFactorSetting#authentication_factor_setting_id}.

---

##### `bypassCodeEnabled`<sup>Required</sup> <a name="bypassCodeEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.bypassCodeEnabled"></a>

```java
public java.lang.Object getBypassCodeEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#bypass_code_enabled IdentityDomainsAuthenticationFactorSetting#bypass_code_enabled}.

---

##### `bypassCodeSettings`<sup>Required</sup> <a name="bypassCodeSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.bypassCodeSettings"></a>

```java
public IdentityDomainsAuthenticationFactorSettingBypassCodeSettings getBypassCodeSettings();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettings">IdentityDomainsAuthenticationFactorSettingBypassCodeSettings</a>

bypass_code_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#bypass_code_settings IdentityDomainsAuthenticationFactorSetting#bypass_code_settings}

---

##### `clientAppSettings`<sup>Required</sup> <a name="clientAppSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.clientAppSettings"></a>

```java
public IdentityDomainsAuthenticationFactorSettingClientAppSettings getClientAppSettings();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings">IdentityDomainsAuthenticationFactorSettingClientAppSettings</a>

client_app_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#client_app_settings IdentityDomainsAuthenticationFactorSetting#client_app_settings}

---

##### `compliancePolicy`<sup>Required</sup> <a name="compliancePolicy" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.compliancePolicy"></a>

```java
public java.lang.Object getCompliancePolicy();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicy">IdentityDomainsAuthenticationFactorSettingCompliancePolicy</a>>

compliance_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#compliance_policy IdentityDomainsAuthenticationFactorSetting#compliance_policy}

---

##### `endpointRestrictions`<sup>Required</sup> <a name="endpointRestrictions" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.endpointRestrictions"></a>

```java
public IdentityDomainsAuthenticationFactorSettingEndpointRestrictions getEndpointRestrictions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictions">IdentityDomainsAuthenticationFactorSettingEndpointRestrictions</a>

endpoint_restrictions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#endpoint_restrictions IdentityDomainsAuthenticationFactorSetting#endpoint_restrictions}

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.idcsEndpoint"></a>

```java
public java.lang.String getIdcsEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#idcs_endpoint IdentityDomainsAuthenticationFactorSetting#idcs_endpoint}.

---

##### `mfaEnrollmentType`<sup>Required</sup> <a name="mfaEnrollmentType" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.mfaEnrollmentType"></a>

```java
public java.lang.String getMfaEnrollmentType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#mfa_enrollment_type IdentityDomainsAuthenticationFactorSetting#mfa_enrollment_type}.

---

##### `notificationSettings`<sup>Required</sup> <a name="notificationSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.notificationSettings"></a>

```java
public IdentityDomainsAuthenticationFactorSettingNotificationSettings getNotificationSettings();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettings">IdentityDomainsAuthenticationFactorSettingNotificationSettings</a>

notification_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#notification_settings IdentityDomainsAuthenticationFactorSetting#notification_settings}

---

##### `pushEnabled`<sup>Required</sup> <a name="pushEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.pushEnabled"></a>

```java
public java.lang.Object getPushEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#push_enabled IdentityDomainsAuthenticationFactorSetting#push_enabled}.

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.schemas"></a>

```java
public java.util.List<java.lang.String> getSchemas();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#schemas IdentityDomainsAuthenticationFactorSetting#schemas}.

---

##### `securityQuestionsEnabled`<sup>Required</sup> <a name="securityQuestionsEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.securityQuestionsEnabled"></a>

```java
public java.lang.Object getSecurityQuestionsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#security_questions_enabled IdentityDomainsAuthenticationFactorSetting#security_questions_enabled}.

---

##### `smsEnabled`<sup>Required</sup> <a name="smsEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.smsEnabled"></a>

```java
public java.lang.Object getSmsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#sms_enabled IdentityDomainsAuthenticationFactorSetting#sms_enabled}.

---

##### `totpEnabled`<sup>Required</sup> <a name="totpEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.totpEnabled"></a>

```java
public java.lang.Object getTotpEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#totp_enabled IdentityDomainsAuthenticationFactorSetting#totp_enabled}.

---

##### `totpSettings`<sup>Required</sup> <a name="totpSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.totpSettings"></a>

```java
public IdentityDomainsAuthenticationFactorSettingTotpSettings getTotpSettings();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings">IdentityDomainsAuthenticationFactorSettingTotpSettings</a>

totp_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#totp_settings IdentityDomainsAuthenticationFactorSetting#totp_settings}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.attributes"></a>

```java
public java.lang.String getAttributes();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#attributes IdentityDomainsAuthenticationFactorSetting#attributes}.

---

##### `attributeSets`<sup>Optional</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.attributeSets"></a>

```java
public java.util.List<java.lang.String> getAttributeSets();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#attribute_sets IdentityDomainsAuthenticationFactorSetting#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.authorization"></a>

```java
public java.lang.String getAuthorization();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#authorization IdentityDomainsAuthenticationFactorSetting#authorization}.

---

##### `autoEnrollEmailFactorDisabled`<sup>Optional</sup> <a name="autoEnrollEmailFactorDisabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.autoEnrollEmailFactorDisabled"></a>

```java
public java.lang.Object getAutoEnrollEmailFactorDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#auto_enroll_email_factor_disabled IdentityDomainsAuthenticationFactorSetting#auto_enroll_email_factor_disabled}.

---

##### `emailEnabled`<sup>Optional</sup> <a name="emailEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.emailEnabled"></a>

```java
public java.lang.Object getEmailEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#email_enabled IdentityDomainsAuthenticationFactorSetting#email_enabled}.

---

##### `emailSettings`<sup>Optional</sup> <a name="emailSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.emailSettings"></a>

```java
public IdentityDomainsAuthenticationFactorSettingEmailSettings getEmailSettings();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettings">IdentityDomainsAuthenticationFactorSettingEmailSettings</a>

email_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#email_settings IdentityDomainsAuthenticationFactorSetting#email_settings}

---

##### `fidoAuthenticatorEnabled`<sup>Optional</sup> <a name="fidoAuthenticatorEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.fidoAuthenticatorEnabled"></a>

```java
public java.lang.Object getFidoAuthenticatorEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#fido_authenticator_enabled IdentityDomainsAuthenticationFactorSetting#fido_authenticator_enabled}.

---

##### `hideBackupFactorEnabled`<sup>Optional</sup> <a name="hideBackupFactorEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.hideBackupFactorEnabled"></a>

```java
public java.lang.Object getHideBackupFactorEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#hide_backup_factor_enabled IdentityDomainsAuthenticationFactorSetting#hide_backup_factor_enabled}.

---

##### `identityStoreSettings`<sup>Optional</sup> <a name="identityStoreSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.identityStoreSettings"></a>

```java
public IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings getIdentityStoreSettings();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings">IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings</a>

identity_store_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#identity_store_settings IdentityDomainsAuthenticationFactorSetting#identity_store_settings}

---

##### `ocid`<sup>Optional</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#ocid IdentityDomainsAuthenticationFactorSetting#ocid}.

---

##### `phoneCallEnabled`<sup>Optional</sup> <a name="phoneCallEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.phoneCallEnabled"></a>

```java
public java.lang.Object getPhoneCallEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#phone_call_enabled IdentityDomainsAuthenticationFactorSetting#phone_call_enabled}.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.resourceTypeSchemaVersion"></a>

```java
public java.lang.String getResourceTypeSchemaVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#resource_type_schema_version IdentityDomainsAuthenticationFactorSetting#resource_type_schema_version}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.tags"></a>

```java
public java.lang.Object getTags();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTags">IdentityDomainsAuthenticationFactorSettingTags</a>>

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#tags IdentityDomainsAuthenticationFactorSetting#tags}

---

##### `thirdPartyFactor`<sup>Optional</sup> <a name="thirdPartyFactor" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.thirdPartyFactor"></a>

```java
public IdentityDomainsAuthenticationFactorSettingThirdPartyFactor getThirdPartyFactor();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactor">IdentityDomainsAuthenticationFactorSettingThirdPartyFactor</a>

third_party_factor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#third_party_factor IdentityDomainsAuthenticationFactorSetting#third_party_factor}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.timeouts"></a>

```java
public IdentityDomainsAuthenticationFactorSettingTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeouts">IdentityDomainsAuthenticationFactorSettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#timeouts IdentityDomainsAuthenticationFactorSetting#timeouts}

---

##### `urnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings`<sup>Optional</sup> <a name="urnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.urnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings"></a>

```java
public IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings getUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings</a>

urnietfparamsscimschemasoracleidcsextensionfido_authentication_factor_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#urnietfparamsscimschemasoracleidcsextensionfido_authentication_factor_settings IdentityDomainsAuthenticationFactorSetting#urnietfparamsscimschemasoracleidcsextensionfido_authentication_factor_settings}

---

##### `urnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings`<sup>Optional</sup> <a name="urnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.urnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings"></a>

```java
public IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings getUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings</a>

urnietfparamsscimschemasoracleidcsextensionthird_party_authentication_factor_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#urnietfparamsscimschemasoracleidcsextensionthird_party_authentication_factor_settings IdentityDomainsAuthenticationFactorSetting#urnietfparamsscimschemasoracleidcsextensionthird_party_authentication_factor_settings}

---

##### `userEnrollmentDisabledFactors`<sup>Optional</sup> <a name="userEnrollmentDisabledFactors" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.userEnrollmentDisabledFactors"></a>

```java
public java.util.List<java.lang.String> getUserEnrollmentDisabledFactors();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#user_enrollment_disabled_factors IdentityDomainsAuthenticationFactorSetting#user_enrollment_disabled_factors}.

---

##### `yubicoOtpEnabled`<sup>Optional</sup> <a name="yubicoOtpEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.yubicoOtpEnabled"></a>

```java
public java.lang.Object getYubicoOtpEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#yubico_otp_enabled IdentityDomainsAuthenticationFactorSetting#yubico_otp_enabled}.

---

### IdentityDomainsAuthenticationFactorSettingEmailSettings <a name="IdentityDomainsAuthenticationFactorSettingEmailSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_authentication_factor_setting.IdentityDomainsAuthenticationFactorSettingEmailSettings;

IdentityDomainsAuthenticationFactorSettingEmailSettings.builder()
    .emailLinkEnabled(java.lang.Boolean)
    .emailLinkEnabled(IResolvable)
//  .emailLinkCustomUrl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettings.property.emailLinkEnabled">emailLinkEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#email_link_enabled IdentityDomainsAuthenticationFactorSetting#email_link_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettings.property.emailLinkCustomUrl">emailLinkCustomUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#email_link_custom_url IdentityDomainsAuthenticationFactorSetting#email_link_custom_url}. |

---

##### `emailLinkEnabled`<sup>Required</sup> <a name="emailLinkEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettings.property.emailLinkEnabled"></a>

```java
public java.lang.Object getEmailLinkEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#email_link_enabled IdentityDomainsAuthenticationFactorSetting#email_link_enabled}.

---

##### `emailLinkCustomUrl`<sup>Optional</sup> <a name="emailLinkCustomUrl" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettings.property.emailLinkCustomUrl"></a>

```java
public java.lang.String getEmailLinkCustomUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#email_link_custom_url IdentityDomainsAuthenticationFactorSetting#email_link_custom_url}.

---

### IdentityDomainsAuthenticationFactorSettingEndpointRestrictions <a name="IdentityDomainsAuthenticationFactorSettingEndpointRestrictions" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_authentication_factor_setting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictions;

IdentityDomainsAuthenticationFactorSettingEndpointRestrictions.builder()
    .maxEndpointTrustDurationInDays(java.lang.Number)
    .maxEnrolledDevices(java.lang.Number)
    .maxIncorrectAttempts(java.lang.Number)
    .maxTrustedEndpoints(java.lang.Number)
    .trustedEndpointsEnabled(java.lang.Boolean)
    .trustedEndpointsEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictions.property.maxEndpointTrustDurationInDays">maxEndpointTrustDurationInDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#max_endpoint_trust_duration_in_days IdentityDomainsAuthenticationFactorSetting#max_endpoint_trust_duration_in_days}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictions.property.maxEnrolledDevices">maxEnrolledDevices</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#max_enrolled_devices IdentityDomainsAuthenticationFactorSetting#max_enrolled_devices}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictions.property.maxIncorrectAttempts">maxIncorrectAttempts</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#max_incorrect_attempts IdentityDomainsAuthenticationFactorSetting#max_incorrect_attempts}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictions.property.maxTrustedEndpoints">maxTrustedEndpoints</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#max_trusted_endpoints IdentityDomainsAuthenticationFactorSetting#max_trusted_endpoints}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictions.property.trustedEndpointsEnabled">trustedEndpointsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#trusted_endpoints_enabled IdentityDomainsAuthenticationFactorSetting#trusted_endpoints_enabled}. |

---

##### `maxEndpointTrustDurationInDays`<sup>Required</sup> <a name="maxEndpointTrustDurationInDays" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictions.property.maxEndpointTrustDurationInDays"></a>

```java
public java.lang.Number getMaxEndpointTrustDurationInDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#max_endpoint_trust_duration_in_days IdentityDomainsAuthenticationFactorSetting#max_endpoint_trust_duration_in_days}.

---

##### `maxEnrolledDevices`<sup>Required</sup> <a name="maxEnrolledDevices" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictions.property.maxEnrolledDevices"></a>

```java
public java.lang.Number getMaxEnrolledDevices();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#max_enrolled_devices IdentityDomainsAuthenticationFactorSetting#max_enrolled_devices}.

---

##### `maxIncorrectAttempts`<sup>Required</sup> <a name="maxIncorrectAttempts" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictions.property.maxIncorrectAttempts"></a>

```java
public java.lang.Number getMaxIncorrectAttempts();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#max_incorrect_attempts IdentityDomainsAuthenticationFactorSetting#max_incorrect_attempts}.

---

##### `maxTrustedEndpoints`<sup>Required</sup> <a name="maxTrustedEndpoints" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictions.property.maxTrustedEndpoints"></a>

```java
public java.lang.Number getMaxTrustedEndpoints();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#max_trusted_endpoints IdentityDomainsAuthenticationFactorSetting#max_trusted_endpoints}.

---

##### `trustedEndpointsEnabled`<sup>Required</sup> <a name="trustedEndpointsEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictions.property.trustedEndpointsEnabled"></a>

```java
public java.lang.Object getTrustedEndpointsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#trusted_endpoints_enabled IdentityDomainsAuthenticationFactorSetting#trusted_endpoints_enabled}.

---

### IdentityDomainsAuthenticationFactorSettingIdcsCreatedBy <a name="IdentityDomainsAuthenticationFactorSettingIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedBy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_authentication_factor_setting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedBy;

IdentityDomainsAuthenticationFactorSettingIdcsCreatedBy.builder()
    .build();
```


### IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedBy <a name="IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedBy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_authentication_factor_setting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedBy;

IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedBy.builder()
    .build();
```


### IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings <a name="IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_authentication_factor_setting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings;

IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings.builder()
//  .mobileNumberEnabled(java.lang.Boolean)
//  .mobileNumberEnabled(IResolvable)
//  .mobileNumberUpdateEnabled(java.lang.Boolean)
//  .mobileNumberUpdateEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings.property.mobileNumberEnabled">mobileNumberEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#mobile_number_enabled IdentityDomainsAuthenticationFactorSetting#mobile_number_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings.property.mobileNumberUpdateEnabled">mobileNumberUpdateEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#mobile_number_update_enabled IdentityDomainsAuthenticationFactorSetting#mobile_number_update_enabled}. |

---

##### `mobileNumberEnabled`<sup>Optional</sup> <a name="mobileNumberEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings.property.mobileNumberEnabled"></a>

```java
public java.lang.Object getMobileNumberEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#mobile_number_enabled IdentityDomainsAuthenticationFactorSetting#mobile_number_enabled}.

---

##### `mobileNumberUpdateEnabled`<sup>Optional</sup> <a name="mobileNumberUpdateEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings.property.mobileNumberUpdateEnabled"></a>

```java
public java.lang.Object getMobileNumberUpdateEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#mobile_number_update_enabled IdentityDomainsAuthenticationFactorSetting#mobile_number_update_enabled}.

---

### IdentityDomainsAuthenticationFactorSettingMeta <a name="IdentityDomainsAuthenticationFactorSettingMeta" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMeta.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_authentication_factor_setting.IdentityDomainsAuthenticationFactorSettingMeta;

IdentityDomainsAuthenticationFactorSettingMeta.builder()
    .build();
```


### IdentityDomainsAuthenticationFactorSettingNotificationSettings <a name="IdentityDomainsAuthenticationFactorSettingNotificationSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_authentication_factor_setting.IdentityDomainsAuthenticationFactorSettingNotificationSettings;

IdentityDomainsAuthenticationFactorSettingNotificationSettings.builder()
    .pullEnabled(java.lang.Boolean)
    .pullEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettings.property.pullEnabled">pullEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#pull_enabled IdentityDomainsAuthenticationFactorSetting#pull_enabled}. |

---

##### `pullEnabled`<sup>Required</sup> <a name="pullEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettings.property.pullEnabled"></a>

```java
public java.lang.Object getPullEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#pull_enabled IdentityDomainsAuthenticationFactorSetting#pull_enabled}.

---

### IdentityDomainsAuthenticationFactorSettingTags <a name="IdentityDomainsAuthenticationFactorSettingTags" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_authentication_factor_setting.IdentityDomainsAuthenticationFactorSettingTags;

IdentityDomainsAuthenticationFactorSettingTags.builder()
    .key(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#key IdentityDomainsAuthenticationFactorSetting#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#value IdentityDomainsAuthenticationFactorSetting#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#key IdentityDomainsAuthenticationFactorSetting#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#value IdentityDomainsAuthenticationFactorSetting#value}.

---

### IdentityDomainsAuthenticationFactorSettingThirdPartyFactor <a name="IdentityDomainsAuthenticationFactorSettingThirdPartyFactor" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactor"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactor.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_authentication_factor_setting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactor;

IdentityDomainsAuthenticationFactorSettingThirdPartyFactor.builder()
    .duoSecurity(java.lang.Boolean)
    .duoSecurity(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactor.property.duoSecurity">duoSecurity</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#duo_security IdentityDomainsAuthenticationFactorSetting#duo_security}. |

---

##### `duoSecurity`<sup>Required</sup> <a name="duoSecurity" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactor.property.duoSecurity"></a>

```java
public java.lang.Object getDuoSecurity();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#duo_security IdentityDomainsAuthenticationFactorSetting#duo_security}.

---

### IdentityDomainsAuthenticationFactorSettingTimeouts <a name="IdentityDomainsAuthenticationFactorSettingTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_authentication_factor_setting.IdentityDomainsAuthenticationFactorSettingTimeouts;

IdentityDomainsAuthenticationFactorSettingTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#create IdentityDomainsAuthenticationFactorSetting#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#delete IdentityDomainsAuthenticationFactorSetting#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#update IdentityDomainsAuthenticationFactorSetting#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#create IdentityDomainsAuthenticationFactorSetting#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#delete IdentityDomainsAuthenticationFactorSetting#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#update IdentityDomainsAuthenticationFactorSetting#update}.

---

### IdentityDomainsAuthenticationFactorSettingTotpSettings <a name="IdentityDomainsAuthenticationFactorSettingTotpSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_authentication_factor_setting.IdentityDomainsAuthenticationFactorSettingTotpSettings;

IdentityDomainsAuthenticationFactorSettingTotpSettings.builder()
    .emailOtpValidityDurationInMins(java.lang.Number)
    .emailPasscodeLength(java.lang.Number)
    .hashingAlgorithm(java.lang.String)
    .jwtValidityDurationInSecs(java.lang.Number)
    .keyRefreshIntervalInDays(java.lang.Number)
    .passcodeLength(java.lang.Number)
    .smsOtpValidityDurationInMins(java.lang.Number)
    .smsPasscodeLength(java.lang.Number)
    .timeStepInSecs(java.lang.Number)
    .timeStepTolerance(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings.property.emailOtpValidityDurationInMins">emailOtpValidityDurationInMins</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#email_otp_validity_duration_in_mins IdentityDomainsAuthenticationFactorSetting#email_otp_validity_duration_in_mins}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings.property.emailPasscodeLength">emailPasscodeLength</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#email_passcode_length IdentityDomainsAuthenticationFactorSetting#email_passcode_length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings.property.hashingAlgorithm">hashingAlgorithm</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#hashing_algorithm IdentityDomainsAuthenticationFactorSetting#hashing_algorithm}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings.property.jwtValidityDurationInSecs">jwtValidityDurationInSecs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#jwt_validity_duration_in_secs IdentityDomainsAuthenticationFactorSetting#jwt_validity_duration_in_secs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings.property.keyRefreshIntervalInDays">keyRefreshIntervalInDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#key_refresh_interval_in_days IdentityDomainsAuthenticationFactorSetting#key_refresh_interval_in_days}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings.property.passcodeLength">passcodeLength</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#passcode_length IdentityDomainsAuthenticationFactorSetting#passcode_length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings.property.smsOtpValidityDurationInMins">smsOtpValidityDurationInMins</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#sms_otp_validity_duration_in_mins IdentityDomainsAuthenticationFactorSetting#sms_otp_validity_duration_in_mins}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings.property.smsPasscodeLength">smsPasscodeLength</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#sms_passcode_length IdentityDomainsAuthenticationFactorSetting#sms_passcode_length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings.property.timeStepInSecs">timeStepInSecs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#time_step_in_secs IdentityDomainsAuthenticationFactorSetting#time_step_in_secs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings.property.timeStepTolerance">timeStepTolerance</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#time_step_tolerance IdentityDomainsAuthenticationFactorSetting#time_step_tolerance}. |

---

##### `emailOtpValidityDurationInMins`<sup>Required</sup> <a name="emailOtpValidityDurationInMins" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings.property.emailOtpValidityDurationInMins"></a>

```java
public java.lang.Number getEmailOtpValidityDurationInMins();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#email_otp_validity_duration_in_mins IdentityDomainsAuthenticationFactorSetting#email_otp_validity_duration_in_mins}.

---

##### `emailPasscodeLength`<sup>Required</sup> <a name="emailPasscodeLength" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings.property.emailPasscodeLength"></a>

```java
public java.lang.Number getEmailPasscodeLength();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#email_passcode_length IdentityDomainsAuthenticationFactorSetting#email_passcode_length}.

---

##### `hashingAlgorithm`<sup>Required</sup> <a name="hashingAlgorithm" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings.property.hashingAlgorithm"></a>

```java
public java.lang.String getHashingAlgorithm();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#hashing_algorithm IdentityDomainsAuthenticationFactorSetting#hashing_algorithm}.

---

##### `jwtValidityDurationInSecs`<sup>Required</sup> <a name="jwtValidityDurationInSecs" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings.property.jwtValidityDurationInSecs"></a>

```java
public java.lang.Number getJwtValidityDurationInSecs();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#jwt_validity_duration_in_secs IdentityDomainsAuthenticationFactorSetting#jwt_validity_duration_in_secs}.

---

##### `keyRefreshIntervalInDays`<sup>Required</sup> <a name="keyRefreshIntervalInDays" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings.property.keyRefreshIntervalInDays"></a>

```java
public java.lang.Number getKeyRefreshIntervalInDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#key_refresh_interval_in_days IdentityDomainsAuthenticationFactorSetting#key_refresh_interval_in_days}.

---

##### `passcodeLength`<sup>Required</sup> <a name="passcodeLength" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings.property.passcodeLength"></a>

```java
public java.lang.Number getPasscodeLength();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#passcode_length IdentityDomainsAuthenticationFactorSetting#passcode_length}.

---

##### `smsOtpValidityDurationInMins`<sup>Required</sup> <a name="smsOtpValidityDurationInMins" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings.property.smsOtpValidityDurationInMins"></a>

```java
public java.lang.Number getSmsOtpValidityDurationInMins();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#sms_otp_validity_duration_in_mins IdentityDomainsAuthenticationFactorSetting#sms_otp_validity_duration_in_mins}.

---

##### `smsPasscodeLength`<sup>Required</sup> <a name="smsPasscodeLength" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings.property.smsPasscodeLength"></a>

```java
public java.lang.Number getSmsPasscodeLength();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#sms_passcode_length IdentityDomainsAuthenticationFactorSetting#sms_passcode_length}.

---

##### `timeStepInSecs`<sup>Required</sup> <a name="timeStepInSecs" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings.property.timeStepInSecs"></a>

```java
public java.lang.Number getTimeStepInSecs();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#time_step_in_secs IdentityDomainsAuthenticationFactorSetting#time_step_in_secs}.

---

##### `timeStepTolerance`<sup>Required</sup> <a name="timeStepTolerance" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings.property.timeStepTolerance"></a>

```java
public java.lang.Number getTimeStepTolerance();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#time_step_tolerance IdentityDomainsAuthenticationFactorSetting#time_step_tolerance}.

---

### IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings <a name="IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_authentication_factor_setting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings;

IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.builder()
    .attestation(java.lang.String)
    .authenticatorSelectionAttachment(java.lang.String)
    .authenticatorSelectionRequireResidentKey(java.lang.Boolean)
    .authenticatorSelectionRequireResidentKey(IResolvable)
    .authenticatorSelectionResidentKey(java.lang.String)
    .authenticatorSelectionUserVerification(java.lang.String)
    .excludeCredentials(java.lang.Boolean)
    .excludeCredentials(IResolvable)
    .publicKeyTypes(java.util.List<java.lang.String>)
    .timeout(java.lang.Number)
//  .domainValidationLevel(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.property.attestation">attestation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#attestation IdentityDomainsAuthenticationFactorSetting#attestation}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.property.authenticatorSelectionAttachment">authenticatorSelectionAttachment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#authenticator_selection_attachment IdentityDomainsAuthenticationFactorSetting#authenticator_selection_attachment}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.property.authenticatorSelectionRequireResidentKey">authenticatorSelectionRequireResidentKey</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#authenticator_selection_require_resident_key IdentityDomainsAuthenticationFactorSetting#authenticator_selection_require_resident_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.property.authenticatorSelectionResidentKey">authenticatorSelectionResidentKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#authenticator_selection_resident_key IdentityDomainsAuthenticationFactorSetting#authenticator_selection_resident_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.property.authenticatorSelectionUserVerification">authenticatorSelectionUserVerification</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#authenticator_selection_user_verification IdentityDomainsAuthenticationFactorSetting#authenticator_selection_user_verification}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.property.excludeCredentials">excludeCredentials</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#exclude_credentials IdentityDomainsAuthenticationFactorSetting#exclude_credentials}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.property.publicKeyTypes">publicKeyTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#public_key_types IdentityDomainsAuthenticationFactorSetting#public_key_types}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#timeout IdentityDomainsAuthenticationFactorSetting#timeout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.property.domainValidationLevel">domainValidationLevel</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#domain_validation_level IdentityDomainsAuthenticationFactorSetting#domain_validation_level}. |

---

##### `attestation`<sup>Required</sup> <a name="attestation" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.property.attestation"></a>

```java
public java.lang.String getAttestation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#attestation IdentityDomainsAuthenticationFactorSetting#attestation}.

---

##### `authenticatorSelectionAttachment`<sup>Required</sup> <a name="authenticatorSelectionAttachment" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.property.authenticatorSelectionAttachment"></a>

```java
public java.lang.String getAuthenticatorSelectionAttachment();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#authenticator_selection_attachment IdentityDomainsAuthenticationFactorSetting#authenticator_selection_attachment}.

---

##### `authenticatorSelectionRequireResidentKey`<sup>Required</sup> <a name="authenticatorSelectionRequireResidentKey" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.property.authenticatorSelectionRequireResidentKey"></a>

```java
public java.lang.Object getAuthenticatorSelectionRequireResidentKey();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#authenticator_selection_require_resident_key IdentityDomainsAuthenticationFactorSetting#authenticator_selection_require_resident_key}.

---

##### `authenticatorSelectionResidentKey`<sup>Required</sup> <a name="authenticatorSelectionResidentKey" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.property.authenticatorSelectionResidentKey"></a>

```java
public java.lang.String getAuthenticatorSelectionResidentKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#authenticator_selection_resident_key IdentityDomainsAuthenticationFactorSetting#authenticator_selection_resident_key}.

---

##### `authenticatorSelectionUserVerification`<sup>Required</sup> <a name="authenticatorSelectionUserVerification" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.property.authenticatorSelectionUserVerification"></a>

```java
public java.lang.String getAuthenticatorSelectionUserVerification();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#authenticator_selection_user_verification IdentityDomainsAuthenticationFactorSetting#authenticator_selection_user_verification}.

---

##### `excludeCredentials`<sup>Required</sup> <a name="excludeCredentials" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.property.excludeCredentials"></a>

```java
public java.lang.Object getExcludeCredentials();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#exclude_credentials IdentityDomainsAuthenticationFactorSetting#exclude_credentials}.

---

##### `publicKeyTypes`<sup>Required</sup> <a name="publicKeyTypes" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.property.publicKeyTypes"></a>

```java
public java.util.List<java.lang.String> getPublicKeyTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#public_key_types IdentityDomainsAuthenticationFactorSetting#public_key_types}.

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#timeout IdentityDomainsAuthenticationFactorSetting#timeout}.

---

##### `domainValidationLevel`<sup>Optional</sup> <a name="domainValidationLevel" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.property.domainValidationLevel"></a>

```java
public java.lang.Number getDomainValidationLevel();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#domain_validation_level IdentityDomainsAuthenticationFactorSetting#domain_validation_level}.

---

### IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings <a name="IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_authentication_factor_setting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings;

IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings.builder()
//  .duoSecuritySettings(IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings.property.duoSecuritySettings">duoSecuritySettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings</a></code> | duo_security_settings block. |

---

##### `duoSecuritySettings`<sup>Optional</sup> <a name="duoSecuritySettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings.property.duoSecuritySettings"></a>

```java
public IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings getDuoSecuritySettings();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings</a>

duo_security_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#duo_security_settings IdentityDomainsAuthenticationFactorSetting#duo_security_settings}

---

### IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings <a name="IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_authentication_factor_setting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings;

IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings.builder()
    .apiHostname(java.lang.String)
    .integrationKey(java.lang.String)
    .secretKey(java.lang.String)
    .userMappingAttribute(java.lang.String)
//  .attestationKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings.property.apiHostname">apiHostname</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#api_hostname IdentityDomainsAuthenticationFactorSetting#api_hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings.property.integrationKey">integrationKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#integration_key IdentityDomainsAuthenticationFactorSetting#integration_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings.property.secretKey">secretKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#secret_key IdentityDomainsAuthenticationFactorSetting#secret_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings.property.userMappingAttribute">userMappingAttribute</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#user_mapping_attribute IdentityDomainsAuthenticationFactorSetting#user_mapping_attribute}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings.property.attestationKey">attestationKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#attestation_key IdentityDomainsAuthenticationFactorSetting#attestation_key}. |

---

##### `apiHostname`<sup>Required</sup> <a name="apiHostname" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings.property.apiHostname"></a>

```java
public java.lang.String getApiHostname();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#api_hostname IdentityDomainsAuthenticationFactorSetting#api_hostname}.

---

##### `integrationKey`<sup>Required</sup> <a name="integrationKey" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings.property.integrationKey"></a>

```java
public java.lang.String getIntegrationKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#integration_key IdentityDomainsAuthenticationFactorSetting#integration_key}.

---

##### `secretKey`<sup>Required</sup> <a name="secretKey" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings.property.secretKey"></a>

```java
public java.lang.String getSecretKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#secret_key IdentityDomainsAuthenticationFactorSetting#secret_key}.

---

##### `userMappingAttribute`<sup>Required</sup> <a name="userMappingAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings.property.userMappingAttribute"></a>

```java
public java.lang.String getUserMappingAttribute();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#user_mapping_attribute IdentityDomainsAuthenticationFactorSetting#user_mapping_attribute}.

---

##### `attestationKey`<sup>Optional</sup> <a name="attestationKey" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings.property.attestationKey"></a>

```java
public java.lang.String getAttestationKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#attestation_key IdentityDomainsAuthenticationFactorSetting#attestation_key}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference <a name="IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_authentication_factor_setting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference;

new IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.helpDeskCodeExpiryInMinsInput">helpDeskCodeExpiryInMinsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.helpDeskGenerationEnabledInput">helpDeskGenerationEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.helpDeskMaxUsageInput">helpDeskMaxUsageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.lengthInput">lengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.maxActiveInput">maxActiveInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.selfServiceGenerationEnabledInput">selfServiceGenerationEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.helpDeskCodeExpiryInMins">helpDeskCodeExpiryInMins</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.helpDeskGenerationEnabled">helpDeskGenerationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.helpDeskMaxUsage">helpDeskMaxUsage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.length">length</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.maxActive">maxActive</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.selfServiceGenerationEnabled">selfServiceGenerationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettings">IdentityDomainsAuthenticationFactorSettingBypassCodeSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `helpDeskCodeExpiryInMinsInput`<sup>Optional</sup> <a name="helpDeskCodeExpiryInMinsInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.helpDeskCodeExpiryInMinsInput"></a>

```java
public java.lang.Number getHelpDeskCodeExpiryInMinsInput();
```

- *Type:* java.lang.Number

---

##### `helpDeskGenerationEnabledInput`<sup>Optional</sup> <a name="helpDeskGenerationEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.helpDeskGenerationEnabledInput"></a>

```java
public java.lang.Object getHelpDeskGenerationEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `helpDeskMaxUsageInput`<sup>Optional</sup> <a name="helpDeskMaxUsageInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.helpDeskMaxUsageInput"></a>

```java
public java.lang.Number getHelpDeskMaxUsageInput();
```

- *Type:* java.lang.Number

---

##### `lengthInput`<sup>Optional</sup> <a name="lengthInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.lengthInput"></a>

```java
public java.lang.Number getLengthInput();
```

- *Type:* java.lang.Number

---

##### `maxActiveInput`<sup>Optional</sup> <a name="maxActiveInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.maxActiveInput"></a>

```java
public java.lang.Number getMaxActiveInput();
```

- *Type:* java.lang.Number

---

##### `selfServiceGenerationEnabledInput`<sup>Optional</sup> <a name="selfServiceGenerationEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.selfServiceGenerationEnabledInput"></a>

```java
public java.lang.Object getSelfServiceGenerationEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `helpDeskCodeExpiryInMins`<sup>Required</sup> <a name="helpDeskCodeExpiryInMins" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.helpDeskCodeExpiryInMins"></a>

```java
public java.lang.Number getHelpDeskCodeExpiryInMins();
```

- *Type:* java.lang.Number

---

##### `helpDeskGenerationEnabled`<sup>Required</sup> <a name="helpDeskGenerationEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.helpDeskGenerationEnabled"></a>

```java
public java.lang.Object getHelpDeskGenerationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `helpDeskMaxUsage`<sup>Required</sup> <a name="helpDeskMaxUsage" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.helpDeskMaxUsage"></a>

```java
public java.lang.Number getHelpDeskMaxUsage();
```

- *Type:* java.lang.Number

---

##### `length`<sup>Required</sup> <a name="length" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.length"></a>

```java
public java.lang.Number getLength();
```

- *Type:* java.lang.Number

---

##### `maxActive`<sup>Required</sup> <a name="maxActive" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.maxActive"></a>

```java
public java.lang.Number getMaxActive();
```

- *Type:* java.lang.Number

---

##### `selfServiceGenerationEnabled`<sup>Required</sup> <a name="selfServiceGenerationEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.selfServiceGenerationEnabled"></a>

```java
public java.lang.Object getSelfServiceGenerationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.internalValue"></a>

```java
public IdentityDomainsAuthenticationFactorSettingBypassCodeSettings getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettings">IdentityDomainsAuthenticationFactorSettingBypassCodeSettings</a>

---


### IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference <a name="IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_authentication_factor_setting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference;

new IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.deviceProtectionPolicyInput">deviceProtectionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.initialLockoutPeriodInSecsInput">initialLockoutPeriodInSecsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.keyPairLengthInput">keyPairLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.lockoutEscalationPatternInput">lockoutEscalationPatternInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.maxFailuresBeforeLockoutInput">maxFailuresBeforeLockoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.maxFailuresBeforeWarningInput">maxFailuresBeforeWarningInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.maxLockoutIntervalInSecsInput">maxLockoutIntervalInSecsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.minPinLengthInput">minPinLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.policyUpdateFreqInDaysInput">policyUpdateFreqInDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.requestSigningAlgoInput">requestSigningAlgoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.sharedSecretEncodingInput">sharedSecretEncodingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.unlockAppForEachRequestEnabledInput">unlockAppForEachRequestEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.unlockAppIntervalInSecsInput">unlockAppIntervalInSecsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.unlockOnAppForegroundEnabledInput">unlockOnAppForegroundEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.unlockOnAppStartEnabledInput">unlockOnAppStartEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.deviceProtectionPolicy">deviceProtectionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.initialLockoutPeriodInSecs">initialLockoutPeriodInSecs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.keyPairLength">keyPairLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.lockoutEscalationPattern">lockoutEscalationPattern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.maxFailuresBeforeLockout">maxFailuresBeforeLockout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.maxFailuresBeforeWarning">maxFailuresBeforeWarning</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.maxLockoutIntervalInSecs">maxLockoutIntervalInSecs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.minPinLength">minPinLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.policyUpdateFreqInDays">policyUpdateFreqInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.requestSigningAlgo">requestSigningAlgo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.sharedSecretEncoding">sharedSecretEncoding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.unlockAppForEachRequestEnabled">unlockAppForEachRequestEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.unlockAppIntervalInSecs">unlockAppIntervalInSecs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.unlockOnAppForegroundEnabled">unlockOnAppForegroundEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.unlockOnAppStartEnabled">unlockOnAppStartEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings">IdentityDomainsAuthenticationFactorSettingClientAppSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deviceProtectionPolicyInput`<sup>Optional</sup> <a name="deviceProtectionPolicyInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.deviceProtectionPolicyInput"></a>

```java
public java.lang.String getDeviceProtectionPolicyInput();
```

- *Type:* java.lang.String

---

##### `initialLockoutPeriodInSecsInput`<sup>Optional</sup> <a name="initialLockoutPeriodInSecsInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.initialLockoutPeriodInSecsInput"></a>

```java
public java.lang.Number getInitialLockoutPeriodInSecsInput();
```

- *Type:* java.lang.Number

---

##### `keyPairLengthInput`<sup>Optional</sup> <a name="keyPairLengthInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.keyPairLengthInput"></a>

```java
public java.lang.Number getKeyPairLengthInput();
```

- *Type:* java.lang.Number

---

##### `lockoutEscalationPatternInput`<sup>Optional</sup> <a name="lockoutEscalationPatternInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.lockoutEscalationPatternInput"></a>

```java
public java.lang.String getLockoutEscalationPatternInput();
```

- *Type:* java.lang.String

---

##### `maxFailuresBeforeLockoutInput`<sup>Optional</sup> <a name="maxFailuresBeforeLockoutInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.maxFailuresBeforeLockoutInput"></a>

```java
public java.lang.Number getMaxFailuresBeforeLockoutInput();
```

- *Type:* java.lang.Number

---

##### `maxFailuresBeforeWarningInput`<sup>Optional</sup> <a name="maxFailuresBeforeWarningInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.maxFailuresBeforeWarningInput"></a>

```java
public java.lang.Number getMaxFailuresBeforeWarningInput();
```

- *Type:* java.lang.Number

---

##### `maxLockoutIntervalInSecsInput`<sup>Optional</sup> <a name="maxLockoutIntervalInSecsInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.maxLockoutIntervalInSecsInput"></a>

```java
public java.lang.Number getMaxLockoutIntervalInSecsInput();
```

- *Type:* java.lang.Number

---

##### `minPinLengthInput`<sup>Optional</sup> <a name="minPinLengthInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.minPinLengthInput"></a>

```java
public java.lang.Number getMinPinLengthInput();
```

- *Type:* java.lang.Number

---

##### `policyUpdateFreqInDaysInput`<sup>Optional</sup> <a name="policyUpdateFreqInDaysInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.policyUpdateFreqInDaysInput"></a>

```java
public java.lang.Number getPolicyUpdateFreqInDaysInput();
```

- *Type:* java.lang.Number

---

##### `requestSigningAlgoInput`<sup>Optional</sup> <a name="requestSigningAlgoInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.requestSigningAlgoInput"></a>

```java
public java.lang.String getRequestSigningAlgoInput();
```

- *Type:* java.lang.String

---

##### `sharedSecretEncodingInput`<sup>Optional</sup> <a name="sharedSecretEncodingInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.sharedSecretEncodingInput"></a>

```java
public java.lang.String getSharedSecretEncodingInput();
```

- *Type:* java.lang.String

---

##### `unlockAppForEachRequestEnabledInput`<sup>Optional</sup> <a name="unlockAppForEachRequestEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.unlockAppForEachRequestEnabledInput"></a>

```java
public java.lang.Object getUnlockAppForEachRequestEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `unlockAppIntervalInSecsInput`<sup>Optional</sup> <a name="unlockAppIntervalInSecsInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.unlockAppIntervalInSecsInput"></a>

```java
public java.lang.Number getUnlockAppIntervalInSecsInput();
```

- *Type:* java.lang.Number

---

##### `unlockOnAppForegroundEnabledInput`<sup>Optional</sup> <a name="unlockOnAppForegroundEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.unlockOnAppForegroundEnabledInput"></a>

```java
public java.lang.Object getUnlockOnAppForegroundEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `unlockOnAppStartEnabledInput`<sup>Optional</sup> <a name="unlockOnAppStartEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.unlockOnAppStartEnabledInput"></a>

```java
public java.lang.Object getUnlockOnAppStartEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `deviceProtectionPolicy`<sup>Required</sup> <a name="deviceProtectionPolicy" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.deviceProtectionPolicy"></a>

```java
public java.lang.String getDeviceProtectionPolicy();
```

- *Type:* java.lang.String

---

##### `initialLockoutPeriodInSecs`<sup>Required</sup> <a name="initialLockoutPeriodInSecs" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.initialLockoutPeriodInSecs"></a>

```java
public java.lang.Number getInitialLockoutPeriodInSecs();
```

- *Type:* java.lang.Number

---

##### `keyPairLength`<sup>Required</sup> <a name="keyPairLength" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.keyPairLength"></a>

```java
public java.lang.Number getKeyPairLength();
```

- *Type:* java.lang.Number

---

##### `lockoutEscalationPattern`<sup>Required</sup> <a name="lockoutEscalationPattern" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.lockoutEscalationPattern"></a>

```java
public java.lang.String getLockoutEscalationPattern();
```

- *Type:* java.lang.String

---

##### `maxFailuresBeforeLockout`<sup>Required</sup> <a name="maxFailuresBeforeLockout" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.maxFailuresBeforeLockout"></a>

```java
public java.lang.Number getMaxFailuresBeforeLockout();
```

- *Type:* java.lang.Number

---

##### `maxFailuresBeforeWarning`<sup>Required</sup> <a name="maxFailuresBeforeWarning" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.maxFailuresBeforeWarning"></a>

```java
public java.lang.Number getMaxFailuresBeforeWarning();
```

- *Type:* java.lang.Number

---

##### `maxLockoutIntervalInSecs`<sup>Required</sup> <a name="maxLockoutIntervalInSecs" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.maxLockoutIntervalInSecs"></a>

```java
public java.lang.Number getMaxLockoutIntervalInSecs();
```

- *Type:* java.lang.Number

---

##### `minPinLength`<sup>Required</sup> <a name="minPinLength" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.minPinLength"></a>

```java
public java.lang.Number getMinPinLength();
```

- *Type:* java.lang.Number

---

##### `policyUpdateFreqInDays`<sup>Required</sup> <a name="policyUpdateFreqInDays" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.policyUpdateFreqInDays"></a>

```java
public java.lang.Number getPolicyUpdateFreqInDays();
```

- *Type:* java.lang.Number

---

##### `requestSigningAlgo`<sup>Required</sup> <a name="requestSigningAlgo" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.requestSigningAlgo"></a>

```java
public java.lang.String getRequestSigningAlgo();
```

- *Type:* java.lang.String

---

##### `sharedSecretEncoding`<sup>Required</sup> <a name="sharedSecretEncoding" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.sharedSecretEncoding"></a>

```java
public java.lang.String getSharedSecretEncoding();
```

- *Type:* java.lang.String

---

##### `unlockAppForEachRequestEnabled`<sup>Required</sup> <a name="unlockAppForEachRequestEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.unlockAppForEachRequestEnabled"></a>

```java
public java.lang.Object getUnlockAppForEachRequestEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `unlockAppIntervalInSecs`<sup>Required</sup> <a name="unlockAppIntervalInSecs" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.unlockAppIntervalInSecs"></a>

```java
public java.lang.Number getUnlockAppIntervalInSecs();
```

- *Type:* java.lang.Number

---

##### `unlockOnAppForegroundEnabled`<sup>Required</sup> <a name="unlockOnAppForegroundEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.unlockOnAppForegroundEnabled"></a>

```java
public java.lang.Object getUnlockOnAppForegroundEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `unlockOnAppStartEnabled`<sup>Required</sup> <a name="unlockOnAppStartEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.unlockOnAppStartEnabled"></a>

```java
public java.lang.Object getUnlockOnAppStartEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.internalValue"></a>

```java
public IdentityDomainsAuthenticationFactorSettingClientAppSettings getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings">IdentityDomainsAuthenticationFactorSettingClientAppSettings</a>

---


### IdentityDomainsAuthenticationFactorSettingCompliancePolicyList <a name="IdentityDomainsAuthenticationFactorSettingCompliancePolicyList" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_authentication_factor_setting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList;

new IdentityDomainsAuthenticationFactorSettingCompliancePolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.get"></a>

```java
public IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicy">IdentityDomainsAuthenticationFactorSettingCompliancePolicy</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicy">IdentityDomainsAuthenticationFactorSettingCompliancePolicy</a>>

---


### IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference <a name="IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_authentication_factor_setting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference;

new IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicy">IdentityDomainsAuthenticationFactorSettingCompliancePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicy">IdentityDomainsAuthenticationFactorSettingCompliancePolicy</a>

---


### IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference <a name="IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_authentication_factor_setting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference;

new IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.resetEmailLinkCustomUrl">resetEmailLinkCustomUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmailLinkCustomUrl` <a name="resetEmailLinkCustomUrl" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.resetEmailLinkCustomUrl"></a>

```java
public void resetEmailLinkCustomUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.property.emailLinkCustomUrlInput">emailLinkCustomUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.property.emailLinkEnabledInput">emailLinkEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.property.emailLinkCustomUrl">emailLinkCustomUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.property.emailLinkEnabled">emailLinkEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettings">IdentityDomainsAuthenticationFactorSettingEmailSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `emailLinkCustomUrlInput`<sup>Optional</sup> <a name="emailLinkCustomUrlInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.property.emailLinkCustomUrlInput"></a>

```java
public java.lang.String getEmailLinkCustomUrlInput();
```

- *Type:* java.lang.String

---

##### `emailLinkEnabledInput`<sup>Optional</sup> <a name="emailLinkEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.property.emailLinkEnabledInput"></a>

```java
public java.lang.Object getEmailLinkEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `emailLinkCustomUrl`<sup>Required</sup> <a name="emailLinkCustomUrl" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.property.emailLinkCustomUrl"></a>

```java
public java.lang.String getEmailLinkCustomUrl();
```

- *Type:* java.lang.String

---

##### `emailLinkEnabled`<sup>Required</sup> <a name="emailLinkEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.property.emailLinkEnabled"></a>

```java
public java.lang.Object getEmailLinkEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.property.internalValue"></a>

```java
public IdentityDomainsAuthenticationFactorSettingEmailSettings getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettings">IdentityDomainsAuthenticationFactorSettingEmailSettings</a>

---


### IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference <a name="IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_authentication_factor_setting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference;

new IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.maxEndpointTrustDurationInDaysInput">maxEndpointTrustDurationInDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.maxEnrolledDevicesInput">maxEnrolledDevicesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.maxIncorrectAttemptsInput">maxIncorrectAttemptsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.maxTrustedEndpointsInput">maxTrustedEndpointsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.trustedEndpointsEnabledInput">trustedEndpointsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.maxEndpointTrustDurationInDays">maxEndpointTrustDurationInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.maxEnrolledDevices">maxEnrolledDevices</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.maxIncorrectAttempts">maxIncorrectAttempts</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.maxTrustedEndpoints">maxTrustedEndpoints</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.trustedEndpointsEnabled">trustedEndpointsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictions">IdentityDomainsAuthenticationFactorSettingEndpointRestrictions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxEndpointTrustDurationInDaysInput`<sup>Optional</sup> <a name="maxEndpointTrustDurationInDaysInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.maxEndpointTrustDurationInDaysInput"></a>

```java
public java.lang.Number getMaxEndpointTrustDurationInDaysInput();
```

- *Type:* java.lang.Number

---

##### `maxEnrolledDevicesInput`<sup>Optional</sup> <a name="maxEnrolledDevicesInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.maxEnrolledDevicesInput"></a>

```java
public java.lang.Number getMaxEnrolledDevicesInput();
```

- *Type:* java.lang.Number

---

##### `maxIncorrectAttemptsInput`<sup>Optional</sup> <a name="maxIncorrectAttemptsInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.maxIncorrectAttemptsInput"></a>

```java
public java.lang.Number getMaxIncorrectAttemptsInput();
```

- *Type:* java.lang.Number

---

##### `maxTrustedEndpointsInput`<sup>Optional</sup> <a name="maxTrustedEndpointsInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.maxTrustedEndpointsInput"></a>

```java
public java.lang.Number getMaxTrustedEndpointsInput();
```

- *Type:* java.lang.Number

---

##### `trustedEndpointsEnabledInput`<sup>Optional</sup> <a name="trustedEndpointsEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.trustedEndpointsEnabledInput"></a>

```java
public java.lang.Object getTrustedEndpointsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maxEndpointTrustDurationInDays`<sup>Required</sup> <a name="maxEndpointTrustDurationInDays" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.maxEndpointTrustDurationInDays"></a>

```java
public java.lang.Number getMaxEndpointTrustDurationInDays();
```

- *Type:* java.lang.Number

---

##### `maxEnrolledDevices`<sup>Required</sup> <a name="maxEnrolledDevices" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.maxEnrolledDevices"></a>

```java
public java.lang.Number getMaxEnrolledDevices();
```

- *Type:* java.lang.Number

---

##### `maxIncorrectAttempts`<sup>Required</sup> <a name="maxIncorrectAttempts" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.maxIncorrectAttempts"></a>

```java
public java.lang.Number getMaxIncorrectAttempts();
```

- *Type:* java.lang.Number

---

##### `maxTrustedEndpoints`<sup>Required</sup> <a name="maxTrustedEndpoints" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.maxTrustedEndpoints"></a>

```java
public java.lang.Number getMaxTrustedEndpoints();
```

- *Type:* java.lang.Number

---

##### `trustedEndpointsEnabled`<sup>Required</sup> <a name="trustedEndpointsEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.trustedEndpointsEnabled"></a>

```java
public java.lang.Object getTrustedEndpointsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.internalValue"></a>

```java
public IdentityDomainsAuthenticationFactorSettingEndpointRestrictions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictions">IdentityDomainsAuthenticationFactorSettingEndpointRestrictions</a>

---


### IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList <a name="IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_authentication_factor_setting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList;

new IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.get"></a>

```java
public IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference <a name="IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_authentication_factor_setting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference;

new IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.display">display</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedBy">IdentityDomainsAuthenticationFactorSettingIdcsCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.display"></a>

```java
public java.lang.String getDisplay();
```

- *Type:* java.lang.String

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.internalValue"></a>

```java
public IdentityDomainsAuthenticationFactorSettingIdcsCreatedBy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedBy">IdentityDomainsAuthenticationFactorSettingIdcsCreatedBy</a>

---


### IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList <a name="IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_authentication_factor_setting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList;

new IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.get"></a>

```java
public IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference <a name="IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_authentication_factor_setting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference;

new IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedBy">IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.display"></a>

```java
public java.lang.String getDisplay();
```

- *Type:* java.lang.String

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.internalValue"></a>

```java
public IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedBy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedBy">IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedBy</a>

---


### IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference <a name="IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_authentication_factor_setting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference;

new IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.resetMobileNumberEnabled">resetMobileNumberEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.resetMobileNumberUpdateEnabled">resetMobileNumberUpdateEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMobileNumberEnabled` <a name="resetMobileNumberEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.resetMobileNumberEnabled"></a>

```java
public void resetMobileNumberEnabled()
```

##### `resetMobileNumberUpdateEnabled` <a name="resetMobileNumberUpdateEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.resetMobileNumberUpdateEnabled"></a>

```java
public void resetMobileNumberUpdateEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.property.mobileNumberEnabledInput">mobileNumberEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.property.mobileNumberUpdateEnabledInput">mobileNumberUpdateEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.property.mobileNumberEnabled">mobileNumberEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.property.mobileNumberUpdateEnabled">mobileNumberUpdateEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings">IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mobileNumberEnabledInput`<sup>Optional</sup> <a name="mobileNumberEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.property.mobileNumberEnabledInput"></a>

```java
public java.lang.Object getMobileNumberEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `mobileNumberUpdateEnabledInput`<sup>Optional</sup> <a name="mobileNumberUpdateEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.property.mobileNumberUpdateEnabledInput"></a>

```java
public java.lang.Object getMobileNumberUpdateEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `mobileNumberEnabled`<sup>Required</sup> <a name="mobileNumberEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.property.mobileNumberEnabled"></a>

```java
public java.lang.Object getMobileNumberEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `mobileNumberUpdateEnabled`<sup>Required</sup> <a name="mobileNumberUpdateEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.property.mobileNumberUpdateEnabled"></a>

```java
public java.lang.Object getMobileNumberUpdateEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.property.internalValue"></a>

```java
public IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings">IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings</a>

---


### IdentityDomainsAuthenticationFactorSettingMetaList <a name="IdentityDomainsAuthenticationFactorSettingMetaList" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_authentication_factor_setting.IdentityDomainsAuthenticationFactorSettingMetaList;

new IdentityDomainsAuthenticationFactorSettingMetaList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList.get"></a>

```java
public IdentityDomainsAuthenticationFactorSettingMetaOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### IdentityDomainsAuthenticationFactorSettingMetaOutputReference <a name="IdentityDomainsAuthenticationFactorSettingMetaOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_authentication_factor_setting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference;

new IdentityDomainsAuthenticationFactorSettingMetaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.created">created</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.lastModified">lastModified</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMeta">IdentityDomainsAuthenticationFactorSettingMeta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.created"></a>

```java
public java.lang.String getCreated();
```

- *Type:* java.lang.String

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.lastModified"></a>

```java
public java.lang.String getLastModified();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.internalValue"></a>

```java
public IdentityDomainsAuthenticationFactorSettingMeta getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMeta">IdentityDomainsAuthenticationFactorSettingMeta</a>

---


### IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference <a name="IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_authentication_factor_setting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference;

new IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.property.pullEnabledInput">pullEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.property.pullEnabled">pullEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettings">IdentityDomainsAuthenticationFactorSettingNotificationSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pullEnabledInput`<sup>Optional</sup> <a name="pullEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.property.pullEnabledInput"></a>

```java
public java.lang.Object getPullEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `pullEnabled`<sup>Required</sup> <a name="pullEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.property.pullEnabled"></a>

```java
public java.lang.Object getPullEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.property.internalValue"></a>

```java
public IdentityDomainsAuthenticationFactorSettingNotificationSettings getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettings">IdentityDomainsAuthenticationFactorSettingNotificationSettings</a>

---


### IdentityDomainsAuthenticationFactorSettingTagsList <a name="IdentityDomainsAuthenticationFactorSettingTagsList" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_authentication_factor_setting.IdentityDomainsAuthenticationFactorSettingTagsList;

new IdentityDomainsAuthenticationFactorSettingTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.get"></a>

```java
public IdentityDomainsAuthenticationFactorSettingTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTags">IdentityDomainsAuthenticationFactorSettingTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTags">IdentityDomainsAuthenticationFactorSettingTags</a>>

---


### IdentityDomainsAuthenticationFactorSettingTagsOutputReference <a name="IdentityDomainsAuthenticationFactorSettingTagsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_authentication_factor_setting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference;

new IdentityDomainsAuthenticationFactorSettingTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTags">IdentityDomainsAuthenticationFactorSettingTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTags">IdentityDomainsAuthenticationFactorSettingTags</a>

---


### IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference <a name="IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_authentication_factor_setting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference;

new IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.property.duoSecurityInput">duoSecurityInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.property.duoSecurity">duoSecurity</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactor">IdentityDomainsAuthenticationFactorSettingThirdPartyFactor</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `duoSecurityInput`<sup>Optional</sup> <a name="duoSecurityInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.property.duoSecurityInput"></a>

```java
public java.lang.Object getDuoSecurityInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `duoSecurity`<sup>Required</sup> <a name="duoSecurity" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.property.duoSecurity"></a>

```java
public java.lang.Object getDuoSecurity();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.property.internalValue"></a>

```java
public IdentityDomainsAuthenticationFactorSettingThirdPartyFactor getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactor">IdentityDomainsAuthenticationFactorSettingThirdPartyFactor</a>

---


### IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference <a name="IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_authentication_factor_setting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference;

new IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeouts">IdentityDomainsAuthenticationFactorSettingTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeouts">IdentityDomainsAuthenticationFactorSettingTimeouts</a>

---


### IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference <a name="IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_authentication_factor_setting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference;

new IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.emailOtpValidityDurationInMinsInput">emailOtpValidityDurationInMinsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.emailPasscodeLengthInput">emailPasscodeLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.hashingAlgorithmInput">hashingAlgorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.jwtValidityDurationInSecsInput">jwtValidityDurationInSecsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.keyRefreshIntervalInDaysInput">keyRefreshIntervalInDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.passcodeLengthInput">passcodeLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.smsOtpValidityDurationInMinsInput">smsOtpValidityDurationInMinsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.smsPasscodeLengthInput">smsPasscodeLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.timeStepInSecsInput">timeStepInSecsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.timeStepToleranceInput">timeStepToleranceInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.emailOtpValidityDurationInMins">emailOtpValidityDurationInMins</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.emailPasscodeLength">emailPasscodeLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.hashingAlgorithm">hashingAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.jwtValidityDurationInSecs">jwtValidityDurationInSecs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.keyRefreshIntervalInDays">keyRefreshIntervalInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.passcodeLength">passcodeLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.smsOtpValidityDurationInMins">smsOtpValidityDurationInMins</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.smsPasscodeLength">smsPasscodeLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.timeStepInSecs">timeStepInSecs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.timeStepTolerance">timeStepTolerance</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings">IdentityDomainsAuthenticationFactorSettingTotpSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `emailOtpValidityDurationInMinsInput`<sup>Optional</sup> <a name="emailOtpValidityDurationInMinsInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.emailOtpValidityDurationInMinsInput"></a>

```java
public java.lang.Number getEmailOtpValidityDurationInMinsInput();
```

- *Type:* java.lang.Number

---

##### `emailPasscodeLengthInput`<sup>Optional</sup> <a name="emailPasscodeLengthInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.emailPasscodeLengthInput"></a>

```java
public java.lang.Number getEmailPasscodeLengthInput();
```

- *Type:* java.lang.Number

---

##### `hashingAlgorithmInput`<sup>Optional</sup> <a name="hashingAlgorithmInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.hashingAlgorithmInput"></a>

```java
public java.lang.String getHashingAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `jwtValidityDurationInSecsInput`<sup>Optional</sup> <a name="jwtValidityDurationInSecsInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.jwtValidityDurationInSecsInput"></a>

```java
public java.lang.Number getJwtValidityDurationInSecsInput();
```

- *Type:* java.lang.Number

---

##### `keyRefreshIntervalInDaysInput`<sup>Optional</sup> <a name="keyRefreshIntervalInDaysInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.keyRefreshIntervalInDaysInput"></a>

```java
public java.lang.Number getKeyRefreshIntervalInDaysInput();
```

- *Type:* java.lang.Number

---

##### `passcodeLengthInput`<sup>Optional</sup> <a name="passcodeLengthInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.passcodeLengthInput"></a>

```java
public java.lang.Number getPasscodeLengthInput();
```

- *Type:* java.lang.Number

---

##### `smsOtpValidityDurationInMinsInput`<sup>Optional</sup> <a name="smsOtpValidityDurationInMinsInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.smsOtpValidityDurationInMinsInput"></a>

```java
public java.lang.Number getSmsOtpValidityDurationInMinsInput();
```

- *Type:* java.lang.Number

---

##### `smsPasscodeLengthInput`<sup>Optional</sup> <a name="smsPasscodeLengthInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.smsPasscodeLengthInput"></a>

```java
public java.lang.Number getSmsPasscodeLengthInput();
```

- *Type:* java.lang.Number

---

##### `timeStepInSecsInput`<sup>Optional</sup> <a name="timeStepInSecsInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.timeStepInSecsInput"></a>

```java
public java.lang.Number getTimeStepInSecsInput();
```

- *Type:* java.lang.Number

---

##### `timeStepToleranceInput`<sup>Optional</sup> <a name="timeStepToleranceInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.timeStepToleranceInput"></a>

```java
public java.lang.Number getTimeStepToleranceInput();
```

- *Type:* java.lang.Number

---

##### `emailOtpValidityDurationInMins`<sup>Required</sup> <a name="emailOtpValidityDurationInMins" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.emailOtpValidityDurationInMins"></a>

```java
public java.lang.Number getEmailOtpValidityDurationInMins();
```

- *Type:* java.lang.Number

---

##### `emailPasscodeLength`<sup>Required</sup> <a name="emailPasscodeLength" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.emailPasscodeLength"></a>

```java
public java.lang.Number getEmailPasscodeLength();
```

- *Type:* java.lang.Number

---

##### `hashingAlgorithm`<sup>Required</sup> <a name="hashingAlgorithm" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.hashingAlgorithm"></a>

```java
public java.lang.String getHashingAlgorithm();
```

- *Type:* java.lang.String

---

##### `jwtValidityDurationInSecs`<sup>Required</sup> <a name="jwtValidityDurationInSecs" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.jwtValidityDurationInSecs"></a>

```java
public java.lang.Number getJwtValidityDurationInSecs();
```

- *Type:* java.lang.Number

---

##### `keyRefreshIntervalInDays`<sup>Required</sup> <a name="keyRefreshIntervalInDays" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.keyRefreshIntervalInDays"></a>

```java
public java.lang.Number getKeyRefreshIntervalInDays();
```

- *Type:* java.lang.Number

---

##### `passcodeLength`<sup>Required</sup> <a name="passcodeLength" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.passcodeLength"></a>

```java
public java.lang.Number getPasscodeLength();
```

- *Type:* java.lang.Number

---

##### `smsOtpValidityDurationInMins`<sup>Required</sup> <a name="smsOtpValidityDurationInMins" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.smsOtpValidityDurationInMins"></a>

```java
public java.lang.Number getSmsOtpValidityDurationInMins();
```

- *Type:* java.lang.Number

---

##### `smsPasscodeLength`<sup>Required</sup> <a name="smsPasscodeLength" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.smsPasscodeLength"></a>

```java
public java.lang.Number getSmsPasscodeLength();
```

- *Type:* java.lang.Number

---

##### `timeStepInSecs`<sup>Required</sup> <a name="timeStepInSecs" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.timeStepInSecs"></a>

```java
public java.lang.Number getTimeStepInSecs();
```

- *Type:* java.lang.Number

---

##### `timeStepTolerance`<sup>Required</sup> <a name="timeStepTolerance" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.timeStepTolerance"></a>

```java
public java.lang.Number getTimeStepTolerance();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.internalValue"></a>

```java
public IdentityDomainsAuthenticationFactorSettingTotpSettings getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings">IdentityDomainsAuthenticationFactorSettingTotpSettings</a>

---


### IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference <a name="IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_authentication_factor_setting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference;

new IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.resetDomainValidationLevel">resetDomainValidationLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDomainValidationLevel` <a name="resetDomainValidationLevel" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.resetDomainValidationLevel"></a>

```java
public void resetDomainValidationLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.attestationInput">attestationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionAttachmentInput">authenticatorSelectionAttachmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionRequireResidentKeyInput">authenticatorSelectionRequireResidentKeyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionResidentKeyInput">authenticatorSelectionResidentKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionUserVerificationInput">authenticatorSelectionUserVerificationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.domainValidationLevelInput">domainValidationLevelInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.excludeCredentialsInput">excludeCredentialsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.publicKeyTypesInput">publicKeyTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.attestation">attestation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionAttachment">authenticatorSelectionAttachment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionRequireResidentKey">authenticatorSelectionRequireResidentKey</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionResidentKey">authenticatorSelectionResidentKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionUserVerification">authenticatorSelectionUserVerification</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.domainValidationLevel">domainValidationLevel</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.excludeCredentials">excludeCredentials</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.publicKeyTypes">publicKeyTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attestationInput`<sup>Optional</sup> <a name="attestationInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.attestationInput"></a>

```java
public java.lang.String getAttestationInput();
```

- *Type:* java.lang.String

---

##### `authenticatorSelectionAttachmentInput`<sup>Optional</sup> <a name="authenticatorSelectionAttachmentInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionAttachmentInput"></a>

```java
public java.lang.String getAuthenticatorSelectionAttachmentInput();
```

- *Type:* java.lang.String

---

##### `authenticatorSelectionRequireResidentKeyInput`<sup>Optional</sup> <a name="authenticatorSelectionRequireResidentKeyInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionRequireResidentKeyInput"></a>

```java
public java.lang.Object getAuthenticatorSelectionRequireResidentKeyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `authenticatorSelectionResidentKeyInput`<sup>Optional</sup> <a name="authenticatorSelectionResidentKeyInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionResidentKeyInput"></a>

```java
public java.lang.String getAuthenticatorSelectionResidentKeyInput();
```

- *Type:* java.lang.String

---

##### `authenticatorSelectionUserVerificationInput`<sup>Optional</sup> <a name="authenticatorSelectionUserVerificationInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionUserVerificationInput"></a>

```java
public java.lang.String getAuthenticatorSelectionUserVerificationInput();
```

- *Type:* java.lang.String

---

##### `domainValidationLevelInput`<sup>Optional</sup> <a name="domainValidationLevelInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.domainValidationLevelInput"></a>

```java
public java.lang.Number getDomainValidationLevelInput();
```

- *Type:* java.lang.Number

---

##### `excludeCredentialsInput`<sup>Optional</sup> <a name="excludeCredentialsInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.excludeCredentialsInput"></a>

```java
public java.lang.Object getExcludeCredentialsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `publicKeyTypesInput`<sup>Optional</sup> <a name="publicKeyTypesInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.publicKeyTypesInput"></a>

```java
public java.util.List<java.lang.String> getPublicKeyTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.timeoutInput"></a>

```java
public java.lang.Number getTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `attestation`<sup>Required</sup> <a name="attestation" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.attestation"></a>

```java
public java.lang.String getAttestation();
```

- *Type:* java.lang.String

---

##### `authenticatorSelectionAttachment`<sup>Required</sup> <a name="authenticatorSelectionAttachment" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionAttachment"></a>

```java
public java.lang.String getAuthenticatorSelectionAttachment();
```

- *Type:* java.lang.String

---

##### `authenticatorSelectionRequireResidentKey`<sup>Required</sup> <a name="authenticatorSelectionRequireResidentKey" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionRequireResidentKey"></a>

```java
public java.lang.Object getAuthenticatorSelectionRequireResidentKey();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `authenticatorSelectionResidentKey`<sup>Required</sup> <a name="authenticatorSelectionResidentKey" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionResidentKey"></a>

```java
public java.lang.String getAuthenticatorSelectionResidentKey();
```

- *Type:* java.lang.String

---

##### `authenticatorSelectionUserVerification`<sup>Required</sup> <a name="authenticatorSelectionUserVerification" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionUserVerification"></a>

```java
public java.lang.String getAuthenticatorSelectionUserVerification();
```

- *Type:* java.lang.String

---

##### `domainValidationLevel`<sup>Required</sup> <a name="domainValidationLevel" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.domainValidationLevel"></a>

```java
public java.lang.Number getDomainValidationLevel();
```

- *Type:* java.lang.Number

---

##### `excludeCredentials`<sup>Required</sup> <a name="excludeCredentials" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.excludeCredentials"></a>

```java
public java.lang.Object getExcludeCredentials();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `publicKeyTypes`<sup>Required</sup> <a name="publicKeyTypes" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.publicKeyTypes"></a>

```java
public java.util.List<java.lang.String> getPublicKeyTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.internalValue"></a>

```java
public IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings</a>

---


### IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference <a name="IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_authentication_factor_setting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference;

new IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.resetAttestationKey">resetAttestationKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAttestationKey` <a name="resetAttestationKey" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.resetAttestationKey"></a>

```java
public void resetAttestationKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.apiHostnameInput">apiHostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.attestationKeyInput">attestationKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.integrationKeyInput">integrationKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.secretKeyInput">secretKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.userMappingAttributeInput">userMappingAttributeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.apiHostname">apiHostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.attestationKey">attestationKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.integrationKey">integrationKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.secretKey">secretKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.userMappingAttribute">userMappingAttribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiHostnameInput`<sup>Optional</sup> <a name="apiHostnameInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.apiHostnameInput"></a>

```java
public java.lang.String getApiHostnameInput();
```

- *Type:* java.lang.String

---

##### `attestationKeyInput`<sup>Optional</sup> <a name="attestationKeyInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.attestationKeyInput"></a>

```java
public java.lang.String getAttestationKeyInput();
```

- *Type:* java.lang.String

---

##### `integrationKeyInput`<sup>Optional</sup> <a name="integrationKeyInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.integrationKeyInput"></a>

```java
public java.lang.String getIntegrationKeyInput();
```

- *Type:* java.lang.String

---

##### `secretKeyInput`<sup>Optional</sup> <a name="secretKeyInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.secretKeyInput"></a>

```java
public java.lang.String getSecretKeyInput();
```

- *Type:* java.lang.String

---

##### `userMappingAttributeInput`<sup>Optional</sup> <a name="userMappingAttributeInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.userMappingAttributeInput"></a>

```java
public java.lang.String getUserMappingAttributeInput();
```

- *Type:* java.lang.String

---

##### `apiHostname`<sup>Required</sup> <a name="apiHostname" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.apiHostname"></a>

```java
public java.lang.String getApiHostname();
```

- *Type:* java.lang.String

---

##### `attestationKey`<sup>Required</sup> <a name="attestationKey" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.attestationKey"></a>

```java
public java.lang.String getAttestationKey();
```

- *Type:* java.lang.String

---

##### `integrationKey`<sup>Required</sup> <a name="integrationKey" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.integrationKey"></a>

```java
public java.lang.String getIntegrationKey();
```

- *Type:* java.lang.String

---

##### `secretKey`<sup>Required</sup> <a name="secretKey" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.secretKey"></a>

```java
public java.lang.String getSecretKey();
```

- *Type:* java.lang.String

---

##### `userMappingAttribute`<sup>Required</sup> <a name="userMappingAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.userMappingAttribute"></a>

```java
public java.lang.String getUserMappingAttribute();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.internalValue"></a>

```java
public IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings</a>

---


### IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference <a name="IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_authentication_factor_setting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference;

new IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.putDuoSecuritySettings">putDuoSecuritySettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.resetDuoSecuritySettings">resetDuoSecuritySettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDuoSecuritySettings` <a name="putDuoSecuritySettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.putDuoSecuritySettings"></a>

```java
public void putDuoSecuritySettings(IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.putDuoSecuritySettings.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings</a>

---

##### `resetDuoSecuritySettings` <a name="resetDuoSecuritySettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.resetDuoSecuritySettings"></a>

```java
public void resetDuoSecuritySettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.property.duoSecuritySettings">duoSecuritySettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.property.duoSecuritySettingsInput">duoSecuritySettingsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `duoSecuritySettings`<sup>Required</sup> <a name="duoSecuritySettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.property.duoSecuritySettings"></a>

```java
public IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference getDuoSecuritySettings();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference</a>

---

##### `duoSecuritySettingsInput`<sup>Optional</sup> <a name="duoSecuritySettingsInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.property.duoSecuritySettingsInput"></a>

```java
public IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings getDuoSecuritySettingsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.property.internalValue"></a>

```java
public IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings</a>

---



