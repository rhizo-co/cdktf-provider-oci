# `identityDomainsAuthenticationFactorSetting` Submodule <a name="`identityDomainsAuthenticationFactorSetting` Submodule" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityDomainsAuthenticationFactorSetting <a name="IdentityDomainsAuthenticationFactorSetting" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting oci_identity_domains_authentication_factor_setting}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_authentication_factor_setting

identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  authentication_factor_setting_id: str,
  bypass_code_enabled: typing.Union[bool, IResolvable],
  bypass_code_settings: IdentityDomainsAuthenticationFactorSettingBypassCodeSettings,
  client_app_settings: IdentityDomainsAuthenticationFactorSettingClientAppSettings,
  compliance_policy: typing.Union[IResolvable, typing.List[IdentityDomainsAuthenticationFactorSettingCompliancePolicy]],
  endpoint_restrictions: IdentityDomainsAuthenticationFactorSettingEndpointRestrictions,
  idcs_endpoint: str,
  mfa_enrollment_type: str,
  notification_settings: IdentityDomainsAuthenticationFactorSettingNotificationSettings,
  push_enabled: typing.Union[bool, IResolvable],
  schemas: typing.List[str],
  security_questions_enabled: typing.Union[bool, IResolvable],
  sms_enabled: typing.Union[bool, IResolvable],
  totp_enabled: typing.Union[bool, IResolvable],
  totp_settings: IdentityDomainsAuthenticationFactorSettingTotpSettings,
  attributes: str = None,
  attribute_sets: typing.List[str] = None,
  authorization: str = None,
  auto_enroll_email_factor_disabled: typing.Union[bool, IResolvable] = None,
  email_enabled: typing.Union[bool, IResolvable] = None,
  email_settings: IdentityDomainsAuthenticationFactorSettingEmailSettings = None,
  fido_authenticator_enabled: typing.Union[bool, IResolvable] = None,
  hide_backup_factor_enabled: typing.Union[bool, IResolvable] = None,
  identity_store_settings: IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings = None,
  ocid: str = None,
  phone_call_enabled: typing.Union[bool, IResolvable] = None,
  resource_type_schema_version: str = None,
  tags: typing.Union[IResolvable, typing.List[IdentityDomainsAuthenticationFactorSettingTags]] = None,
  third_party_factor: IdentityDomainsAuthenticationFactorSettingThirdPartyFactor = None,
  timeouts: IdentityDomainsAuthenticationFactorSettingTimeouts = None,
  urnietfparamsscimschemasoracleidcsextensionfido_authentication_factor_settings: IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings = None,
  urnietfparamsscimschemasoracleidcsextensionthird_party_authentication_factor_settings: IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings = None,
  user_enrollment_disabled_factors: typing.List[str] = None,
  yubico_otp_enabled: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.authenticationFactorSettingId">authentication_factor_setting_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#authentication_factor_setting_id IdentityDomainsAuthenticationFactorSetting#authentication_factor_setting_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.bypassCodeEnabled">bypass_code_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#bypass_code_enabled IdentityDomainsAuthenticationFactorSetting#bypass_code_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.bypassCodeSettings">bypass_code_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettings">IdentityDomainsAuthenticationFactorSettingBypassCodeSettings</a></code> | bypass_code_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.clientAppSettings">client_app_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings">IdentityDomainsAuthenticationFactorSettingClientAppSettings</a></code> | client_app_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.compliancePolicy">compliance_policy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicy">IdentityDomainsAuthenticationFactorSettingCompliancePolicy</a>]]</code> | compliance_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.endpointRestrictions">endpoint_restrictions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictions">IdentityDomainsAuthenticationFactorSettingEndpointRestrictions</a></code> | endpoint_restrictions block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#idcs_endpoint IdentityDomainsAuthenticationFactorSetting#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.mfaEnrollmentType">mfa_enrollment_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#mfa_enrollment_type IdentityDomainsAuthenticationFactorSetting#mfa_enrollment_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.notificationSettings">notification_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettings">IdentityDomainsAuthenticationFactorSettingNotificationSettings</a></code> | notification_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.pushEnabled">push_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#push_enabled IdentityDomainsAuthenticationFactorSetting#push_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.schemas">schemas</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#schemas IdentityDomainsAuthenticationFactorSetting#schemas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.securityQuestionsEnabled">security_questions_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#security_questions_enabled IdentityDomainsAuthenticationFactorSetting#security_questions_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.smsEnabled">sms_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#sms_enabled IdentityDomainsAuthenticationFactorSetting#sms_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.totpEnabled">totp_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#totp_enabled IdentityDomainsAuthenticationFactorSetting#totp_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.totpSettings">totp_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings">IdentityDomainsAuthenticationFactorSettingTotpSettings</a></code> | totp_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.attributes">attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#attributes IdentityDomainsAuthenticationFactorSetting#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#attribute_sets IdentityDomainsAuthenticationFactorSetting#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#authorization IdentityDomainsAuthenticationFactorSetting#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.autoEnrollEmailFactorDisabled">auto_enroll_email_factor_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#auto_enroll_email_factor_disabled IdentityDomainsAuthenticationFactorSetting#auto_enroll_email_factor_disabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.emailEnabled">email_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#email_enabled IdentityDomainsAuthenticationFactorSetting#email_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.emailSettings">email_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettings">IdentityDomainsAuthenticationFactorSettingEmailSettings</a></code> | email_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.fidoAuthenticatorEnabled">fido_authenticator_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#fido_authenticator_enabled IdentityDomainsAuthenticationFactorSetting#fido_authenticator_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.hideBackupFactorEnabled">hide_backup_factor_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#hide_backup_factor_enabled IdentityDomainsAuthenticationFactorSetting#hide_backup_factor_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.identityStoreSettings">identity_store_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings">IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings</a></code> | identity_store_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.ocid">ocid</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#ocid IdentityDomainsAuthenticationFactorSetting#ocid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.phoneCallEnabled">phone_call_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#phone_call_enabled IdentityDomainsAuthenticationFactorSetting#phone_call_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#resource_type_schema_version IdentityDomainsAuthenticationFactorSetting#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.tags">tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTags">IdentityDomainsAuthenticationFactorSettingTags</a>]]</code> | tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.thirdPartyFactor">third_party_factor</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactor">IdentityDomainsAuthenticationFactorSettingThirdPartyFactor</a></code> | third_party_factor block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeouts">IdentityDomainsAuthenticationFactorSettingTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.urnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings">urnietfparamsscimschemasoracleidcsextensionfido_authentication_factor_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings</a></code> | urnietfparamsscimschemasoracleidcsextensionfido_authentication_factor_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.urnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings">urnietfparamsscimschemasoracleidcsextensionthird_party_authentication_factor_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings</a></code> | urnietfparamsscimschemasoracleidcsextensionthird_party_authentication_factor_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.userEnrollmentDisabledFactors">user_enrollment_disabled_factors</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#user_enrollment_disabled_factors IdentityDomainsAuthenticationFactorSetting#user_enrollment_disabled_factors}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.yubicoOtpEnabled">yubico_otp_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#yubico_otp_enabled IdentityDomainsAuthenticationFactorSetting#yubico_otp_enabled}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `authentication_factor_setting_id`<sup>Required</sup> <a name="authentication_factor_setting_id" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.authenticationFactorSettingId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#authentication_factor_setting_id IdentityDomainsAuthenticationFactorSetting#authentication_factor_setting_id}.

---

##### `bypass_code_enabled`<sup>Required</sup> <a name="bypass_code_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.bypassCodeEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#bypass_code_enabled IdentityDomainsAuthenticationFactorSetting#bypass_code_enabled}.

---

##### `bypass_code_settings`<sup>Required</sup> <a name="bypass_code_settings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.bypassCodeSettings"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettings">IdentityDomainsAuthenticationFactorSettingBypassCodeSettings</a>

bypass_code_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#bypass_code_settings IdentityDomainsAuthenticationFactorSetting#bypass_code_settings}

---

##### `client_app_settings`<sup>Required</sup> <a name="client_app_settings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.clientAppSettings"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings">IdentityDomainsAuthenticationFactorSettingClientAppSettings</a>

client_app_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#client_app_settings IdentityDomainsAuthenticationFactorSetting#client_app_settings}

---

##### `compliance_policy`<sup>Required</sup> <a name="compliance_policy" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.compliancePolicy"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicy">IdentityDomainsAuthenticationFactorSettingCompliancePolicy</a>]]

compliance_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#compliance_policy IdentityDomainsAuthenticationFactorSetting#compliance_policy}

---

##### `endpoint_restrictions`<sup>Required</sup> <a name="endpoint_restrictions" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.endpointRestrictions"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictions">IdentityDomainsAuthenticationFactorSettingEndpointRestrictions</a>

endpoint_restrictions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#endpoint_restrictions IdentityDomainsAuthenticationFactorSetting#endpoint_restrictions}

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.idcsEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#idcs_endpoint IdentityDomainsAuthenticationFactorSetting#idcs_endpoint}.

---

##### `mfa_enrollment_type`<sup>Required</sup> <a name="mfa_enrollment_type" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.mfaEnrollmentType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#mfa_enrollment_type IdentityDomainsAuthenticationFactorSetting#mfa_enrollment_type}.

---

##### `notification_settings`<sup>Required</sup> <a name="notification_settings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.notificationSettings"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettings">IdentityDomainsAuthenticationFactorSettingNotificationSettings</a>

notification_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#notification_settings IdentityDomainsAuthenticationFactorSetting#notification_settings}

---

##### `push_enabled`<sup>Required</sup> <a name="push_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.pushEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#push_enabled IdentityDomainsAuthenticationFactorSetting#push_enabled}.

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.schemas"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#schemas IdentityDomainsAuthenticationFactorSetting#schemas}.

---

##### `security_questions_enabled`<sup>Required</sup> <a name="security_questions_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.securityQuestionsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#security_questions_enabled IdentityDomainsAuthenticationFactorSetting#security_questions_enabled}.

---

##### `sms_enabled`<sup>Required</sup> <a name="sms_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.smsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#sms_enabled IdentityDomainsAuthenticationFactorSetting#sms_enabled}.

---

##### `totp_enabled`<sup>Required</sup> <a name="totp_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.totpEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#totp_enabled IdentityDomainsAuthenticationFactorSetting#totp_enabled}.

---

##### `totp_settings`<sup>Required</sup> <a name="totp_settings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.totpSettings"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings">IdentityDomainsAuthenticationFactorSettingTotpSettings</a>

totp_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#totp_settings IdentityDomainsAuthenticationFactorSetting#totp_settings}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.attributes"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#attributes IdentityDomainsAuthenticationFactorSetting#attributes}.

---

##### `attribute_sets`<sup>Optional</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.attributeSets"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#attribute_sets IdentityDomainsAuthenticationFactorSetting#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.authorization"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#authorization IdentityDomainsAuthenticationFactorSetting#authorization}.

---

##### `auto_enroll_email_factor_disabled`<sup>Optional</sup> <a name="auto_enroll_email_factor_disabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.autoEnrollEmailFactorDisabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#auto_enroll_email_factor_disabled IdentityDomainsAuthenticationFactorSetting#auto_enroll_email_factor_disabled}.

---

##### `email_enabled`<sup>Optional</sup> <a name="email_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.emailEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#email_enabled IdentityDomainsAuthenticationFactorSetting#email_enabled}.

---

##### `email_settings`<sup>Optional</sup> <a name="email_settings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.emailSettings"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettings">IdentityDomainsAuthenticationFactorSettingEmailSettings</a>

email_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#email_settings IdentityDomainsAuthenticationFactorSetting#email_settings}

---

##### `fido_authenticator_enabled`<sup>Optional</sup> <a name="fido_authenticator_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.fidoAuthenticatorEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#fido_authenticator_enabled IdentityDomainsAuthenticationFactorSetting#fido_authenticator_enabled}.

---

##### `hide_backup_factor_enabled`<sup>Optional</sup> <a name="hide_backup_factor_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.hideBackupFactorEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#hide_backup_factor_enabled IdentityDomainsAuthenticationFactorSetting#hide_backup_factor_enabled}.

---

##### `identity_store_settings`<sup>Optional</sup> <a name="identity_store_settings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.identityStoreSettings"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings">IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings</a>

identity_store_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#identity_store_settings IdentityDomainsAuthenticationFactorSetting#identity_store_settings}

---

##### `ocid`<sup>Optional</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.ocid"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#ocid IdentityDomainsAuthenticationFactorSetting#ocid}.

---

##### `phone_call_enabled`<sup>Optional</sup> <a name="phone_call_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.phoneCallEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#phone_call_enabled IdentityDomainsAuthenticationFactorSetting#phone_call_enabled}.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.resourceTypeSchemaVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#resource_type_schema_version IdentityDomainsAuthenticationFactorSetting#resource_type_schema_version}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.tags"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTags">IdentityDomainsAuthenticationFactorSettingTags</a>]]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#tags IdentityDomainsAuthenticationFactorSetting#tags}

---

##### `third_party_factor`<sup>Optional</sup> <a name="third_party_factor" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.thirdPartyFactor"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactor">IdentityDomainsAuthenticationFactorSettingThirdPartyFactor</a>

third_party_factor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#third_party_factor IdentityDomainsAuthenticationFactorSetting#third_party_factor}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeouts">IdentityDomainsAuthenticationFactorSettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#timeouts IdentityDomainsAuthenticationFactorSetting#timeouts}

---

##### `urnietfparamsscimschemasoracleidcsextensionfido_authentication_factor_settings`<sup>Optional</sup> <a name="urnietfparamsscimschemasoracleidcsextensionfido_authentication_factor_settings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.urnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings</a>

urnietfparamsscimschemasoracleidcsextensionfido_authentication_factor_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#urnietfparamsscimschemasoracleidcsextensionfido_authentication_factor_settings IdentityDomainsAuthenticationFactorSetting#urnietfparamsscimschemasoracleidcsextensionfido_authentication_factor_settings}

---

##### `urnietfparamsscimschemasoracleidcsextensionthird_party_authentication_factor_settings`<sup>Optional</sup> <a name="urnietfparamsscimschemasoracleidcsextensionthird_party_authentication_factor_settings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.urnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings</a>

urnietfparamsscimschemasoracleidcsextensionthird_party_authentication_factor_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#urnietfparamsscimschemasoracleidcsextensionthird_party_authentication_factor_settings IdentityDomainsAuthenticationFactorSetting#urnietfparamsscimschemasoracleidcsextensionthird_party_authentication_factor_settings}

---

##### `user_enrollment_disabled_factors`<sup>Optional</sup> <a name="user_enrollment_disabled_factors" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.userEnrollmentDisabledFactors"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#user_enrollment_disabled_factors IdentityDomainsAuthenticationFactorSetting#user_enrollment_disabled_factors}.

---

##### `yubico_otp_enabled`<sup>Optional</sup> <a name="yubico_otp_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.yubicoOtpEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#yubico_otp_enabled IdentityDomainsAuthenticationFactorSetting#yubico_otp_enabled}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putBypassCodeSettings">put_bypass_code_settings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putClientAppSettings">put_client_app_settings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putCompliancePolicy">put_compliance_policy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putEmailSettings">put_email_settings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putEndpointRestrictions">put_endpoint_restrictions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putIdentityStoreSettings">put_identity_store_settings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putNotificationSettings">put_notification_settings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putThirdPartyFactor">put_third_party_factor</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putTotpSettings">put_totp_settings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings">put_urnietfparamsscimschemasoracleidcsextensionfido_authentication_factor_settings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings">put_urnietfparamsscimschemasoracleidcsextensionthird_party_authentication_factor_settings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetAttributes">reset_attributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetAttributeSets">reset_attribute_sets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetAuthorization">reset_authorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetAutoEnrollEmailFactorDisabled">reset_auto_enroll_email_factor_disabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetEmailEnabled">reset_email_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetEmailSettings">reset_email_settings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetFidoAuthenticatorEnabled">reset_fido_authenticator_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetHideBackupFactorEnabled">reset_hide_backup_factor_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetIdentityStoreSettings">reset_identity_store_settings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetOcid">reset_ocid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetPhoneCallEnabled">reset_phone_call_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetResourceTypeSchemaVersion">reset_resource_type_schema_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetThirdPartyFactor">reset_third_party_factor</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings">reset_urnietfparamsscimschemasoracleidcsextensionfido_authentication_factor_settings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings">reset_urnietfparamsscimschemasoracleidcsextensionthird_party_authentication_factor_settings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetUserEnrollmentDisabledFactors">reset_user_enrollment_disabled_factors</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetYubicoOtpEnabled">reset_yubico_otp_enabled</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_bypass_code_settings` <a name="put_bypass_code_settings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putBypassCodeSettings"></a>

```python
def put_bypass_code_settings(
  help_desk_code_expiry_in_mins: typing.Union[int, float],
  help_desk_generation_enabled: typing.Union[bool, IResolvable],
  help_desk_max_usage: typing.Union[int, float],
  length: typing.Union[int, float],
  max_active: typing.Union[int, float],
  self_service_generation_enabled: typing.Union[bool, IResolvable]
) -> None
```

###### `help_desk_code_expiry_in_mins`<sup>Required</sup> <a name="help_desk_code_expiry_in_mins" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putBypassCodeSettings.parameter.helpDeskCodeExpiryInMins"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#help_desk_code_expiry_in_mins IdentityDomainsAuthenticationFactorSetting#help_desk_code_expiry_in_mins}.

---

###### `help_desk_generation_enabled`<sup>Required</sup> <a name="help_desk_generation_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putBypassCodeSettings.parameter.helpDeskGenerationEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#help_desk_generation_enabled IdentityDomainsAuthenticationFactorSetting#help_desk_generation_enabled}.

---

###### `help_desk_max_usage`<sup>Required</sup> <a name="help_desk_max_usage" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putBypassCodeSettings.parameter.helpDeskMaxUsage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#help_desk_max_usage IdentityDomainsAuthenticationFactorSetting#help_desk_max_usage}.

---

###### `length`<sup>Required</sup> <a name="length" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putBypassCodeSettings.parameter.length"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#length IdentityDomainsAuthenticationFactorSetting#length}.

---

###### `max_active`<sup>Required</sup> <a name="max_active" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putBypassCodeSettings.parameter.maxActive"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#max_active IdentityDomainsAuthenticationFactorSetting#max_active}.

---

###### `self_service_generation_enabled`<sup>Required</sup> <a name="self_service_generation_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putBypassCodeSettings.parameter.selfServiceGenerationEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#self_service_generation_enabled IdentityDomainsAuthenticationFactorSetting#self_service_generation_enabled}.

---

##### `put_client_app_settings` <a name="put_client_app_settings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putClientAppSettings"></a>

```python
def put_client_app_settings(
  device_protection_policy: str,
  initial_lockout_period_in_secs: typing.Union[int, float],
  key_pair_length: typing.Union[int, float],
  lockout_escalation_pattern: str,
  max_failures_before_lockout: typing.Union[int, float],
  max_failures_before_warning: typing.Union[int, float],
  max_lockout_interval_in_secs: typing.Union[int, float],
  min_pin_length: typing.Union[int, float],
  policy_update_freq_in_days: typing.Union[int, float],
  request_signing_algo: str,
  shared_secret_encoding: str,
  unlock_app_for_each_request_enabled: typing.Union[bool, IResolvable],
  unlock_app_interval_in_secs: typing.Union[int, float],
  unlock_on_app_foreground_enabled: typing.Union[bool, IResolvable],
  unlock_on_app_start_enabled: typing.Union[bool, IResolvable]
) -> None
```

###### `device_protection_policy`<sup>Required</sup> <a name="device_protection_policy" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putClientAppSettings.parameter.deviceProtectionPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#device_protection_policy IdentityDomainsAuthenticationFactorSetting#device_protection_policy}.

---

###### `initial_lockout_period_in_secs`<sup>Required</sup> <a name="initial_lockout_period_in_secs" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putClientAppSettings.parameter.initialLockoutPeriodInSecs"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#initial_lockout_period_in_secs IdentityDomainsAuthenticationFactorSetting#initial_lockout_period_in_secs}.

---

###### `key_pair_length`<sup>Required</sup> <a name="key_pair_length" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putClientAppSettings.parameter.keyPairLength"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#key_pair_length IdentityDomainsAuthenticationFactorSetting#key_pair_length}.

---

###### `lockout_escalation_pattern`<sup>Required</sup> <a name="lockout_escalation_pattern" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putClientAppSettings.parameter.lockoutEscalationPattern"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#lockout_escalation_pattern IdentityDomainsAuthenticationFactorSetting#lockout_escalation_pattern}.

---

###### `max_failures_before_lockout`<sup>Required</sup> <a name="max_failures_before_lockout" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putClientAppSettings.parameter.maxFailuresBeforeLockout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#max_failures_before_lockout IdentityDomainsAuthenticationFactorSetting#max_failures_before_lockout}.

---

###### `max_failures_before_warning`<sup>Required</sup> <a name="max_failures_before_warning" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putClientAppSettings.parameter.maxFailuresBeforeWarning"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#max_failures_before_warning IdentityDomainsAuthenticationFactorSetting#max_failures_before_warning}.

---

###### `max_lockout_interval_in_secs`<sup>Required</sup> <a name="max_lockout_interval_in_secs" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putClientAppSettings.parameter.maxLockoutIntervalInSecs"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#max_lockout_interval_in_secs IdentityDomainsAuthenticationFactorSetting#max_lockout_interval_in_secs}.

---

###### `min_pin_length`<sup>Required</sup> <a name="min_pin_length" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putClientAppSettings.parameter.minPinLength"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#min_pin_length IdentityDomainsAuthenticationFactorSetting#min_pin_length}.

---

###### `policy_update_freq_in_days`<sup>Required</sup> <a name="policy_update_freq_in_days" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putClientAppSettings.parameter.policyUpdateFreqInDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#policy_update_freq_in_days IdentityDomainsAuthenticationFactorSetting#policy_update_freq_in_days}.

---

###### `request_signing_algo`<sup>Required</sup> <a name="request_signing_algo" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putClientAppSettings.parameter.requestSigningAlgo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#request_signing_algo IdentityDomainsAuthenticationFactorSetting#request_signing_algo}.

---

###### `shared_secret_encoding`<sup>Required</sup> <a name="shared_secret_encoding" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putClientAppSettings.parameter.sharedSecretEncoding"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#shared_secret_encoding IdentityDomainsAuthenticationFactorSetting#shared_secret_encoding}.

---

###### `unlock_app_for_each_request_enabled`<sup>Required</sup> <a name="unlock_app_for_each_request_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putClientAppSettings.parameter.unlockAppForEachRequestEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#unlock_app_for_each_request_enabled IdentityDomainsAuthenticationFactorSetting#unlock_app_for_each_request_enabled}.

---

###### `unlock_app_interval_in_secs`<sup>Required</sup> <a name="unlock_app_interval_in_secs" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putClientAppSettings.parameter.unlockAppIntervalInSecs"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#unlock_app_interval_in_secs IdentityDomainsAuthenticationFactorSetting#unlock_app_interval_in_secs}.

---

###### `unlock_on_app_foreground_enabled`<sup>Required</sup> <a name="unlock_on_app_foreground_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putClientAppSettings.parameter.unlockOnAppForegroundEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#unlock_on_app_foreground_enabled IdentityDomainsAuthenticationFactorSetting#unlock_on_app_foreground_enabled}.

---

###### `unlock_on_app_start_enabled`<sup>Required</sup> <a name="unlock_on_app_start_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putClientAppSettings.parameter.unlockOnAppStartEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#unlock_on_app_start_enabled IdentityDomainsAuthenticationFactorSetting#unlock_on_app_start_enabled}.

---

##### `put_compliance_policy` <a name="put_compliance_policy" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putCompliancePolicy"></a>

```python
def put_compliance_policy(
  value: typing.Union[IResolvable, typing.List[IdentityDomainsAuthenticationFactorSettingCompliancePolicy]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putCompliancePolicy.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicy">IdentityDomainsAuthenticationFactorSettingCompliancePolicy</a>]]

---

##### `put_email_settings` <a name="put_email_settings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putEmailSettings"></a>

```python
def put_email_settings(
  email_link_enabled: typing.Union[bool, IResolvable],
  email_link_custom_url: str = None
) -> None
```

###### `email_link_enabled`<sup>Required</sup> <a name="email_link_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putEmailSettings.parameter.emailLinkEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#email_link_enabled IdentityDomainsAuthenticationFactorSetting#email_link_enabled}.

---

###### `email_link_custom_url`<sup>Optional</sup> <a name="email_link_custom_url" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putEmailSettings.parameter.emailLinkCustomUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#email_link_custom_url IdentityDomainsAuthenticationFactorSetting#email_link_custom_url}.

---

##### `put_endpoint_restrictions` <a name="put_endpoint_restrictions" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putEndpointRestrictions"></a>

```python
def put_endpoint_restrictions(
  max_endpoint_trust_duration_in_days: typing.Union[int, float],
  max_enrolled_devices: typing.Union[int, float],
  max_incorrect_attempts: typing.Union[int, float],
  max_trusted_endpoints: typing.Union[int, float],
  trusted_endpoints_enabled: typing.Union[bool, IResolvable]
) -> None
```

###### `max_endpoint_trust_duration_in_days`<sup>Required</sup> <a name="max_endpoint_trust_duration_in_days" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putEndpointRestrictions.parameter.maxEndpointTrustDurationInDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#max_endpoint_trust_duration_in_days IdentityDomainsAuthenticationFactorSetting#max_endpoint_trust_duration_in_days}.

---

###### `max_enrolled_devices`<sup>Required</sup> <a name="max_enrolled_devices" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putEndpointRestrictions.parameter.maxEnrolledDevices"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#max_enrolled_devices IdentityDomainsAuthenticationFactorSetting#max_enrolled_devices}.

---

###### `max_incorrect_attempts`<sup>Required</sup> <a name="max_incorrect_attempts" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putEndpointRestrictions.parameter.maxIncorrectAttempts"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#max_incorrect_attempts IdentityDomainsAuthenticationFactorSetting#max_incorrect_attempts}.

---

###### `max_trusted_endpoints`<sup>Required</sup> <a name="max_trusted_endpoints" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putEndpointRestrictions.parameter.maxTrustedEndpoints"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#max_trusted_endpoints IdentityDomainsAuthenticationFactorSetting#max_trusted_endpoints}.

---

###### `trusted_endpoints_enabled`<sup>Required</sup> <a name="trusted_endpoints_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putEndpointRestrictions.parameter.trustedEndpointsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#trusted_endpoints_enabled IdentityDomainsAuthenticationFactorSetting#trusted_endpoints_enabled}.

---

##### `put_identity_store_settings` <a name="put_identity_store_settings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putIdentityStoreSettings"></a>

```python
def put_identity_store_settings(
  mobile_number_enabled: typing.Union[bool, IResolvable] = None,
  mobile_number_update_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `mobile_number_enabled`<sup>Optional</sup> <a name="mobile_number_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putIdentityStoreSettings.parameter.mobileNumberEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#mobile_number_enabled IdentityDomainsAuthenticationFactorSetting#mobile_number_enabled}.

---

###### `mobile_number_update_enabled`<sup>Optional</sup> <a name="mobile_number_update_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putIdentityStoreSettings.parameter.mobileNumberUpdateEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#mobile_number_update_enabled IdentityDomainsAuthenticationFactorSetting#mobile_number_update_enabled}.

---

##### `put_notification_settings` <a name="put_notification_settings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putNotificationSettings"></a>

```python
def put_notification_settings(
  pull_enabled: typing.Union[bool, IResolvable]
) -> None
```

###### `pull_enabled`<sup>Required</sup> <a name="pull_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putNotificationSettings.parameter.pullEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#pull_enabled IdentityDomainsAuthenticationFactorSetting#pull_enabled}.

---

##### `put_tags` <a name="put_tags" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putTags"></a>

```python
def put_tags(
  value: typing.Union[IResolvable, typing.List[IdentityDomainsAuthenticationFactorSettingTags]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putTags.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTags">IdentityDomainsAuthenticationFactorSettingTags</a>]]

---

##### `put_third_party_factor` <a name="put_third_party_factor" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putThirdPartyFactor"></a>

```python
def put_third_party_factor(
  duo_security: typing.Union[bool, IResolvable]
) -> None
```

###### `duo_security`<sup>Required</sup> <a name="duo_security" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putThirdPartyFactor.parameter.duoSecurity"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#duo_security IdentityDomainsAuthenticationFactorSetting#duo_security}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#create IdentityDomainsAuthenticationFactorSetting#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#delete IdentityDomainsAuthenticationFactorSetting#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#update IdentityDomainsAuthenticationFactorSetting#update}.

---

##### `put_totp_settings` <a name="put_totp_settings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putTotpSettings"></a>

```python
def put_totp_settings(
  email_otp_validity_duration_in_mins: typing.Union[int, float],
  email_passcode_length: typing.Union[int, float],
  hashing_algorithm: str,
  jwt_validity_duration_in_secs: typing.Union[int, float],
  key_refresh_interval_in_days: typing.Union[int, float],
  passcode_length: typing.Union[int, float],
  sms_otp_validity_duration_in_mins: typing.Union[int, float],
  sms_passcode_length: typing.Union[int, float],
  time_step_in_secs: typing.Union[int, float],
  time_step_tolerance: typing.Union[int, float]
) -> None
```

###### `email_otp_validity_duration_in_mins`<sup>Required</sup> <a name="email_otp_validity_duration_in_mins" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putTotpSettings.parameter.emailOtpValidityDurationInMins"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#email_otp_validity_duration_in_mins IdentityDomainsAuthenticationFactorSetting#email_otp_validity_duration_in_mins}.

---

###### `email_passcode_length`<sup>Required</sup> <a name="email_passcode_length" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putTotpSettings.parameter.emailPasscodeLength"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#email_passcode_length IdentityDomainsAuthenticationFactorSetting#email_passcode_length}.

---

###### `hashing_algorithm`<sup>Required</sup> <a name="hashing_algorithm" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putTotpSettings.parameter.hashingAlgorithm"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#hashing_algorithm IdentityDomainsAuthenticationFactorSetting#hashing_algorithm}.

---

###### `jwt_validity_duration_in_secs`<sup>Required</sup> <a name="jwt_validity_duration_in_secs" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putTotpSettings.parameter.jwtValidityDurationInSecs"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#jwt_validity_duration_in_secs IdentityDomainsAuthenticationFactorSetting#jwt_validity_duration_in_secs}.

---

###### `key_refresh_interval_in_days`<sup>Required</sup> <a name="key_refresh_interval_in_days" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putTotpSettings.parameter.keyRefreshIntervalInDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#key_refresh_interval_in_days IdentityDomainsAuthenticationFactorSetting#key_refresh_interval_in_days}.

---

###### `passcode_length`<sup>Required</sup> <a name="passcode_length" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putTotpSettings.parameter.passcodeLength"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#passcode_length IdentityDomainsAuthenticationFactorSetting#passcode_length}.

---

###### `sms_otp_validity_duration_in_mins`<sup>Required</sup> <a name="sms_otp_validity_duration_in_mins" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putTotpSettings.parameter.smsOtpValidityDurationInMins"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#sms_otp_validity_duration_in_mins IdentityDomainsAuthenticationFactorSetting#sms_otp_validity_duration_in_mins}.

---

###### `sms_passcode_length`<sup>Required</sup> <a name="sms_passcode_length" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putTotpSettings.parameter.smsPasscodeLength"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#sms_passcode_length IdentityDomainsAuthenticationFactorSetting#sms_passcode_length}.

---

###### `time_step_in_secs`<sup>Required</sup> <a name="time_step_in_secs" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putTotpSettings.parameter.timeStepInSecs"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#time_step_in_secs IdentityDomainsAuthenticationFactorSetting#time_step_in_secs}.

---

###### `time_step_tolerance`<sup>Required</sup> <a name="time_step_tolerance" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putTotpSettings.parameter.timeStepTolerance"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#time_step_tolerance IdentityDomainsAuthenticationFactorSetting#time_step_tolerance}.

---

##### `put_urnietfparamsscimschemasoracleidcsextensionfido_authentication_factor_settings` <a name="put_urnietfparamsscimschemasoracleidcsextensionfido_authentication_factor_settings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings"></a>

```python
def put_urnietfparamsscimschemasoracleidcsextensionfido_authentication_factor_settings(
  attestation: str,
  authenticator_selection_attachment: str,
  authenticator_selection_require_resident_key: typing.Union[bool, IResolvable],
  authenticator_selection_resident_key: str,
  authenticator_selection_user_verification: str,
  exclude_credentials: typing.Union[bool, IResolvable],
  public_key_types: typing.List[str],
  timeout: typing.Union[int, float],
  domain_validation_level: typing.Union[int, float] = None
) -> None
```

###### `attestation`<sup>Required</sup> <a name="attestation" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.parameter.attestation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#attestation IdentityDomainsAuthenticationFactorSetting#attestation}.

---

###### `authenticator_selection_attachment`<sup>Required</sup> <a name="authenticator_selection_attachment" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.parameter.authenticatorSelectionAttachment"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#authenticator_selection_attachment IdentityDomainsAuthenticationFactorSetting#authenticator_selection_attachment}.

---

###### `authenticator_selection_require_resident_key`<sup>Required</sup> <a name="authenticator_selection_require_resident_key" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.parameter.authenticatorSelectionRequireResidentKey"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#authenticator_selection_require_resident_key IdentityDomainsAuthenticationFactorSetting#authenticator_selection_require_resident_key}.

---

###### `authenticator_selection_resident_key`<sup>Required</sup> <a name="authenticator_selection_resident_key" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.parameter.authenticatorSelectionResidentKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#authenticator_selection_resident_key IdentityDomainsAuthenticationFactorSetting#authenticator_selection_resident_key}.

---

###### `authenticator_selection_user_verification`<sup>Required</sup> <a name="authenticator_selection_user_verification" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.parameter.authenticatorSelectionUserVerification"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#authenticator_selection_user_verification IdentityDomainsAuthenticationFactorSetting#authenticator_selection_user_verification}.

---

###### `exclude_credentials`<sup>Required</sup> <a name="exclude_credentials" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.parameter.excludeCredentials"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#exclude_credentials IdentityDomainsAuthenticationFactorSetting#exclude_credentials}.

---

###### `public_key_types`<sup>Required</sup> <a name="public_key_types" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.parameter.publicKeyTypes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#public_key_types IdentityDomainsAuthenticationFactorSetting#public_key_types}.

---

###### `timeout`<sup>Required</sup> <a name="timeout" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.parameter.timeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#timeout IdentityDomainsAuthenticationFactorSetting#timeout}.

---

###### `domain_validation_level`<sup>Optional</sup> <a name="domain_validation_level" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.parameter.domainValidationLevel"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#domain_validation_level IdentityDomainsAuthenticationFactorSetting#domain_validation_level}.

---

##### `put_urnietfparamsscimschemasoracleidcsextensionthird_party_authentication_factor_settings` <a name="put_urnietfparamsscimschemasoracleidcsextensionthird_party_authentication_factor_settings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings"></a>

```python
def put_urnietfparamsscimschemasoracleidcsextensionthird_party_authentication_factor_settings(
  duo_security_settings: IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings = None
) -> None
```

###### `duo_security_settings`<sup>Optional</sup> <a name="duo_security_settings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings.parameter.duoSecuritySettings"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings</a>

duo_security_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#duo_security_settings IdentityDomainsAuthenticationFactorSetting#duo_security_settings}

---

##### `reset_attributes` <a name="reset_attributes" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetAttributes"></a>

```python
def reset_attributes() -> None
```

##### `reset_attribute_sets` <a name="reset_attribute_sets" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetAttributeSets"></a>

```python
def reset_attribute_sets() -> None
```

##### `reset_authorization` <a name="reset_authorization" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetAuthorization"></a>

```python
def reset_authorization() -> None
```

##### `reset_auto_enroll_email_factor_disabled` <a name="reset_auto_enroll_email_factor_disabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetAutoEnrollEmailFactorDisabled"></a>

```python
def reset_auto_enroll_email_factor_disabled() -> None
```

##### `reset_email_enabled` <a name="reset_email_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetEmailEnabled"></a>

```python
def reset_email_enabled() -> None
```

##### `reset_email_settings` <a name="reset_email_settings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetEmailSettings"></a>

```python
def reset_email_settings() -> None
```

##### `reset_fido_authenticator_enabled` <a name="reset_fido_authenticator_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetFidoAuthenticatorEnabled"></a>

```python
def reset_fido_authenticator_enabled() -> None
```

##### `reset_hide_backup_factor_enabled` <a name="reset_hide_backup_factor_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetHideBackupFactorEnabled"></a>

```python
def reset_hide_backup_factor_enabled() -> None
```

##### `reset_identity_store_settings` <a name="reset_identity_store_settings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetIdentityStoreSettings"></a>

```python
def reset_identity_store_settings() -> None
```

##### `reset_ocid` <a name="reset_ocid" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetOcid"></a>

```python
def reset_ocid() -> None
```

##### `reset_phone_call_enabled` <a name="reset_phone_call_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetPhoneCallEnabled"></a>

```python
def reset_phone_call_enabled() -> None
```

##### `reset_resource_type_schema_version` <a name="reset_resource_type_schema_version" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetResourceTypeSchemaVersion"></a>

```python
def reset_resource_type_schema_version() -> None
```

##### `reset_tags` <a name="reset_tags" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_third_party_factor` <a name="reset_third_party_factor" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetThirdPartyFactor"></a>

```python
def reset_third_party_factor() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_urnietfparamsscimschemasoracleidcsextensionfido_authentication_factor_settings` <a name="reset_urnietfparamsscimschemasoracleidcsextensionfido_authentication_factor_settings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings"></a>

```python
def reset_urnietfparamsscimschemasoracleidcsextensionfido_authentication_factor_settings() -> None
```

##### `reset_urnietfparamsscimschemasoracleidcsextensionthird_party_authentication_factor_settings` <a name="reset_urnietfparamsscimschemasoracleidcsextensionthird_party_authentication_factor_settings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings"></a>

```python
def reset_urnietfparamsscimschemasoracleidcsextensionthird_party_authentication_factor_settings() -> None
```

##### `reset_user_enrollment_disabled_factors` <a name="reset_user_enrollment_disabled_factors" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetUserEnrollmentDisabledFactors"></a>

```python
def reset_user_enrollment_disabled_factors() -> None
```

##### `reset_yubico_otp_enabled` <a name="reset_yubico_otp_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetYubicoOtpEnabled"></a>

```python
def reset_yubico_otp_enabled() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IdentityDomainsAuthenticationFactorSetting resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_authentication_factor_setting

identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_authentication_factor_setting

identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_authentication_factor_setting

identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_authentication_factor_setting

identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IdentityDomainsAuthenticationFactorSetting resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IdentityDomainsAuthenticationFactorSetting to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IdentityDomainsAuthenticationFactorSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IdentityDomainsAuthenticationFactorSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.bypassCodeSettings">bypass_code_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference">IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.clientAppSettings">client_app_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference">IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.compartmentOcid">compartment_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.compliancePolicy">compliance_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList">IdentityDomainsAuthenticationFactorSettingCompliancePolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.deleteInProgress">delete_in_progress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.domainOcid">domain_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.emailSettings">email_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference">IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.endpointRestrictions">endpoint_restrictions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference">IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.idcsCreatedBy">idcs_created_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList">IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.idcsLastModifiedBy">idcs_last_modified_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList">IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.idcsLastUpgradedInRelease">idcs_last_upgraded_in_release</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.idcsPreventedOperations">idcs_prevented_operations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.identityStoreSettings">identity_store_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference">IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList">IdentityDomainsAuthenticationFactorSettingMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.mfaEnabledCategory">mfa_enabled_category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.notificationSettings">notification_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference">IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList">IdentityDomainsAuthenticationFactorSettingTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.tenancyOcid">tenancy_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.thirdPartyFactor">third_party_factor</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference">IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference">IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.totpSettings">totp_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference">IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.urnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings">urnietfparamsscimschemasoracleidcsextensionfido_authentication_factor_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.urnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings">urnietfparamsscimschemasoracleidcsextensionthird_party_authentication_factor_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.attributeSetsInput">attribute_sets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.attributesInput">attributes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.authenticationFactorSettingIdInput">authentication_factor_setting_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.authorizationInput">authorization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.autoEnrollEmailFactorDisabledInput">auto_enroll_email_factor_disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.bypassCodeEnabledInput">bypass_code_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.bypassCodeSettingsInput">bypass_code_settings_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettings">IdentityDomainsAuthenticationFactorSettingBypassCodeSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.clientAppSettingsInput">client_app_settings_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings">IdentityDomainsAuthenticationFactorSettingClientAppSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.compliancePolicyInput">compliance_policy_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicy">IdentityDomainsAuthenticationFactorSettingCompliancePolicy</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.emailEnabledInput">email_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.emailSettingsInput">email_settings_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettings">IdentityDomainsAuthenticationFactorSettingEmailSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.endpointRestrictionsInput">endpoint_restrictions_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictions">IdentityDomainsAuthenticationFactorSettingEndpointRestrictions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.fidoAuthenticatorEnabledInput">fido_authenticator_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.hideBackupFactorEnabledInput">hide_backup_factor_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.idcsEndpointInput">idcs_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.identityStoreSettingsInput">identity_store_settings_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings">IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.mfaEnrollmentTypeInput">mfa_enrollment_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.notificationSettingsInput">notification_settings_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettings">IdentityDomainsAuthenticationFactorSettingNotificationSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.ocidInput">ocid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.phoneCallEnabledInput">phone_call_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.pushEnabledInput">push_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.resourceTypeSchemaVersionInput">resource_type_schema_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.schemasInput">schemas_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.securityQuestionsEnabledInput">security_questions_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.smsEnabledInput">sms_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.tagsInput">tags_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTags">IdentityDomainsAuthenticationFactorSettingTags</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.thirdPartyFactorInput">third_party_factor_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactor">IdentityDomainsAuthenticationFactorSettingThirdPartyFactor</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeouts">IdentityDomainsAuthenticationFactorSettingTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.totpEnabledInput">totp_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.totpSettingsInput">totp_settings_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings">IdentityDomainsAuthenticationFactorSettingTotpSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.urnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsInput">urnietfparamsscimschemasoracleidcsextensionfido_authentication_factor_settings_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.urnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsInput">urnietfparamsscimschemasoracleidcsextensionthird_party_authentication_factor_settings_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.userEnrollmentDisabledFactorsInput">user_enrollment_disabled_factors_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.yubicoOtpEnabledInput">yubico_otp_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.attributes">attributes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.authenticationFactorSettingId">authentication_factor_setting_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.autoEnrollEmailFactorDisabled">auto_enroll_email_factor_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.bypassCodeEnabled">bypass_code_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.emailEnabled">email_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.fidoAuthenticatorEnabled">fido_authenticator_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.hideBackupFactorEnabled">hide_backup_factor_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.mfaEnrollmentType">mfa_enrollment_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.phoneCallEnabled">phone_call_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.pushEnabled">push_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.securityQuestionsEnabled">security_questions_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.smsEnabled">sms_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.totpEnabled">totp_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.userEnrollmentDisabledFactors">user_enrollment_disabled_factors</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.yubicoOtpEnabled">yubico_otp_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bypass_code_settings`<sup>Required</sup> <a name="bypass_code_settings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.bypassCodeSettings"></a>

```python
bypass_code_settings: IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference">IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference</a>

---

##### `client_app_settings`<sup>Required</sup> <a name="client_app_settings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.clientAppSettings"></a>

```python
client_app_settings: IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference">IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference</a>

---

##### `compartment_ocid`<sup>Required</sup> <a name="compartment_ocid" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.compartmentOcid"></a>

```python
compartment_ocid: str
```

- *Type:* str

---

##### `compliance_policy`<sup>Required</sup> <a name="compliance_policy" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.compliancePolicy"></a>

```python
compliance_policy: IdentityDomainsAuthenticationFactorSettingCompliancePolicyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList">IdentityDomainsAuthenticationFactorSettingCompliancePolicyList</a>

---

##### `delete_in_progress`<sup>Required</sup> <a name="delete_in_progress" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.deleteInProgress"></a>

```python
delete_in_progress: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `domain_ocid`<sup>Required</sup> <a name="domain_ocid" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.domainOcid"></a>

```python
domain_ocid: str
```

- *Type:* str

---

##### `email_settings`<sup>Required</sup> <a name="email_settings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.emailSettings"></a>

```python
email_settings: IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference">IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference</a>

---

##### `endpoint_restrictions`<sup>Required</sup> <a name="endpoint_restrictions" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.endpointRestrictions"></a>

```python
endpoint_restrictions: IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference">IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_created_by`<sup>Required</sup> <a name="idcs_created_by" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.idcsCreatedBy"></a>

```python
idcs_created_by: IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList">IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList</a>

---

##### `idcs_last_modified_by`<sup>Required</sup> <a name="idcs_last_modified_by" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.idcsLastModifiedBy"></a>

```python
idcs_last_modified_by: IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList">IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList</a>

---

##### `idcs_last_upgraded_in_release`<sup>Required</sup> <a name="idcs_last_upgraded_in_release" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.idcsLastUpgradedInRelease"></a>

```python
idcs_last_upgraded_in_release: str
```

- *Type:* str

---

##### `idcs_prevented_operations`<sup>Required</sup> <a name="idcs_prevented_operations" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.idcsPreventedOperations"></a>

```python
idcs_prevented_operations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `identity_store_settings`<sup>Required</sup> <a name="identity_store_settings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.identityStoreSettings"></a>

```python
identity_store_settings: IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference">IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference</a>

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.meta"></a>

```python
meta: IdentityDomainsAuthenticationFactorSettingMetaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList">IdentityDomainsAuthenticationFactorSettingMetaList</a>

---

##### `mfa_enabled_category`<sup>Required</sup> <a name="mfa_enabled_category" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.mfaEnabledCategory"></a>

```python
mfa_enabled_category: str
```

- *Type:* str

---

##### `notification_settings`<sup>Required</sup> <a name="notification_settings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.notificationSettings"></a>

```python
notification_settings: IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference">IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.tags"></a>

```python
tags: IdentityDomainsAuthenticationFactorSettingTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList">IdentityDomainsAuthenticationFactorSettingTagsList</a>

---

##### `tenancy_ocid`<sup>Required</sup> <a name="tenancy_ocid" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.tenancyOcid"></a>

```python
tenancy_ocid: str
```

- *Type:* str

---

##### `third_party_factor`<sup>Required</sup> <a name="third_party_factor" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.thirdPartyFactor"></a>

```python
third_party_factor: IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference">IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.timeouts"></a>

```python
timeouts: IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference">IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference</a>

---

##### `totp_settings`<sup>Required</sup> <a name="totp_settings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.totpSettings"></a>

```python
totp_settings: IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference">IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference</a>

---

##### `urnietfparamsscimschemasoracleidcsextensionfido_authentication_factor_settings`<sup>Required</sup> <a name="urnietfparamsscimschemasoracleidcsextensionfido_authentication_factor_settings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.urnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings"></a>

```python
urnietfparamsscimschemasoracleidcsextensionfido_authentication_factor_settings: IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference</a>

---

##### `urnietfparamsscimschemasoracleidcsextensionthird_party_authentication_factor_settings`<sup>Required</sup> <a name="urnietfparamsscimschemasoracleidcsextensionthird_party_authentication_factor_settings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.urnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings"></a>

```python
urnietfparamsscimschemasoracleidcsextensionthird_party_authentication_factor_settings: IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference</a>

---

##### `attribute_sets_input`<sup>Optional</sup> <a name="attribute_sets_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.attributeSetsInput"></a>

```python
attribute_sets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.attributesInput"></a>

```python
attributes_input: str
```

- *Type:* str

---

##### `authentication_factor_setting_id_input`<sup>Optional</sup> <a name="authentication_factor_setting_id_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.authenticationFactorSettingIdInput"></a>

```python
authentication_factor_setting_id_input: str
```

- *Type:* str

---

##### `authorization_input`<sup>Optional</sup> <a name="authorization_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.authorizationInput"></a>

```python
authorization_input: str
```

- *Type:* str

---

##### `auto_enroll_email_factor_disabled_input`<sup>Optional</sup> <a name="auto_enroll_email_factor_disabled_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.autoEnrollEmailFactorDisabledInput"></a>

```python
auto_enroll_email_factor_disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `bypass_code_enabled_input`<sup>Optional</sup> <a name="bypass_code_enabled_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.bypassCodeEnabledInput"></a>

```python
bypass_code_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `bypass_code_settings_input`<sup>Optional</sup> <a name="bypass_code_settings_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.bypassCodeSettingsInput"></a>

```python
bypass_code_settings_input: IdentityDomainsAuthenticationFactorSettingBypassCodeSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettings">IdentityDomainsAuthenticationFactorSettingBypassCodeSettings</a>

---

##### `client_app_settings_input`<sup>Optional</sup> <a name="client_app_settings_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.clientAppSettingsInput"></a>

```python
client_app_settings_input: IdentityDomainsAuthenticationFactorSettingClientAppSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings">IdentityDomainsAuthenticationFactorSettingClientAppSettings</a>

---

##### `compliance_policy_input`<sup>Optional</sup> <a name="compliance_policy_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.compliancePolicyInput"></a>

```python
compliance_policy_input: typing.Union[IResolvable, typing.List[IdentityDomainsAuthenticationFactorSettingCompliancePolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicy">IdentityDomainsAuthenticationFactorSettingCompliancePolicy</a>]]

---

##### `email_enabled_input`<sup>Optional</sup> <a name="email_enabled_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.emailEnabledInput"></a>

```python
email_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `email_settings_input`<sup>Optional</sup> <a name="email_settings_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.emailSettingsInput"></a>

```python
email_settings_input: IdentityDomainsAuthenticationFactorSettingEmailSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettings">IdentityDomainsAuthenticationFactorSettingEmailSettings</a>

---

##### `endpoint_restrictions_input`<sup>Optional</sup> <a name="endpoint_restrictions_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.endpointRestrictionsInput"></a>

```python
endpoint_restrictions_input: IdentityDomainsAuthenticationFactorSettingEndpointRestrictions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictions">IdentityDomainsAuthenticationFactorSettingEndpointRestrictions</a>

---

##### `fido_authenticator_enabled_input`<sup>Optional</sup> <a name="fido_authenticator_enabled_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.fidoAuthenticatorEnabledInput"></a>

```python
fido_authenticator_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hide_backup_factor_enabled_input`<sup>Optional</sup> <a name="hide_backup_factor_enabled_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.hideBackupFactorEnabledInput"></a>

```python
hide_backup_factor_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `idcs_endpoint_input`<sup>Optional</sup> <a name="idcs_endpoint_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.idcsEndpointInput"></a>

```python
idcs_endpoint_input: str
```

- *Type:* str

---

##### `identity_store_settings_input`<sup>Optional</sup> <a name="identity_store_settings_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.identityStoreSettingsInput"></a>

```python
identity_store_settings_input: IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings">IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings</a>

---

##### `mfa_enrollment_type_input`<sup>Optional</sup> <a name="mfa_enrollment_type_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.mfaEnrollmentTypeInput"></a>

```python
mfa_enrollment_type_input: str
```

- *Type:* str

---

##### `notification_settings_input`<sup>Optional</sup> <a name="notification_settings_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.notificationSettingsInput"></a>

```python
notification_settings_input: IdentityDomainsAuthenticationFactorSettingNotificationSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettings">IdentityDomainsAuthenticationFactorSettingNotificationSettings</a>

---

##### `ocid_input`<sup>Optional</sup> <a name="ocid_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.ocidInput"></a>

```python
ocid_input: str
```

- *Type:* str

---

##### `phone_call_enabled_input`<sup>Optional</sup> <a name="phone_call_enabled_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.phoneCallEnabledInput"></a>

```python
phone_call_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `push_enabled_input`<sup>Optional</sup> <a name="push_enabled_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.pushEnabledInput"></a>

```python
push_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_type_schema_version_input`<sup>Optional</sup> <a name="resource_type_schema_version_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.resourceTypeSchemaVersionInput"></a>

```python
resource_type_schema_version_input: str
```

- *Type:* str

---

##### `schemas_input`<sup>Optional</sup> <a name="schemas_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.schemasInput"></a>

```python
schemas_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_questions_enabled_input`<sup>Optional</sup> <a name="security_questions_enabled_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.securityQuestionsEnabledInput"></a>

```python
security_questions_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sms_enabled_input`<sup>Optional</sup> <a name="sms_enabled_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.smsEnabledInput"></a>

```python
sms_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.tagsInput"></a>

```python
tags_input: typing.Union[IResolvable, typing.List[IdentityDomainsAuthenticationFactorSettingTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTags">IdentityDomainsAuthenticationFactorSettingTags</a>]]

---

##### `third_party_factor_input`<sup>Optional</sup> <a name="third_party_factor_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.thirdPartyFactorInput"></a>

```python
third_party_factor_input: IdentityDomainsAuthenticationFactorSettingThirdPartyFactor
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactor">IdentityDomainsAuthenticationFactorSettingThirdPartyFactor</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, IdentityDomainsAuthenticationFactorSettingTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeouts">IdentityDomainsAuthenticationFactorSettingTimeouts</a>]

---

##### `totp_enabled_input`<sup>Optional</sup> <a name="totp_enabled_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.totpEnabledInput"></a>

```python
totp_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `totp_settings_input`<sup>Optional</sup> <a name="totp_settings_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.totpSettingsInput"></a>

```python
totp_settings_input: IdentityDomainsAuthenticationFactorSettingTotpSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings">IdentityDomainsAuthenticationFactorSettingTotpSettings</a>

---

##### `urnietfparamsscimschemasoracleidcsextensionfido_authentication_factor_settings_input`<sup>Optional</sup> <a name="urnietfparamsscimschemasoracleidcsextensionfido_authentication_factor_settings_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.urnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsInput"></a>

```python
urnietfparamsscimschemasoracleidcsextensionfido_authentication_factor_settings_input: IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings</a>

---

##### `urnietfparamsscimschemasoracleidcsextensionthird_party_authentication_factor_settings_input`<sup>Optional</sup> <a name="urnietfparamsscimschemasoracleidcsextensionthird_party_authentication_factor_settings_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.urnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsInput"></a>

```python
urnietfparamsscimschemasoracleidcsextensionthird_party_authentication_factor_settings_input: IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings</a>

---

##### `user_enrollment_disabled_factors_input`<sup>Optional</sup> <a name="user_enrollment_disabled_factors_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.userEnrollmentDisabledFactorsInput"></a>

```python
user_enrollment_disabled_factors_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `yubico_otp_enabled_input`<sup>Optional</sup> <a name="yubico_otp_enabled_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.yubicoOtpEnabledInput"></a>

```python
yubico_otp_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

---

##### `attribute_sets`<sup>Required</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authentication_factor_setting_id`<sup>Required</sup> <a name="authentication_factor_setting_id" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.authenticationFactorSettingId"></a>

```python
authentication_factor_setting_id: str
```

- *Type:* str

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `auto_enroll_email_factor_disabled`<sup>Required</sup> <a name="auto_enroll_email_factor_disabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.autoEnrollEmailFactorDisabled"></a>

```python
auto_enroll_email_factor_disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `bypass_code_enabled`<sup>Required</sup> <a name="bypass_code_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.bypassCodeEnabled"></a>

```python
bypass_code_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `email_enabled`<sup>Required</sup> <a name="email_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.emailEnabled"></a>

```python
email_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `fido_authenticator_enabled`<sup>Required</sup> <a name="fido_authenticator_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.fidoAuthenticatorEnabled"></a>

```python
fido_authenticator_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hide_backup_factor_enabled`<sup>Required</sup> <a name="hide_backup_factor_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.hideBackupFactorEnabled"></a>

```python
hide_backup_factor_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

---

##### `mfa_enrollment_type`<sup>Required</sup> <a name="mfa_enrollment_type" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.mfaEnrollmentType"></a>

```python
mfa_enrollment_type: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `phone_call_enabled`<sup>Required</sup> <a name="phone_call_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.phoneCallEnabled"></a>

```python
phone_call_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `push_enabled`<sup>Required</sup> <a name="push_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.pushEnabled"></a>

```python
push_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_type_schema_version`<sup>Required</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_questions_enabled`<sup>Required</sup> <a name="security_questions_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.securityQuestionsEnabled"></a>

```python
security_questions_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sms_enabled`<sup>Required</sup> <a name="sms_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.smsEnabled"></a>

```python
sms_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `totp_enabled`<sup>Required</sup> <a name="totp_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.totpEnabled"></a>

```python
totp_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `user_enrollment_disabled_factors`<sup>Required</sup> <a name="user_enrollment_disabled_factors" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.userEnrollmentDisabledFactors"></a>

```python
user_enrollment_disabled_factors: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `yubico_otp_enabled`<sup>Required</sup> <a name="yubico_otp_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.yubicoOtpEnabled"></a>

```python
yubico_otp_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityDomainsAuthenticationFactorSettingBypassCodeSettings <a name="IdentityDomainsAuthenticationFactorSettingBypassCodeSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_authentication_factor_setting

identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettings(
  help_desk_code_expiry_in_mins: typing.Union[int, float],
  help_desk_generation_enabled: typing.Union[bool, IResolvable],
  help_desk_max_usage: typing.Union[int, float],
  length: typing.Union[int, float],
  max_active: typing.Union[int, float],
  self_service_generation_enabled: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettings.property.helpDeskCodeExpiryInMins">help_desk_code_expiry_in_mins</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#help_desk_code_expiry_in_mins IdentityDomainsAuthenticationFactorSetting#help_desk_code_expiry_in_mins}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettings.property.helpDeskGenerationEnabled">help_desk_generation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#help_desk_generation_enabled IdentityDomainsAuthenticationFactorSetting#help_desk_generation_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettings.property.helpDeskMaxUsage">help_desk_max_usage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#help_desk_max_usage IdentityDomainsAuthenticationFactorSetting#help_desk_max_usage}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettings.property.length">length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#length IdentityDomainsAuthenticationFactorSetting#length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettings.property.maxActive">max_active</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#max_active IdentityDomainsAuthenticationFactorSetting#max_active}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettings.property.selfServiceGenerationEnabled">self_service_generation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#self_service_generation_enabled IdentityDomainsAuthenticationFactorSetting#self_service_generation_enabled}. |

---

##### `help_desk_code_expiry_in_mins`<sup>Required</sup> <a name="help_desk_code_expiry_in_mins" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettings.property.helpDeskCodeExpiryInMins"></a>

```python
help_desk_code_expiry_in_mins: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#help_desk_code_expiry_in_mins IdentityDomainsAuthenticationFactorSetting#help_desk_code_expiry_in_mins}.

---

##### `help_desk_generation_enabled`<sup>Required</sup> <a name="help_desk_generation_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettings.property.helpDeskGenerationEnabled"></a>

```python
help_desk_generation_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#help_desk_generation_enabled IdentityDomainsAuthenticationFactorSetting#help_desk_generation_enabled}.

---

##### `help_desk_max_usage`<sup>Required</sup> <a name="help_desk_max_usage" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettings.property.helpDeskMaxUsage"></a>

```python
help_desk_max_usage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#help_desk_max_usage IdentityDomainsAuthenticationFactorSetting#help_desk_max_usage}.

---

##### `length`<sup>Required</sup> <a name="length" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettings.property.length"></a>

```python
length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#length IdentityDomainsAuthenticationFactorSetting#length}.

---

##### `max_active`<sup>Required</sup> <a name="max_active" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettings.property.maxActive"></a>

```python
max_active: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#max_active IdentityDomainsAuthenticationFactorSetting#max_active}.

---

##### `self_service_generation_enabled`<sup>Required</sup> <a name="self_service_generation_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettings.property.selfServiceGenerationEnabled"></a>

```python
self_service_generation_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#self_service_generation_enabled IdentityDomainsAuthenticationFactorSetting#self_service_generation_enabled}.

---

### IdentityDomainsAuthenticationFactorSettingClientAppSettings <a name="IdentityDomainsAuthenticationFactorSettingClientAppSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_authentication_factor_setting

identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings(
  device_protection_policy: str,
  initial_lockout_period_in_secs: typing.Union[int, float],
  key_pair_length: typing.Union[int, float],
  lockout_escalation_pattern: str,
  max_failures_before_lockout: typing.Union[int, float],
  max_failures_before_warning: typing.Union[int, float],
  max_lockout_interval_in_secs: typing.Union[int, float],
  min_pin_length: typing.Union[int, float],
  policy_update_freq_in_days: typing.Union[int, float],
  request_signing_algo: str,
  shared_secret_encoding: str,
  unlock_app_for_each_request_enabled: typing.Union[bool, IResolvable],
  unlock_app_interval_in_secs: typing.Union[int, float],
  unlock_on_app_foreground_enabled: typing.Union[bool, IResolvable],
  unlock_on_app_start_enabled: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.deviceProtectionPolicy">device_protection_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#device_protection_policy IdentityDomainsAuthenticationFactorSetting#device_protection_policy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.initialLockoutPeriodInSecs">initial_lockout_period_in_secs</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#initial_lockout_period_in_secs IdentityDomainsAuthenticationFactorSetting#initial_lockout_period_in_secs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.keyPairLength">key_pair_length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#key_pair_length IdentityDomainsAuthenticationFactorSetting#key_pair_length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.lockoutEscalationPattern">lockout_escalation_pattern</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#lockout_escalation_pattern IdentityDomainsAuthenticationFactorSetting#lockout_escalation_pattern}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.maxFailuresBeforeLockout">max_failures_before_lockout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#max_failures_before_lockout IdentityDomainsAuthenticationFactorSetting#max_failures_before_lockout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.maxFailuresBeforeWarning">max_failures_before_warning</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#max_failures_before_warning IdentityDomainsAuthenticationFactorSetting#max_failures_before_warning}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.maxLockoutIntervalInSecs">max_lockout_interval_in_secs</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#max_lockout_interval_in_secs IdentityDomainsAuthenticationFactorSetting#max_lockout_interval_in_secs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.minPinLength">min_pin_length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#min_pin_length IdentityDomainsAuthenticationFactorSetting#min_pin_length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.policyUpdateFreqInDays">policy_update_freq_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#policy_update_freq_in_days IdentityDomainsAuthenticationFactorSetting#policy_update_freq_in_days}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.requestSigningAlgo">request_signing_algo</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#request_signing_algo IdentityDomainsAuthenticationFactorSetting#request_signing_algo}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.sharedSecretEncoding">shared_secret_encoding</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#shared_secret_encoding IdentityDomainsAuthenticationFactorSetting#shared_secret_encoding}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.unlockAppForEachRequestEnabled">unlock_app_for_each_request_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#unlock_app_for_each_request_enabled IdentityDomainsAuthenticationFactorSetting#unlock_app_for_each_request_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.unlockAppIntervalInSecs">unlock_app_interval_in_secs</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#unlock_app_interval_in_secs IdentityDomainsAuthenticationFactorSetting#unlock_app_interval_in_secs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.unlockOnAppForegroundEnabled">unlock_on_app_foreground_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#unlock_on_app_foreground_enabled IdentityDomainsAuthenticationFactorSetting#unlock_on_app_foreground_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.unlockOnAppStartEnabled">unlock_on_app_start_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#unlock_on_app_start_enabled IdentityDomainsAuthenticationFactorSetting#unlock_on_app_start_enabled}. |

---

##### `device_protection_policy`<sup>Required</sup> <a name="device_protection_policy" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.deviceProtectionPolicy"></a>

```python
device_protection_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#device_protection_policy IdentityDomainsAuthenticationFactorSetting#device_protection_policy}.

---

##### `initial_lockout_period_in_secs`<sup>Required</sup> <a name="initial_lockout_period_in_secs" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.initialLockoutPeriodInSecs"></a>

```python
initial_lockout_period_in_secs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#initial_lockout_period_in_secs IdentityDomainsAuthenticationFactorSetting#initial_lockout_period_in_secs}.

---

##### `key_pair_length`<sup>Required</sup> <a name="key_pair_length" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.keyPairLength"></a>

```python
key_pair_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#key_pair_length IdentityDomainsAuthenticationFactorSetting#key_pair_length}.

---

##### `lockout_escalation_pattern`<sup>Required</sup> <a name="lockout_escalation_pattern" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.lockoutEscalationPattern"></a>

```python
lockout_escalation_pattern: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#lockout_escalation_pattern IdentityDomainsAuthenticationFactorSetting#lockout_escalation_pattern}.

---

##### `max_failures_before_lockout`<sup>Required</sup> <a name="max_failures_before_lockout" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.maxFailuresBeforeLockout"></a>

```python
max_failures_before_lockout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#max_failures_before_lockout IdentityDomainsAuthenticationFactorSetting#max_failures_before_lockout}.

---

##### `max_failures_before_warning`<sup>Required</sup> <a name="max_failures_before_warning" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.maxFailuresBeforeWarning"></a>

```python
max_failures_before_warning: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#max_failures_before_warning IdentityDomainsAuthenticationFactorSetting#max_failures_before_warning}.

---

##### `max_lockout_interval_in_secs`<sup>Required</sup> <a name="max_lockout_interval_in_secs" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.maxLockoutIntervalInSecs"></a>

```python
max_lockout_interval_in_secs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#max_lockout_interval_in_secs IdentityDomainsAuthenticationFactorSetting#max_lockout_interval_in_secs}.

---

##### `min_pin_length`<sup>Required</sup> <a name="min_pin_length" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.minPinLength"></a>

```python
min_pin_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#min_pin_length IdentityDomainsAuthenticationFactorSetting#min_pin_length}.

---

##### `policy_update_freq_in_days`<sup>Required</sup> <a name="policy_update_freq_in_days" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.policyUpdateFreqInDays"></a>

```python
policy_update_freq_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#policy_update_freq_in_days IdentityDomainsAuthenticationFactorSetting#policy_update_freq_in_days}.

---

##### `request_signing_algo`<sup>Required</sup> <a name="request_signing_algo" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.requestSigningAlgo"></a>

```python
request_signing_algo: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#request_signing_algo IdentityDomainsAuthenticationFactorSetting#request_signing_algo}.

---

##### `shared_secret_encoding`<sup>Required</sup> <a name="shared_secret_encoding" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.sharedSecretEncoding"></a>

```python
shared_secret_encoding: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#shared_secret_encoding IdentityDomainsAuthenticationFactorSetting#shared_secret_encoding}.

---

##### `unlock_app_for_each_request_enabled`<sup>Required</sup> <a name="unlock_app_for_each_request_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.unlockAppForEachRequestEnabled"></a>

```python
unlock_app_for_each_request_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#unlock_app_for_each_request_enabled IdentityDomainsAuthenticationFactorSetting#unlock_app_for_each_request_enabled}.

---

##### `unlock_app_interval_in_secs`<sup>Required</sup> <a name="unlock_app_interval_in_secs" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.unlockAppIntervalInSecs"></a>

```python
unlock_app_interval_in_secs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#unlock_app_interval_in_secs IdentityDomainsAuthenticationFactorSetting#unlock_app_interval_in_secs}.

---

##### `unlock_on_app_foreground_enabled`<sup>Required</sup> <a name="unlock_on_app_foreground_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.unlockOnAppForegroundEnabled"></a>

```python
unlock_on_app_foreground_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#unlock_on_app_foreground_enabled IdentityDomainsAuthenticationFactorSetting#unlock_on_app_foreground_enabled}.

---

##### `unlock_on_app_start_enabled`<sup>Required</sup> <a name="unlock_on_app_start_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.unlockOnAppStartEnabled"></a>

```python
unlock_on_app_start_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#unlock_on_app_start_enabled IdentityDomainsAuthenticationFactorSetting#unlock_on_app_start_enabled}.

---

### IdentityDomainsAuthenticationFactorSettingCompliancePolicy <a name="IdentityDomainsAuthenticationFactorSettingCompliancePolicy" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_authentication_factor_setting

identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicy(
  action: str,
  name: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicy.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#action IdentityDomainsAuthenticationFactorSetting#action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicy.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#name IdentityDomainsAuthenticationFactorSetting#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicy.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#value IdentityDomainsAuthenticationFactorSetting#value}. |

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicy.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#action IdentityDomainsAuthenticationFactorSetting#action}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicy.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#name IdentityDomainsAuthenticationFactorSetting#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicy.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#value IdentityDomainsAuthenticationFactorSetting#value}.

---

### IdentityDomainsAuthenticationFactorSettingConfig <a name="IdentityDomainsAuthenticationFactorSettingConfig" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_authentication_factor_setting

identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  authentication_factor_setting_id: str,
  bypass_code_enabled: typing.Union[bool, IResolvable],
  bypass_code_settings: IdentityDomainsAuthenticationFactorSettingBypassCodeSettings,
  client_app_settings: IdentityDomainsAuthenticationFactorSettingClientAppSettings,
  compliance_policy: typing.Union[IResolvable, typing.List[IdentityDomainsAuthenticationFactorSettingCompliancePolicy]],
  endpoint_restrictions: IdentityDomainsAuthenticationFactorSettingEndpointRestrictions,
  idcs_endpoint: str,
  mfa_enrollment_type: str,
  notification_settings: IdentityDomainsAuthenticationFactorSettingNotificationSettings,
  push_enabled: typing.Union[bool, IResolvable],
  schemas: typing.List[str],
  security_questions_enabled: typing.Union[bool, IResolvable],
  sms_enabled: typing.Union[bool, IResolvable],
  totp_enabled: typing.Union[bool, IResolvable],
  totp_settings: IdentityDomainsAuthenticationFactorSettingTotpSettings,
  attributes: str = None,
  attribute_sets: typing.List[str] = None,
  authorization: str = None,
  auto_enroll_email_factor_disabled: typing.Union[bool, IResolvable] = None,
  email_enabled: typing.Union[bool, IResolvable] = None,
  email_settings: IdentityDomainsAuthenticationFactorSettingEmailSettings = None,
  fido_authenticator_enabled: typing.Union[bool, IResolvable] = None,
  hide_backup_factor_enabled: typing.Union[bool, IResolvable] = None,
  identity_store_settings: IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings = None,
  ocid: str = None,
  phone_call_enabled: typing.Union[bool, IResolvable] = None,
  resource_type_schema_version: str = None,
  tags: typing.Union[IResolvable, typing.List[IdentityDomainsAuthenticationFactorSettingTags]] = None,
  third_party_factor: IdentityDomainsAuthenticationFactorSettingThirdPartyFactor = None,
  timeouts: IdentityDomainsAuthenticationFactorSettingTimeouts = None,
  urnietfparamsscimschemasoracleidcsextensionfido_authentication_factor_settings: IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings = None,
  urnietfparamsscimschemasoracleidcsextensionthird_party_authentication_factor_settings: IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings = None,
  user_enrollment_disabled_factors: typing.List[str] = None,
  yubico_otp_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.authenticationFactorSettingId">authentication_factor_setting_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#authentication_factor_setting_id IdentityDomainsAuthenticationFactorSetting#authentication_factor_setting_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.bypassCodeEnabled">bypass_code_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#bypass_code_enabled IdentityDomainsAuthenticationFactorSetting#bypass_code_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.bypassCodeSettings">bypass_code_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettings">IdentityDomainsAuthenticationFactorSettingBypassCodeSettings</a></code> | bypass_code_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.clientAppSettings">client_app_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings">IdentityDomainsAuthenticationFactorSettingClientAppSettings</a></code> | client_app_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.compliancePolicy">compliance_policy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicy">IdentityDomainsAuthenticationFactorSettingCompliancePolicy</a>]]</code> | compliance_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.endpointRestrictions">endpoint_restrictions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictions">IdentityDomainsAuthenticationFactorSettingEndpointRestrictions</a></code> | endpoint_restrictions block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#idcs_endpoint IdentityDomainsAuthenticationFactorSetting#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.mfaEnrollmentType">mfa_enrollment_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#mfa_enrollment_type IdentityDomainsAuthenticationFactorSetting#mfa_enrollment_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.notificationSettings">notification_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettings">IdentityDomainsAuthenticationFactorSettingNotificationSettings</a></code> | notification_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.pushEnabled">push_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#push_enabled IdentityDomainsAuthenticationFactorSetting#push_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#schemas IdentityDomainsAuthenticationFactorSetting#schemas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.securityQuestionsEnabled">security_questions_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#security_questions_enabled IdentityDomainsAuthenticationFactorSetting#security_questions_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.smsEnabled">sms_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#sms_enabled IdentityDomainsAuthenticationFactorSetting#sms_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.totpEnabled">totp_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#totp_enabled IdentityDomainsAuthenticationFactorSetting#totp_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.totpSettings">totp_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings">IdentityDomainsAuthenticationFactorSettingTotpSettings</a></code> | totp_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.attributes">attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#attributes IdentityDomainsAuthenticationFactorSetting#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#attribute_sets IdentityDomainsAuthenticationFactorSetting#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#authorization IdentityDomainsAuthenticationFactorSetting#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.autoEnrollEmailFactorDisabled">auto_enroll_email_factor_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#auto_enroll_email_factor_disabled IdentityDomainsAuthenticationFactorSetting#auto_enroll_email_factor_disabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.emailEnabled">email_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#email_enabled IdentityDomainsAuthenticationFactorSetting#email_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.emailSettings">email_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettings">IdentityDomainsAuthenticationFactorSettingEmailSettings</a></code> | email_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.fidoAuthenticatorEnabled">fido_authenticator_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#fido_authenticator_enabled IdentityDomainsAuthenticationFactorSetting#fido_authenticator_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.hideBackupFactorEnabled">hide_backup_factor_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#hide_backup_factor_enabled IdentityDomainsAuthenticationFactorSetting#hide_backup_factor_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.identityStoreSettings">identity_store_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings">IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings</a></code> | identity_store_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.ocid">ocid</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#ocid IdentityDomainsAuthenticationFactorSetting#ocid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.phoneCallEnabled">phone_call_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#phone_call_enabled IdentityDomainsAuthenticationFactorSetting#phone_call_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#resource_type_schema_version IdentityDomainsAuthenticationFactorSetting#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.tags">tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTags">IdentityDomainsAuthenticationFactorSettingTags</a>]]</code> | tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.thirdPartyFactor">third_party_factor</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactor">IdentityDomainsAuthenticationFactorSettingThirdPartyFactor</a></code> | third_party_factor block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeouts">IdentityDomainsAuthenticationFactorSettingTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.urnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings">urnietfparamsscimschemasoracleidcsextensionfido_authentication_factor_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings</a></code> | urnietfparamsscimschemasoracleidcsextensionfido_authentication_factor_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.urnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings">urnietfparamsscimschemasoracleidcsextensionthird_party_authentication_factor_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings</a></code> | urnietfparamsscimschemasoracleidcsextensionthird_party_authentication_factor_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.userEnrollmentDisabledFactors">user_enrollment_disabled_factors</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#user_enrollment_disabled_factors IdentityDomainsAuthenticationFactorSetting#user_enrollment_disabled_factors}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.yubicoOtpEnabled">yubico_otp_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#yubico_otp_enabled IdentityDomainsAuthenticationFactorSetting#yubico_otp_enabled}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `authentication_factor_setting_id`<sup>Required</sup> <a name="authentication_factor_setting_id" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.authenticationFactorSettingId"></a>

```python
authentication_factor_setting_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#authentication_factor_setting_id IdentityDomainsAuthenticationFactorSetting#authentication_factor_setting_id}.

---

##### `bypass_code_enabled`<sup>Required</sup> <a name="bypass_code_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.bypassCodeEnabled"></a>

```python
bypass_code_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#bypass_code_enabled IdentityDomainsAuthenticationFactorSetting#bypass_code_enabled}.

---

##### `bypass_code_settings`<sup>Required</sup> <a name="bypass_code_settings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.bypassCodeSettings"></a>

```python
bypass_code_settings: IdentityDomainsAuthenticationFactorSettingBypassCodeSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettings">IdentityDomainsAuthenticationFactorSettingBypassCodeSettings</a>

bypass_code_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#bypass_code_settings IdentityDomainsAuthenticationFactorSetting#bypass_code_settings}

---

##### `client_app_settings`<sup>Required</sup> <a name="client_app_settings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.clientAppSettings"></a>

```python
client_app_settings: IdentityDomainsAuthenticationFactorSettingClientAppSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings">IdentityDomainsAuthenticationFactorSettingClientAppSettings</a>

client_app_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#client_app_settings IdentityDomainsAuthenticationFactorSetting#client_app_settings}

---

##### `compliance_policy`<sup>Required</sup> <a name="compliance_policy" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.compliancePolicy"></a>

```python
compliance_policy: typing.Union[IResolvable, typing.List[IdentityDomainsAuthenticationFactorSettingCompliancePolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicy">IdentityDomainsAuthenticationFactorSettingCompliancePolicy</a>]]

compliance_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#compliance_policy IdentityDomainsAuthenticationFactorSetting#compliance_policy}

---

##### `endpoint_restrictions`<sup>Required</sup> <a name="endpoint_restrictions" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.endpointRestrictions"></a>

```python
endpoint_restrictions: IdentityDomainsAuthenticationFactorSettingEndpointRestrictions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictions">IdentityDomainsAuthenticationFactorSettingEndpointRestrictions</a>

endpoint_restrictions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#endpoint_restrictions IdentityDomainsAuthenticationFactorSetting#endpoint_restrictions}

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#idcs_endpoint IdentityDomainsAuthenticationFactorSetting#idcs_endpoint}.

---

##### `mfa_enrollment_type`<sup>Required</sup> <a name="mfa_enrollment_type" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.mfaEnrollmentType"></a>

```python
mfa_enrollment_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#mfa_enrollment_type IdentityDomainsAuthenticationFactorSetting#mfa_enrollment_type}.

---

##### `notification_settings`<sup>Required</sup> <a name="notification_settings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.notificationSettings"></a>

```python
notification_settings: IdentityDomainsAuthenticationFactorSettingNotificationSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettings">IdentityDomainsAuthenticationFactorSettingNotificationSettings</a>

notification_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#notification_settings IdentityDomainsAuthenticationFactorSetting#notification_settings}

---

##### `push_enabled`<sup>Required</sup> <a name="push_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.pushEnabled"></a>

```python
push_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#push_enabled IdentityDomainsAuthenticationFactorSetting#push_enabled}.

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#schemas IdentityDomainsAuthenticationFactorSetting#schemas}.

---

##### `security_questions_enabled`<sup>Required</sup> <a name="security_questions_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.securityQuestionsEnabled"></a>

```python
security_questions_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#security_questions_enabled IdentityDomainsAuthenticationFactorSetting#security_questions_enabled}.

---

##### `sms_enabled`<sup>Required</sup> <a name="sms_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.smsEnabled"></a>

```python
sms_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#sms_enabled IdentityDomainsAuthenticationFactorSetting#sms_enabled}.

---

##### `totp_enabled`<sup>Required</sup> <a name="totp_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.totpEnabled"></a>

```python
totp_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#totp_enabled IdentityDomainsAuthenticationFactorSetting#totp_enabled}.

---

##### `totp_settings`<sup>Required</sup> <a name="totp_settings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.totpSettings"></a>

```python
totp_settings: IdentityDomainsAuthenticationFactorSettingTotpSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings">IdentityDomainsAuthenticationFactorSettingTotpSettings</a>

totp_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#totp_settings IdentityDomainsAuthenticationFactorSetting#totp_settings}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#attributes IdentityDomainsAuthenticationFactorSetting#attributes}.

---

##### `attribute_sets`<sup>Optional</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#attribute_sets IdentityDomainsAuthenticationFactorSetting#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#authorization IdentityDomainsAuthenticationFactorSetting#authorization}.

---

##### `auto_enroll_email_factor_disabled`<sup>Optional</sup> <a name="auto_enroll_email_factor_disabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.autoEnrollEmailFactorDisabled"></a>

```python
auto_enroll_email_factor_disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#auto_enroll_email_factor_disabled IdentityDomainsAuthenticationFactorSetting#auto_enroll_email_factor_disabled}.

---

##### `email_enabled`<sup>Optional</sup> <a name="email_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.emailEnabled"></a>

```python
email_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#email_enabled IdentityDomainsAuthenticationFactorSetting#email_enabled}.

---

##### `email_settings`<sup>Optional</sup> <a name="email_settings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.emailSettings"></a>

```python
email_settings: IdentityDomainsAuthenticationFactorSettingEmailSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettings">IdentityDomainsAuthenticationFactorSettingEmailSettings</a>

email_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#email_settings IdentityDomainsAuthenticationFactorSetting#email_settings}

---

##### `fido_authenticator_enabled`<sup>Optional</sup> <a name="fido_authenticator_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.fidoAuthenticatorEnabled"></a>

```python
fido_authenticator_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#fido_authenticator_enabled IdentityDomainsAuthenticationFactorSetting#fido_authenticator_enabled}.

---

##### `hide_backup_factor_enabled`<sup>Optional</sup> <a name="hide_backup_factor_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.hideBackupFactorEnabled"></a>

```python
hide_backup_factor_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#hide_backup_factor_enabled IdentityDomainsAuthenticationFactorSetting#hide_backup_factor_enabled}.

---

##### `identity_store_settings`<sup>Optional</sup> <a name="identity_store_settings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.identityStoreSettings"></a>

```python
identity_store_settings: IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings">IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings</a>

identity_store_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#identity_store_settings IdentityDomainsAuthenticationFactorSetting#identity_store_settings}

---

##### `ocid`<sup>Optional</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#ocid IdentityDomainsAuthenticationFactorSetting#ocid}.

---

##### `phone_call_enabled`<sup>Optional</sup> <a name="phone_call_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.phoneCallEnabled"></a>

```python
phone_call_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#phone_call_enabled IdentityDomainsAuthenticationFactorSetting#phone_call_enabled}.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#resource_type_schema_version IdentityDomainsAuthenticationFactorSetting#resource_type_schema_version}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.tags"></a>

```python
tags: typing.Union[IResolvable, typing.List[IdentityDomainsAuthenticationFactorSettingTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTags">IdentityDomainsAuthenticationFactorSettingTags</a>]]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#tags IdentityDomainsAuthenticationFactorSetting#tags}

---

##### `third_party_factor`<sup>Optional</sup> <a name="third_party_factor" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.thirdPartyFactor"></a>

```python
third_party_factor: IdentityDomainsAuthenticationFactorSettingThirdPartyFactor
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactor">IdentityDomainsAuthenticationFactorSettingThirdPartyFactor</a>

third_party_factor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#third_party_factor IdentityDomainsAuthenticationFactorSetting#third_party_factor}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.timeouts"></a>

```python
timeouts: IdentityDomainsAuthenticationFactorSettingTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeouts">IdentityDomainsAuthenticationFactorSettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#timeouts IdentityDomainsAuthenticationFactorSetting#timeouts}

---

##### `urnietfparamsscimschemasoracleidcsextensionfido_authentication_factor_settings`<sup>Optional</sup> <a name="urnietfparamsscimschemasoracleidcsextensionfido_authentication_factor_settings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.urnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings"></a>

```python
urnietfparamsscimschemasoracleidcsextensionfido_authentication_factor_settings: IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings</a>

urnietfparamsscimschemasoracleidcsextensionfido_authentication_factor_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#urnietfparamsscimschemasoracleidcsextensionfido_authentication_factor_settings IdentityDomainsAuthenticationFactorSetting#urnietfparamsscimschemasoracleidcsextensionfido_authentication_factor_settings}

---

##### `urnietfparamsscimschemasoracleidcsextensionthird_party_authentication_factor_settings`<sup>Optional</sup> <a name="urnietfparamsscimschemasoracleidcsextensionthird_party_authentication_factor_settings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.urnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings"></a>

```python
urnietfparamsscimschemasoracleidcsextensionthird_party_authentication_factor_settings: IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings</a>

urnietfparamsscimschemasoracleidcsextensionthird_party_authentication_factor_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#urnietfparamsscimschemasoracleidcsextensionthird_party_authentication_factor_settings IdentityDomainsAuthenticationFactorSetting#urnietfparamsscimschemasoracleidcsextensionthird_party_authentication_factor_settings}

---

##### `user_enrollment_disabled_factors`<sup>Optional</sup> <a name="user_enrollment_disabled_factors" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.userEnrollmentDisabledFactors"></a>

```python
user_enrollment_disabled_factors: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#user_enrollment_disabled_factors IdentityDomainsAuthenticationFactorSetting#user_enrollment_disabled_factors}.

---

##### `yubico_otp_enabled`<sup>Optional</sup> <a name="yubico_otp_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.yubicoOtpEnabled"></a>

```python
yubico_otp_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#yubico_otp_enabled IdentityDomainsAuthenticationFactorSetting#yubico_otp_enabled}.

---

### IdentityDomainsAuthenticationFactorSettingEmailSettings <a name="IdentityDomainsAuthenticationFactorSettingEmailSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_authentication_factor_setting

identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettings(
  email_link_enabled: typing.Union[bool, IResolvable],
  email_link_custom_url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettings.property.emailLinkEnabled">email_link_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#email_link_enabled IdentityDomainsAuthenticationFactorSetting#email_link_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettings.property.emailLinkCustomUrl">email_link_custom_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#email_link_custom_url IdentityDomainsAuthenticationFactorSetting#email_link_custom_url}. |

---

##### `email_link_enabled`<sup>Required</sup> <a name="email_link_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettings.property.emailLinkEnabled"></a>

```python
email_link_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#email_link_enabled IdentityDomainsAuthenticationFactorSetting#email_link_enabled}.

---

##### `email_link_custom_url`<sup>Optional</sup> <a name="email_link_custom_url" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettings.property.emailLinkCustomUrl"></a>

```python
email_link_custom_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#email_link_custom_url IdentityDomainsAuthenticationFactorSetting#email_link_custom_url}.

---

### IdentityDomainsAuthenticationFactorSettingEndpointRestrictions <a name="IdentityDomainsAuthenticationFactorSettingEndpointRestrictions" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_authentication_factor_setting

identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictions(
  max_endpoint_trust_duration_in_days: typing.Union[int, float],
  max_enrolled_devices: typing.Union[int, float],
  max_incorrect_attempts: typing.Union[int, float],
  max_trusted_endpoints: typing.Union[int, float],
  trusted_endpoints_enabled: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictions.property.maxEndpointTrustDurationInDays">max_endpoint_trust_duration_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#max_endpoint_trust_duration_in_days IdentityDomainsAuthenticationFactorSetting#max_endpoint_trust_duration_in_days}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictions.property.maxEnrolledDevices">max_enrolled_devices</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#max_enrolled_devices IdentityDomainsAuthenticationFactorSetting#max_enrolled_devices}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictions.property.maxIncorrectAttempts">max_incorrect_attempts</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#max_incorrect_attempts IdentityDomainsAuthenticationFactorSetting#max_incorrect_attempts}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictions.property.maxTrustedEndpoints">max_trusted_endpoints</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#max_trusted_endpoints IdentityDomainsAuthenticationFactorSetting#max_trusted_endpoints}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictions.property.trustedEndpointsEnabled">trusted_endpoints_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#trusted_endpoints_enabled IdentityDomainsAuthenticationFactorSetting#trusted_endpoints_enabled}. |

---

##### `max_endpoint_trust_duration_in_days`<sup>Required</sup> <a name="max_endpoint_trust_duration_in_days" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictions.property.maxEndpointTrustDurationInDays"></a>

```python
max_endpoint_trust_duration_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#max_endpoint_trust_duration_in_days IdentityDomainsAuthenticationFactorSetting#max_endpoint_trust_duration_in_days}.

---

##### `max_enrolled_devices`<sup>Required</sup> <a name="max_enrolled_devices" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictions.property.maxEnrolledDevices"></a>

```python
max_enrolled_devices: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#max_enrolled_devices IdentityDomainsAuthenticationFactorSetting#max_enrolled_devices}.

---

##### `max_incorrect_attempts`<sup>Required</sup> <a name="max_incorrect_attempts" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictions.property.maxIncorrectAttempts"></a>

```python
max_incorrect_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#max_incorrect_attempts IdentityDomainsAuthenticationFactorSetting#max_incorrect_attempts}.

---

##### `max_trusted_endpoints`<sup>Required</sup> <a name="max_trusted_endpoints" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictions.property.maxTrustedEndpoints"></a>

```python
max_trusted_endpoints: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#max_trusted_endpoints IdentityDomainsAuthenticationFactorSetting#max_trusted_endpoints}.

---

##### `trusted_endpoints_enabled`<sup>Required</sup> <a name="trusted_endpoints_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictions.property.trustedEndpointsEnabled"></a>

```python
trusted_endpoints_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#trusted_endpoints_enabled IdentityDomainsAuthenticationFactorSetting#trusted_endpoints_enabled}.

---

### IdentityDomainsAuthenticationFactorSettingIdcsCreatedBy <a name="IdentityDomainsAuthenticationFactorSettingIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_authentication_factor_setting

identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedBy()
```


### IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedBy <a name="IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_authentication_factor_setting

identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedBy()
```


### IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings <a name="IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_authentication_factor_setting

identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings(
  mobile_number_enabled: typing.Union[bool, IResolvable] = None,
  mobile_number_update_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings.property.mobileNumberEnabled">mobile_number_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#mobile_number_enabled IdentityDomainsAuthenticationFactorSetting#mobile_number_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings.property.mobileNumberUpdateEnabled">mobile_number_update_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#mobile_number_update_enabled IdentityDomainsAuthenticationFactorSetting#mobile_number_update_enabled}. |

---

##### `mobile_number_enabled`<sup>Optional</sup> <a name="mobile_number_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings.property.mobileNumberEnabled"></a>

```python
mobile_number_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#mobile_number_enabled IdentityDomainsAuthenticationFactorSetting#mobile_number_enabled}.

---

##### `mobile_number_update_enabled`<sup>Optional</sup> <a name="mobile_number_update_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings.property.mobileNumberUpdateEnabled"></a>

```python
mobile_number_update_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#mobile_number_update_enabled IdentityDomainsAuthenticationFactorSetting#mobile_number_update_enabled}.

---

### IdentityDomainsAuthenticationFactorSettingMeta <a name="IdentityDomainsAuthenticationFactorSettingMeta" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMeta.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_authentication_factor_setting

identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMeta()
```


### IdentityDomainsAuthenticationFactorSettingNotificationSettings <a name="IdentityDomainsAuthenticationFactorSettingNotificationSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_authentication_factor_setting

identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettings(
  pull_enabled: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettings.property.pullEnabled">pull_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#pull_enabled IdentityDomainsAuthenticationFactorSetting#pull_enabled}. |

---

##### `pull_enabled`<sup>Required</sup> <a name="pull_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettings.property.pullEnabled"></a>

```python
pull_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#pull_enabled IdentityDomainsAuthenticationFactorSetting#pull_enabled}.

---

### IdentityDomainsAuthenticationFactorSettingTags <a name="IdentityDomainsAuthenticationFactorSettingTags" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTags.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_authentication_factor_setting

identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTags(
  key: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#key IdentityDomainsAuthenticationFactorSetting#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#value IdentityDomainsAuthenticationFactorSetting#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#key IdentityDomainsAuthenticationFactorSetting#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#value IdentityDomainsAuthenticationFactorSetting#value}.

---

### IdentityDomainsAuthenticationFactorSettingThirdPartyFactor <a name="IdentityDomainsAuthenticationFactorSettingThirdPartyFactor" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactor"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactor.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_authentication_factor_setting

identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactor(
  duo_security: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactor.property.duoSecurity">duo_security</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#duo_security IdentityDomainsAuthenticationFactorSetting#duo_security}. |

---

##### `duo_security`<sup>Required</sup> <a name="duo_security" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactor.property.duoSecurity"></a>

```python
duo_security: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#duo_security IdentityDomainsAuthenticationFactorSetting#duo_security}.

---

### IdentityDomainsAuthenticationFactorSettingTimeouts <a name="IdentityDomainsAuthenticationFactorSettingTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_authentication_factor_setting

identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#create IdentityDomainsAuthenticationFactorSetting#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#delete IdentityDomainsAuthenticationFactorSetting#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#update IdentityDomainsAuthenticationFactorSetting#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#create IdentityDomainsAuthenticationFactorSetting#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#delete IdentityDomainsAuthenticationFactorSetting#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#update IdentityDomainsAuthenticationFactorSetting#update}.

---

### IdentityDomainsAuthenticationFactorSettingTotpSettings <a name="IdentityDomainsAuthenticationFactorSettingTotpSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_authentication_factor_setting

identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings(
  email_otp_validity_duration_in_mins: typing.Union[int, float],
  email_passcode_length: typing.Union[int, float],
  hashing_algorithm: str,
  jwt_validity_duration_in_secs: typing.Union[int, float],
  key_refresh_interval_in_days: typing.Union[int, float],
  passcode_length: typing.Union[int, float],
  sms_otp_validity_duration_in_mins: typing.Union[int, float],
  sms_passcode_length: typing.Union[int, float],
  time_step_in_secs: typing.Union[int, float],
  time_step_tolerance: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings.property.emailOtpValidityDurationInMins">email_otp_validity_duration_in_mins</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#email_otp_validity_duration_in_mins IdentityDomainsAuthenticationFactorSetting#email_otp_validity_duration_in_mins}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings.property.emailPasscodeLength">email_passcode_length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#email_passcode_length IdentityDomainsAuthenticationFactorSetting#email_passcode_length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings.property.hashingAlgorithm">hashing_algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#hashing_algorithm IdentityDomainsAuthenticationFactorSetting#hashing_algorithm}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings.property.jwtValidityDurationInSecs">jwt_validity_duration_in_secs</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#jwt_validity_duration_in_secs IdentityDomainsAuthenticationFactorSetting#jwt_validity_duration_in_secs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings.property.keyRefreshIntervalInDays">key_refresh_interval_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#key_refresh_interval_in_days IdentityDomainsAuthenticationFactorSetting#key_refresh_interval_in_days}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings.property.passcodeLength">passcode_length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#passcode_length IdentityDomainsAuthenticationFactorSetting#passcode_length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings.property.smsOtpValidityDurationInMins">sms_otp_validity_duration_in_mins</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#sms_otp_validity_duration_in_mins IdentityDomainsAuthenticationFactorSetting#sms_otp_validity_duration_in_mins}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings.property.smsPasscodeLength">sms_passcode_length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#sms_passcode_length IdentityDomainsAuthenticationFactorSetting#sms_passcode_length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings.property.timeStepInSecs">time_step_in_secs</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#time_step_in_secs IdentityDomainsAuthenticationFactorSetting#time_step_in_secs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings.property.timeStepTolerance">time_step_tolerance</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#time_step_tolerance IdentityDomainsAuthenticationFactorSetting#time_step_tolerance}. |

---

##### `email_otp_validity_duration_in_mins`<sup>Required</sup> <a name="email_otp_validity_duration_in_mins" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings.property.emailOtpValidityDurationInMins"></a>

```python
email_otp_validity_duration_in_mins: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#email_otp_validity_duration_in_mins IdentityDomainsAuthenticationFactorSetting#email_otp_validity_duration_in_mins}.

---

##### `email_passcode_length`<sup>Required</sup> <a name="email_passcode_length" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings.property.emailPasscodeLength"></a>

```python
email_passcode_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#email_passcode_length IdentityDomainsAuthenticationFactorSetting#email_passcode_length}.

---

##### `hashing_algorithm`<sup>Required</sup> <a name="hashing_algorithm" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings.property.hashingAlgorithm"></a>

```python
hashing_algorithm: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#hashing_algorithm IdentityDomainsAuthenticationFactorSetting#hashing_algorithm}.

---

##### `jwt_validity_duration_in_secs`<sup>Required</sup> <a name="jwt_validity_duration_in_secs" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings.property.jwtValidityDurationInSecs"></a>

```python
jwt_validity_duration_in_secs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#jwt_validity_duration_in_secs IdentityDomainsAuthenticationFactorSetting#jwt_validity_duration_in_secs}.

---

##### `key_refresh_interval_in_days`<sup>Required</sup> <a name="key_refresh_interval_in_days" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings.property.keyRefreshIntervalInDays"></a>

```python
key_refresh_interval_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#key_refresh_interval_in_days IdentityDomainsAuthenticationFactorSetting#key_refresh_interval_in_days}.

---

##### `passcode_length`<sup>Required</sup> <a name="passcode_length" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings.property.passcodeLength"></a>

```python
passcode_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#passcode_length IdentityDomainsAuthenticationFactorSetting#passcode_length}.

---

##### `sms_otp_validity_duration_in_mins`<sup>Required</sup> <a name="sms_otp_validity_duration_in_mins" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings.property.smsOtpValidityDurationInMins"></a>

```python
sms_otp_validity_duration_in_mins: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#sms_otp_validity_duration_in_mins IdentityDomainsAuthenticationFactorSetting#sms_otp_validity_duration_in_mins}.

---

##### `sms_passcode_length`<sup>Required</sup> <a name="sms_passcode_length" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings.property.smsPasscodeLength"></a>

```python
sms_passcode_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#sms_passcode_length IdentityDomainsAuthenticationFactorSetting#sms_passcode_length}.

---

##### `time_step_in_secs`<sup>Required</sup> <a name="time_step_in_secs" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings.property.timeStepInSecs"></a>

```python
time_step_in_secs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#time_step_in_secs IdentityDomainsAuthenticationFactorSetting#time_step_in_secs}.

---

##### `time_step_tolerance`<sup>Required</sup> <a name="time_step_tolerance" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings.property.timeStepTolerance"></a>

```python
time_step_tolerance: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#time_step_tolerance IdentityDomainsAuthenticationFactorSetting#time_step_tolerance}.

---

### IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings <a name="IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_authentication_factor_setting

identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings(
  attestation: str,
  authenticator_selection_attachment: str,
  authenticator_selection_require_resident_key: typing.Union[bool, IResolvable],
  authenticator_selection_resident_key: str,
  authenticator_selection_user_verification: str,
  exclude_credentials: typing.Union[bool, IResolvable],
  public_key_types: typing.List[str],
  timeout: typing.Union[int, float],
  domain_validation_level: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.property.attestation">attestation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#attestation IdentityDomainsAuthenticationFactorSetting#attestation}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.property.authenticatorSelectionAttachment">authenticator_selection_attachment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#authenticator_selection_attachment IdentityDomainsAuthenticationFactorSetting#authenticator_selection_attachment}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.property.authenticatorSelectionRequireResidentKey">authenticator_selection_require_resident_key</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#authenticator_selection_require_resident_key IdentityDomainsAuthenticationFactorSetting#authenticator_selection_require_resident_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.property.authenticatorSelectionResidentKey">authenticator_selection_resident_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#authenticator_selection_resident_key IdentityDomainsAuthenticationFactorSetting#authenticator_selection_resident_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.property.authenticatorSelectionUserVerification">authenticator_selection_user_verification</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#authenticator_selection_user_verification IdentityDomainsAuthenticationFactorSetting#authenticator_selection_user_verification}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.property.excludeCredentials">exclude_credentials</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#exclude_credentials IdentityDomainsAuthenticationFactorSetting#exclude_credentials}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.property.publicKeyTypes">public_key_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#public_key_types IdentityDomainsAuthenticationFactorSetting#public_key_types}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#timeout IdentityDomainsAuthenticationFactorSetting#timeout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.property.domainValidationLevel">domain_validation_level</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#domain_validation_level IdentityDomainsAuthenticationFactorSetting#domain_validation_level}. |

---

##### `attestation`<sup>Required</sup> <a name="attestation" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.property.attestation"></a>

```python
attestation: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#attestation IdentityDomainsAuthenticationFactorSetting#attestation}.

---

##### `authenticator_selection_attachment`<sup>Required</sup> <a name="authenticator_selection_attachment" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.property.authenticatorSelectionAttachment"></a>

```python
authenticator_selection_attachment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#authenticator_selection_attachment IdentityDomainsAuthenticationFactorSetting#authenticator_selection_attachment}.

---

##### `authenticator_selection_require_resident_key`<sup>Required</sup> <a name="authenticator_selection_require_resident_key" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.property.authenticatorSelectionRequireResidentKey"></a>

```python
authenticator_selection_require_resident_key: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#authenticator_selection_require_resident_key IdentityDomainsAuthenticationFactorSetting#authenticator_selection_require_resident_key}.

---

##### `authenticator_selection_resident_key`<sup>Required</sup> <a name="authenticator_selection_resident_key" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.property.authenticatorSelectionResidentKey"></a>

```python
authenticator_selection_resident_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#authenticator_selection_resident_key IdentityDomainsAuthenticationFactorSetting#authenticator_selection_resident_key}.

---

##### `authenticator_selection_user_verification`<sup>Required</sup> <a name="authenticator_selection_user_verification" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.property.authenticatorSelectionUserVerification"></a>

```python
authenticator_selection_user_verification: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#authenticator_selection_user_verification IdentityDomainsAuthenticationFactorSetting#authenticator_selection_user_verification}.

---

##### `exclude_credentials`<sup>Required</sup> <a name="exclude_credentials" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.property.excludeCredentials"></a>

```python
exclude_credentials: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#exclude_credentials IdentityDomainsAuthenticationFactorSetting#exclude_credentials}.

---

##### `public_key_types`<sup>Required</sup> <a name="public_key_types" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.property.publicKeyTypes"></a>

```python
public_key_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#public_key_types IdentityDomainsAuthenticationFactorSetting#public_key_types}.

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#timeout IdentityDomainsAuthenticationFactorSetting#timeout}.

---

##### `domain_validation_level`<sup>Optional</sup> <a name="domain_validation_level" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.property.domainValidationLevel"></a>

```python
domain_validation_level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#domain_validation_level IdentityDomainsAuthenticationFactorSetting#domain_validation_level}.

---

### IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings <a name="IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_authentication_factor_setting

identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings(
  duo_security_settings: IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings.property.duoSecuritySettings">duo_security_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings</a></code> | duo_security_settings block. |

---

##### `duo_security_settings`<sup>Optional</sup> <a name="duo_security_settings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings.property.duoSecuritySettings"></a>

```python
duo_security_settings: IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings</a>

duo_security_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#duo_security_settings IdentityDomainsAuthenticationFactorSetting#duo_security_settings}

---

### IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings <a name="IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_authentication_factor_setting

identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings(
  api_hostname: str,
  integration_key: str,
  secret_key: str,
  user_mapping_attribute: str,
  attestation_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings.property.apiHostname">api_hostname</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#api_hostname IdentityDomainsAuthenticationFactorSetting#api_hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings.property.integrationKey">integration_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#integration_key IdentityDomainsAuthenticationFactorSetting#integration_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings.property.secretKey">secret_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#secret_key IdentityDomainsAuthenticationFactorSetting#secret_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings.property.userMappingAttribute">user_mapping_attribute</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#user_mapping_attribute IdentityDomainsAuthenticationFactorSetting#user_mapping_attribute}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings.property.attestationKey">attestation_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#attestation_key IdentityDomainsAuthenticationFactorSetting#attestation_key}. |

---

##### `api_hostname`<sup>Required</sup> <a name="api_hostname" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings.property.apiHostname"></a>

```python
api_hostname: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#api_hostname IdentityDomainsAuthenticationFactorSetting#api_hostname}.

---

##### `integration_key`<sup>Required</sup> <a name="integration_key" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings.property.integrationKey"></a>

```python
integration_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#integration_key IdentityDomainsAuthenticationFactorSetting#integration_key}.

---

##### `secret_key`<sup>Required</sup> <a name="secret_key" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings.property.secretKey"></a>

```python
secret_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#secret_key IdentityDomainsAuthenticationFactorSetting#secret_key}.

---

##### `user_mapping_attribute`<sup>Required</sup> <a name="user_mapping_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings.property.userMappingAttribute"></a>

```python
user_mapping_attribute: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#user_mapping_attribute IdentityDomainsAuthenticationFactorSetting#user_mapping_attribute}.

---

##### `attestation_key`<sup>Optional</sup> <a name="attestation_key" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings.property.attestationKey"></a>

```python
attestation_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#attestation_key IdentityDomainsAuthenticationFactorSetting#attestation_key}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference <a name="IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_authentication_factor_setting

identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.helpDeskCodeExpiryInMinsInput">help_desk_code_expiry_in_mins_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.helpDeskGenerationEnabledInput">help_desk_generation_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.helpDeskMaxUsageInput">help_desk_max_usage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.lengthInput">length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.maxActiveInput">max_active_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.selfServiceGenerationEnabledInput">self_service_generation_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.helpDeskCodeExpiryInMins">help_desk_code_expiry_in_mins</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.helpDeskGenerationEnabled">help_desk_generation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.helpDeskMaxUsage">help_desk_max_usage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.length">length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.maxActive">max_active</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.selfServiceGenerationEnabled">self_service_generation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettings">IdentityDomainsAuthenticationFactorSettingBypassCodeSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `help_desk_code_expiry_in_mins_input`<sup>Optional</sup> <a name="help_desk_code_expiry_in_mins_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.helpDeskCodeExpiryInMinsInput"></a>

```python
help_desk_code_expiry_in_mins_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `help_desk_generation_enabled_input`<sup>Optional</sup> <a name="help_desk_generation_enabled_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.helpDeskGenerationEnabledInput"></a>

```python
help_desk_generation_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `help_desk_max_usage_input`<sup>Optional</sup> <a name="help_desk_max_usage_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.helpDeskMaxUsageInput"></a>

```python
help_desk_max_usage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `length_input`<sup>Optional</sup> <a name="length_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.lengthInput"></a>

```python
length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_active_input`<sup>Optional</sup> <a name="max_active_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.maxActiveInput"></a>

```python
max_active_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `self_service_generation_enabled_input`<sup>Optional</sup> <a name="self_service_generation_enabled_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.selfServiceGenerationEnabledInput"></a>

```python
self_service_generation_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `help_desk_code_expiry_in_mins`<sup>Required</sup> <a name="help_desk_code_expiry_in_mins" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.helpDeskCodeExpiryInMins"></a>

```python
help_desk_code_expiry_in_mins: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `help_desk_generation_enabled`<sup>Required</sup> <a name="help_desk_generation_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.helpDeskGenerationEnabled"></a>

```python
help_desk_generation_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `help_desk_max_usage`<sup>Required</sup> <a name="help_desk_max_usage" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.helpDeskMaxUsage"></a>

```python
help_desk_max_usage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `length`<sup>Required</sup> <a name="length" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.length"></a>

```python
length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_active`<sup>Required</sup> <a name="max_active" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.maxActive"></a>

```python
max_active: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `self_service_generation_enabled`<sup>Required</sup> <a name="self_service_generation_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.selfServiceGenerationEnabled"></a>

```python
self_service_generation_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsAuthenticationFactorSettingBypassCodeSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettings">IdentityDomainsAuthenticationFactorSettingBypassCodeSettings</a>

---


### IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference <a name="IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_authentication_factor_setting

identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.deviceProtectionPolicyInput">device_protection_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.initialLockoutPeriodInSecsInput">initial_lockout_period_in_secs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.keyPairLengthInput">key_pair_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.lockoutEscalationPatternInput">lockout_escalation_pattern_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.maxFailuresBeforeLockoutInput">max_failures_before_lockout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.maxFailuresBeforeWarningInput">max_failures_before_warning_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.maxLockoutIntervalInSecsInput">max_lockout_interval_in_secs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.minPinLengthInput">min_pin_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.policyUpdateFreqInDaysInput">policy_update_freq_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.requestSigningAlgoInput">request_signing_algo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.sharedSecretEncodingInput">shared_secret_encoding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.unlockAppForEachRequestEnabledInput">unlock_app_for_each_request_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.unlockAppIntervalInSecsInput">unlock_app_interval_in_secs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.unlockOnAppForegroundEnabledInput">unlock_on_app_foreground_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.unlockOnAppStartEnabledInput">unlock_on_app_start_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.deviceProtectionPolicy">device_protection_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.initialLockoutPeriodInSecs">initial_lockout_period_in_secs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.keyPairLength">key_pair_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.lockoutEscalationPattern">lockout_escalation_pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.maxFailuresBeforeLockout">max_failures_before_lockout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.maxFailuresBeforeWarning">max_failures_before_warning</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.maxLockoutIntervalInSecs">max_lockout_interval_in_secs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.minPinLength">min_pin_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.policyUpdateFreqInDays">policy_update_freq_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.requestSigningAlgo">request_signing_algo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.sharedSecretEncoding">shared_secret_encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.unlockAppForEachRequestEnabled">unlock_app_for_each_request_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.unlockAppIntervalInSecs">unlock_app_interval_in_secs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.unlockOnAppForegroundEnabled">unlock_on_app_foreground_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.unlockOnAppStartEnabled">unlock_on_app_start_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings">IdentityDomainsAuthenticationFactorSettingClientAppSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `device_protection_policy_input`<sup>Optional</sup> <a name="device_protection_policy_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.deviceProtectionPolicyInput"></a>

```python
device_protection_policy_input: str
```

- *Type:* str

---

##### `initial_lockout_period_in_secs_input`<sup>Optional</sup> <a name="initial_lockout_period_in_secs_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.initialLockoutPeriodInSecsInput"></a>

```python
initial_lockout_period_in_secs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `key_pair_length_input`<sup>Optional</sup> <a name="key_pair_length_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.keyPairLengthInput"></a>

```python
key_pair_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lockout_escalation_pattern_input`<sup>Optional</sup> <a name="lockout_escalation_pattern_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.lockoutEscalationPatternInput"></a>

```python
lockout_escalation_pattern_input: str
```

- *Type:* str

---

##### `max_failures_before_lockout_input`<sup>Optional</sup> <a name="max_failures_before_lockout_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.maxFailuresBeforeLockoutInput"></a>

```python
max_failures_before_lockout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_failures_before_warning_input`<sup>Optional</sup> <a name="max_failures_before_warning_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.maxFailuresBeforeWarningInput"></a>

```python
max_failures_before_warning_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_lockout_interval_in_secs_input`<sup>Optional</sup> <a name="max_lockout_interval_in_secs_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.maxLockoutIntervalInSecsInput"></a>

```python
max_lockout_interval_in_secs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_pin_length_input`<sup>Optional</sup> <a name="min_pin_length_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.minPinLengthInput"></a>

```python
min_pin_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policy_update_freq_in_days_input`<sup>Optional</sup> <a name="policy_update_freq_in_days_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.policyUpdateFreqInDaysInput"></a>

```python
policy_update_freq_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `request_signing_algo_input`<sup>Optional</sup> <a name="request_signing_algo_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.requestSigningAlgoInput"></a>

```python
request_signing_algo_input: str
```

- *Type:* str

---

##### `shared_secret_encoding_input`<sup>Optional</sup> <a name="shared_secret_encoding_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.sharedSecretEncodingInput"></a>

```python
shared_secret_encoding_input: str
```

- *Type:* str

---

##### `unlock_app_for_each_request_enabled_input`<sup>Optional</sup> <a name="unlock_app_for_each_request_enabled_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.unlockAppForEachRequestEnabledInput"></a>

```python
unlock_app_for_each_request_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `unlock_app_interval_in_secs_input`<sup>Optional</sup> <a name="unlock_app_interval_in_secs_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.unlockAppIntervalInSecsInput"></a>

```python
unlock_app_interval_in_secs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unlock_on_app_foreground_enabled_input`<sup>Optional</sup> <a name="unlock_on_app_foreground_enabled_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.unlockOnAppForegroundEnabledInput"></a>

```python
unlock_on_app_foreground_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `unlock_on_app_start_enabled_input`<sup>Optional</sup> <a name="unlock_on_app_start_enabled_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.unlockOnAppStartEnabledInput"></a>

```python
unlock_on_app_start_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `device_protection_policy`<sup>Required</sup> <a name="device_protection_policy" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.deviceProtectionPolicy"></a>

```python
device_protection_policy: str
```

- *Type:* str

---

##### `initial_lockout_period_in_secs`<sup>Required</sup> <a name="initial_lockout_period_in_secs" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.initialLockoutPeriodInSecs"></a>

```python
initial_lockout_period_in_secs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `key_pair_length`<sup>Required</sup> <a name="key_pair_length" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.keyPairLength"></a>

```python
key_pair_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lockout_escalation_pattern`<sup>Required</sup> <a name="lockout_escalation_pattern" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.lockoutEscalationPattern"></a>

```python
lockout_escalation_pattern: str
```

- *Type:* str

---

##### `max_failures_before_lockout`<sup>Required</sup> <a name="max_failures_before_lockout" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.maxFailuresBeforeLockout"></a>

```python
max_failures_before_lockout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_failures_before_warning`<sup>Required</sup> <a name="max_failures_before_warning" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.maxFailuresBeforeWarning"></a>

```python
max_failures_before_warning: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_lockout_interval_in_secs`<sup>Required</sup> <a name="max_lockout_interval_in_secs" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.maxLockoutIntervalInSecs"></a>

```python
max_lockout_interval_in_secs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_pin_length`<sup>Required</sup> <a name="min_pin_length" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.minPinLength"></a>

```python
min_pin_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policy_update_freq_in_days`<sup>Required</sup> <a name="policy_update_freq_in_days" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.policyUpdateFreqInDays"></a>

```python
policy_update_freq_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `request_signing_algo`<sup>Required</sup> <a name="request_signing_algo" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.requestSigningAlgo"></a>

```python
request_signing_algo: str
```

- *Type:* str

---

##### `shared_secret_encoding`<sup>Required</sup> <a name="shared_secret_encoding" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.sharedSecretEncoding"></a>

```python
shared_secret_encoding: str
```

- *Type:* str

---

##### `unlock_app_for_each_request_enabled`<sup>Required</sup> <a name="unlock_app_for_each_request_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.unlockAppForEachRequestEnabled"></a>

```python
unlock_app_for_each_request_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `unlock_app_interval_in_secs`<sup>Required</sup> <a name="unlock_app_interval_in_secs" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.unlockAppIntervalInSecs"></a>

```python
unlock_app_interval_in_secs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unlock_on_app_foreground_enabled`<sup>Required</sup> <a name="unlock_on_app_foreground_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.unlockOnAppForegroundEnabled"></a>

```python
unlock_on_app_foreground_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `unlock_on_app_start_enabled`<sup>Required</sup> <a name="unlock_on_app_start_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.unlockOnAppStartEnabled"></a>

```python
unlock_on_app_start_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsAuthenticationFactorSettingClientAppSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings">IdentityDomainsAuthenticationFactorSettingClientAppSettings</a>

---


### IdentityDomainsAuthenticationFactorSettingCompliancePolicyList <a name="IdentityDomainsAuthenticationFactorSettingCompliancePolicyList" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_authentication_factor_setting

identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicy">IdentityDomainsAuthenticationFactorSettingCompliancePolicy</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[IdentityDomainsAuthenticationFactorSettingCompliancePolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicy">IdentityDomainsAuthenticationFactorSettingCompliancePolicy</a>]]

---


### IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference <a name="IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_authentication_factor_setting

identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicy">IdentityDomainsAuthenticationFactorSettingCompliancePolicy</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IdentityDomainsAuthenticationFactorSettingCompliancePolicy]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicy">IdentityDomainsAuthenticationFactorSettingCompliancePolicy</a>]

---


### IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference <a name="IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_authentication_factor_setting

identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.resetEmailLinkCustomUrl">reset_email_link_custom_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_email_link_custom_url` <a name="reset_email_link_custom_url" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.resetEmailLinkCustomUrl"></a>

```python
def reset_email_link_custom_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.property.emailLinkCustomUrlInput">email_link_custom_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.property.emailLinkEnabledInput">email_link_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.property.emailLinkCustomUrl">email_link_custom_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.property.emailLinkEnabled">email_link_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettings">IdentityDomainsAuthenticationFactorSettingEmailSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email_link_custom_url_input`<sup>Optional</sup> <a name="email_link_custom_url_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.property.emailLinkCustomUrlInput"></a>

```python
email_link_custom_url_input: str
```

- *Type:* str

---

##### `email_link_enabled_input`<sup>Optional</sup> <a name="email_link_enabled_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.property.emailLinkEnabledInput"></a>

```python
email_link_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `email_link_custom_url`<sup>Required</sup> <a name="email_link_custom_url" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.property.emailLinkCustomUrl"></a>

```python
email_link_custom_url: str
```

- *Type:* str

---

##### `email_link_enabled`<sup>Required</sup> <a name="email_link_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.property.emailLinkEnabled"></a>

```python
email_link_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsAuthenticationFactorSettingEmailSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettings">IdentityDomainsAuthenticationFactorSettingEmailSettings</a>

---


### IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference <a name="IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_authentication_factor_setting

identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.maxEndpointTrustDurationInDaysInput">max_endpoint_trust_duration_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.maxEnrolledDevicesInput">max_enrolled_devices_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.maxIncorrectAttemptsInput">max_incorrect_attempts_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.maxTrustedEndpointsInput">max_trusted_endpoints_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.trustedEndpointsEnabledInput">trusted_endpoints_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.maxEndpointTrustDurationInDays">max_endpoint_trust_duration_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.maxEnrolledDevices">max_enrolled_devices</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.maxIncorrectAttempts">max_incorrect_attempts</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.maxTrustedEndpoints">max_trusted_endpoints</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.trustedEndpointsEnabled">trusted_endpoints_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictions">IdentityDomainsAuthenticationFactorSettingEndpointRestrictions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_endpoint_trust_duration_in_days_input`<sup>Optional</sup> <a name="max_endpoint_trust_duration_in_days_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.maxEndpointTrustDurationInDaysInput"></a>

```python
max_endpoint_trust_duration_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_enrolled_devices_input`<sup>Optional</sup> <a name="max_enrolled_devices_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.maxEnrolledDevicesInput"></a>

```python
max_enrolled_devices_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_incorrect_attempts_input`<sup>Optional</sup> <a name="max_incorrect_attempts_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.maxIncorrectAttemptsInput"></a>

```python
max_incorrect_attempts_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_trusted_endpoints_input`<sup>Optional</sup> <a name="max_trusted_endpoints_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.maxTrustedEndpointsInput"></a>

```python
max_trusted_endpoints_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `trusted_endpoints_enabled_input`<sup>Optional</sup> <a name="trusted_endpoints_enabled_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.trustedEndpointsEnabledInput"></a>

```python
trusted_endpoints_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_endpoint_trust_duration_in_days`<sup>Required</sup> <a name="max_endpoint_trust_duration_in_days" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.maxEndpointTrustDurationInDays"></a>

```python
max_endpoint_trust_duration_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_enrolled_devices`<sup>Required</sup> <a name="max_enrolled_devices" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.maxEnrolledDevices"></a>

```python
max_enrolled_devices: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_incorrect_attempts`<sup>Required</sup> <a name="max_incorrect_attempts" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.maxIncorrectAttempts"></a>

```python
max_incorrect_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_trusted_endpoints`<sup>Required</sup> <a name="max_trusted_endpoints" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.maxTrustedEndpoints"></a>

```python
max_trusted_endpoints: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `trusted_endpoints_enabled`<sup>Required</sup> <a name="trusted_endpoints_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.trustedEndpointsEnabled"></a>

```python
trusted_endpoints_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsAuthenticationFactorSettingEndpointRestrictions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictions">IdentityDomainsAuthenticationFactorSettingEndpointRestrictions</a>

---


### IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList <a name="IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_authentication_factor_setting

identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference <a name="IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_authentication_factor_setting

identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedBy">IdentityDomainsAuthenticationFactorSettingIdcsCreatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsAuthenticationFactorSettingIdcsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedBy">IdentityDomainsAuthenticationFactorSettingIdcsCreatedBy</a>

---


### IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList <a name="IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_authentication_factor_setting

identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference <a name="IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_authentication_factor_setting

identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedBy">IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedBy">IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedBy</a>

---


### IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference <a name="IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_authentication_factor_setting

identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.resetMobileNumberEnabled">reset_mobile_number_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.resetMobileNumberUpdateEnabled">reset_mobile_number_update_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_mobile_number_enabled` <a name="reset_mobile_number_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.resetMobileNumberEnabled"></a>

```python
def reset_mobile_number_enabled() -> None
```

##### `reset_mobile_number_update_enabled` <a name="reset_mobile_number_update_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.resetMobileNumberUpdateEnabled"></a>

```python
def reset_mobile_number_update_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.property.mobileNumberEnabledInput">mobile_number_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.property.mobileNumberUpdateEnabledInput">mobile_number_update_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.property.mobileNumberEnabled">mobile_number_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.property.mobileNumberUpdateEnabled">mobile_number_update_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings">IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mobile_number_enabled_input`<sup>Optional</sup> <a name="mobile_number_enabled_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.property.mobileNumberEnabledInput"></a>

```python
mobile_number_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `mobile_number_update_enabled_input`<sup>Optional</sup> <a name="mobile_number_update_enabled_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.property.mobileNumberUpdateEnabledInput"></a>

```python
mobile_number_update_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `mobile_number_enabled`<sup>Required</sup> <a name="mobile_number_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.property.mobileNumberEnabled"></a>

```python
mobile_number_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `mobile_number_update_enabled`<sup>Required</sup> <a name="mobile_number_update_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.property.mobileNumberUpdateEnabled"></a>

```python
mobile_number_update_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings">IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings</a>

---


### IdentityDomainsAuthenticationFactorSettingMetaList <a name="IdentityDomainsAuthenticationFactorSettingMetaList" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_authentication_factor_setting

identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsAuthenticationFactorSettingMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IdentityDomainsAuthenticationFactorSettingMetaOutputReference <a name="IdentityDomainsAuthenticationFactorSettingMetaOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_authentication_factor_setting

identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.lastModified">last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMeta">IdentityDomainsAuthenticationFactorSettingMeta</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `last_modified`<sup>Required</sup> <a name="last_modified" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.lastModified"></a>

```python
last_modified: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsAuthenticationFactorSettingMeta
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMeta">IdentityDomainsAuthenticationFactorSettingMeta</a>

---


### IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference <a name="IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_authentication_factor_setting

identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.property.pullEnabledInput">pull_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.property.pullEnabled">pull_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettings">IdentityDomainsAuthenticationFactorSettingNotificationSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pull_enabled_input`<sup>Optional</sup> <a name="pull_enabled_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.property.pullEnabledInput"></a>

```python
pull_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `pull_enabled`<sup>Required</sup> <a name="pull_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.property.pullEnabled"></a>

```python
pull_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsAuthenticationFactorSettingNotificationSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettings">IdentityDomainsAuthenticationFactorSettingNotificationSettings</a>

---


### IdentityDomainsAuthenticationFactorSettingTagsList <a name="IdentityDomainsAuthenticationFactorSettingTagsList" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_authentication_factor_setting

identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsAuthenticationFactorSettingTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTags">IdentityDomainsAuthenticationFactorSettingTags</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[IdentityDomainsAuthenticationFactorSettingTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTags">IdentityDomainsAuthenticationFactorSettingTags</a>]]

---


### IdentityDomainsAuthenticationFactorSettingTagsOutputReference <a name="IdentityDomainsAuthenticationFactorSettingTagsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_authentication_factor_setting

identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTags">IdentityDomainsAuthenticationFactorSettingTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IdentityDomainsAuthenticationFactorSettingTags]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTags">IdentityDomainsAuthenticationFactorSettingTags</a>]

---


### IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference <a name="IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_authentication_factor_setting

identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.property.duoSecurityInput">duo_security_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.property.duoSecurity">duo_security</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactor">IdentityDomainsAuthenticationFactorSettingThirdPartyFactor</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `duo_security_input`<sup>Optional</sup> <a name="duo_security_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.property.duoSecurityInput"></a>

```python
duo_security_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `duo_security`<sup>Required</sup> <a name="duo_security" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.property.duoSecurity"></a>

```python
duo_security: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsAuthenticationFactorSettingThirdPartyFactor
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactor">IdentityDomainsAuthenticationFactorSettingThirdPartyFactor</a>

---


### IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference <a name="IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_authentication_factor_setting

identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeouts">IdentityDomainsAuthenticationFactorSettingTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IdentityDomainsAuthenticationFactorSettingTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeouts">IdentityDomainsAuthenticationFactorSettingTimeouts</a>]

---


### IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference <a name="IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_authentication_factor_setting

identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.emailOtpValidityDurationInMinsInput">email_otp_validity_duration_in_mins_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.emailPasscodeLengthInput">email_passcode_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.hashingAlgorithmInput">hashing_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.jwtValidityDurationInSecsInput">jwt_validity_duration_in_secs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.keyRefreshIntervalInDaysInput">key_refresh_interval_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.passcodeLengthInput">passcode_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.smsOtpValidityDurationInMinsInput">sms_otp_validity_duration_in_mins_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.smsPasscodeLengthInput">sms_passcode_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.timeStepInSecsInput">time_step_in_secs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.timeStepToleranceInput">time_step_tolerance_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.emailOtpValidityDurationInMins">email_otp_validity_duration_in_mins</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.emailPasscodeLength">email_passcode_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.hashingAlgorithm">hashing_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.jwtValidityDurationInSecs">jwt_validity_duration_in_secs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.keyRefreshIntervalInDays">key_refresh_interval_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.passcodeLength">passcode_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.smsOtpValidityDurationInMins">sms_otp_validity_duration_in_mins</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.smsPasscodeLength">sms_passcode_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.timeStepInSecs">time_step_in_secs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.timeStepTolerance">time_step_tolerance</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings">IdentityDomainsAuthenticationFactorSettingTotpSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email_otp_validity_duration_in_mins_input`<sup>Optional</sup> <a name="email_otp_validity_duration_in_mins_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.emailOtpValidityDurationInMinsInput"></a>

```python
email_otp_validity_duration_in_mins_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `email_passcode_length_input`<sup>Optional</sup> <a name="email_passcode_length_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.emailPasscodeLengthInput"></a>

```python
email_passcode_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hashing_algorithm_input`<sup>Optional</sup> <a name="hashing_algorithm_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.hashingAlgorithmInput"></a>

```python
hashing_algorithm_input: str
```

- *Type:* str

---

##### `jwt_validity_duration_in_secs_input`<sup>Optional</sup> <a name="jwt_validity_duration_in_secs_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.jwtValidityDurationInSecsInput"></a>

```python
jwt_validity_duration_in_secs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `key_refresh_interval_in_days_input`<sup>Optional</sup> <a name="key_refresh_interval_in_days_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.keyRefreshIntervalInDaysInput"></a>

```python
key_refresh_interval_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `passcode_length_input`<sup>Optional</sup> <a name="passcode_length_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.passcodeLengthInput"></a>

```python
passcode_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sms_otp_validity_duration_in_mins_input`<sup>Optional</sup> <a name="sms_otp_validity_duration_in_mins_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.smsOtpValidityDurationInMinsInput"></a>

```python
sms_otp_validity_duration_in_mins_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sms_passcode_length_input`<sup>Optional</sup> <a name="sms_passcode_length_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.smsPasscodeLengthInput"></a>

```python
sms_passcode_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_step_in_secs_input`<sup>Optional</sup> <a name="time_step_in_secs_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.timeStepInSecsInput"></a>

```python
time_step_in_secs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_step_tolerance_input`<sup>Optional</sup> <a name="time_step_tolerance_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.timeStepToleranceInput"></a>

```python
time_step_tolerance_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `email_otp_validity_duration_in_mins`<sup>Required</sup> <a name="email_otp_validity_duration_in_mins" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.emailOtpValidityDurationInMins"></a>

```python
email_otp_validity_duration_in_mins: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `email_passcode_length`<sup>Required</sup> <a name="email_passcode_length" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.emailPasscodeLength"></a>

```python
email_passcode_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hashing_algorithm`<sup>Required</sup> <a name="hashing_algorithm" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.hashingAlgorithm"></a>

```python
hashing_algorithm: str
```

- *Type:* str

---

##### `jwt_validity_duration_in_secs`<sup>Required</sup> <a name="jwt_validity_duration_in_secs" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.jwtValidityDurationInSecs"></a>

```python
jwt_validity_duration_in_secs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `key_refresh_interval_in_days`<sup>Required</sup> <a name="key_refresh_interval_in_days" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.keyRefreshIntervalInDays"></a>

```python
key_refresh_interval_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `passcode_length`<sup>Required</sup> <a name="passcode_length" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.passcodeLength"></a>

```python
passcode_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sms_otp_validity_duration_in_mins`<sup>Required</sup> <a name="sms_otp_validity_duration_in_mins" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.smsOtpValidityDurationInMins"></a>

```python
sms_otp_validity_duration_in_mins: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sms_passcode_length`<sup>Required</sup> <a name="sms_passcode_length" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.smsPasscodeLength"></a>

```python
sms_passcode_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_step_in_secs`<sup>Required</sup> <a name="time_step_in_secs" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.timeStepInSecs"></a>

```python
time_step_in_secs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_step_tolerance`<sup>Required</sup> <a name="time_step_tolerance" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.timeStepTolerance"></a>

```python
time_step_tolerance: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsAuthenticationFactorSettingTotpSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings">IdentityDomainsAuthenticationFactorSettingTotpSettings</a>

---


### IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference <a name="IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_authentication_factor_setting

identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.resetDomainValidationLevel">reset_domain_validation_level</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_domain_validation_level` <a name="reset_domain_validation_level" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.resetDomainValidationLevel"></a>

```python
def reset_domain_validation_level() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.attestationInput">attestation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionAttachmentInput">authenticator_selection_attachment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionRequireResidentKeyInput">authenticator_selection_require_resident_key_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionResidentKeyInput">authenticator_selection_resident_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionUserVerificationInput">authenticator_selection_user_verification_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.domainValidationLevelInput">domain_validation_level_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.excludeCredentialsInput">exclude_credentials_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.publicKeyTypesInput">public_key_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.timeoutInput">timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.attestation">attestation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionAttachment">authenticator_selection_attachment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionRequireResidentKey">authenticator_selection_require_resident_key</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionResidentKey">authenticator_selection_resident_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionUserVerification">authenticator_selection_user_verification</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.domainValidationLevel">domain_validation_level</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.excludeCredentials">exclude_credentials</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.publicKeyTypes">public_key_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attestation_input`<sup>Optional</sup> <a name="attestation_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.attestationInput"></a>

```python
attestation_input: str
```

- *Type:* str

---

##### `authenticator_selection_attachment_input`<sup>Optional</sup> <a name="authenticator_selection_attachment_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionAttachmentInput"></a>

```python
authenticator_selection_attachment_input: str
```

- *Type:* str

---

##### `authenticator_selection_require_resident_key_input`<sup>Optional</sup> <a name="authenticator_selection_require_resident_key_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionRequireResidentKeyInput"></a>

```python
authenticator_selection_require_resident_key_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `authenticator_selection_resident_key_input`<sup>Optional</sup> <a name="authenticator_selection_resident_key_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionResidentKeyInput"></a>

```python
authenticator_selection_resident_key_input: str
```

- *Type:* str

---

##### `authenticator_selection_user_verification_input`<sup>Optional</sup> <a name="authenticator_selection_user_verification_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionUserVerificationInput"></a>

```python
authenticator_selection_user_verification_input: str
```

- *Type:* str

---

##### `domain_validation_level_input`<sup>Optional</sup> <a name="domain_validation_level_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.domainValidationLevelInput"></a>

```python
domain_validation_level_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `exclude_credentials_input`<sup>Optional</sup> <a name="exclude_credentials_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.excludeCredentialsInput"></a>

```python
exclude_credentials_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `public_key_types_input`<sup>Optional</sup> <a name="public_key_types_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.publicKeyTypesInput"></a>

```python
public_key_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.timeoutInput"></a>

```python
timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `attestation`<sup>Required</sup> <a name="attestation" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.attestation"></a>

```python
attestation: str
```

- *Type:* str

---

##### `authenticator_selection_attachment`<sup>Required</sup> <a name="authenticator_selection_attachment" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionAttachment"></a>

```python
authenticator_selection_attachment: str
```

- *Type:* str

---

##### `authenticator_selection_require_resident_key`<sup>Required</sup> <a name="authenticator_selection_require_resident_key" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionRequireResidentKey"></a>

```python
authenticator_selection_require_resident_key: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `authenticator_selection_resident_key`<sup>Required</sup> <a name="authenticator_selection_resident_key" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionResidentKey"></a>

```python
authenticator_selection_resident_key: str
```

- *Type:* str

---

##### `authenticator_selection_user_verification`<sup>Required</sup> <a name="authenticator_selection_user_verification" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionUserVerification"></a>

```python
authenticator_selection_user_verification: str
```

- *Type:* str

---

##### `domain_validation_level`<sup>Required</sup> <a name="domain_validation_level" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.domainValidationLevel"></a>

```python
domain_validation_level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `exclude_credentials`<sup>Required</sup> <a name="exclude_credentials" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.excludeCredentials"></a>

```python
exclude_credentials: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `public_key_types`<sup>Required</sup> <a name="public_key_types" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.publicKeyTypes"></a>

```python
public_key_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings</a>

---


### IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference <a name="IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_authentication_factor_setting

identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.resetAttestationKey">reset_attestation_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_attestation_key` <a name="reset_attestation_key" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.resetAttestationKey"></a>

```python
def reset_attestation_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.apiHostnameInput">api_hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.attestationKeyInput">attestation_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.integrationKeyInput">integration_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.secretKeyInput">secret_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.userMappingAttributeInput">user_mapping_attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.apiHostname">api_hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.attestationKey">attestation_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.integrationKey">integration_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.secretKey">secret_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.userMappingAttribute">user_mapping_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_hostname_input`<sup>Optional</sup> <a name="api_hostname_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.apiHostnameInput"></a>

```python
api_hostname_input: str
```

- *Type:* str

---

##### `attestation_key_input`<sup>Optional</sup> <a name="attestation_key_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.attestationKeyInput"></a>

```python
attestation_key_input: str
```

- *Type:* str

---

##### `integration_key_input`<sup>Optional</sup> <a name="integration_key_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.integrationKeyInput"></a>

```python
integration_key_input: str
```

- *Type:* str

---

##### `secret_key_input`<sup>Optional</sup> <a name="secret_key_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.secretKeyInput"></a>

```python
secret_key_input: str
```

- *Type:* str

---

##### `user_mapping_attribute_input`<sup>Optional</sup> <a name="user_mapping_attribute_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.userMappingAttributeInput"></a>

```python
user_mapping_attribute_input: str
```

- *Type:* str

---

##### `api_hostname`<sup>Required</sup> <a name="api_hostname" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.apiHostname"></a>

```python
api_hostname: str
```

- *Type:* str

---

##### `attestation_key`<sup>Required</sup> <a name="attestation_key" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.attestationKey"></a>

```python
attestation_key: str
```

- *Type:* str

---

##### `integration_key`<sup>Required</sup> <a name="integration_key" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.integrationKey"></a>

```python
integration_key: str
```

- *Type:* str

---

##### `secret_key`<sup>Required</sup> <a name="secret_key" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.secretKey"></a>

```python
secret_key: str
```

- *Type:* str

---

##### `user_mapping_attribute`<sup>Required</sup> <a name="user_mapping_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.userMappingAttribute"></a>

```python
user_mapping_attribute: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings</a>

---


### IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference <a name="IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_authentication_factor_setting

identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.putDuoSecuritySettings">put_duo_security_settings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.resetDuoSecuritySettings">reset_duo_security_settings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_duo_security_settings` <a name="put_duo_security_settings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.putDuoSecuritySettings"></a>

```python
def put_duo_security_settings(
  api_hostname: str,
  integration_key: str,
  secret_key: str,
  user_mapping_attribute: str,
  attestation_key: str = None
) -> None
```

###### `api_hostname`<sup>Required</sup> <a name="api_hostname" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.putDuoSecuritySettings.parameter.apiHostname"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#api_hostname IdentityDomainsAuthenticationFactorSetting#api_hostname}.

---

###### `integration_key`<sup>Required</sup> <a name="integration_key" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.putDuoSecuritySettings.parameter.integrationKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#integration_key IdentityDomainsAuthenticationFactorSetting#integration_key}.

---

###### `secret_key`<sup>Required</sup> <a name="secret_key" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.putDuoSecuritySettings.parameter.secretKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#secret_key IdentityDomainsAuthenticationFactorSetting#secret_key}.

---

###### `user_mapping_attribute`<sup>Required</sup> <a name="user_mapping_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.putDuoSecuritySettings.parameter.userMappingAttribute"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#user_mapping_attribute IdentityDomainsAuthenticationFactorSetting#user_mapping_attribute}.

---

###### `attestation_key`<sup>Optional</sup> <a name="attestation_key" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.putDuoSecuritySettings.parameter.attestationKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#attestation_key IdentityDomainsAuthenticationFactorSetting#attestation_key}.

---

##### `reset_duo_security_settings` <a name="reset_duo_security_settings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.resetDuoSecuritySettings"></a>

```python
def reset_duo_security_settings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.property.duoSecuritySettings">duo_security_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.property.duoSecuritySettingsInput">duo_security_settings_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `duo_security_settings`<sup>Required</sup> <a name="duo_security_settings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.property.duoSecuritySettings"></a>

```python
duo_security_settings: IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference</a>

---

##### `duo_security_settings_input`<sup>Optional</sup> <a name="duo_security_settings_input" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.property.duoSecuritySettingsInput"></a>

```python
duo_security_settings_input: IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings</a>

---



