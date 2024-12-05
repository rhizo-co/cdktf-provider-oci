# `identityDomainsSetting` Submodule <a name="`identityDomainsSetting` Submodule" id="rhizo-co-terraform-provider-oci.identityDomainsSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityDomainsSetting <a name="IdentityDomainsSetting" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting oci_identity_domains_setting}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_setting

identityDomainsSetting.IdentityDomainsSetting(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  csr_access: str,
  idcs_endpoint: str,
  schemas: typing.List[str],
  setting_id: str,
  account_always_trust_scope: typing.Union[bool, IResolvable] = None,
  allowed_domains: typing.List[str] = None,
  allowed_forgot_password_flow_return_urls: typing.List[str] = None,
  allowed_notification_redirect_urls: typing.List[str] = None,
  attributes: str = None,
  attribute_sets: typing.List[str] = None,
  audit_event_retention_period: typing.Union[int, float] = None,
  authorization: str = None,
  certificate_validation: IdentityDomainsSettingCertificateValidation = None,
  cloud_gate_cors_settings: IdentityDomainsSettingCloudGateCorsSettings = None,
  cloud_migration_custom_url: str = None,
  cloud_migration_url_enabled: typing.Union[bool, IResolvable] = None,
  company_names: typing.Union[IResolvable, typing.List[IdentityDomainsSettingCompanyNames]] = None,
  contact_emails: typing.List[str] = None,
  custom_branding: typing.Union[bool, IResolvable] = None,
  custom_css_location: str = None,
  custom_html_location: str = None,
  custom_translation: str = None,
  default_trust_scope: str = None,
  diagnostic_level: typing.Union[int, float] = None,
  diagnostic_record_for_search_identifies_returned_resources: typing.Union[bool, IResolvable] = None,
  enable_terms_of_use: typing.Union[bool, IResolvable] = None,
  external_id: str = None,
  iam_upst_session_expiry: typing.Union[int, float] = None,
  id: str = None,
  images: typing.Union[IResolvable, typing.List[IdentityDomainsSettingImages]] = None,
  is_hosted_page: typing.Union[bool, IResolvable] = None,
  issuer: str = None,
  locale: str = None,
  login_texts: typing.Union[IResolvable, typing.List[IdentityDomainsSettingLoginTexts]] = None,
  max_no_of_app_cmva_to_return: typing.Union[int, float] = None,
  max_no_of_app_role_members_to_return: typing.Union[int, float] = None,
  ocid: str = None,
  preferred_language: str = None,
  prev_issuer: str = None,
  privacy_policy_url: str = None,
  purge_configs: typing.Union[IResolvable, typing.List[IdentityDomainsSettingPurgeConfigs]] = None,
  re_auth_factor: typing.List[str] = None,
  re_auth_when_changing_my_authentication_factors: typing.Union[bool, IResolvable] = None,
  resource_type_schema_version: str = None,
  service_admin_cannot_list_other_users: typing.Union[bool, IResolvable] = None,
  signing_cert_public_access: typing.Union[bool, IResolvable] = None,
  sub_mapping_attr: str = None,
  tags: typing.Union[IResolvable, typing.List[IdentityDomainsSettingTags]] = None,
  tenant_custom_claims: typing.Union[IResolvable, typing.List[IdentityDomainsSettingTenantCustomClaims]] = None,
  terms_of_use_url: str = None,
  timeouts: IdentityDomainsSettingTimeouts = None,
  timezone: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.csrAccess">csr_access</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#csr_access IdentityDomainsSetting#csr_access}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#idcs_endpoint IdentityDomainsSetting#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.schemas">schemas</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#schemas IdentityDomainsSetting#schemas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.settingId">setting_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#setting_id IdentityDomainsSetting#setting_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.accountAlwaysTrustScope">account_always_trust_scope</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#account_always_trust_scope IdentityDomainsSetting#account_always_trust_scope}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.allowedDomains">allowed_domains</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#allowed_domains IdentityDomainsSetting#allowed_domains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.allowedForgotPasswordFlowReturnUrls">allowed_forgot_password_flow_return_urls</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#allowed_forgot_password_flow_return_urls IdentityDomainsSetting#allowed_forgot_password_flow_return_urls}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.allowedNotificationRedirectUrls">allowed_notification_redirect_urls</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#allowed_notification_redirect_urls IdentityDomainsSetting#allowed_notification_redirect_urls}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.attributes">attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#attributes IdentityDomainsSetting#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#attribute_sets IdentityDomainsSetting#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.auditEventRetentionPeriod">audit_event_retention_period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#audit_event_retention_period IdentityDomainsSetting#audit_event_retention_period}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#authorization IdentityDomainsSetting#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.certificateValidation">certificate_validation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation">IdentityDomainsSettingCertificateValidation</a></code> | certificate_validation block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.cloudGateCorsSettings">cloud_gate_cors_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings">IdentityDomainsSettingCloudGateCorsSettings</a></code> | cloud_gate_cors_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.cloudMigrationCustomUrl">cloud_migration_custom_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#cloud_migration_custom_url IdentityDomainsSetting#cloud_migration_custom_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.cloudMigrationUrlEnabled">cloud_migration_url_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#cloud_migration_url_enabled IdentityDomainsSetting#cloud_migration_url_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.companyNames">company_names</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNames">IdentityDomainsSettingCompanyNames</a>]]</code> | company_names block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.contactEmails">contact_emails</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#contact_emails IdentityDomainsSetting#contact_emails}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.customBranding">custom_branding</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#custom_branding IdentityDomainsSetting#custom_branding}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.customCssLocation">custom_css_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#custom_css_location IdentityDomainsSetting#custom_css_location}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.customHtmlLocation">custom_html_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#custom_html_location IdentityDomainsSetting#custom_html_location}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.customTranslation">custom_translation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#custom_translation IdentityDomainsSetting#custom_translation}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.defaultTrustScope">default_trust_scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#default_trust_scope IdentityDomainsSetting#default_trust_scope}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.diagnosticLevel">diagnostic_level</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#diagnostic_level IdentityDomainsSetting#diagnostic_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.diagnosticRecordForSearchIdentifiesReturnedResources">diagnostic_record_for_search_identifies_returned_resources</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#diagnostic_record_for_search_identifies_returned_resources IdentityDomainsSetting#diagnostic_record_for_search_identifies_returned_resources}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.enableTermsOfUse">enable_terms_of_use</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#enable_terms_of_use IdentityDomainsSetting#enable_terms_of_use}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.externalId">external_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#external_id IdentityDomainsSetting#external_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.iamUpstSessionExpiry">iam_upst_session_expiry</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#iam_upst_session_expiry IdentityDomainsSetting#iam_upst_session_expiry}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#id IdentityDomainsSetting#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.images">images</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImages">IdentityDomainsSettingImages</a>]]</code> | images block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.isHostedPage">is_hosted_page</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#is_hosted_page IdentityDomainsSetting#is_hosted_page}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.issuer">issuer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#issuer IdentityDomainsSetting#issuer}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.locale">locale</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#locale IdentityDomainsSetting#locale}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.loginTexts">login_texts</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTexts">IdentityDomainsSettingLoginTexts</a>]]</code> | login_texts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.maxNoOfAppCmvaToReturn">max_no_of_app_cmva_to_return</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#max_no_of_app_cmva_to_return IdentityDomainsSetting#max_no_of_app_cmva_to_return}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.maxNoOfAppRoleMembersToReturn">max_no_of_app_role_members_to_return</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#max_no_of_app_role_members_to_return IdentityDomainsSetting#max_no_of_app_role_members_to_return}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.ocid">ocid</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#ocid IdentityDomainsSetting#ocid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.preferredLanguage">preferred_language</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#preferred_language IdentityDomainsSetting#preferred_language}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.prevIssuer">prev_issuer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#prev_issuer IdentityDomainsSetting#prev_issuer}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.privacyPolicyUrl">privacy_policy_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#privacy_policy_url IdentityDomainsSetting#privacy_policy_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.purgeConfigs">purge_configs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigs">IdentityDomainsSettingPurgeConfigs</a>]]</code> | purge_configs block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.reAuthFactor">re_auth_factor</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#re_auth_factor IdentityDomainsSetting#re_auth_factor}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.reAuthWhenChangingMyAuthenticationFactors">re_auth_when_changing_my_authentication_factors</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#re_auth_when_changing_my_authentication_factors IdentityDomainsSetting#re_auth_when_changing_my_authentication_factors}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#resource_type_schema_version IdentityDomainsSetting#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.serviceAdminCannotListOtherUsers">service_admin_cannot_list_other_users</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#service_admin_cannot_list_other_users IdentityDomainsSetting#service_admin_cannot_list_other_users}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.signingCertPublicAccess">signing_cert_public_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#signing_cert_public_access IdentityDomainsSetting#signing_cert_public_access}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.subMappingAttr">sub_mapping_attr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#sub_mapping_attr IdentityDomainsSetting#sub_mapping_attr}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.tags">tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTags">IdentityDomainsSettingTags</a>]]</code> | tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.tenantCustomClaims">tenant_custom_claims</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims">IdentityDomainsSettingTenantCustomClaims</a>]]</code> | tenant_custom_claims block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.termsOfUseUrl">terms_of_use_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#terms_of_use_url IdentityDomainsSetting#terms_of_use_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeouts">IdentityDomainsSettingTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.timezone">timezone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#timezone IdentityDomainsSetting#timezone}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `csr_access`<sup>Required</sup> <a name="csr_access" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.csrAccess"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#csr_access IdentityDomainsSetting#csr_access}.

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.idcsEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#idcs_endpoint IdentityDomainsSetting#idcs_endpoint}.

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.schemas"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#schemas IdentityDomainsSetting#schemas}.

---

##### `setting_id`<sup>Required</sup> <a name="setting_id" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.settingId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#setting_id IdentityDomainsSetting#setting_id}.

---

##### `account_always_trust_scope`<sup>Optional</sup> <a name="account_always_trust_scope" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.accountAlwaysTrustScope"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#account_always_trust_scope IdentityDomainsSetting#account_always_trust_scope}.

---

##### `allowed_domains`<sup>Optional</sup> <a name="allowed_domains" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.allowedDomains"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#allowed_domains IdentityDomainsSetting#allowed_domains}.

---

##### `allowed_forgot_password_flow_return_urls`<sup>Optional</sup> <a name="allowed_forgot_password_flow_return_urls" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.allowedForgotPasswordFlowReturnUrls"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#allowed_forgot_password_flow_return_urls IdentityDomainsSetting#allowed_forgot_password_flow_return_urls}.

---

##### `allowed_notification_redirect_urls`<sup>Optional</sup> <a name="allowed_notification_redirect_urls" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.allowedNotificationRedirectUrls"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#allowed_notification_redirect_urls IdentityDomainsSetting#allowed_notification_redirect_urls}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.attributes"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#attributes IdentityDomainsSetting#attributes}.

---

##### `attribute_sets`<sup>Optional</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.attributeSets"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#attribute_sets IdentityDomainsSetting#attribute_sets}.

---

##### `audit_event_retention_period`<sup>Optional</sup> <a name="audit_event_retention_period" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.auditEventRetentionPeriod"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#audit_event_retention_period IdentityDomainsSetting#audit_event_retention_period}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.authorization"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#authorization IdentityDomainsSetting#authorization}.

---

##### `certificate_validation`<sup>Optional</sup> <a name="certificate_validation" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.certificateValidation"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation">IdentityDomainsSettingCertificateValidation</a>

certificate_validation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#certificate_validation IdentityDomainsSetting#certificate_validation}

---

##### `cloud_gate_cors_settings`<sup>Optional</sup> <a name="cloud_gate_cors_settings" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.cloudGateCorsSettings"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings">IdentityDomainsSettingCloudGateCorsSettings</a>

cloud_gate_cors_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#cloud_gate_cors_settings IdentityDomainsSetting#cloud_gate_cors_settings}

---

##### `cloud_migration_custom_url`<sup>Optional</sup> <a name="cloud_migration_custom_url" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.cloudMigrationCustomUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#cloud_migration_custom_url IdentityDomainsSetting#cloud_migration_custom_url}.

---

##### `cloud_migration_url_enabled`<sup>Optional</sup> <a name="cloud_migration_url_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.cloudMigrationUrlEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#cloud_migration_url_enabled IdentityDomainsSetting#cloud_migration_url_enabled}.

---

##### `company_names`<sup>Optional</sup> <a name="company_names" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.companyNames"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNames">IdentityDomainsSettingCompanyNames</a>]]

company_names block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#company_names IdentityDomainsSetting#company_names}

---

##### `contact_emails`<sup>Optional</sup> <a name="contact_emails" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.contactEmails"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#contact_emails IdentityDomainsSetting#contact_emails}.

---

##### `custom_branding`<sup>Optional</sup> <a name="custom_branding" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.customBranding"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#custom_branding IdentityDomainsSetting#custom_branding}.

---

##### `custom_css_location`<sup>Optional</sup> <a name="custom_css_location" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.customCssLocation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#custom_css_location IdentityDomainsSetting#custom_css_location}.

---

##### `custom_html_location`<sup>Optional</sup> <a name="custom_html_location" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.customHtmlLocation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#custom_html_location IdentityDomainsSetting#custom_html_location}.

---

##### `custom_translation`<sup>Optional</sup> <a name="custom_translation" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.customTranslation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#custom_translation IdentityDomainsSetting#custom_translation}.

---

##### `default_trust_scope`<sup>Optional</sup> <a name="default_trust_scope" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.defaultTrustScope"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#default_trust_scope IdentityDomainsSetting#default_trust_scope}.

---

##### `diagnostic_level`<sup>Optional</sup> <a name="diagnostic_level" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.diagnosticLevel"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#diagnostic_level IdentityDomainsSetting#diagnostic_level}.

---

##### `diagnostic_record_for_search_identifies_returned_resources`<sup>Optional</sup> <a name="diagnostic_record_for_search_identifies_returned_resources" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.diagnosticRecordForSearchIdentifiesReturnedResources"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#diagnostic_record_for_search_identifies_returned_resources IdentityDomainsSetting#diagnostic_record_for_search_identifies_returned_resources}.

---

##### `enable_terms_of_use`<sup>Optional</sup> <a name="enable_terms_of_use" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.enableTermsOfUse"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#enable_terms_of_use IdentityDomainsSetting#enable_terms_of_use}.

---

##### `external_id`<sup>Optional</sup> <a name="external_id" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.externalId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#external_id IdentityDomainsSetting#external_id}.

---

##### `iam_upst_session_expiry`<sup>Optional</sup> <a name="iam_upst_session_expiry" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.iamUpstSessionExpiry"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#iam_upst_session_expiry IdentityDomainsSetting#iam_upst_session_expiry}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#id IdentityDomainsSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `images`<sup>Optional</sup> <a name="images" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.images"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImages">IdentityDomainsSettingImages</a>]]

images block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#images IdentityDomainsSetting#images}

---

##### `is_hosted_page`<sup>Optional</sup> <a name="is_hosted_page" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.isHostedPage"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#is_hosted_page IdentityDomainsSetting#is_hosted_page}.

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.issuer"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#issuer IdentityDomainsSetting#issuer}.

---

##### `locale`<sup>Optional</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.locale"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#locale IdentityDomainsSetting#locale}.

---

##### `login_texts`<sup>Optional</sup> <a name="login_texts" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.loginTexts"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTexts">IdentityDomainsSettingLoginTexts</a>]]

login_texts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#login_texts IdentityDomainsSetting#login_texts}

---

##### `max_no_of_app_cmva_to_return`<sup>Optional</sup> <a name="max_no_of_app_cmva_to_return" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.maxNoOfAppCmvaToReturn"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#max_no_of_app_cmva_to_return IdentityDomainsSetting#max_no_of_app_cmva_to_return}.

---

##### `max_no_of_app_role_members_to_return`<sup>Optional</sup> <a name="max_no_of_app_role_members_to_return" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.maxNoOfAppRoleMembersToReturn"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#max_no_of_app_role_members_to_return IdentityDomainsSetting#max_no_of_app_role_members_to_return}.

---

##### `ocid`<sup>Optional</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.ocid"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#ocid IdentityDomainsSetting#ocid}.

---

##### `preferred_language`<sup>Optional</sup> <a name="preferred_language" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.preferredLanguage"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#preferred_language IdentityDomainsSetting#preferred_language}.

---

##### `prev_issuer`<sup>Optional</sup> <a name="prev_issuer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.prevIssuer"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#prev_issuer IdentityDomainsSetting#prev_issuer}.

---

##### `privacy_policy_url`<sup>Optional</sup> <a name="privacy_policy_url" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.privacyPolicyUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#privacy_policy_url IdentityDomainsSetting#privacy_policy_url}.

---

##### `purge_configs`<sup>Optional</sup> <a name="purge_configs" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.purgeConfigs"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigs">IdentityDomainsSettingPurgeConfigs</a>]]

purge_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#purge_configs IdentityDomainsSetting#purge_configs}

---

##### `re_auth_factor`<sup>Optional</sup> <a name="re_auth_factor" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.reAuthFactor"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#re_auth_factor IdentityDomainsSetting#re_auth_factor}.

---

##### `re_auth_when_changing_my_authentication_factors`<sup>Optional</sup> <a name="re_auth_when_changing_my_authentication_factors" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.reAuthWhenChangingMyAuthenticationFactors"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#re_auth_when_changing_my_authentication_factors IdentityDomainsSetting#re_auth_when_changing_my_authentication_factors}.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.resourceTypeSchemaVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#resource_type_schema_version IdentityDomainsSetting#resource_type_schema_version}.

---

##### `service_admin_cannot_list_other_users`<sup>Optional</sup> <a name="service_admin_cannot_list_other_users" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.serviceAdminCannotListOtherUsers"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#service_admin_cannot_list_other_users IdentityDomainsSetting#service_admin_cannot_list_other_users}.

---

##### `signing_cert_public_access`<sup>Optional</sup> <a name="signing_cert_public_access" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.signingCertPublicAccess"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#signing_cert_public_access IdentityDomainsSetting#signing_cert_public_access}.

---

##### `sub_mapping_attr`<sup>Optional</sup> <a name="sub_mapping_attr" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.subMappingAttr"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#sub_mapping_attr IdentityDomainsSetting#sub_mapping_attr}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.tags"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTags">IdentityDomainsSettingTags</a>]]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#tags IdentityDomainsSetting#tags}

---

##### `tenant_custom_claims`<sup>Optional</sup> <a name="tenant_custom_claims" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.tenantCustomClaims"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims">IdentityDomainsSettingTenantCustomClaims</a>]]

tenant_custom_claims block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#tenant_custom_claims IdentityDomainsSetting#tenant_custom_claims}

---

##### `terms_of_use_url`<sup>Optional</sup> <a name="terms_of_use_url" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.termsOfUseUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#terms_of_use_url IdentityDomainsSetting#terms_of_use_url}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeouts">IdentityDomainsSettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#timeouts IdentityDomainsSetting#timeouts}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.timezone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#timezone IdentityDomainsSetting#timezone}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putCertificateValidation">put_certificate_validation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putCloudGateCorsSettings">put_cloud_gate_cors_settings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putCompanyNames">put_company_names</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putImages">put_images</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putLoginTexts">put_login_texts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putPurgeConfigs">put_purge_configs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putTenantCustomClaims">put_tenant_custom_claims</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetAccountAlwaysTrustScope">reset_account_always_trust_scope</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetAllowedDomains">reset_allowed_domains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetAllowedForgotPasswordFlowReturnUrls">reset_allowed_forgot_password_flow_return_urls</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetAllowedNotificationRedirectUrls">reset_allowed_notification_redirect_urls</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetAttributes">reset_attributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetAttributeSets">reset_attribute_sets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetAuditEventRetentionPeriod">reset_audit_event_retention_period</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetAuthorization">reset_authorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetCertificateValidation">reset_certificate_validation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetCloudGateCorsSettings">reset_cloud_gate_cors_settings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetCloudMigrationCustomUrl">reset_cloud_migration_custom_url</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetCloudMigrationUrlEnabled">reset_cloud_migration_url_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetCompanyNames">reset_company_names</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetContactEmails">reset_contact_emails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetCustomBranding">reset_custom_branding</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetCustomCssLocation">reset_custom_css_location</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetCustomHtmlLocation">reset_custom_html_location</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetCustomTranslation">reset_custom_translation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetDefaultTrustScope">reset_default_trust_scope</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetDiagnosticLevel">reset_diagnostic_level</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetDiagnosticRecordForSearchIdentifiesReturnedResources">reset_diagnostic_record_for_search_identifies_returned_resources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetEnableTermsOfUse">reset_enable_terms_of_use</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetExternalId">reset_external_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetIamUpstSessionExpiry">reset_iam_upst_session_expiry</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetImages">reset_images</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetIsHostedPage">reset_is_hosted_page</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetIssuer">reset_issuer</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetLocale">reset_locale</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetLoginTexts">reset_login_texts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetMaxNoOfAppCmvaToReturn">reset_max_no_of_app_cmva_to_return</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetMaxNoOfAppRoleMembersToReturn">reset_max_no_of_app_role_members_to_return</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetOcid">reset_ocid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetPreferredLanguage">reset_preferred_language</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetPrevIssuer">reset_prev_issuer</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetPrivacyPolicyUrl">reset_privacy_policy_url</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetPurgeConfigs">reset_purge_configs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetReAuthFactor">reset_re_auth_factor</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetReAuthWhenChangingMyAuthenticationFactors">reset_re_auth_when_changing_my_authentication_factors</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetResourceTypeSchemaVersion">reset_resource_type_schema_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetServiceAdminCannotListOtherUsers">reset_service_admin_cannot_list_other_users</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetSigningCertPublicAccess">reset_signing_cert_public_access</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetSubMappingAttr">reset_sub_mapping_attr</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetTenantCustomClaims">reset_tenant_custom_claims</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetTermsOfUseUrl">reset_terms_of_use_url</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetTimezone">reset_timezone</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_certificate_validation` <a name="put_certificate_validation" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putCertificateValidation"></a>

```python
def put_certificate_validation(
  crl_check_on_ocsp_failure_enabled: typing.Union[bool, IResolvable] = None,
  crl_enabled: typing.Union[bool, IResolvable] = None,
  crl_location: str = None,
  crl_refresh_interval: typing.Union[int, float] = None,
  ocsp_enabled: typing.Union[bool, IResolvable] = None,
  ocsp_responder_url: str = None,
  ocsp_settings_responder_url_preferred: typing.Union[bool, IResolvable] = None,
  ocsp_signing_certificate_alias: str = None,
  ocsp_timeout_duration: typing.Union[int, float] = None,
  ocsp_unknown_response_status_allowed: typing.Union[bool, IResolvable] = None
) -> None
```

###### `crl_check_on_ocsp_failure_enabled`<sup>Optional</sup> <a name="crl_check_on_ocsp_failure_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putCertificateValidation.parameter.crlCheckOnOcspFailureEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#crl_check_on_ocsp_failure_enabled IdentityDomainsSetting#crl_check_on_ocsp_failure_enabled}.

---

###### `crl_enabled`<sup>Optional</sup> <a name="crl_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putCertificateValidation.parameter.crlEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#crl_enabled IdentityDomainsSetting#crl_enabled}.

---

###### `crl_location`<sup>Optional</sup> <a name="crl_location" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putCertificateValidation.parameter.crlLocation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#crl_location IdentityDomainsSetting#crl_location}.

---

###### `crl_refresh_interval`<sup>Optional</sup> <a name="crl_refresh_interval" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putCertificateValidation.parameter.crlRefreshInterval"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#crl_refresh_interval IdentityDomainsSetting#crl_refresh_interval}.

---

###### `ocsp_enabled`<sup>Optional</sup> <a name="ocsp_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putCertificateValidation.parameter.ocspEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#ocsp_enabled IdentityDomainsSetting#ocsp_enabled}.

---

###### `ocsp_responder_url`<sup>Optional</sup> <a name="ocsp_responder_url" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putCertificateValidation.parameter.ocspResponderUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#ocsp_responder_url IdentityDomainsSetting#ocsp_responder_url}.

---

###### `ocsp_settings_responder_url_preferred`<sup>Optional</sup> <a name="ocsp_settings_responder_url_preferred" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putCertificateValidation.parameter.ocspSettingsResponderUrlPreferred"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#ocsp_settings_responder_url_preferred IdentityDomainsSetting#ocsp_settings_responder_url_preferred}.

---

###### `ocsp_signing_certificate_alias`<sup>Optional</sup> <a name="ocsp_signing_certificate_alias" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putCertificateValidation.parameter.ocspSigningCertificateAlias"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#ocsp_signing_certificate_alias IdentityDomainsSetting#ocsp_signing_certificate_alias}.

---

###### `ocsp_timeout_duration`<sup>Optional</sup> <a name="ocsp_timeout_duration" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putCertificateValidation.parameter.ocspTimeoutDuration"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#ocsp_timeout_duration IdentityDomainsSetting#ocsp_timeout_duration}.

---

###### `ocsp_unknown_response_status_allowed`<sup>Optional</sup> <a name="ocsp_unknown_response_status_allowed" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putCertificateValidation.parameter.ocspUnknownResponseStatusAllowed"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#ocsp_unknown_response_status_allowed IdentityDomainsSetting#ocsp_unknown_response_status_allowed}.

---

##### `put_cloud_gate_cors_settings` <a name="put_cloud_gate_cors_settings" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putCloudGateCorsSettings"></a>

```python
def put_cloud_gate_cors_settings(
  cloud_gate_cors_allowed_origins: typing.List[str] = None,
  cloud_gate_cors_allow_null_origin: typing.Union[bool, IResolvable] = None,
  cloud_gate_cors_enabled: typing.Union[bool, IResolvable] = None,
  cloud_gate_cors_exposed_headers: typing.List[str] = None,
  cloud_gate_cors_max_age: typing.Union[int, float] = None
) -> None
```

###### `cloud_gate_cors_allowed_origins`<sup>Optional</sup> <a name="cloud_gate_cors_allowed_origins" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putCloudGateCorsSettings.parameter.cloudGateCorsAllowedOrigins"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#cloud_gate_cors_allowed_origins IdentityDomainsSetting#cloud_gate_cors_allowed_origins}.

---

###### `cloud_gate_cors_allow_null_origin`<sup>Optional</sup> <a name="cloud_gate_cors_allow_null_origin" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putCloudGateCorsSettings.parameter.cloudGateCorsAllowNullOrigin"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#cloud_gate_cors_allow_null_origin IdentityDomainsSetting#cloud_gate_cors_allow_null_origin}.

---

###### `cloud_gate_cors_enabled`<sup>Optional</sup> <a name="cloud_gate_cors_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putCloudGateCorsSettings.parameter.cloudGateCorsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#cloud_gate_cors_enabled IdentityDomainsSetting#cloud_gate_cors_enabled}.

---

###### `cloud_gate_cors_exposed_headers`<sup>Optional</sup> <a name="cloud_gate_cors_exposed_headers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putCloudGateCorsSettings.parameter.cloudGateCorsExposedHeaders"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#cloud_gate_cors_exposed_headers IdentityDomainsSetting#cloud_gate_cors_exposed_headers}.

---

###### `cloud_gate_cors_max_age`<sup>Optional</sup> <a name="cloud_gate_cors_max_age" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putCloudGateCorsSettings.parameter.cloudGateCorsMaxAge"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#cloud_gate_cors_max_age IdentityDomainsSetting#cloud_gate_cors_max_age}.

---

##### `put_company_names` <a name="put_company_names" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putCompanyNames"></a>

```python
def put_company_names(
  value: typing.Union[IResolvable, typing.List[IdentityDomainsSettingCompanyNames]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putCompanyNames.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNames">IdentityDomainsSettingCompanyNames</a>]]

---

##### `put_images` <a name="put_images" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putImages"></a>

```python
def put_images(
  value: typing.Union[IResolvable, typing.List[IdentityDomainsSettingImages]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putImages.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImages">IdentityDomainsSettingImages</a>]]

---

##### `put_login_texts` <a name="put_login_texts" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putLoginTexts"></a>

```python
def put_login_texts(
  value: typing.Union[IResolvable, typing.List[IdentityDomainsSettingLoginTexts]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putLoginTexts.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTexts">IdentityDomainsSettingLoginTexts</a>]]

---

##### `put_purge_configs` <a name="put_purge_configs" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putPurgeConfigs"></a>

```python
def put_purge_configs(
  value: typing.Union[IResolvable, typing.List[IdentityDomainsSettingPurgeConfigs]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putPurgeConfigs.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigs">IdentityDomainsSettingPurgeConfigs</a>]]

---

##### `put_tags` <a name="put_tags" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putTags"></a>

```python
def put_tags(
  value: typing.Union[IResolvable, typing.List[IdentityDomainsSettingTags]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putTags.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTags">IdentityDomainsSettingTags</a>]]

---

##### `put_tenant_custom_claims` <a name="put_tenant_custom_claims" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putTenantCustomClaims"></a>

```python
def put_tenant_custom_claims(
  value: typing.Union[IResolvable, typing.List[IdentityDomainsSettingTenantCustomClaims]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putTenantCustomClaims.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims">IdentityDomainsSettingTenantCustomClaims</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#create IdentityDomainsSetting#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#delete IdentityDomainsSetting#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#update IdentityDomainsSetting#update}.

---

##### `reset_account_always_trust_scope` <a name="reset_account_always_trust_scope" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetAccountAlwaysTrustScope"></a>

```python
def reset_account_always_trust_scope() -> None
```

##### `reset_allowed_domains` <a name="reset_allowed_domains" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetAllowedDomains"></a>

```python
def reset_allowed_domains() -> None
```

##### `reset_allowed_forgot_password_flow_return_urls` <a name="reset_allowed_forgot_password_flow_return_urls" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetAllowedForgotPasswordFlowReturnUrls"></a>

```python
def reset_allowed_forgot_password_flow_return_urls() -> None
```

##### `reset_allowed_notification_redirect_urls` <a name="reset_allowed_notification_redirect_urls" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetAllowedNotificationRedirectUrls"></a>

```python
def reset_allowed_notification_redirect_urls() -> None
```

##### `reset_attributes` <a name="reset_attributes" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetAttributes"></a>

```python
def reset_attributes() -> None
```

##### `reset_attribute_sets` <a name="reset_attribute_sets" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetAttributeSets"></a>

```python
def reset_attribute_sets() -> None
```

##### `reset_audit_event_retention_period` <a name="reset_audit_event_retention_period" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetAuditEventRetentionPeriod"></a>

```python
def reset_audit_event_retention_period() -> None
```

##### `reset_authorization` <a name="reset_authorization" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetAuthorization"></a>

```python
def reset_authorization() -> None
```

##### `reset_certificate_validation` <a name="reset_certificate_validation" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetCertificateValidation"></a>

```python
def reset_certificate_validation() -> None
```

##### `reset_cloud_gate_cors_settings` <a name="reset_cloud_gate_cors_settings" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetCloudGateCorsSettings"></a>

```python
def reset_cloud_gate_cors_settings() -> None
```

##### `reset_cloud_migration_custom_url` <a name="reset_cloud_migration_custom_url" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetCloudMigrationCustomUrl"></a>

```python
def reset_cloud_migration_custom_url() -> None
```

##### `reset_cloud_migration_url_enabled` <a name="reset_cloud_migration_url_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetCloudMigrationUrlEnabled"></a>

```python
def reset_cloud_migration_url_enabled() -> None
```

##### `reset_company_names` <a name="reset_company_names" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetCompanyNames"></a>

```python
def reset_company_names() -> None
```

##### `reset_contact_emails` <a name="reset_contact_emails" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetContactEmails"></a>

```python
def reset_contact_emails() -> None
```

##### `reset_custom_branding` <a name="reset_custom_branding" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetCustomBranding"></a>

```python
def reset_custom_branding() -> None
```

##### `reset_custom_css_location` <a name="reset_custom_css_location" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetCustomCssLocation"></a>

```python
def reset_custom_css_location() -> None
```

##### `reset_custom_html_location` <a name="reset_custom_html_location" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetCustomHtmlLocation"></a>

```python
def reset_custom_html_location() -> None
```

##### `reset_custom_translation` <a name="reset_custom_translation" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetCustomTranslation"></a>

```python
def reset_custom_translation() -> None
```

##### `reset_default_trust_scope` <a name="reset_default_trust_scope" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetDefaultTrustScope"></a>

```python
def reset_default_trust_scope() -> None
```

##### `reset_diagnostic_level` <a name="reset_diagnostic_level" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetDiagnosticLevel"></a>

```python
def reset_diagnostic_level() -> None
```

##### `reset_diagnostic_record_for_search_identifies_returned_resources` <a name="reset_diagnostic_record_for_search_identifies_returned_resources" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetDiagnosticRecordForSearchIdentifiesReturnedResources"></a>

```python
def reset_diagnostic_record_for_search_identifies_returned_resources() -> None
```

##### `reset_enable_terms_of_use` <a name="reset_enable_terms_of_use" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetEnableTermsOfUse"></a>

```python
def reset_enable_terms_of_use() -> None
```

##### `reset_external_id` <a name="reset_external_id" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetExternalId"></a>

```python
def reset_external_id() -> None
```

##### `reset_iam_upst_session_expiry` <a name="reset_iam_upst_session_expiry" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetIamUpstSessionExpiry"></a>

```python
def reset_iam_upst_session_expiry() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_images` <a name="reset_images" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetImages"></a>

```python
def reset_images() -> None
```

##### `reset_is_hosted_page` <a name="reset_is_hosted_page" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetIsHostedPage"></a>

```python
def reset_is_hosted_page() -> None
```

##### `reset_issuer` <a name="reset_issuer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetIssuer"></a>

```python
def reset_issuer() -> None
```

##### `reset_locale` <a name="reset_locale" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetLocale"></a>

```python
def reset_locale() -> None
```

##### `reset_login_texts` <a name="reset_login_texts" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetLoginTexts"></a>

```python
def reset_login_texts() -> None
```

##### `reset_max_no_of_app_cmva_to_return` <a name="reset_max_no_of_app_cmva_to_return" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetMaxNoOfAppCmvaToReturn"></a>

```python
def reset_max_no_of_app_cmva_to_return() -> None
```

##### `reset_max_no_of_app_role_members_to_return` <a name="reset_max_no_of_app_role_members_to_return" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetMaxNoOfAppRoleMembersToReturn"></a>

```python
def reset_max_no_of_app_role_members_to_return() -> None
```

##### `reset_ocid` <a name="reset_ocid" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetOcid"></a>

```python
def reset_ocid() -> None
```

##### `reset_preferred_language` <a name="reset_preferred_language" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetPreferredLanguage"></a>

```python
def reset_preferred_language() -> None
```

##### `reset_prev_issuer` <a name="reset_prev_issuer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetPrevIssuer"></a>

```python
def reset_prev_issuer() -> None
```

##### `reset_privacy_policy_url` <a name="reset_privacy_policy_url" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetPrivacyPolicyUrl"></a>

```python
def reset_privacy_policy_url() -> None
```

##### `reset_purge_configs` <a name="reset_purge_configs" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetPurgeConfigs"></a>

```python
def reset_purge_configs() -> None
```

##### `reset_re_auth_factor` <a name="reset_re_auth_factor" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetReAuthFactor"></a>

```python
def reset_re_auth_factor() -> None
```

##### `reset_re_auth_when_changing_my_authentication_factors` <a name="reset_re_auth_when_changing_my_authentication_factors" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetReAuthWhenChangingMyAuthenticationFactors"></a>

```python
def reset_re_auth_when_changing_my_authentication_factors() -> None
```

##### `reset_resource_type_schema_version` <a name="reset_resource_type_schema_version" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetResourceTypeSchemaVersion"></a>

```python
def reset_resource_type_schema_version() -> None
```

##### `reset_service_admin_cannot_list_other_users` <a name="reset_service_admin_cannot_list_other_users" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetServiceAdminCannotListOtherUsers"></a>

```python
def reset_service_admin_cannot_list_other_users() -> None
```

##### `reset_signing_cert_public_access` <a name="reset_signing_cert_public_access" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetSigningCertPublicAccess"></a>

```python
def reset_signing_cert_public_access() -> None
```

##### `reset_sub_mapping_attr` <a name="reset_sub_mapping_attr" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetSubMappingAttr"></a>

```python
def reset_sub_mapping_attr() -> None
```

##### `reset_tags` <a name="reset_tags" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tenant_custom_claims` <a name="reset_tenant_custom_claims" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetTenantCustomClaims"></a>

```python
def reset_tenant_custom_claims() -> None
```

##### `reset_terms_of_use_url` <a name="reset_terms_of_use_url" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetTermsOfUseUrl"></a>

```python
def reset_terms_of_use_url() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_timezone` <a name="reset_timezone" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetTimezone"></a>

```python
def reset_timezone() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IdentityDomainsSetting resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_setting

identityDomainsSetting.IdentityDomainsSetting.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_setting

identityDomainsSetting.IdentityDomainsSetting.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_setting

identityDomainsSetting.IdentityDomainsSetting.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_setting

identityDomainsSetting.IdentityDomainsSetting.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IdentityDomainsSetting resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IdentityDomainsSetting to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

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
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.certificateValidation">certificate_validation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference">IdentityDomainsSettingCertificateValidationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.cloudAccountName">cloud_account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.cloudGateCorsSettings">cloud_gate_cors_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference">IdentityDomainsSettingCloudGateCorsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.companyNames">company_names</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList">IdentityDomainsSettingCompanyNamesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.compartmentOcid">compartment_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.defaultCompanyNames">default_company_names</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList">IdentityDomainsSettingDefaultCompanyNamesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.defaultImages">default_images</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList">IdentityDomainsSettingDefaultImagesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.defaultLoginTexts">default_login_texts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList">IdentityDomainsSettingDefaultLoginTextsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.deleteInProgress">delete_in_progress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.diagnosticTracingUpto">diagnostic_tracing_upto</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.domainOcid">domain_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.idcsCreatedBy">idcs_created_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList">IdentityDomainsSettingIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.idcsLastModifiedBy">idcs_last_modified_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList">IdentityDomainsSettingIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.idcsLastUpgradedInRelease">idcs_last_upgraded_in_release</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.idcsPreventedOperations">idcs_prevented_operations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.images">images</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList">IdentityDomainsSettingImagesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.loginTexts">login_texts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList">IdentityDomainsSettingLoginTextsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList">IdentityDomainsSettingMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.migrationStatus">migration_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.onPremisesProvisioning">on_premises_provisioning</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.purgeConfigs">purge_configs</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList">IdentityDomainsSettingPurgeConfigsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList">IdentityDomainsSettingTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.tenancyOcid">tenancy_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.tenantCustomClaims">tenant_custom_claims</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList">IdentityDomainsSettingTenantCustomClaimsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference">IdentityDomainsSettingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.accountAlwaysTrustScopeInput">account_always_trust_scope_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.allowedDomainsInput">allowed_domains_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.allowedForgotPasswordFlowReturnUrlsInput">allowed_forgot_password_flow_return_urls_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.allowedNotificationRedirectUrlsInput">allowed_notification_redirect_urls_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.attributeSetsInput">attribute_sets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.attributesInput">attributes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.auditEventRetentionPeriodInput">audit_event_retention_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.authorizationInput">authorization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.certificateValidationInput">certificate_validation_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation">IdentityDomainsSettingCertificateValidation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.cloudGateCorsSettingsInput">cloud_gate_cors_settings_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings">IdentityDomainsSettingCloudGateCorsSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.cloudMigrationCustomUrlInput">cloud_migration_custom_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.cloudMigrationUrlEnabledInput">cloud_migration_url_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.companyNamesInput">company_names_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNames">IdentityDomainsSettingCompanyNames</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.contactEmailsInput">contact_emails_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.csrAccessInput">csr_access_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.customBrandingInput">custom_branding_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.customCssLocationInput">custom_css_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.customHtmlLocationInput">custom_html_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.customTranslationInput">custom_translation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.defaultTrustScopeInput">default_trust_scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.diagnosticLevelInput">diagnostic_level_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.diagnosticRecordForSearchIdentifiesReturnedResourcesInput">diagnostic_record_for_search_identifies_returned_resources_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.enableTermsOfUseInput">enable_terms_of_use_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.externalIdInput">external_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.iamUpstSessionExpiryInput">iam_upst_session_expiry_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.idcsEndpointInput">idcs_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.imagesInput">images_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImages">IdentityDomainsSettingImages</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.isHostedPageInput">is_hosted_page_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.issuerInput">issuer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.localeInput">locale_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.loginTextsInput">login_texts_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTexts">IdentityDomainsSettingLoginTexts</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.maxNoOfAppCmvaToReturnInput">max_no_of_app_cmva_to_return_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.maxNoOfAppRoleMembersToReturnInput">max_no_of_app_role_members_to_return_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.ocidInput">ocid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.preferredLanguageInput">preferred_language_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.prevIssuerInput">prev_issuer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.privacyPolicyUrlInput">privacy_policy_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.purgeConfigsInput">purge_configs_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigs">IdentityDomainsSettingPurgeConfigs</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.reAuthFactorInput">re_auth_factor_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.reAuthWhenChangingMyAuthenticationFactorsInput">re_auth_when_changing_my_authentication_factors_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.resourceTypeSchemaVersionInput">resource_type_schema_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.schemasInput">schemas_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.serviceAdminCannotListOtherUsersInput">service_admin_cannot_list_other_users_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.settingIdInput">setting_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.signingCertPublicAccessInput">signing_cert_public_access_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.subMappingAttrInput">sub_mapping_attr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.tagsInput">tags_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTags">IdentityDomainsSettingTags</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.tenantCustomClaimsInput">tenant_custom_claims_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims">IdentityDomainsSettingTenantCustomClaims</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.termsOfUseUrlInput">terms_of_use_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeouts">IdentityDomainsSettingTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.timezoneInput">timezone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.accountAlwaysTrustScope">account_always_trust_scope</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.allowedDomains">allowed_domains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.allowedForgotPasswordFlowReturnUrls">allowed_forgot_password_flow_return_urls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.allowedNotificationRedirectUrls">allowed_notification_redirect_urls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.attributes">attributes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.auditEventRetentionPeriod">audit_event_retention_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.cloudMigrationCustomUrl">cloud_migration_custom_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.cloudMigrationUrlEnabled">cloud_migration_url_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.contactEmails">contact_emails</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.csrAccess">csr_access</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.customBranding">custom_branding</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.customCssLocation">custom_css_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.customHtmlLocation">custom_html_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.customTranslation">custom_translation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.defaultTrustScope">default_trust_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.diagnosticLevel">diagnostic_level</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.diagnosticRecordForSearchIdentifiesReturnedResources">diagnostic_record_for_search_identifies_returned_resources</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.enableTermsOfUse">enable_terms_of_use</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.iamUpstSessionExpiry">iam_upst_session_expiry</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.isHostedPage">is_hosted_page</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.locale">locale</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.maxNoOfAppCmvaToReturn">max_no_of_app_cmva_to_return</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.maxNoOfAppRoleMembersToReturn">max_no_of_app_role_members_to_return</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.preferredLanguage">preferred_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.prevIssuer">prev_issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.privacyPolicyUrl">privacy_policy_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.reAuthFactor">re_auth_factor</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.reAuthWhenChangingMyAuthenticationFactors">re_auth_when_changing_my_authentication_factors</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.serviceAdminCannotListOtherUsers">service_admin_cannot_list_other_users</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.settingId">setting_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.signingCertPublicAccess">signing_cert_public_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.subMappingAttr">sub_mapping_attr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.termsOfUseUrl">terms_of_use_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.timezone">timezone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `certificate_validation`<sup>Required</sup> <a name="certificate_validation" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.certificateValidation"></a>

```python
certificate_validation: IdentityDomainsSettingCertificateValidationOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference">IdentityDomainsSettingCertificateValidationOutputReference</a>

---

##### `cloud_account_name`<sup>Required</sup> <a name="cloud_account_name" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.cloudAccountName"></a>

```python
cloud_account_name: str
```

- *Type:* str

---

##### `cloud_gate_cors_settings`<sup>Required</sup> <a name="cloud_gate_cors_settings" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.cloudGateCorsSettings"></a>

```python
cloud_gate_cors_settings: IdentityDomainsSettingCloudGateCorsSettingsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference">IdentityDomainsSettingCloudGateCorsSettingsOutputReference</a>

---

##### `company_names`<sup>Required</sup> <a name="company_names" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.companyNames"></a>

```python
company_names: IdentityDomainsSettingCompanyNamesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList">IdentityDomainsSettingCompanyNamesList</a>

---

##### `compartment_ocid`<sup>Required</sup> <a name="compartment_ocid" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.compartmentOcid"></a>

```python
compartment_ocid: str
```

- *Type:* str

---

##### `default_company_names`<sup>Required</sup> <a name="default_company_names" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.defaultCompanyNames"></a>

```python
default_company_names: IdentityDomainsSettingDefaultCompanyNamesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList">IdentityDomainsSettingDefaultCompanyNamesList</a>

---

##### `default_images`<sup>Required</sup> <a name="default_images" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.defaultImages"></a>

```python
default_images: IdentityDomainsSettingDefaultImagesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList">IdentityDomainsSettingDefaultImagesList</a>

---

##### `default_login_texts`<sup>Required</sup> <a name="default_login_texts" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.defaultLoginTexts"></a>

```python
default_login_texts: IdentityDomainsSettingDefaultLoginTextsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList">IdentityDomainsSettingDefaultLoginTextsList</a>

---

##### `delete_in_progress`<sup>Required</sup> <a name="delete_in_progress" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.deleteInProgress"></a>

```python
delete_in_progress: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `diagnostic_tracing_upto`<sup>Required</sup> <a name="diagnostic_tracing_upto" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.diagnosticTracingUpto"></a>

```python
diagnostic_tracing_upto: str
```

- *Type:* str

---

##### `domain_ocid`<sup>Required</sup> <a name="domain_ocid" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.domainOcid"></a>

```python
domain_ocid: str
```

- *Type:* str

---

##### `idcs_created_by`<sup>Required</sup> <a name="idcs_created_by" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.idcsCreatedBy"></a>

```python
idcs_created_by: IdentityDomainsSettingIdcsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList">IdentityDomainsSettingIdcsCreatedByList</a>

---

##### `idcs_last_modified_by`<sup>Required</sup> <a name="idcs_last_modified_by" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.idcsLastModifiedBy"></a>

```python
idcs_last_modified_by: IdentityDomainsSettingIdcsLastModifiedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList">IdentityDomainsSettingIdcsLastModifiedByList</a>

---

##### `idcs_last_upgraded_in_release`<sup>Required</sup> <a name="idcs_last_upgraded_in_release" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.idcsLastUpgradedInRelease"></a>

```python
idcs_last_upgraded_in_release: str
```

- *Type:* str

---

##### `idcs_prevented_operations`<sup>Required</sup> <a name="idcs_prevented_operations" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.idcsPreventedOperations"></a>

```python
idcs_prevented_operations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `images`<sup>Required</sup> <a name="images" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.images"></a>

```python
images: IdentityDomainsSettingImagesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList">IdentityDomainsSettingImagesList</a>

---

##### `login_texts`<sup>Required</sup> <a name="login_texts" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.loginTexts"></a>

```python
login_texts: IdentityDomainsSettingLoginTextsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList">IdentityDomainsSettingLoginTextsList</a>

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.meta"></a>

```python
meta: IdentityDomainsSettingMetaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList">IdentityDomainsSettingMetaList</a>

---

##### `migration_status`<sup>Required</sup> <a name="migration_status" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.migrationStatus"></a>

```python
migration_status: str
```

- *Type:* str

---

##### `on_premises_provisioning`<sup>Required</sup> <a name="on_premises_provisioning" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.onPremisesProvisioning"></a>

```python
on_premises_provisioning: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `purge_configs`<sup>Required</sup> <a name="purge_configs" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.purgeConfigs"></a>

```python
purge_configs: IdentityDomainsSettingPurgeConfigsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList">IdentityDomainsSettingPurgeConfigsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.tags"></a>

```python
tags: IdentityDomainsSettingTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList">IdentityDomainsSettingTagsList</a>

---

##### `tenancy_ocid`<sup>Required</sup> <a name="tenancy_ocid" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.tenancyOcid"></a>

```python
tenancy_ocid: str
```

- *Type:* str

---

##### `tenant_custom_claims`<sup>Required</sup> <a name="tenant_custom_claims" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.tenantCustomClaims"></a>

```python
tenant_custom_claims: IdentityDomainsSettingTenantCustomClaimsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList">IdentityDomainsSettingTenantCustomClaimsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.timeouts"></a>

```python
timeouts: IdentityDomainsSettingTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference">IdentityDomainsSettingTimeoutsOutputReference</a>

---

##### `account_always_trust_scope_input`<sup>Optional</sup> <a name="account_always_trust_scope_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.accountAlwaysTrustScopeInput"></a>

```python
account_always_trust_scope_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allowed_domains_input`<sup>Optional</sup> <a name="allowed_domains_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.allowedDomainsInput"></a>

```python
allowed_domains_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_forgot_password_flow_return_urls_input`<sup>Optional</sup> <a name="allowed_forgot_password_flow_return_urls_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.allowedForgotPasswordFlowReturnUrlsInput"></a>

```python
allowed_forgot_password_flow_return_urls_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_notification_redirect_urls_input`<sup>Optional</sup> <a name="allowed_notification_redirect_urls_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.allowedNotificationRedirectUrlsInput"></a>

```python
allowed_notification_redirect_urls_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `attribute_sets_input`<sup>Optional</sup> <a name="attribute_sets_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.attributeSetsInput"></a>

```python
attribute_sets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.attributesInput"></a>

```python
attributes_input: str
```

- *Type:* str

---

##### `audit_event_retention_period_input`<sup>Optional</sup> <a name="audit_event_retention_period_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.auditEventRetentionPeriodInput"></a>

```python
audit_event_retention_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `authorization_input`<sup>Optional</sup> <a name="authorization_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.authorizationInput"></a>

```python
authorization_input: str
```

- *Type:* str

---

##### `certificate_validation_input`<sup>Optional</sup> <a name="certificate_validation_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.certificateValidationInput"></a>

```python
certificate_validation_input: IdentityDomainsSettingCertificateValidation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation">IdentityDomainsSettingCertificateValidation</a>

---

##### `cloud_gate_cors_settings_input`<sup>Optional</sup> <a name="cloud_gate_cors_settings_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.cloudGateCorsSettingsInput"></a>

```python
cloud_gate_cors_settings_input: IdentityDomainsSettingCloudGateCorsSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings">IdentityDomainsSettingCloudGateCorsSettings</a>

---

##### `cloud_migration_custom_url_input`<sup>Optional</sup> <a name="cloud_migration_custom_url_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.cloudMigrationCustomUrlInput"></a>

```python
cloud_migration_custom_url_input: str
```

- *Type:* str

---

##### `cloud_migration_url_enabled_input`<sup>Optional</sup> <a name="cloud_migration_url_enabled_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.cloudMigrationUrlEnabledInput"></a>

```python
cloud_migration_url_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `company_names_input`<sup>Optional</sup> <a name="company_names_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.companyNamesInput"></a>

```python
company_names_input: typing.Union[IResolvable, typing.List[IdentityDomainsSettingCompanyNames]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNames">IdentityDomainsSettingCompanyNames</a>]]

---

##### `contact_emails_input`<sup>Optional</sup> <a name="contact_emails_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.contactEmailsInput"></a>

```python
contact_emails_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `csr_access_input`<sup>Optional</sup> <a name="csr_access_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.csrAccessInput"></a>

```python
csr_access_input: str
```

- *Type:* str

---

##### `custom_branding_input`<sup>Optional</sup> <a name="custom_branding_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.customBrandingInput"></a>

```python
custom_branding_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `custom_css_location_input`<sup>Optional</sup> <a name="custom_css_location_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.customCssLocationInput"></a>

```python
custom_css_location_input: str
```

- *Type:* str

---

##### `custom_html_location_input`<sup>Optional</sup> <a name="custom_html_location_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.customHtmlLocationInput"></a>

```python
custom_html_location_input: str
```

- *Type:* str

---

##### `custom_translation_input`<sup>Optional</sup> <a name="custom_translation_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.customTranslationInput"></a>

```python
custom_translation_input: str
```

- *Type:* str

---

##### `default_trust_scope_input`<sup>Optional</sup> <a name="default_trust_scope_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.defaultTrustScopeInput"></a>

```python
default_trust_scope_input: str
```

- *Type:* str

---

##### `diagnostic_level_input`<sup>Optional</sup> <a name="diagnostic_level_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.diagnosticLevelInput"></a>

```python
diagnostic_level_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `diagnostic_record_for_search_identifies_returned_resources_input`<sup>Optional</sup> <a name="diagnostic_record_for_search_identifies_returned_resources_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.diagnosticRecordForSearchIdentifiesReturnedResourcesInput"></a>

```python
diagnostic_record_for_search_identifies_returned_resources_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_terms_of_use_input`<sup>Optional</sup> <a name="enable_terms_of_use_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.enableTermsOfUseInput"></a>

```python
enable_terms_of_use_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `external_id_input`<sup>Optional</sup> <a name="external_id_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.externalIdInput"></a>

```python
external_id_input: str
```

- *Type:* str

---

##### `iam_upst_session_expiry_input`<sup>Optional</sup> <a name="iam_upst_session_expiry_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.iamUpstSessionExpiryInput"></a>

```python
iam_upst_session_expiry_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `idcs_endpoint_input`<sup>Optional</sup> <a name="idcs_endpoint_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.idcsEndpointInput"></a>

```python
idcs_endpoint_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `images_input`<sup>Optional</sup> <a name="images_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.imagesInput"></a>

```python
images_input: typing.Union[IResolvable, typing.List[IdentityDomainsSettingImages]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImages">IdentityDomainsSettingImages</a>]]

---

##### `is_hosted_page_input`<sup>Optional</sup> <a name="is_hosted_page_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.isHostedPageInput"></a>

```python
is_hosted_page_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `issuer_input`<sup>Optional</sup> <a name="issuer_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.issuerInput"></a>

```python
issuer_input: str
```

- *Type:* str

---

##### `locale_input`<sup>Optional</sup> <a name="locale_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.localeInput"></a>

```python
locale_input: str
```

- *Type:* str

---

##### `login_texts_input`<sup>Optional</sup> <a name="login_texts_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.loginTextsInput"></a>

```python
login_texts_input: typing.Union[IResolvable, typing.List[IdentityDomainsSettingLoginTexts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTexts">IdentityDomainsSettingLoginTexts</a>]]

---

##### `max_no_of_app_cmva_to_return_input`<sup>Optional</sup> <a name="max_no_of_app_cmva_to_return_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.maxNoOfAppCmvaToReturnInput"></a>

```python
max_no_of_app_cmva_to_return_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_no_of_app_role_members_to_return_input`<sup>Optional</sup> <a name="max_no_of_app_role_members_to_return_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.maxNoOfAppRoleMembersToReturnInput"></a>

```python
max_no_of_app_role_members_to_return_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocid_input`<sup>Optional</sup> <a name="ocid_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.ocidInput"></a>

```python
ocid_input: str
```

- *Type:* str

---

##### `preferred_language_input`<sup>Optional</sup> <a name="preferred_language_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.preferredLanguageInput"></a>

```python
preferred_language_input: str
```

- *Type:* str

---

##### `prev_issuer_input`<sup>Optional</sup> <a name="prev_issuer_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.prevIssuerInput"></a>

```python
prev_issuer_input: str
```

- *Type:* str

---

##### `privacy_policy_url_input`<sup>Optional</sup> <a name="privacy_policy_url_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.privacyPolicyUrlInput"></a>

```python
privacy_policy_url_input: str
```

- *Type:* str

---

##### `purge_configs_input`<sup>Optional</sup> <a name="purge_configs_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.purgeConfigsInput"></a>

```python
purge_configs_input: typing.Union[IResolvable, typing.List[IdentityDomainsSettingPurgeConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigs">IdentityDomainsSettingPurgeConfigs</a>]]

---

##### `re_auth_factor_input`<sup>Optional</sup> <a name="re_auth_factor_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.reAuthFactorInput"></a>

```python
re_auth_factor_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `re_auth_when_changing_my_authentication_factors_input`<sup>Optional</sup> <a name="re_auth_when_changing_my_authentication_factors_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.reAuthWhenChangingMyAuthenticationFactorsInput"></a>

```python
re_auth_when_changing_my_authentication_factors_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_type_schema_version_input`<sup>Optional</sup> <a name="resource_type_schema_version_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.resourceTypeSchemaVersionInput"></a>

```python
resource_type_schema_version_input: str
```

- *Type:* str

---

##### `schemas_input`<sup>Optional</sup> <a name="schemas_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.schemasInput"></a>

```python
schemas_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_admin_cannot_list_other_users_input`<sup>Optional</sup> <a name="service_admin_cannot_list_other_users_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.serviceAdminCannotListOtherUsersInput"></a>

```python
service_admin_cannot_list_other_users_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `setting_id_input`<sup>Optional</sup> <a name="setting_id_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.settingIdInput"></a>

```python
setting_id_input: str
```

- *Type:* str

---

##### `signing_cert_public_access_input`<sup>Optional</sup> <a name="signing_cert_public_access_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.signingCertPublicAccessInput"></a>

```python
signing_cert_public_access_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sub_mapping_attr_input`<sup>Optional</sup> <a name="sub_mapping_attr_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.subMappingAttrInput"></a>

```python
sub_mapping_attr_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.tagsInput"></a>

```python
tags_input: typing.Union[IResolvable, typing.List[IdentityDomainsSettingTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTags">IdentityDomainsSettingTags</a>]]

---

##### `tenant_custom_claims_input`<sup>Optional</sup> <a name="tenant_custom_claims_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.tenantCustomClaimsInput"></a>

```python
tenant_custom_claims_input: typing.Union[IResolvable, typing.List[IdentityDomainsSettingTenantCustomClaims]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims">IdentityDomainsSettingTenantCustomClaims</a>]]

---

##### `terms_of_use_url_input`<sup>Optional</sup> <a name="terms_of_use_url_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.termsOfUseUrlInput"></a>

```python
terms_of_use_url_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, IdentityDomainsSettingTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeouts">IdentityDomainsSettingTimeouts</a>]

---

##### `timezone_input`<sup>Optional</sup> <a name="timezone_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.timezoneInput"></a>

```python
timezone_input: str
```

- *Type:* str

---

##### `account_always_trust_scope`<sup>Required</sup> <a name="account_always_trust_scope" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.accountAlwaysTrustScope"></a>

```python
account_always_trust_scope: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allowed_domains`<sup>Required</sup> <a name="allowed_domains" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.allowedDomains"></a>

```python
allowed_domains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_forgot_password_flow_return_urls`<sup>Required</sup> <a name="allowed_forgot_password_flow_return_urls" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.allowedForgotPasswordFlowReturnUrls"></a>

```python
allowed_forgot_password_flow_return_urls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_notification_redirect_urls`<sup>Required</sup> <a name="allowed_notification_redirect_urls" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.allowedNotificationRedirectUrls"></a>

```python
allowed_notification_redirect_urls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

---

##### `attribute_sets`<sup>Required</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `audit_event_retention_period`<sup>Required</sup> <a name="audit_event_retention_period" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.auditEventRetentionPeriod"></a>

```python
audit_event_retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `cloud_migration_custom_url`<sup>Required</sup> <a name="cloud_migration_custom_url" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.cloudMigrationCustomUrl"></a>

```python
cloud_migration_custom_url: str
```

- *Type:* str

---

##### `cloud_migration_url_enabled`<sup>Required</sup> <a name="cloud_migration_url_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.cloudMigrationUrlEnabled"></a>

```python
cloud_migration_url_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `contact_emails`<sup>Required</sup> <a name="contact_emails" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.contactEmails"></a>

```python
contact_emails: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `csr_access`<sup>Required</sup> <a name="csr_access" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.csrAccess"></a>

```python
csr_access: str
```

- *Type:* str

---

##### `custom_branding`<sup>Required</sup> <a name="custom_branding" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.customBranding"></a>

```python
custom_branding: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `custom_css_location`<sup>Required</sup> <a name="custom_css_location" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.customCssLocation"></a>

```python
custom_css_location: str
```

- *Type:* str

---

##### `custom_html_location`<sup>Required</sup> <a name="custom_html_location" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.customHtmlLocation"></a>

```python
custom_html_location: str
```

- *Type:* str

---

##### `custom_translation`<sup>Required</sup> <a name="custom_translation" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.customTranslation"></a>

```python
custom_translation: str
```

- *Type:* str

---

##### `default_trust_scope`<sup>Required</sup> <a name="default_trust_scope" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.defaultTrustScope"></a>

```python
default_trust_scope: str
```

- *Type:* str

---

##### `diagnostic_level`<sup>Required</sup> <a name="diagnostic_level" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.diagnosticLevel"></a>

```python
diagnostic_level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `diagnostic_record_for_search_identifies_returned_resources`<sup>Required</sup> <a name="diagnostic_record_for_search_identifies_returned_resources" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.diagnosticRecordForSearchIdentifiesReturnedResources"></a>

```python
diagnostic_record_for_search_identifies_returned_resources: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_terms_of_use`<sup>Required</sup> <a name="enable_terms_of_use" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.enableTermsOfUse"></a>

```python
enable_terms_of_use: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `iam_upst_session_expiry`<sup>Required</sup> <a name="iam_upst_session_expiry" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.iamUpstSessionExpiry"></a>

```python
iam_upst_session_expiry: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

---

##### `is_hosted_page`<sup>Required</sup> <a name="is_hosted_page" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.isHostedPage"></a>

```python
is_hosted_page: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `locale`<sup>Required</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.locale"></a>

```python
locale: str
```

- *Type:* str

---

##### `max_no_of_app_cmva_to_return`<sup>Required</sup> <a name="max_no_of_app_cmva_to_return" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.maxNoOfAppCmvaToReturn"></a>

```python
max_no_of_app_cmva_to_return: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_no_of_app_role_members_to_return`<sup>Required</sup> <a name="max_no_of_app_role_members_to_return" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.maxNoOfAppRoleMembersToReturn"></a>

```python
max_no_of_app_role_members_to_return: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `preferred_language`<sup>Required</sup> <a name="preferred_language" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.preferredLanguage"></a>

```python
preferred_language: str
```

- *Type:* str

---

##### `prev_issuer`<sup>Required</sup> <a name="prev_issuer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.prevIssuer"></a>

```python
prev_issuer: str
```

- *Type:* str

---

##### `privacy_policy_url`<sup>Required</sup> <a name="privacy_policy_url" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.privacyPolicyUrl"></a>

```python
privacy_policy_url: str
```

- *Type:* str

---

##### `re_auth_factor`<sup>Required</sup> <a name="re_auth_factor" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.reAuthFactor"></a>

```python
re_auth_factor: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `re_auth_when_changing_my_authentication_factors`<sup>Required</sup> <a name="re_auth_when_changing_my_authentication_factors" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.reAuthWhenChangingMyAuthenticationFactors"></a>

```python
re_auth_when_changing_my_authentication_factors: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_type_schema_version`<sup>Required</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_admin_cannot_list_other_users`<sup>Required</sup> <a name="service_admin_cannot_list_other_users" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.serviceAdminCannotListOtherUsers"></a>

```python
service_admin_cannot_list_other_users: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `setting_id`<sup>Required</sup> <a name="setting_id" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.settingId"></a>

```python
setting_id: str
```

- *Type:* str

---

##### `signing_cert_public_access`<sup>Required</sup> <a name="signing_cert_public_access" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.signingCertPublicAccess"></a>

```python
signing_cert_public_access: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sub_mapping_attr`<sup>Required</sup> <a name="sub_mapping_attr" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.subMappingAttr"></a>

```python
sub_mapping_attr: str
```

- *Type:* str

---

##### `terms_of_use_url`<sup>Required</sup> <a name="terms_of_use_url" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.termsOfUseUrl"></a>

```python
terms_of_use_url: str
```

- *Type:* str

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityDomainsSettingCertificateValidation <a name="IdentityDomainsSettingCertificateValidation" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_setting

identityDomainsSetting.IdentityDomainsSettingCertificateValidation(
  crl_check_on_ocsp_failure_enabled: typing.Union[bool, IResolvable] = None,
  crl_enabled: typing.Union[bool, IResolvable] = None,
  crl_location: str = None,
  crl_refresh_interval: typing.Union[int, float] = None,
  ocsp_enabled: typing.Union[bool, IResolvable] = None,
  ocsp_responder_url: str = None,
  ocsp_settings_responder_url_preferred: typing.Union[bool, IResolvable] = None,
  ocsp_signing_certificate_alias: str = None,
  ocsp_timeout_duration: typing.Union[int, float] = None,
  ocsp_unknown_response_status_allowed: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.crlCheckOnOcspFailureEnabled">crl_check_on_ocsp_failure_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#crl_check_on_ocsp_failure_enabled IdentityDomainsSetting#crl_check_on_ocsp_failure_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.crlEnabled">crl_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#crl_enabled IdentityDomainsSetting#crl_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.crlLocation">crl_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#crl_location IdentityDomainsSetting#crl_location}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.crlRefreshInterval">crl_refresh_interval</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#crl_refresh_interval IdentityDomainsSetting#crl_refresh_interval}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.ocspEnabled">ocsp_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#ocsp_enabled IdentityDomainsSetting#ocsp_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.ocspResponderUrl">ocsp_responder_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#ocsp_responder_url IdentityDomainsSetting#ocsp_responder_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.ocspSettingsResponderUrlPreferred">ocsp_settings_responder_url_preferred</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#ocsp_settings_responder_url_preferred IdentityDomainsSetting#ocsp_settings_responder_url_preferred}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.ocspSigningCertificateAlias">ocsp_signing_certificate_alias</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#ocsp_signing_certificate_alias IdentityDomainsSetting#ocsp_signing_certificate_alias}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.ocspTimeoutDuration">ocsp_timeout_duration</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#ocsp_timeout_duration IdentityDomainsSetting#ocsp_timeout_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.ocspUnknownResponseStatusAllowed">ocsp_unknown_response_status_allowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#ocsp_unknown_response_status_allowed IdentityDomainsSetting#ocsp_unknown_response_status_allowed}. |

---

##### `crl_check_on_ocsp_failure_enabled`<sup>Optional</sup> <a name="crl_check_on_ocsp_failure_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.crlCheckOnOcspFailureEnabled"></a>

```python
crl_check_on_ocsp_failure_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#crl_check_on_ocsp_failure_enabled IdentityDomainsSetting#crl_check_on_ocsp_failure_enabled}.

---

##### `crl_enabled`<sup>Optional</sup> <a name="crl_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.crlEnabled"></a>

```python
crl_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#crl_enabled IdentityDomainsSetting#crl_enabled}.

---

##### `crl_location`<sup>Optional</sup> <a name="crl_location" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.crlLocation"></a>

```python
crl_location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#crl_location IdentityDomainsSetting#crl_location}.

---

##### `crl_refresh_interval`<sup>Optional</sup> <a name="crl_refresh_interval" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.crlRefreshInterval"></a>

```python
crl_refresh_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#crl_refresh_interval IdentityDomainsSetting#crl_refresh_interval}.

---

##### `ocsp_enabled`<sup>Optional</sup> <a name="ocsp_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.ocspEnabled"></a>

```python
ocsp_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#ocsp_enabled IdentityDomainsSetting#ocsp_enabled}.

---

##### `ocsp_responder_url`<sup>Optional</sup> <a name="ocsp_responder_url" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.ocspResponderUrl"></a>

```python
ocsp_responder_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#ocsp_responder_url IdentityDomainsSetting#ocsp_responder_url}.

---

##### `ocsp_settings_responder_url_preferred`<sup>Optional</sup> <a name="ocsp_settings_responder_url_preferred" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.ocspSettingsResponderUrlPreferred"></a>

```python
ocsp_settings_responder_url_preferred: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#ocsp_settings_responder_url_preferred IdentityDomainsSetting#ocsp_settings_responder_url_preferred}.

---

##### `ocsp_signing_certificate_alias`<sup>Optional</sup> <a name="ocsp_signing_certificate_alias" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.ocspSigningCertificateAlias"></a>

```python
ocsp_signing_certificate_alias: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#ocsp_signing_certificate_alias IdentityDomainsSetting#ocsp_signing_certificate_alias}.

---

##### `ocsp_timeout_duration`<sup>Optional</sup> <a name="ocsp_timeout_duration" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.ocspTimeoutDuration"></a>

```python
ocsp_timeout_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#ocsp_timeout_duration IdentityDomainsSetting#ocsp_timeout_duration}.

---

##### `ocsp_unknown_response_status_allowed`<sup>Optional</sup> <a name="ocsp_unknown_response_status_allowed" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.ocspUnknownResponseStatusAllowed"></a>

```python
ocsp_unknown_response_status_allowed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#ocsp_unknown_response_status_allowed IdentityDomainsSetting#ocsp_unknown_response_status_allowed}.

---

### IdentityDomainsSettingCloudGateCorsSettings <a name="IdentityDomainsSettingCloudGateCorsSettings" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_setting

identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings(
  cloud_gate_cors_allowed_origins: typing.List[str] = None,
  cloud_gate_cors_allow_null_origin: typing.Union[bool, IResolvable] = None,
  cloud_gate_cors_enabled: typing.Union[bool, IResolvable] = None,
  cloud_gate_cors_exposed_headers: typing.List[str] = None,
  cloud_gate_cors_max_age: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings.property.cloudGateCorsAllowedOrigins">cloud_gate_cors_allowed_origins</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#cloud_gate_cors_allowed_origins IdentityDomainsSetting#cloud_gate_cors_allowed_origins}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings.property.cloudGateCorsAllowNullOrigin">cloud_gate_cors_allow_null_origin</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#cloud_gate_cors_allow_null_origin IdentityDomainsSetting#cloud_gate_cors_allow_null_origin}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings.property.cloudGateCorsEnabled">cloud_gate_cors_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#cloud_gate_cors_enabled IdentityDomainsSetting#cloud_gate_cors_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings.property.cloudGateCorsExposedHeaders">cloud_gate_cors_exposed_headers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#cloud_gate_cors_exposed_headers IdentityDomainsSetting#cloud_gate_cors_exposed_headers}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings.property.cloudGateCorsMaxAge">cloud_gate_cors_max_age</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#cloud_gate_cors_max_age IdentityDomainsSetting#cloud_gate_cors_max_age}. |

---

##### `cloud_gate_cors_allowed_origins`<sup>Optional</sup> <a name="cloud_gate_cors_allowed_origins" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings.property.cloudGateCorsAllowedOrigins"></a>

```python
cloud_gate_cors_allowed_origins: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#cloud_gate_cors_allowed_origins IdentityDomainsSetting#cloud_gate_cors_allowed_origins}.

---

##### `cloud_gate_cors_allow_null_origin`<sup>Optional</sup> <a name="cloud_gate_cors_allow_null_origin" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings.property.cloudGateCorsAllowNullOrigin"></a>

```python
cloud_gate_cors_allow_null_origin: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#cloud_gate_cors_allow_null_origin IdentityDomainsSetting#cloud_gate_cors_allow_null_origin}.

---

##### `cloud_gate_cors_enabled`<sup>Optional</sup> <a name="cloud_gate_cors_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings.property.cloudGateCorsEnabled"></a>

```python
cloud_gate_cors_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#cloud_gate_cors_enabled IdentityDomainsSetting#cloud_gate_cors_enabled}.

---

##### `cloud_gate_cors_exposed_headers`<sup>Optional</sup> <a name="cloud_gate_cors_exposed_headers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings.property.cloudGateCorsExposedHeaders"></a>

```python
cloud_gate_cors_exposed_headers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#cloud_gate_cors_exposed_headers IdentityDomainsSetting#cloud_gate_cors_exposed_headers}.

---

##### `cloud_gate_cors_max_age`<sup>Optional</sup> <a name="cloud_gate_cors_max_age" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings.property.cloudGateCorsMaxAge"></a>

```python
cloud_gate_cors_max_age: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#cloud_gate_cors_max_age IdentityDomainsSetting#cloud_gate_cors_max_age}.

---

### IdentityDomainsSettingCompanyNames <a name="IdentityDomainsSettingCompanyNames" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNames"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNames.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_setting

identityDomainsSetting.IdentityDomainsSettingCompanyNames(
  locale: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNames.property.locale">locale</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#locale IdentityDomainsSetting#locale}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNames.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#value IdentityDomainsSetting#value}. |

---

##### `locale`<sup>Required</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNames.property.locale"></a>

```python
locale: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#locale IdentityDomainsSetting#locale}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNames.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#value IdentityDomainsSetting#value}.

---

### IdentityDomainsSettingConfig <a name="IdentityDomainsSettingConfig" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_setting

identityDomainsSetting.IdentityDomainsSettingConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  csr_access: str,
  idcs_endpoint: str,
  schemas: typing.List[str],
  setting_id: str,
  account_always_trust_scope: typing.Union[bool, IResolvable] = None,
  allowed_domains: typing.List[str] = None,
  allowed_forgot_password_flow_return_urls: typing.List[str] = None,
  allowed_notification_redirect_urls: typing.List[str] = None,
  attributes: str = None,
  attribute_sets: typing.List[str] = None,
  audit_event_retention_period: typing.Union[int, float] = None,
  authorization: str = None,
  certificate_validation: IdentityDomainsSettingCertificateValidation = None,
  cloud_gate_cors_settings: IdentityDomainsSettingCloudGateCorsSettings = None,
  cloud_migration_custom_url: str = None,
  cloud_migration_url_enabled: typing.Union[bool, IResolvable] = None,
  company_names: typing.Union[IResolvable, typing.List[IdentityDomainsSettingCompanyNames]] = None,
  contact_emails: typing.List[str] = None,
  custom_branding: typing.Union[bool, IResolvable] = None,
  custom_css_location: str = None,
  custom_html_location: str = None,
  custom_translation: str = None,
  default_trust_scope: str = None,
  diagnostic_level: typing.Union[int, float] = None,
  diagnostic_record_for_search_identifies_returned_resources: typing.Union[bool, IResolvable] = None,
  enable_terms_of_use: typing.Union[bool, IResolvable] = None,
  external_id: str = None,
  iam_upst_session_expiry: typing.Union[int, float] = None,
  id: str = None,
  images: typing.Union[IResolvable, typing.List[IdentityDomainsSettingImages]] = None,
  is_hosted_page: typing.Union[bool, IResolvable] = None,
  issuer: str = None,
  locale: str = None,
  login_texts: typing.Union[IResolvable, typing.List[IdentityDomainsSettingLoginTexts]] = None,
  max_no_of_app_cmva_to_return: typing.Union[int, float] = None,
  max_no_of_app_role_members_to_return: typing.Union[int, float] = None,
  ocid: str = None,
  preferred_language: str = None,
  prev_issuer: str = None,
  privacy_policy_url: str = None,
  purge_configs: typing.Union[IResolvable, typing.List[IdentityDomainsSettingPurgeConfigs]] = None,
  re_auth_factor: typing.List[str] = None,
  re_auth_when_changing_my_authentication_factors: typing.Union[bool, IResolvable] = None,
  resource_type_schema_version: str = None,
  service_admin_cannot_list_other_users: typing.Union[bool, IResolvable] = None,
  signing_cert_public_access: typing.Union[bool, IResolvable] = None,
  sub_mapping_attr: str = None,
  tags: typing.Union[IResolvable, typing.List[IdentityDomainsSettingTags]] = None,
  tenant_custom_claims: typing.Union[IResolvable, typing.List[IdentityDomainsSettingTenantCustomClaims]] = None,
  terms_of_use_url: str = None,
  timeouts: IdentityDomainsSettingTimeouts = None,
  timezone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.csrAccess">csr_access</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#csr_access IdentityDomainsSetting#csr_access}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#idcs_endpoint IdentityDomainsSetting#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#schemas IdentityDomainsSetting#schemas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.settingId">setting_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#setting_id IdentityDomainsSetting#setting_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.accountAlwaysTrustScope">account_always_trust_scope</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#account_always_trust_scope IdentityDomainsSetting#account_always_trust_scope}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.allowedDomains">allowed_domains</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#allowed_domains IdentityDomainsSetting#allowed_domains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.allowedForgotPasswordFlowReturnUrls">allowed_forgot_password_flow_return_urls</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#allowed_forgot_password_flow_return_urls IdentityDomainsSetting#allowed_forgot_password_flow_return_urls}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.allowedNotificationRedirectUrls">allowed_notification_redirect_urls</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#allowed_notification_redirect_urls IdentityDomainsSetting#allowed_notification_redirect_urls}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.attributes">attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#attributes IdentityDomainsSetting#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#attribute_sets IdentityDomainsSetting#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.auditEventRetentionPeriod">audit_event_retention_period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#audit_event_retention_period IdentityDomainsSetting#audit_event_retention_period}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#authorization IdentityDomainsSetting#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.certificateValidation">certificate_validation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation">IdentityDomainsSettingCertificateValidation</a></code> | certificate_validation block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.cloudGateCorsSettings">cloud_gate_cors_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings">IdentityDomainsSettingCloudGateCorsSettings</a></code> | cloud_gate_cors_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.cloudMigrationCustomUrl">cloud_migration_custom_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#cloud_migration_custom_url IdentityDomainsSetting#cloud_migration_custom_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.cloudMigrationUrlEnabled">cloud_migration_url_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#cloud_migration_url_enabled IdentityDomainsSetting#cloud_migration_url_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.companyNames">company_names</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNames">IdentityDomainsSettingCompanyNames</a>]]</code> | company_names block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.contactEmails">contact_emails</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#contact_emails IdentityDomainsSetting#contact_emails}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.customBranding">custom_branding</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#custom_branding IdentityDomainsSetting#custom_branding}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.customCssLocation">custom_css_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#custom_css_location IdentityDomainsSetting#custom_css_location}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.customHtmlLocation">custom_html_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#custom_html_location IdentityDomainsSetting#custom_html_location}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.customTranslation">custom_translation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#custom_translation IdentityDomainsSetting#custom_translation}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.defaultTrustScope">default_trust_scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#default_trust_scope IdentityDomainsSetting#default_trust_scope}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.diagnosticLevel">diagnostic_level</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#diagnostic_level IdentityDomainsSetting#diagnostic_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.diagnosticRecordForSearchIdentifiesReturnedResources">diagnostic_record_for_search_identifies_returned_resources</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#diagnostic_record_for_search_identifies_returned_resources IdentityDomainsSetting#diagnostic_record_for_search_identifies_returned_resources}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.enableTermsOfUse">enable_terms_of_use</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#enable_terms_of_use IdentityDomainsSetting#enable_terms_of_use}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.externalId">external_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#external_id IdentityDomainsSetting#external_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.iamUpstSessionExpiry">iam_upst_session_expiry</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#iam_upst_session_expiry IdentityDomainsSetting#iam_upst_session_expiry}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#id IdentityDomainsSetting#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.images">images</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImages">IdentityDomainsSettingImages</a>]]</code> | images block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.isHostedPage">is_hosted_page</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#is_hosted_page IdentityDomainsSetting#is_hosted_page}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.issuer">issuer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#issuer IdentityDomainsSetting#issuer}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.locale">locale</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#locale IdentityDomainsSetting#locale}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.loginTexts">login_texts</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTexts">IdentityDomainsSettingLoginTexts</a>]]</code> | login_texts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.maxNoOfAppCmvaToReturn">max_no_of_app_cmva_to_return</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#max_no_of_app_cmva_to_return IdentityDomainsSetting#max_no_of_app_cmva_to_return}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.maxNoOfAppRoleMembersToReturn">max_no_of_app_role_members_to_return</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#max_no_of_app_role_members_to_return IdentityDomainsSetting#max_no_of_app_role_members_to_return}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.ocid">ocid</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#ocid IdentityDomainsSetting#ocid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.preferredLanguage">preferred_language</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#preferred_language IdentityDomainsSetting#preferred_language}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.prevIssuer">prev_issuer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#prev_issuer IdentityDomainsSetting#prev_issuer}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.privacyPolicyUrl">privacy_policy_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#privacy_policy_url IdentityDomainsSetting#privacy_policy_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.purgeConfigs">purge_configs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigs">IdentityDomainsSettingPurgeConfigs</a>]]</code> | purge_configs block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.reAuthFactor">re_auth_factor</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#re_auth_factor IdentityDomainsSetting#re_auth_factor}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.reAuthWhenChangingMyAuthenticationFactors">re_auth_when_changing_my_authentication_factors</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#re_auth_when_changing_my_authentication_factors IdentityDomainsSetting#re_auth_when_changing_my_authentication_factors}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#resource_type_schema_version IdentityDomainsSetting#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.serviceAdminCannotListOtherUsers">service_admin_cannot_list_other_users</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#service_admin_cannot_list_other_users IdentityDomainsSetting#service_admin_cannot_list_other_users}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.signingCertPublicAccess">signing_cert_public_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#signing_cert_public_access IdentityDomainsSetting#signing_cert_public_access}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.subMappingAttr">sub_mapping_attr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#sub_mapping_attr IdentityDomainsSetting#sub_mapping_attr}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.tags">tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTags">IdentityDomainsSettingTags</a>]]</code> | tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.tenantCustomClaims">tenant_custom_claims</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims">IdentityDomainsSettingTenantCustomClaims</a>]]</code> | tenant_custom_claims block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.termsOfUseUrl">terms_of_use_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#terms_of_use_url IdentityDomainsSetting#terms_of_use_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeouts">IdentityDomainsSettingTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.timezone">timezone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#timezone IdentityDomainsSetting#timezone}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `csr_access`<sup>Required</sup> <a name="csr_access" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.csrAccess"></a>

```python
csr_access: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#csr_access IdentityDomainsSetting#csr_access}.

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#idcs_endpoint IdentityDomainsSetting#idcs_endpoint}.

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#schemas IdentityDomainsSetting#schemas}.

---

##### `setting_id`<sup>Required</sup> <a name="setting_id" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.settingId"></a>

```python
setting_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#setting_id IdentityDomainsSetting#setting_id}.

---

##### `account_always_trust_scope`<sup>Optional</sup> <a name="account_always_trust_scope" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.accountAlwaysTrustScope"></a>

```python
account_always_trust_scope: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#account_always_trust_scope IdentityDomainsSetting#account_always_trust_scope}.

---

##### `allowed_domains`<sup>Optional</sup> <a name="allowed_domains" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.allowedDomains"></a>

```python
allowed_domains: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#allowed_domains IdentityDomainsSetting#allowed_domains}.

---

##### `allowed_forgot_password_flow_return_urls`<sup>Optional</sup> <a name="allowed_forgot_password_flow_return_urls" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.allowedForgotPasswordFlowReturnUrls"></a>

```python
allowed_forgot_password_flow_return_urls: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#allowed_forgot_password_flow_return_urls IdentityDomainsSetting#allowed_forgot_password_flow_return_urls}.

---

##### `allowed_notification_redirect_urls`<sup>Optional</sup> <a name="allowed_notification_redirect_urls" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.allowedNotificationRedirectUrls"></a>

```python
allowed_notification_redirect_urls: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#allowed_notification_redirect_urls IdentityDomainsSetting#allowed_notification_redirect_urls}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#attributes IdentityDomainsSetting#attributes}.

---

##### `attribute_sets`<sup>Optional</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#attribute_sets IdentityDomainsSetting#attribute_sets}.

---

##### `audit_event_retention_period`<sup>Optional</sup> <a name="audit_event_retention_period" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.auditEventRetentionPeriod"></a>

```python
audit_event_retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#audit_event_retention_period IdentityDomainsSetting#audit_event_retention_period}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#authorization IdentityDomainsSetting#authorization}.

---

##### `certificate_validation`<sup>Optional</sup> <a name="certificate_validation" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.certificateValidation"></a>

```python
certificate_validation: IdentityDomainsSettingCertificateValidation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation">IdentityDomainsSettingCertificateValidation</a>

certificate_validation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#certificate_validation IdentityDomainsSetting#certificate_validation}

---

##### `cloud_gate_cors_settings`<sup>Optional</sup> <a name="cloud_gate_cors_settings" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.cloudGateCorsSettings"></a>

```python
cloud_gate_cors_settings: IdentityDomainsSettingCloudGateCorsSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings">IdentityDomainsSettingCloudGateCorsSettings</a>

cloud_gate_cors_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#cloud_gate_cors_settings IdentityDomainsSetting#cloud_gate_cors_settings}

---

##### `cloud_migration_custom_url`<sup>Optional</sup> <a name="cloud_migration_custom_url" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.cloudMigrationCustomUrl"></a>

```python
cloud_migration_custom_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#cloud_migration_custom_url IdentityDomainsSetting#cloud_migration_custom_url}.

---

##### `cloud_migration_url_enabled`<sup>Optional</sup> <a name="cloud_migration_url_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.cloudMigrationUrlEnabled"></a>

```python
cloud_migration_url_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#cloud_migration_url_enabled IdentityDomainsSetting#cloud_migration_url_enabled}.

---

##### `company_names`<sup>Optional</sup> <a name="company_names" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.companyNames"></a>

```python
company_names: typing.Union[IResolvable, typing.List[IdentityDomainsSettingCompanyNames]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNames">IdentityDomainsSettingCompanyNames</a>]]

company_names block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#company_names IdentityDomainsSetting#company_names}

---

##### `contact_emails`<sup>Optional</sup> <a name="contact_emails" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.contactEmails"></a>

```python
contact_emails: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#contact_emails IdentityDomainsSetting#contact_emails}.

---

##### `custom_branding`<sup>Optional</sup> <a name="custom_branding" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.customBranding"></a>

```python
custom_branding: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#custom_branding IdentityDomainsSetting#custom_branding}.

---

##### `custom_css_location`<sup>Optional</sup> <a name="custom_css_location" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.customCssLocation"></a>

```python
custom_css_location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#custom_css_location IdentityDomainsSetting#custom_css_location}.

---

##### `custom_html_location`<sup>Optional</sup> <a name="custom_html_location" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.customHtmlLocation"></a>

```python
custom_html_location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#custom_html_location IdentityDomainsSetting#custom_html_location}.

---

##### `custom_translation`<sup>Optional</sup> <a name="custom_translation" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.customTranslation"></a>

```python
custom_translation: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#custom_translation IdentityDomainsSetting#custom_translation}.

---

##### `default_trust_scope`<sup>Optional</sup> <a name="default_trust_scope" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.defaultTrustScope"></a>

```python
default_trust_scope: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#default_trust_scope IdentityDomainsSetting#default_trust_scope}.

---

##### `diagnostic_level`<sup>Optional</sup> <a name="diagnostic_level" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.diagnosticLevel"></a>

```python
diagnostic_level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#diagnostic_level IdentityDomainsSetting#diagnostic_level}.

---

##### `diagnostic_record_for_search_identifies_returned_resources`<sup>Optional</sup> <a name="diagnostic_record_for_search_identifies_returned_resources" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.diagnosticRecordForSearchIdentifiesReturnedResources"></a>

```python
diagnostic_record_for_search_identifies_returned_resources: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#diagnostic_record_for_search_identifies_returned_resources IdentityDomainsSetting#diagnostic_record_for_search_identifies_returned_resources}.

---

##### `enable_terms_of_use`<sup>Optional</sup> <a name="enable_terms_of_use" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.enableTermsOfUse"></a>

```python
enable_terms_of_use: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#enable_terms_of_use IdentityDomainsSetting#enable_terms_of_use}.

---

##### `external_id`<sup>Optional</sup> <a name="external_id" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#external_id IdentityDomainsSetting#external_id}.

---

##### `iam_upst_session_expiry`<sup>Optional</sup> <a name="iam_upst_session_expiry" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.iamUpstSessionExpiry"></a>

```python
iam_upst_session_expiry: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#iam_upst_session_expiry IdentityDomainsSetting#iam_upst_session_expiry}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#id IdentityDomainsSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `images`<sup>Optional</sup> <a name="images" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.images"></a>

```python
images: typing.Union[IResolvable, typing.List[IdentityDomainsSettingImages]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImages">IdentityDomainsSettingImages</a>]]

images block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#images IdentityDomainsSetting#images}

---

##### `is_hosted_page`<sup>Optional</sup> <a name="is_hosted_page" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.isHostedPage"></a>

```python
is_hosted_page: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#is_hosted_page IdentityDomainsSetting#is_hosted_page}.

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#issuer IdentityDomainsSetting#issuer}.

---

##### `locale`<sup>Optional</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.locale"></a>

```python
locale: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#locale IdentityDomainsSetting#locale}.

---

##### `login_texts`<sup>Optional</sup> <a name="login_texts" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.loginTexts"></a>

```python
login_texts: typing.Union[IResolvable, typing.List[IdentityDomainsSettingLoginTexts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTexts">IdentityDomainsSettingLoginTexts</a>]]

login_texts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#login_texts IdentityDomainsSetting#login_texts}

---

##### `max_no_of_app_cmva_to_return`<sup>Optional</sup> <a name="max_no_of_app_cmva_to_return" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.maxNoOfAppCmvaToReturn"></a>

```python
max_no_of_app_cmva_to_return: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#max_no_of_app_cmva_to_return IdentityDomainsSetting#max_no_of_app_cmva_to_return}.

---

##### `max_no_of_app_role_members_to_return`<sup>Optional</sup> <a name="max_no_of_app_role_members_to_return" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.maxNoOfAppRoleMembersToReturn"></a>

```python
max_no_of_app_role_members_to_return: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#max_no_of_app_role_members_to_return IdentityDomainsSetting#max_no_of_app_role_members_to_return}.

---

##### `ocid`<sup>Optional</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#ocid IdentityDomainsSetting#ocid}.

---

##### `preferred_language`<sup>Optional</sup> <a name="preferred_language" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.preferredLanguage"></a>

```python
preferred_language: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#preferred_language IdentityDomainsSetting#preferred_language}.

---

##### `prev_issuer`<sup>Optional</sup> <a name="prev_issuer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.prevIssuer"></a>

```python
prev_issuer: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#prev_issuer IdentityDomainsSetting#prev_issuer}.

---

##### `privacy_policy_url`<sup>Optional</sup> <a name="privacy_policy_url" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.privacyPolicyUrl"></a>

```python
privacy_policy_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#privacy_policy_url IdentityDomainsSetting#privacy_policy_url}.

---

##### `purge_configs`<sup>Optional</sup> <a name="purge_configs" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.purgeConfigs"></a>

```python
purge_configs: typing.Union[IResolvable, typing.List[IdentityDomainsSettingPurgeConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigs">IdentityDomainsSettingPurgeConfigs</a>]]

purge_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#purge_configs IdentityDomainsSetting#purge_configs}

---

##### `re_auth_factor`<sup>Optional</sup> <a name="re_auth_factor" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.reAuthFactor"></a>

```python
re_auth_factor: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#re_auth_factor IdentityDomainsSetting#re_auth_factor}.

---

##### `re_auth_when_changing_my_authentication_factors`<sup>Optional</sup> <a name="re_auth_when_changing_my_authentication_factors" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.reAuthWhenChangingMyAuthenticationFactors"></a>

```python
re_auth_when_changing_my_authentication_factors: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#re_auth_when_changing_my_authentication_factors IdentityDomainsSetting#re_auth_when_changing_my_authentication_factors}.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#resource_type_schema_version IdentityDomainsSetting#resource_type_schema_version}.

---

##### `service_admin_cannot_list_other_users`<sup>Optional</sup> <a name="service_admin_cannot_list_other_users" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.serviceAdminCannotListOtherUsers"></a>

```python
service_admin_cannot_list_other_users: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#service_admin_cannot_list_other_users IdentityDomainsSetting#service_admin_cannot_list_other_users}.

---

##### `signing_cert_public_access`<sup>Optional</sup> <a name="signing_cert_public_access" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.signingCertPublicAccess"></a>

```python
signing_cert_public_access: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#signing_cert_public_access IdentityDomainsSetting#signing_cert_public_access}.

---

##### `sub_mapping_attr`<sup>Optional</sup> <a name="sub_mapping_attr" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.subMappingAttr"></a>

```python
sub_mapping_attr: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#sub_mapping_attr IdentityDomainsSetting#sub_mapping_attr}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.tags"></a>

```python
tags: typing.Union[IResolvable, typing.List[IdentityDomainsSettingTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTags">IdentityDomainsSettingTags</a>]]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#tags IdentityDomainsSetting#tags}

---

##### `tenant_custom_claims`<sup>Optional</sup> <a name="tenant_custom_claims" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.tenantCustomClaims"></a>

```python
tenant_custom_claims: typing.Union[IResolvable, typing.List[IdentityDomainsSettingTenantCustomClaims]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims">IdentityDomainsSettingTenantCustomClaims</a>]]

tenant_custom_claims block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#tenant_custom_claims IdentityDomainsSetting#tenant_custom_claims}

---

##### `terms_of_use_url`<sup>Optional</sup> <a name="terms_of_use_url" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.termsOfUseUrl"></a>

```python
terms_of_use_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#terms_of_use_url IdentityDomainsSetting#terms_of_use_url}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.timeouts"></a>

```python
timeouts: IdentityDomainsSettingTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeouts">IdentityDomainsSettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#timeouts IdentityDomainsSetting#timeouts}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#timezone IdentityDomainsSetting#timezone}.

---

### IdentityDomainsSettingDefaultCompanyNames <a name="IdentityDomainsSettingDefaultCompanyNames" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNames"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNames.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_setting

identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNames()
```


### IdentityDomainsSettingDefaultImages <a name="IdentityDomainsSettingDefaultImages" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImages"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImages.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_setting

identityDomainsSetting.IdentityDomainsSettingDefaultImages()
```


### IdentityDomainsSettingDefaultLoginTexts <a name="IdentityDomainsSettingDefaultLoginTexts" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTexts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTexts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_setting

identityDomainsSetting.IdentityDomainsSettingDefaultLoginTexts()
```


### IdentityDomainsSettingIdcsCreatedBy <a name="IdentityDomainsSettingIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_setting

identityDomainsSetting.IdentityDomainsSettingIdcsCreatedBy()
```


### IdentityDomainsSettingIdcsLastModifiedBy <a name="IdentityDomainsSettingIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_setting

identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedBy()
```


### IdentityDomainsSettingImages <a name="IdentityDomainsSettingImages" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImages"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImages.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_setting

identityDomainsSetting.IdentityDomainsSettingImages(
  type: str,
  value: str,
  display: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImages.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#type IdentityDomainsSetting#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImages.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#value IdentityDomainsSetting#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImages.property.display">display</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#display IdentityDomainsSetting#display}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImages.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#type IdentityDomainsSetting#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImages.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#value IdentityDomainsSetting#value}.

---

##### `display`<sup>Optional</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImages.property.display"></a>

```python
display: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#display IdentityDomainsSetting#display}.

---

### IdentityDomainsSettingLoginTexts <a name="IdentityDomainsSettingLoginTexts" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTexts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTexts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_setting

identityDomainsSetting.IdentityDomainsSettingLoginTexts(
  locale: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTexts.property.locale">locale</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#locale IdentityDomainsSetting#locale}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTexts.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#value IdentityDomainsSetting#value}. |

---

##### `locale`<sup>Required</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTexts.property.locale"></a>

```python
locale: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#locale IdentityDomainsSetting#locale}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTexts.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#value IdentityDomainsSetting#value}.

---

### IdentityDomainsSettingMeta <a name="IdentityDomainsSettingMeta" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMeta.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_setting

identityDomainsSetting.IdentityDomainsSettingMeta()
```


### IdentityDomainsSettingPurgeConfigs <a name="IdentityDomainsSettingPurgeConfigs" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigs"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigs.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_setting

identityDomainsSetting.IdentityDomainsSettingPurgeConfigs(
  resource_name: str,
  retention_period: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigs.property.resourceName">resource_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#resource_name IdentityDomainsSetting#resource_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigs.property.retentionPeriod">retention_period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#retention_period IdentityDomainsSetting#retention_period}. |

---

##### `resource_name`<sup>Required</sup> <a name="resource_name" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigs.property.resourceName"></a>

```python
resource_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#resource_name IdentityDomainsSetting#resource_name}.

---

##### `retention_period`<sup>Required</sup> <a name="retention_period" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigs.property.retentionPeriod"></a>

```python
retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#retention_period IdentityDomainsSetting#retention_period}.

---

### IdentityDomainsSettingTags <a name="IdentityDomainsSettingTags" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTags.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_setting

identityDomainsSetting.IdentityDomainsSettingTags(
  key: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#key IdentityDomainsSetting#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#value IdentityDomainsSetting#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#key IdentityDomainsSetting#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#value IdentityDomainsSetting#value}.

---

### IdentityDomainsSettingTenantCustomClaims <a name="IdentityDomainsSettingTenantCustomClaims" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_setting

identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims(
  all_scopes: typing.Union[bool, IResolvable],
  expression: typing.Union[bool, IResolvable],
  mode: str,
  name: str,
  token_type: str,
  value: str,
  scopes: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims.property.allScopes">all_scopes</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#all_scopes IdentityDomainsSetting#all_scopes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims.property.expression">expression</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#expression IdentityDomainsSetting#expression}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims.property.mode">mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#mode IdentityDomainsSetting#mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#name IdentityDomainsSetting#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims.property.tokenType">token_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#token_type IdentityDomainsSetting#token_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#value IdentityDomainsSetting#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#scopes IdentityDomainsSetting#scopes}. |

---

##### `all_scopes`<sup>Required</sup> <a name="all_scopes" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims.property.allScopes"></a>

```python
all_scopes: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#all_scopes IdentityDomainsSetting#all_scopes}.

---

##### `expression`<sup>Required</sup> <a name="expression" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims.property.expression"></a>

```python
expression: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#expression IdentityDomainsSetting#expression}.

---

##### `mode`<sup>Required</sup> <a name="mode" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims.property.mode"></a>

```python
mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#mode IdentityDomainsSetting#mode}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#name IdentityDomainsSetting#name}.

---

##### `token_type`<sup>Required</sup> <a name="token_type" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims.property.tokenType"></a>

```python
token_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#token_type IdentityDomainsSetting#token_type}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#value IdentityDomainsSetting#value}.

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#scopes IdentityDomainsSetting#scopes}.

---

### IdentityDomainsSettingTimeouts <a name="IdentityDomainsSettingTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_setting

identityDomainsSetting.IdentityDomainsSettingTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#create IdentityDomainsSetting#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#delete IdentityDomainsSetting#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#update IdentityDomainsSetting#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#create IdentityDomainsSetting#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#delete IdentityDomainsSetting#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#update IdentityDomainsSetting#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityDomainsSettingCertificateValidationOutputReference <a name="IdentityDomainsSettingCertificateValidationOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_setting

identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resetCrlCheckOnOcspFailureEnabled">reset_crl_check_on_ocsp_failure_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resetCrlEnabled">reset_crl_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resetCrlLocation">reset_crl_location</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resetCrlRefreshInterval">reset_crl_refresh_interval</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resetOcspEnabled">reset_ocsp_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resetOcspResponderUrl">reset_ocsp_responder_url</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resetOcspSettingsResponderUrlPreferred">reset_ocsp_settings_responder_url_preferred</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resetOcspSigningCertificateAlias">reset_ocsp_signing_certificate_alias</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resetOcspTimeoutDuration">reset_ocsp_timeout_duration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resetOcspUnknownResponseStatusAllowed">reset_ocsp_unknown_response_status_allowed</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_crl_check_on_ocsp_failure_enabled` <a name="reset_crl_check_on_ocsp_failure_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resetCrlCheckOnOcspFailureEnabled"></a>

```python
def reset_crl_check_on_ocsp_failure_enabled() -> None
```

##### `reset_crl_enabled` <a name="reset_crl_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resetCrlEnabled"></a>

```python
def reset_crl_enabled() -> None
```

##### `reset_crl_location` <a name="reset_crl_location" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resetCrlLocation"></a>

```python
def reset_crl_location() -> None
```

##### `reset_crl_refresh_interval` <a name="reset_crl_refresh_interval" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resetCrlRefreshInterval"></a>

```python
def reset_crl_refresh_interval() -> None
```

##### `reset_ocsp_enabled` <a name="reset_ocsp_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resetOcspEnabled"></a>

```python
def reset_ocsp_enabled() -> None
```

##### `reset_ocsp_responder_url` <a name="reset_ocsp_responder_url" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resetOcspResponderUrl"></a>

```python
def reset_ocsp_responder_url() -> None
```

##### `reset_ocsp_settings_responder_url_preferred` <a name="reset_ocsp_settings_responder_url_preferred" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resetOcspSettingsResponderUrlPreferred"></a>

```python
def reset_ocsp_settings_responder_url_preferred() -> None
```

##### `reset_ocsp_signing_certificate_alias` <a name="reset_ocsp_signing_certificate_alias" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resetOcspSigningCertificateAlias"></a>

```python
def reset_ocsp_signing_certificate_alias() -> None
```

##### `reset_ocsp_timeout_duration` <a name="reset_ocsp_timeout_duration" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resetOcspTimeoutDuration"></a>

```python
def reset_ocsp_timeout_duration() -> None
```

##### `reset_ocsp_unknown_response_status_allowed` <a name="reset_ocsp_unknown_response_status_allowed" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resetOcspUnknownResponseStatusAllowed"></a>

```python
def reset_ocsp_unknown_response_status_allowed() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.crlCheckOnOcspFailureEnabledInput">crl_check_on_ocsp_failure_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.crlEnabledInput">crl_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.crlLocationInput">crl_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.crlRefreshIntervalInput">crl_refresh_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspEnabledInput">ocsp_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspResponderUrlInput">ocsp_responder_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspSettingsResponderUrlPreferredInput">ocsp_settings_responder_url_preferred_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspSigningCertificateAliasInput">ocsp_signing_certificate_alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspTimeoutDurationInput">ocsp_timeout_duration_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspUnknownResponseStatusAllowedInput">ocsp_unknown_response_status_allowed_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.crlCheckOnOcspFailureEnabled">crl_check_on_ocsp_failure_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.crlEnabled">crl_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.crlLocation">crl_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.crlRefreshInterval">crl_refresh_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspEnabled">ocsp_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspResponderUrl">ocsp_responder_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspSettingsResponderUrlPreferred">ocsp_settings_responder_url_preferred</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspSigningCertificateAlias">ocsp_signing_certificate_alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspTimeoutDuration">ocsp_timeout_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspUnknownResponseStatusAllowed">ocsp_unknown_response_status_allowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation">IdentityDomainsSettingCertificateValidation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `crl_check_on_ocsp_failure_enabled_input`<sup>Optional</sup> <a name="crl_check_on_ocsp_failure_enabled_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.crlCheckOnOcspFailureEnabledInput"></a>

```python
crl_check_on_ocsp_failure_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `crl_enabled_input`<sup>Optional</sup> <a name="crl_enabled_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.crlEnabledInput"></a>

```python
crl_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `crl_location_input`<sup>Optional</sup> <a name="crl_location_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.crlLocationInput"></a>

```python
crl_location_input: str
```

- *Type:* str

---

##### `crl_refresh_interval_input`<sup>Optional</sup> <a name="crl_refresh_interval_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.crlRefreshIntervalInput"></a>

```python
crl_refresh_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocsp_enabled_input`<sup>Optional</sup> <a name="ocsp_enabled_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspEnabledInput"></a>

```python
ocsp_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ocsp_responder_url_input`<sup>Optional</sup> <a name="ocsp_responder_url_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspResponderUrlInput"></a>

```python
ocsp_responder_url_input: str
```

- *Type:* str

---

##### `ocsp_settings_responder_url_preferred_input`<sup>Optional</sup> <a name="ocsp_settings_responder_url_preferred_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspSettingsResponderUrlPreferredInput"></a>

```python
ocsp_settings_responder_url_preferred_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ocsp_signing_certificate_alias_input`<sup>Optional</sup> <a name="ocsp_signing_certificate_alias_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspSigningCertificateAliasInput"></a>

```python
ocsp_signing_certificate_alias_input: str
```

- *Type:* str

---

##### `ocsp_timeout_duration_input`<sup>Optional</sup> <a name="ocsp_timeout_duration_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspTimeoutDurationInput"></a>

```python
ocsp_timeout_duration_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocsp_unknown_response_status_allowed_input`<sup>Optional</sup> <a name="ocsp_unknown_response_status_allowed_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspUnknownResponseStatusAllowedInput"></a>

```python
ocsp_unknown_response_status_allowed_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `crl_check_on_ocsp_failure_enabled`<sup>Required</sup> <a name="crl_check_on_ocsp_failure_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.crlCheckOnOcspFailureEnabled"></a>

```python
crl_check_on_ocsp_failure_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `crl_enabled`<sup>Required</sup> <a name="crl_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.crlEnabled"></a>

```python
crl_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `crl_location`<sup>Required</sup> <a name="crl_location" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.crlLocation"></a>

```python
crl_location: str
```

- *Type:* str

---

##### `crl_refresh_interval`<sup>Required</sup> <a name="crl_refresh_interval" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.crlRefreshInterval"></a>

```python
crl_refresh_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocsp_enabled`<sup>Required</sup> <a name="ocsp_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspEnabled"></a>

```python
ocsp_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ocsp_responder_url`<sup>Required</sup> <a name="ocsp_responder_url" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspResponderUrl"></a>

```python
ocsp_responder_url: str
```

- *Type:* str

---

##### `ocsp_settings_responder_url_preferred`<sup>Required</sup> <a name="ocsp_settings_responder_url_preferred" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspSettingsResponderUrlPreferred"></a>

```python
ocsp_settings_responder_url_preferred: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ocsp_signing_certificate_alias`<sup>Required</sup> <a name="ocsp_signing_certificate_alias" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspSigningCertificateAlias"></a>

```python
ocsp_signing_certificate_alias: str
```

- *Type:* str

---

##### `ocsp_timeout_duration`<sup>Required</sup> <a name="ocsp_timeout_duration" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspTimeoutDuration"></a>

```python
ocsp_timeout_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocsp_unknown_response_status_allowed`<sup>Required</sup> <a name="ocsp_unknown_response_status_allowed" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspUnknownResponseStatusAllowed"></a>

```python
ocsp_unknown_response_status_allowed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsSettingCertificateValidation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation">IdentityDomainsSettingCertificateValidation</a>

---


### IdentityDomainsSettingCloudGateCorsSettingsOutputReference <a name="IdentityDomainsSettingCloudGateCorsSettingsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_setting

identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.resetCloudGateCorsAllowedOrigins">reset_cloud_gate_cors_allowed_origins</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.resetCloudGateCorsAllowNullOrigin">reset_cloud_gate_cors_allow_null_origin</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.resetCloudGateCorsEnabled">reset_cloud_gate_cors_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.resetCloudGateCorsExposedHeaders">reset_cloud_gate_cors_exposed_headers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.resetCloudGateCorsMaxAge">reset_cloud_gate_cors_max_age</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cloud_gate_cors_allowed_origins` <a name="reset_cloud_gate_cors_allowed_origins" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.resetCloudGateCorsAllowedOrigins"></a>

```python
def reset_cloud_gate_cors_allowed_origins() -> None
```

##### `reset_cloud_gate_cors_allow_null_origin` <a name="reset_cloud_gate_cors_allow_null_origin" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.resetCloudGateCorsAllowNullOrigin"></a>

```python
def reset_cloud_gate_cors_allow_null_origin() -> None
```

##### `reset_cloud_gate_cors_enabled` <a name="reset_cloud_gate_cors_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.resetCloudGateCorsEnabled"></a>

```python
def reset_cloud_gate_cors_enabled() -> None
```

##### `reset_cloud_gate_cors_exposed_headers` <a name="reset_cloud_gate_cors_exposed_headers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.resetCloudGateCorsExposedHeaders"></a>

```python
def reset_cloud_gate_cors_exposed_headers() -> None
```

##### `reset_cloud_gate_cors_max_age` <a name="reset_cloud_gate_cors_max_age" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.resetCloudGateCorsMaxAge"></a>

```python
def reset_cloud_gate_cors_max_age() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsAllowedOriginsInput">cloud_gate_cors_allowed_origins_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsAllowNullOriginInput">cloud_gate_cors_allow_null_origin_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsEnabledInput">cloud_gate_cors_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsExposedHeadersInput">cloud_gate_cors_exposed_headers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsMaxAgeInput">cloud_gate_cors_max_age_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsAllowedOrigins">cloud_gate_cors_allowed_origins</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsAllowNullOrigin">cloud_gate_cors_allow_null_origin</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsEnabled">cloud_gate_cors_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsExposedHeaders">cloud_gate_cors_exposed_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsMaxAge">cloud_gate_cors_max_age</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings">IdentityDomainsSettingCloudGateCorsSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloud_gate_cors_allowed_origins_input`<sup>Optional</sup> <a name="cloud_gate_cors_allowed_origins_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsAllowedOriginsInput"></a>

```python
cloud_gate_cors_allowed_origins_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cloud_gate_cors_allow_null_origin_input`<sup>Optional</sup> <a name="cloud_gate_cors_allow_null_origin_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsAllowNullOriginInput"></a>

```python
cloud_gate_cors_allow_null_origin_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cloud_gate_cors_enabled_input`<sup>Optional</sup> <a name="cloud_gate_cors_enabled_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsEnabledInput"></a>

```python
cloud_gate_cors_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cloud_gate_cors_exposed_headers_input`<sup>Optional</sup> <a name="cloud_gate_cors_exposed_headers_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsExposedHeadersInput"></a>

```python
cloud_gate_cors_exposed_headers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cloud_gate_cors_max_age_input`<sup>Optional</sup> <a name="cloud_gate_cors_max_age_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsMaxAgeInput"></a>

```python
cloud_gate_cors_max_age_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cloud_gate_cors_allowed_origins`<sup>Required</sup> <a name="cloud_gate_cors_allowed_origins" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsAllowedOrigins"></a>

```python
cloud_gate_cors_allowed_origins: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cloud_gate_cors_allow_null_origin`<sup>Required</sup> <a name="cloud_gate_cors_allow_null_origin" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsAllowNullOrigin"></a>

```python
cloud_gate_cors_allow_null_origin: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cloud_gate_cors_enabled`<sup>Required</sup> <a name="cloud_gate_cors_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsEnabled"></a>

```python
cloud_gate_cors_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cloud_gate_cors_exposed_headers`<sup>Required</sup> <a name="cloud_gate_cors_exposed_headers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsExposedHeaders"></a>

```python
cloud_gate_cors_exposed_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cloud_gate_cors_max_age`<sup>Required</sup> <a name="cloud_gate_cors_max_age" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsMaxAge"></a>

```python
cloud_gate_cors_max_age: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsSettingCloudGateCorsSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings">IdentityDomainsSettingCloudGateCorsSettings</a>

---


### IdentityDomainsSettingCompanyNamesList <a name="IdentityDomainsSettingCompanyNamesList" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_setting

identityDomainsSetting.IdentityDomainsSettingCompanyNamesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsSettingCompanyNamesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNames">IdentityDomainsSettingCompanyNames</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[IdentityDomainsSettingCompanyNames]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNames">IdentityDomainsSettingCompanyNames</a>]]

---


### IdentityDomainsSettingCompanyNamesOutputReference <a name="IdentityDomainsSettingCompanyNamesOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_setting

identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.property.localeInput">locale_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.property.locale">locale</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNames">IdentityDomainsSettingCompanyNames</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `locale_input`<sup>Optional</sup> <a name="locale_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.property.localeInput"></a>

```python
locale_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `locale`<sup>Required</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.property.locale"></a>

```python
locale: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IdentityDomainsSettingCompanyNames]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNames">IdentityDomainsSettingCompanyNames</a>]

---


### IdentityDomainsSettingDefaultCompanyNamesList <a name="IdentityDomainsSettingDefaultCompanyNamesList" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_setting

identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsSettingDefaultCompanyNamesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IdentityDomainsSettingDefaultCompanyNamesOutputReference <a name="IdentityDomainsSettingDefaultCompanyNamesOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_setting

identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.property.locale">locale</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNames">IdentityDomainsSettingDefaultCompanyNames</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `locale`<sup>Required</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.property.locale"></a>

```python
locale: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsSettingDefaultCompanyNames
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNames">IdentityDomainsSettingDefaultCompanyNames</a>

---


### IdentityDomainsSettingDefaultImagesList <a name="IdentityDomainsSettingDefaultImagesList" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_setting

identityDomainsSetting.IdentityDomainsSettingDefaultImagesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsSettingDefaultImagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IdentityDomainsSettingDefaultImagesOutputReference <a name="IdentityDomainsSettingDefaultImagesOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_setting

identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImages">IdentityDomainsSettingDefaultImages</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsSettingDefaultImages
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImages">IdentityDomainsSettingDefaultImages</a>

---


### IdentityDomainsSettingDefaultLoginTextsList <a name="IdentityDomainsSettingDefaultLoginTextsList" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_setting

identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsSettingDefaultLoginTextsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IdentityDomainsSettingDefaultLoginTextsOutputReference <a name="IdentityDomainsSettingDefaultLoginTextsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_setting

identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.property.locale">locale</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTexts">IdentityDomainsSettingDefaultLoginTexts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `locale`<sup>Required</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.property.locale"></a>

```python
locale: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsSettingDefaultLoginTexts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTexts">IdentityDomainsSettingDefaultLoginTexts</a>

---


### IdentityDomainsSettingIdcsCreatedByList <a name="IdentityDomainsSettingIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_setting

identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsSettingIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IdentityDomainsSettingIdcsCreatedByOutputReference <a name="IdentityDomainsSettingIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_setting

identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedBy">IdentityDomainsSettingIdcsCreatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsSettingIdcsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedBy">IdentityDomainsSettingIdcsCreatedBy</a>

---


### IdentityDomainsSettingIdcsLastModifiedByList <a name="IdentityDomainsSettingIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_setting

identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsSettingIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IdentityDomainsSettingIdcsLastModifiedByOutputReference <a name="IdentityDomainsSettingIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_setting

identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedBy">IdentityDomainsSettingIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsSettingIdcsLastModifiedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedBy">IdentityDomainsSettingIdcsLastModifiedBy</a>

---


### IdentityDomainsSettingImagesList <a name="IdentityDomainsSettingImagesList" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_setting

identityDomainsSetting.IdentityDomainsSettingImagesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsSettingImagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImages">IdentityDomainsSettingImages</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[IdentityDomainsSettingImages]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImages">IdentityDomainsSettingImages</a>]]

---


### IdentityDomainsSettingImagesOutputReference <a name="IdentityDomainsSettingImagesOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_setting

identityDomainsSetting.IdentityDomainsSettingImagesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.resetDisplay">reset_display</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_display` <a name="reset_display" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.resetDisplay"></a>

```python
def reset_display() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.property.displayInput">display_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImages">IdentityDomainsSettingImages</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_input`<sup>Optional</sup> <a name="display_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.property.displayInput"></a>

```python
display_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IdentityDomainsSettingImages]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImages">IdentityDomainsSettingImages</a>]

---


### IdentityDomainsSettingLoginTextsList <a name="IdentityDomainsSettingLoginTextsList" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_setting

identityDomainsSetting.IdentityDomainsSettingLoginTextsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsSettingLoginTextsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTexts">IdentityDomainsSettingLoginTexts</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[IdentityDomainsSettingLoginTexts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTexts">IdentityDomainsSettingLoginTexts</a>]]

---


### IdentityDomainsSettingLoginTextsOutputReference <a name="IdentityDomainsSettingLoginTextsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_setting

identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.property.localeInput">locale_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.property.locale">locale</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTexts">IdentityDomainsSettingLoginTexts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `locale_input`<sup>Optional</sup> <a name="locale_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.property.localeInput"></a>

```python
locale_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `locale`<sup>Required</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.property.locale"></a>

```python
locale: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IdentityDomainsSettingLoginTexts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTexts">IdentityDomainsSettingLoginTexts</a>]

---


### IdentityDomainsSettingMetaList <a name="IdentityDomainsSettingMetaList" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_setting

identityDomainsSetting.IdentityDomainsSettingMetaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsSettingMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IdentityDomainsSettingMetaOutputReference <a name="IdentityDomainsSettingMetaOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_setting

identityDomainsSetting.IdentityDomainsSettingMetaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.property.lastModified">last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMeta">IdentityDomainsSettingMeta</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `last_modified`<sup>Required</sup> <a name="last_modified" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.property.lastModified"></a>

```python
last_modified: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsSettingMeta
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMeta">IdentityDomainsSettingMeta</a>

---


### IdentityDomainsSettingPurgeConfigsList <a name="IdentityDomainsSettingPurgeConfigsList" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_setting

identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsSettingPurgeConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigs">IdentityDomainsSettingPurgeConfigs</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[IdentityDomainsSettingPurgeConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigs">IdentityDomainsSettingPurgeConfigs</a>]]

---


### IdentityDomainsSettingPurgeConfigsOutputReference <a name="IdentityDomainsSettingPurgeConfigsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_setting

identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.property.resourceNameInput">resource_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.property.retentionPeriodInput">retention_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.property.resourceName">resource_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.property.retentionPeriod">retention_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigs">IdentityDomainsSettingPurgeConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_name_input`<sup>Optional</sup> <a name="resource_name_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.property.resourceNameInput"></a>

```python
resource_name_input: str
```

- *Type:* str

---

##### `retention_period_input`<sup>Optional</sup> <a name="retention_period_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.property.retentionPeriodInput"></a>

```python
retention_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_name`<sup>Required</sup> <a name="resource_name" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.property.resourceName"></a>

```python
resource_name: str
```

- *Type:* str

---

##### `retention_period`<sup>Required</sup> <a name="retention_period" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.property.retentionPeriod"></a>

```python
retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IdentityDomainsSettingPurgeConfigs]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigs">IdentityDomainsSettingPurgeConfigs</a>]

---


### IdentityDomainsSettingTagsList <a name="IdentityDomainsSettingTagsList" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_setting

identityDomainsSetting.IdentityDomainsSettingTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsSettingTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTags">IdentityDomainsSettingTags</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[IdentityDomainsSettingTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTags">IdentityDomainsSettingTags</a>]]

---


### IdentityDomainsSettingTagsOutputReference <a name="IdentityDomainsSettingTagsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_setting

identityDomainsSetting.IdentityDomainsSettingTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTags">IdentityDomainsSettingTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IdentityDomainsSettingTags]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTags">IdentityDomainsSettingTags</a>]

---


### IdentityDomainsSettingTenantCustomClaimsList <a name="IdentityDomainsSettingTenantCustomClaimsList" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_setting

identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsSettingTenantCustomClaimsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims">IdentityDomainsSettingTenantCustomClaims</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[IdentityDomainsSettingTenantCustomClaims]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims">IdentityDomainsSettingTenantCustomClaims</a>]]

---


### IdentityDomainsSettingTenantCustomClaimsOutputReference <a name="IdentityDomainsSettingTenantCustomClaimsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_setting

identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.resetScopes">reset_scopes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_scopes` <a name="reset_scopes" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.resetScopes"></a>

```python
def reset_scopes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.allScopesInput">all_scopes_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.expressionInput">expression_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.scopesInput">scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.tokenTypeInput">token_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.allScopes">all_scopes</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.expression">expression</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.tokenType">token_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims">IdentityDomainsSettingTenantCustomClaims</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `all_scopes_input`<sup>Optional</sup> <a name="all_scopes_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.allScopesInput"></a>

```python
all_scopes_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.expressionInput"></a>

```python
expression_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `scopes_input`<sup>Optional</sup> <a name="scopes_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.scopesInput"></a>

```python
scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_type_input`<sup>Optional</sup> <a name="token_type_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.tokenTypeInput"></a>

```python
token_type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `all_scopes`<sup>Required</sup> <a name="all_scopes" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.allScopes"></a>

```python
all_scopes: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `expression`<sup>Required</sup> <a name="expression" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.expression"></a>

```python
expression: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `mode`<sup>Required</sup> <a name="mode" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_type`<sup>Required</sup> <a name="token_type" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.tokenType"></a>

```python
token_type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IdentityDomainsSettingTenantCustomClaims]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims">IdentityDomainsSettingTenantCustomClaims</a>]

---


### IdentityDomainsSettingTimeoutsOutputReference <a name="IdentityDomainsSettingTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_setting

identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeouts">IdentityDomainsSettingTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IdentityDomainsSettingTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeouts">IdentityDomainsSettingTimeouts</a>]

---



