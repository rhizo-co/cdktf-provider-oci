# `identityDomainsSelfRegistrationProfile` Submodule <a name="`identityDomainsSelfRegistrationProfile` Submodule" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityDomainsSelfRegistrationProfile <a name="IdentityDomainsSelfRegistrationProfile" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile oci_identity_domains_self_registration_profile}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_self_registration_profile

identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  activation_email_required: typing.Union[bool, IResolvable],
  consent_text_present: typing.Union[bool, IResolvable],
  display_name: typing.Union[IResolvable, typing.List[IdentityDomainsSelfRegistrationProfileDisplayName]],
  email_template: IdentityDomainsSelfRegistrationProfileEmailTemplate,
  idcs_endpoint: str,
  name: str,
  number_of_days_redirect_url_is_valid: typing.Union[int, float],
  redirect_url: str,
  schemas: typing.List[str],
  show_on_login_page: typing.Union[bool, IResolvable],
  active: typing.Union[bool, IResolvable] = None,
  after_submit_text: typing.Union[IResolvable, typing.List[IdentityDomainsSelfRegistrationProfileAfterSubmitText]] = None,
  allowed_email_domains: typing.List[str] = None,
  attributes: str = None,
  attribute_sets: typing.List[str] = None,
  authorization: str = None,
  consent_text: typing.Union[IResolvable, typing.List[IdentityDomainsSelfRegistrationProfileConsentText]] = None,
  default_groups: typing.Union[IResolvable, typing.List[IdentityDomainsSelfRegistrationProfileDefaultGroups]] = None,
  disallowed_email_domains: typing.List[str] = None,
  external_id: str = None,
  footer_logo: str = None,
  footer_text: typing.Union[IResolvable, typing.List[IdentityDomainsSelfRegistrationProfileFooterText]] = None,
  header_logo: str = None,
  header_text: typing.Union[IResolvable, typing.List[IdentityDomainsSelfRegistrationProfileHeaderText]] = None,
  ocid: str = None,
  resource_type_schema_version: str = None,
  tags: typing.Union[IResolvable, typing.List[IdentityDomainsSelfRegistrationProfileTags]] = None,
  timeouts: IdentityDomainsSelfRegistrationProfileTimeouts = None,
  user_attributes: typing.Union[IResolvable, typing.List[IdentityDomainsSelfRegistrationProfileUserAttributes]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.activationEmailRequired">activation_email_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#activation_email_required IdentityDomainsSelfRegistrationProfile#activation_email_required}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.consentTextPresent">consent_text_present</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#consent_text_present IdentityDomainsSelfRegistrationProfile#consent_text_present}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.displayName">display_name</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayName">IdentityDomainsSelfRegistrationProfileDisplayName</a>]]</code> | display_name block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.emailTemplate">email_template</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplate">IdentityDomainsSelfRegistrationProfileEmailTemplate</a></code> | email_template block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#idcs_endpoint IdentityDomainsSelfRegistrationProfile#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#name IdentityDomainsSelfRegistrationProfile#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.numberOfDaysRedirectUrlIsValid">number_of_days_redirect_url_is_valid</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#number_of_days_redirect_url_is_valid IdentityDomainsSelfRegistrationProfile#number_of_days_redirect_url_is_valid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.redirectUrl">redirect_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#redirect_url IdentityDomainsSelfRegistrationProfile#redirect_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.schemas">schemas</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#schemas IdentityDomainsSelfRegistrationProfile#schemas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.showOnLoginPage">show_on_login_page</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#show_on_login_page IdentityDomainsSelfRegistrationProfile#show_on_login_page}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.active">active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#active IdentityDomainsSelfRegistrationProfile#active}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.afterSubmitText">after_submit_text</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitText">IdentityDomainsSelfRegistrationProfileAfterSubmitText</a>]]</code> | after_submit_text block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.allowedEmailDomains">allowed_email_domains</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#allowed_email_domains IdentityDomainsSelfRegistrationProfile#allowed_email_domains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.attributes">attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#attributes IdentityDomainsSelfRegistrationProfile#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#attribute_sets IdentityDomainsSelfRegistrationProfile#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#authorization IdentityDomainsSelfRegistrationProfile#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.consentText">consent_text</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentText">IdentityDomainsSelfRegistrationProfileConsentText</a>]]</code> | consent_text block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.defaultGroups">default_groups</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroups">IdentityDomainsSelfRegistrationProfileDefaultGroups</a>]]</code> | default_groups block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.disallowedEmailDomains">disallowed_email_domains</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#disallowed_email_domains IdentityDomainsSelfRegistrationProfile#disallowed_email_domains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.externalId">external_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#external_id IdentityDomainsSelfRegistrationProfile#external_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.footerLogo">footer_logo</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#footer_logo IdentityDomainsSelfRegistrationProfile#footer_logo}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.footerText">footer_text</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterText">IdentityDomainsSelfRegistrationProfileFooterText</a>]]</code> | footer_text block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.headerLogo">header_logo</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#header_logo IdentityDomainsSelfRegistrationProfile#header_logo}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.headerText">header_text</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderText">IdentityDomainsSelfRegistrationProfileHeaderText</a>]]</code> | header_text block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.ocid">ocid</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#ocid IdentityDomainsSelfRegistrationProfile#ocid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#resource_type_schema_version IdentityDomainsSelfRegistrationProfile#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.tags">tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTags">IdentityDomainsSelfRegistrationProfileTags</a>]]</code> | tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeouts">IdentityDomainsSelfRegistrationProfileTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.userAttributes">user_attributes</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributes">IdentityDomainsSelfRegistrationProfileUserAttributes</a>]]</code> | user_attributes block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `activation_email_required`<sup>Required</sup> <a name="activation_email_required" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.activationEmailRequired"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#activation_email_required IdentityDomainsSelfRegistrationProfile#activation_email_required}.

---

##### `consent_text_present`<sup>Required</sup> <a name="consent_text_present" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.consentTextPresent"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#consent_text_present IdentityDomainsSelfRegistrationProfile#consent_text_present}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.displayName"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayName">IdentityDomainsSelfRegistrationProfileDisplayName</a>]]

display_name block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#display_name IdentityDomainsSelfRegistrationProfile#display_name}

---

##### `email_template`<sup>Required</sup> <a name="email_template" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.emailTemplate"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplate">IdentityDomainsSelfRegistrationProfileEmailTemplate</a>

email_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#email_template IdentityDomainsSelfRegistrationProfile#email_template}

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.idcsEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#idcs_endpoint IdentityDomainsSelfRegistrationProfile#idcs_endpoint}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#name IdentityDomainsSelfRegistrationProfile#name}.

---

##### `number_of_days_redirect_url_is_valid`<sup>Required</sup> <a name="number_of_days_redirect_url_is_valid" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.numberOfDaysRedirectUrlIsValid"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#number_of_days_redirect_url_is_valid IdentityDomainsSelfRegistrationProfile#number_of_days_redirect_url_is_valid}.

---

##### `redirect_url`<sup>Required</sup> <a name="redirect_url" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.redirectUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#redirect_url IdentityDomainsSelfRegistrationProfile#redirect_url}.

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.schemas"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#schemas IdentityDomainsSelfRegistrationProfile#schemas}.

---

##### `show_on_login_page`<sup>Required</sup> <a name="show_on_login_page" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.showOnLoginPage"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#show_on_login_page IdentityDomainsSelfRegistrationProfile#show_on_login_page}.

---

##### `active`<sup>Optional</sup> <a name="active" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.active"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#active IdentityDomainsSelfRegistrationProfile#active}.

---

##### `after_submit_text`<sup>Optional</sup> <a name="after_submit_text" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.afterSubmitText"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitText">IdentityDomainsSelfRegistrationProfileAfterSubmitText</a>]]

after_submit_text block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#after_submit_text IdentityDomainsSelfRegistrationProfile#after_submit_text}

---

##### `allowed_email_domains`<sup>Optional</sup> <a name="allowed_email_domains" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.allowedEmailDomains"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#allowed_email_domains IdentityDomainsSelfRegistrationProfile#allowed_email_domains}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.attributes"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#attributes IdentityDomainsSelfRegistrationProfile#attributes}.

---

##### `attribute_sets`<sup>Optional</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.attributeSets"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#attribute_sets IdentityDomainsSelfRegistrationProfile#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.authorization"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#authorization IdentityDomainsSelfRegistrationProfile#authorization}.

---

##### `consent_text`<sup>Optional</sup> <a name="consent_text" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.consentText"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentText">IdentityDomainsSelfRegistrationProfileConsentText</a>]]

consent_text block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#consent_text IdentityDomainsSelfRegistrationProfile#consent_text}

---

##### `default_groups`<sup>Optional</sup> <a name="default_groups" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.defaultGroups"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroups">IdentityDomainsSelfRegistrationProfileDefaultGroups</a>]]

default_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#default_groups IdentityDomainsSelfRegistrationProfile#default_groups}

---

##### `disallowed_email_domains`<sup>Optional</sup> <a name="disallowed_email_domains" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.disallowedEmailDomains"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#disallowed_email_domains IdentityDomainsSelfRegistrationProfile#disallowed_email_domains}.

---

##### `external_id`<sup>Optional</sup> <a name="external_id" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.externalId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#external_id IdentityDomainsSelfRegistrationProfile#external_id}.

---

##### `footer_logo`<sup>Optional</sup> <a name="footer_logo" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.footerLogo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#footer_logo IdentityDomainsSelfRegistrationProfile#footer_logo}.

---

##### `footer_text`<sup>Optional</sup> <a name="footer_text" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.footerText"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterText">IdentityDomainsSelfRegistrationProfileFooterText</a>]]

footer_text block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#footer_text IdentityDomainsSelfRegistrationProfile#footer_text}

---

##### `header_logo`<sup>Optional</sup> <a name="header_logo" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.headerLogo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#header_logo IdentityDomainsSelfRegistrationProfile#header_logo}.

---

##### `header_text`<sup>Optional</sup> <a name="header_text" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.headerText"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderText">IdentityDomainsSelfRegistrationProfileHeaderText</a>]]

header_text block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#header_text IdentityDomainsSelfRegistrationProfile#header_text}

---

##### `ocid`<sup>Optional</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.ocid"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#ocid IdentityDomainsSelfRegistrationProfile#ocid}.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.resourceTypeSchemaVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#resource_type_schema_version IdentityDomainsSelfRegistrationProfile#resource_type_schema_version}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.tags"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTags">IdentityDomainsSelfRegistrationProfileTags</a>]]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#tags IdentityDomainsSelfRegistrationProfile#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeouts">IdentityDomainsSelfRegistrationProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#timeouts IdentityDomainsSelfRegistrationProfile#timeouts}

---

##### `user_attributes`<sup>Optional</sup> <a name="user_attributes" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.userAttributes"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributes">IdentityDomainsSelfRegistrationProfileUserAttributes</a>]]

user_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#user_attributes IdentityDomainsSelfRegistrationProfile#user_attributes}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putAfterSubmitText">put_after_submit_text</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putConsentText">put_consent_text</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putDefaultGroups">put_default_groups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putDisplayName">put_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putEmailTemplate">put_email_template</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putFooterText">put_footer_text</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putHeaderText">put_header_text</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putUserAttributes">put_user_attributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetActive">reset_active</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetAfterSubmitText">reset_after_submit_text</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetAllowedEmailDomains">reset_allowed_email_domains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetAttributes">reset_attributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetAttributeSets">reset_attribute_sets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetAuthorization">reset_authorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetConsentText">reset_consent_text</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetDefaultGroups">reset_default_groups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetDisallowedEmailDomains">reset_disallowed_email_domains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetExternalId">reset_external_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetFooterLogo">reset_footer_logo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetFooterText">reset_footer_text</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetHeaderLogo">reset_header_logo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetHeaderText">reset_header_text</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetOcid">reset_ocid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetResourceTypeSchemaVersion">reset_resource_type_schema_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetUserAttributes">reset_user_attributes</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_after_submit_text` <a name="put_after_submit_text" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putAfterSubmitText"></a>

```python
def put_after_submit_text(
  value: typing.Union[IResolvable, typing.List[IdentityDomainsSelfRegistrationProfileAfterSubmitText]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putAfterSubmitText.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitText">IdentityDomainsSelfRegistrationProfileAfterSubmitText</a>]]

---

##### `put_consent_text` <a name="put_consent_text" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putConsentText"></a>

```python
def put_consent_text(
  value: typing.Union[IResolvable, typing.List[IdentityDomainsSelfRegistrationProfileConsentText]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putConsentText.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentText">IdentityDomainsSelfRegistrationProfileConsentText</a>]]

---

##### `put_default_groups` <a name="put_default_groups" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putDefaultGroups"></a>

```python
def put_default_groups(
  value: typing.Union[IResolvable, typing.List[IdentityDomainsSelfRegistrationProfileDefaultGroups]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putDefaultGroups.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroups">IdentityDomainsSelfRegistrationProfileDefaultGroups</a>]]

---

##### `put_display_name` <a name="put_display_name" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putDisplayName"></a>

```python
def put_display_name(
  value: typing.Union[IResolvable, typing.List[IdentityDomainsSelfRegistrationProfileDisplayName]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putDisplayName.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayName">IdentityDomainsSelfRegistrationProfileDisplayName</a>]]

---

##### `put_email_template` <a name="put_email_template" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putEmailTemplate"></a>

```python
def put_email_template(
  value: str
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putEmailTemplate.parameter.value"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#value IdentityDomainsSelfRegistrationProfile#value}.

---

##### `put_footer_text` <a name="put_footer_text" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putFooterText"></a>

```python
def put_footer_text(
  value: typing.Union[IResolvable, typing.List[IdentityDomainsSelfRegistrationProfileFooterText]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putFooterText.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterText">IdentityDomainsSelfRegistrationProfileFooterText</a>]]

---

##### `put_header_text` <a name="put_header_text" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putHeaderText"></a>

```python
def put_header_text(
  value: typing.Union[IResolvable, typing.List[IdentityDomainsSelfRegistrationProfileHeaderText]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putHeaderText.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderText">IdentityDomainsSelfRegistrationProfileHeaderText</a>]]

---

##### `put_tags` <a name="put_tags" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putTags"></a>

```python
def put_tags(
  value: typing.Union[IResolvable, typing.List[IdentityDomainsSelfRegistrationProfileTags]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putTags.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTags">IdentityDomainsSelfRegistrationProfileTags</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#create IdentityDomainsSelfRegistrationProfile#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#delete IdentityDomainsSelfRegistrationProfile#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#update IdentityDomainsSelfRegistrationProfile#update}.

---

##### `put_user_attributes` <a name="put_user_attributes" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putUserAttributes"></a>

```python
def put_user_attributes(
  value: typing.Union[IResolvable, typing.List[IdentityDomainsSelfRegistrationProfileUserAttributes]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putUserAttributes.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributes">IdentityDomainsSelfRegistrationProfileUserAttributes</a>]]

---

##### `reset_active` <a name="reset_active" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetActive"></a>

```python
def reset_active() -> None
```

##### `reset_after_submit_text` <a name="reset_after_submit_text" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetAfterSubmitText"></a>

```python
def reset_after_submit_text() -> None
```

##### `reset_allowed_email_domains` <a name="reset_allowed_email_domains" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetAllowedEmailDomains"></a>

```python
def reset_allowed_email_domains() -> None
```

##### `reset_attributes` <a name="reset_attributes" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetAttributes"></a>

```python
def reset_attributes() -> None
```

##### `reset_attribute_sets` <a name="reset_attribute_sets" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetAttributeSets"></a>

```python
def reset_attribute_sets() -> None
```

##### `reset_authorization` <a name="reset_authorization" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetAuthorization"></a>

```python
def reset_authorization() -> None
```

##### `reset_consent_text` <a name="reset_consent_text" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetConsentText"></a>

```python
def reset_consent_text() -> None
```

##### `reset_default_groups` <a name="reset_default_groups" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetDefaultGroups"></a>

```python
def reset_default_groups() -> None
```

##### `reset_disallowed_email_domains` <a name="reset_disallowed_email_domains" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetDisallowedEmailDomains"></a>

```python
def reset_disallowed_email_domains() -> None
```

##### `reset_external_id` <a name="reset_external_id" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetExternalId"></a>

```python
def reset_external_id() -> None
```

##### `reset_footer_logo` <a name="reset_footer_logo" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetFooterLogo"></a>

```python
def reset_footer_logo() -> None
```

##### `reset_footer_text` <a name="reset_footer_text" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetFooterText"></a>

```python
def reset_footer_text() -> None
```

##### `reset_header_logo` <a name="reset_header_logo" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetHeaderLogo"></a>

```python
def reset_header_logo() -> None
```

##### `reset_header_text` <a name="reset_header_text" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetHeaderText"></a>

```python
def reset_header_text() -> None
```

##### `reset_ocid` <a name="reset_ocid" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetOcid"></a>

```python
def reset_ocid() -> None
```

##### `reset_resource_type_schema_version` <a name="reset_resource_type_schema_version" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetResourceTypeSchemaVersion"></a>

```python
def reset_resource_type_schema_version() -> None
```

##### `reset_tags` <a name="reset_tags" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_user_attributes` <a name="reset_user_attributes" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetUserAttributes"></a>

```python
def reset_user_attributes() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IdentityDomainsSelfRegistrationProfile resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_self_registration_profile

identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_self_registration_profile

identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_self_registration_profile

identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_self_registration_profile

identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IdentityDomainsSelfRegistrationProfile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IdentityDomainsSelfRegistrationProfile to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IdentityDomainsSelfRegistrationProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IdentityDomainsSelfRegistrationProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.afterSubmitText">after_submit_text</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList">IdentityDomainsSelfRegistrationProfileAfterSubmitTextList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.compartmentOcid">compartment_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.consentText">consent_text</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList">IdentityDomainsSelfRegistrationProfileConsentTextList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.defaultGroups">default_groups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList">IdentityDomainsSelfRegistrationProfileDefaultGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.deleteInProgress">delete_in_progress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.displayName">display_name</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList">IdentityDomainsSelfRegistrationProfileDisplayNameList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.domainOcid">domain_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.emailTemplate">email_template</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference">IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.footerText">footer_text</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList">IdentityDomainsSelfRegistrationProfileFooterTextList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.headerText">header_text</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList">IdentityDomainsSelfRegistrationProfileHeaderTextList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.idcsCreatedBy">idcs_created_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList">IdentityDomainsSelfRegistrationProfileIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.idcsLastModifiedBy">idcs_last_modified_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList">IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.idcsLastUpgradedInRelease">idcs_last_upgraded_in_release</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.idcsPreventedOperations">idcs_prevented_operations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList">IdentityDomainsSelfRegistrationProfileMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList">IdentityDomainsSelfRegistrationProfileTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.tenancyOcid">tenancy_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference">IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.userAttributes">user_attributes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList">IdentityDomainsSelfRegistrationProfileUserAttributesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.activationEmailRequiredInput">activation_email_required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.activeInput">active_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.afterSubmitTextInput">after_submit_text_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitText">IdentityDomainsSelfRegistrationProfileAfterSubmitText</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.allowedEmailDomainsInput">allowed_email_domains_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.attributeSetsInput">attribute_sets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.attributesInput">attributes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.authorizationInput">authorization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.consentTextInput">consent_text_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentText">IdentityDomainsSelfRegistrationProfileConsentText</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.consentTextPresentInput">consent_text_present_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.defaultGroupsInput">default_groups_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroups">IdentityDomainsSelfRegistrationProfileDefaultGroups</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.disallowedEmailDomainsInput">disallowed_email_domains_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.displayNameInput">display_name_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayName">IdentityDomainsSelfRegistrationProfileDisplayName</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.emailTemplateInput">email_template_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplate">IdentityDomainsSelfRegistrationProfileEmailTemplate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.externalIdInput">external_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.footerLogoInput">footer_logo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.footerTextInput">footer_text_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterText">IdentityDomainsSelfRegistrationProfileFooterText</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.headerLogoInput">header_logo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.headerTextInput">header_text_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderText">IdentityDomainsSelfRegistrationProfileHeaderText</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.idcsEndpointInput">idcs_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.numberOfDaysRedirectUrlIsValidInput">number_of_days_redirect_url_is_valid_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.ocidInput">ocid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.redirectUrlInput">redirect_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.resourceTypeSchemaVersionInput">resource_type_schema_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.schemasInput">schemas_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.showOnLoginPageInput">show_on_login_page_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.tagsInput">tags_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTags">IdentityDomainsSelfRegistrationProfileTags</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeouts">IdentityDomainsSelfRegistrationProfileTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.userAttributesInput">user_attributes_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributes">IdentityDomainsSelfRegistrationProfileUserAttributes</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.activationEmailRequired">activation_email_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.active">active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.allowedEmailDomains">allowed_email_domains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.attributes">attributes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.consentTextPresent">consent_text_present</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.disallowedEmailDomains">disallowed_email_domains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.footerLogo">footer_logo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.headerLogo">header_logo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.numberOfDaysRedirectUrlIsValid">number_of_days_redirect_url_is_valid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.redirectUrl">redirect_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.showOnLoginPage">show_on_login_page</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `after_submit_text`<sup>Required</sup> <a name="after_submit_text" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.afterSubmitText"></a>

```python
after_submit_text: IdentityDomainsSelfRegistrationProfileAfterSubmitTextList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList">IdentityDomainsSelfRegistrationProfileAfterSubmitTextList</a>

---

##### `compartment_ocid`<sup>Required</sup> <a name="compartment_ocid" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.compartmentOcid"></a>

```python
compartment_ocid: str
```

- *Type:* str

---

##### `consent_text`<sup>Required</sup> <a name="consent_text" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.consentText"></a>

```python
consent_text: IdentityDomainsSelfRegistrationProfileConsentTextList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList">IdentityDomainsSelfRegistrationProfileConsentTextList</a>

---

##### `default_groups`<sup>Required</sup> <a name="default_groups" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.defaultGroups"></a>

```python
default_groups: IdentityDomainsSelfRegistrationProfileDefaultGroupsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList">IdentityDomainsSelfRegistrationProfileDefaultGroupsList</a>

---

##### `delete_in_progress`<sup>Required</sup> <a name="delete_in_progress" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.deleteInProgress"></a>

```python
delete_in_progress: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.displayName"></a>

```python
display_name: IdentityDomainsSelfRegistrationProfileDisplayNameList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList">IdentityDomainsSelfRegistrationProfileDisplayNameList</a>

---

##### `domain_ocid`<sup>Required</sup> <a name="domain_ocid" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.domainOcid"></a>

```python
domain_ocid: str
```

- *Type:* str

---

##### `email_template`<sup>Required</sup> <a name="email_template" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.emailTemplate"></a>

```python
email_template: IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference">IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference</a>

---

##### `footer_text`<sup>Required</sup> <a name="footer_text" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.footerText"></a>

```python
footer_text: IdentityDomainsSelfRegistrationProfileFooterTextList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList">IdentityDomainsSelfRegistrationProfileFooterTextList</a>

---

##### `header_text`<sup>Required</sup> <a name="header_text" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.headerText"></a>

```python
header_text: IdentityDomainsSelfRegistrationProfileHeaderTextList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList">IdentityDomainsSelfRegistrationProfileHeaderTextList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_created_by`<sup>Required</sup> <a name="idcs_created_by" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.idcsCreatedBy"></a>

```python
idcs_created_by: IdentityDomainsSelfRegistrationProfileIdcsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList">IdentityDomainsSelfRegistrationProfileIdcsCreatedByList</a>

---

##### `idcs_last_modified_by`<sup>Required</sup> <a name="idcs_last_modified_by" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.idcsLastModifiedBy"></a>

```python
idcs_last_modified_by: IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList">IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList</a>

---

##### `idcs_last_upgraded_in_release`<sup>Required</sup> <a name="idcs_last_upgraded_in_release" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.idcsLastUpgradedInRelease"></a>

```python
idcs_last_upgraded_in_release: str
```

- *Type:* str

---

##### `idcs_prevented_operations`<sup>Required</sup> <a name="idcs_prevented_operations" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.idcsPreventedOperations"></a>

```python
idcs_prevented_operations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.meta"></a>

```python
meta: IdentityDomainsSelfRegistrationProfileMetaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList">IdentityDomainsSelfRegistrationProfileMetaList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.tags"></a>

```python
tags: IdentityDomainsSelfRegistrationProfileTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList">IdentityDomainsSelfRegistrationProfileTagsList</a>

---

##### `tenancy_ocid`<sup>Required</sup> <a name="tenancy_ocid" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.tenancyOcid"></a>

```python
tenancy_ocid: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.timeouts"></a>

```python
timeouts: IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference">IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference</a>

---

##### `user_attributes`<sup>Required</sup> <a name="user_attributes" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.userAttributes"></a>

```python
user_attributes: IdentityDomainsSelfRegistrationProfileUserAttributesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList">IdentityDomainsSelfRegistrationProfileUserAttributesList</a>

---

##### `activation_email_required_input`<sup>Optional</sup> <a name="activation_email_required_input" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.activationEmailRequiredInput"></a>

```python
activation_email_required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `active_input`<sup>Optional</sup> <a name="active_input" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.activeInput"></a>

```python
active_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `after_submit_text_input`<sup>Optional</sup> <a name="after_submit_text_input" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.afterSubmitTextInput"></a>

```python
after_submit_text_input: typing.Union[IResolvable, typing.List[IdentityDomainsSelfRegistrationProfileAfterSubmitText]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitText">IdentityDomainsSelfRegistrationProfileAfterSubmitText</a>]]

---

##### `allowed_email_domains_input`<sup>Optional</sup> <a name="allowed_email_domains_input" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.allowedEmailDomainsInput"></a>

```python
allowed_email_domains_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `attribute_sets_input`<sup>Optional</sup> <a name="attribute_sets_input" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.attributeSetsInput"></a>

```python
attribute_sets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.attributesInput"></a>

```python
attributes_input: str
```

- *Type:* str

---

##### `authorization_input`<sup>Optional</sup> <a name="authorization_input" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.authorizationInput"></a>

```python
authorization_input: str
```

- *Type:* str

---

##### `consent_text_input`<sup>Optional</sup> <a name="consent_text_input" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.consentTextInput"></a>

```python
consent_text_input: typing.Union[IResolvable, typing.List[IdentityDomainsSelfRegistrationProfileConsentText]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentText">IdentityDomainsSelfRegistrationProfileConsentText</a>]]

---

##### `consent_text_present_input`<sup>Optional</sup> <a name="consent_text_present_input" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.consentTextPresentInput"></a>

```python
consent_text_present_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `default_groups_input`<sup>Optional</sup> <a name="default_groups_input" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.defaultGroupsInput"></a>

```python
default_groups_input: typing.Union[IResolvable, typing.List[IdentityDomainsSelfRegistrationProfileDefaultGroups]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroups">IdentityDomainsSelfRegistrationProfileDefaultGroups</a>]]

---

##### `disallowed_email_domains_input`<sup>Optional</sup> <a name="disallowed_email_domains_input" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.disallowedEmailDomainsInput"></a>

```python
disallowed_email_domains_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.displayNameInput"></a>

```python
display_name_input: typing.Union[IResolvable, typing.List[IdentityDomainsSelfRegistrationProfileDisplayName]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayName">IdentityDomainsSelfRegistrationProfileDisplayName</a>]]

---

##### `email_template_input`<sup>Optional</sup> <a name="email_template_input" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.emailTemplateInput"></a>

```python
email_template_input: IdentityDomainsSelfRegistrationProfileEmailTemplate
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplate">IdentityDomainsSelfRegistrationProfileEmailTemplate</a>

---

##### `external_id_input`<sup>Optional</sup> <a name="external_id_input" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.externalIdInput"></a>

```python
external_id_input: str
```

- *Type:* str

---

##### `footer_logo_input`<sup>Optional</sup> <a name="footer_logo_input" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.footerLogoInput"></a>

```python
footer_logo_input: str
```

- *Type:* str

---

##### `footer_text_input`<sup>Optional</sup> <a name="footer_text_input" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.footerTextInput"></a>

```python
footer_text_input: typing.Union[IResolvable, typing.List[IdentityDomainsSelfRegistrationProfileFooterText]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterText">IdentityDomainsSelfRegistrationProfileFooterText</a>]]

---

##### `header_logo_input`<sup>Optional</sup> <a name="header_logo_input" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.headerLogoInput"></a>

```python
header_logo_input: str
```

- *Type:* str

---

##### `header_text_input`<sup>Optional</sup> <a name="header_text_input" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.headerTextInput"></a>

```python
header_text_input: typing.Union[IResolvable, typing.List[IdentityDomainsSelfRegistrationProfileHeaderText]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderText">IdentityDomainsSelfRegistrationProfileHeaderText</a>]]

---

##### `idcs_endpoint_input`<sup>Optional</sup> <a name="idcs_endpoint_input" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.idcsEndpointInput"></a>

```python
idcs_endpoint_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `number_of_days_redirect_url_is_valid_input`<sup>Optional</sup> <a name="number_of_days_redirect_url_is_valid_input" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.numberOfDaysRedirectUrlIsValidInput"></a>

```python
number_of_days_redirect_url_is_valid_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocid_input`<sup>Optional</sup> <a name="ocid_input" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.ocidInput"></a>

```python
ocid_input: str
```

- *Type:* str

---

##### `redirect_url_input`<sup>Optional</sup> <a name="redirect_url_input" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.redirectUrlInput"></a>

```python
redirect_url_input: str
```

- *Type:* str

---

##### `resource_type_schema_version_input`<sup>Optional</sup> <a name="resource_type_schema_version_input" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.resourceTypeSchemaVersionInput"></a>

```python
resource_type_schema_version_input: str
```

- *Type:* str

---

##### `schemas_input`<sup>Optional</sup> <a name="schemas_input" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.schemasInput"></a>

```python
schemas_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `show_on_login_page_input`<sup>Optional</sup> <a name="show_on_login_page_input" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.showOnLoginPageInput"></a>

```python
show_on_login_page_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.tagsInput"></a>

```python
tags_input: typing.Union[IResolvable, typing.List[IdentityDomainsSelfRegistrationProfileTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTags">IdentityDomainsSelfRegistrationProfileTags</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, IdentityDomainsSelfRegistrationProfileTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeouts">IdentityDomainsSelfRegistrationProfileTimeouts</a>]

---

##### `user_attributes_input`<sup>Optional</sup> <a name="user_attributes_input" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.userAttributesInput"></a>

```python
user_attributes_input: typing.Union[IResolvable, typing.List[IdentityDomainsSelfRegistrationProfileUserAttributes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributes">IdentityDomainsSelfRegistrationProfileUserAttributes</a>]]

---

##### `activation_email_required`<sup>Required</sup> <a name="activation_email_required" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.activationEmailRequired"></a>

```python
activation_email_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `active`<sup>Required</sup> <a name="active" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.active"></a>

```python
active: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allowed_email_domains`<sup>Required</sup> <a name="allowed_email_domains" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.allowedEmailDomains"></a>

```python
allowed_email_domains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

---

##### `attribute_sets`<sup>Required</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `consent_text_present`<sup>Required</sup> <a name="consent_text_present" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.consentTextPresent"></a>

```python
consent_text_present: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disallowed_email_domains`<sup>Required</sup> <a name="disallowed_email_domains" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.disallowedEmailDomains"></a>

```python
disallowed_email_domains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `footer_logo`<sup>Required</sup> <a name="footer_logo" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.footerLogo"></a>

```python
footer_logo: str
```

- *Type:* str

---

##### `header_logo`<sup>Required</sup> <a name="header_logo" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.headerLogo"></a>

```python
header_logo: str
```

- *Type:* str

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `number_of_days_redirect_url_is_valid`<sup>Required</sup> <a name="number_of_days_redirect_url_is_valid" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.numberOfDaysRedirectUrlIsValid"></a>

```python
number_of_days_redirect_url_is_valid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `redirect_url`<sup>Required</sup> <a name="redirect_url" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.redirectUrl"></a>

```python
redirect_url: str
```

- *Type:* str

---

##### `resource_type_schema_version`<sup>Required</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `show_on_login_page`<sup>Required</sup> <a name="show_on_login_page" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.showOnLoginPage"></a>

```python
show_on_login_page: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityDomainsSelfRegistrationProfileAfterSubmitText <a name="IdentityDomainsSelfRegistrationProfileAfterSubmitText" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitText"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitText.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_self_registration_profile

identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitText(
  locale: str,
  value: str,
  default: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitText.property.locale">locale</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#locale IdentityDomainsSelfRegistrationProfile#locale}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitText.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#value IdentityDomainsSelfRegistrationProfile#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitText.property.default">default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#default IdentityDomainsSelfRegistrationProfile#default}. |

---

##### `locale`<sup>Required</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitText.property.locale"></a>

```python
locale: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#locale IdentityDomainsSelfRegistrationProfile#locale}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitText.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#value IdentityDomainsSelfRegistrationProfile#value}.

---

##### `default`<sup>Optional</sup> <a name="default" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitText.property.default"></a>

```python
default: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#default IdentityDomainsSelfRegistrationProfile#default}.

---

### IdentityDomainsSelfRegistrationProfileConfig <a name="IdentityDomainsSelfRegistrationProfileConfig" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_self_registration_profile

identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  activation_email_required: typing.Union[bool, IResolvable],
  consent_text_present: typing.Union[bool, IResolvable],
  display_name: typing.Union[IResolvable, typing.List[IdentityDomainsSelfRegistrationProfileDisplayName]],
  email_template: IdentityDomainsSelfRegistrationProfileEmailTemplate,
  idcs_endpoint: str,
  name: str,
  number_of_days_redirect_url_is_valid: typing.Union[int, float],
  redirect_url: str,
  schemas: typing.List[str],
  show_on_login_page: typing.Union[bool, IResolvable],
  active: typing.Union[bool, IResolvable] = None,
  after_submit_text: typing.Union[IResolvable, typing.List[IdentityDomainsSelfRegistrationProfileAfterSubmitText]] = None,
  allowed_email_domains: typing.List[str] = None,
  attributes: str = None,
  attribute_sets: typing.List[str] = None,
  authorization: str = None,
  consent_text: typing.Union[IResolvable, typing.List[IdentityDomainsSelfRegistrationProfileConsentText]] = None,
  default_groups: typing.Union[IResolvable, typing.List[IdentityDomainsSelfRegistrationProfileDefaultGroups]] = None,
  disallowed_email_domains: typing.List[str] = None,
  external_id: str = None,
  footer_logo: str = None,
  footer_text: typing.Union[IResolvable, typing.List[IdentityDomainsSelfRegistrationProfileFooterText]] = None,
  header_logo: str = None,
  header_text: typing.Union[IResolvable, typing.List[IdentityDomainsSelfRegistrationProfileHeaderText]] = None,
  ocid: str = None,
  resource_type_schema_version: str = None,
  tags: typing.Union[IResolvable, typing.List[IdentityDomainsSelfRegistrationProfileTags]] = None,
  timeouts: IdentityDomainsSelfRegistrationProfileTimeouts = None,
  user_attributes: typing.Union[IResolvable, typing.List[IdentityDomainsSelfRegistrationProfileUserAttributes]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.activationEmailRequired">activation_email_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#activation_email_required IdentityDomainsSelfRegistrationProfile#activation_email_required}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.consentTextPresent">consent_text_present</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#consent_text_present IdentityDomainsSelfRegistrationProfile#consent_text_present}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.displayName">display_name</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayName">IdentityDomainsSelfRegistrationProfileDisplayName</a>]]</code> | display_name block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.emailTemplate">email_template</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplate">IdentityDomainsSelfRegistrationProfileEmailTemplate</a></code> | email_template block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#idcs_endpoint IdentityDomainsSelfRegistrationProfile#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#name IdentityDomainsSelfRegistrationProfile#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.numberOfDaysRedirectUrlIsValid">number_of_days_redirect_url_is_valid</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#number_of_days_redirect_url_is_valid IdentityDomainsSelfRegistrationProfile#number_of_days_redirect_url_is_valid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.redirectUrl">redirect_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#redirect_url IdentityDomainsSelfRegistrationProfile#redirect_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#schemas IdentityDomainsSelfRegistrationProfile#schemas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.showOnLoginPage">show_on_login_page</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#show_on_login_page IdentityDomainsSelfRegistrationProfile#show_on_login_page}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.active">active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#active IdentityDomainsSelfRegistrationProfile#active}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.afterSubmitText">after_submit_text</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitText">IdentityDomainsSelfRegistrationProfileAfterSubmitText</a>]]</code> | after_submit_text block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.allowedEmailDomains">allowed_email_domains</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#allowed_email_domains IdentityDomainsSelfRegistrationProfile#allowed_email_domains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.attributes">attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#attributes IdentityDomainsSelfRegistrationProfile#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#attribute_sets IdentityDomainsSelfRegistrationProfile#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#authorization IdentityDomainsSelfRegistrationProfile#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.consentText">consent_text</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentText">IdentityDomainsSelfRegistrationProfileConsentText</a>]]</code> | consent_text block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.defaultGroups">default_groups</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroups">IdentityDomainsSelfRegistrationProfileDefaultGroups</a>]]</code> | default_groups block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.disallowedEmailDomains">disallowed_email_domains</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#disallowed_email_domains IdentityDomainsSelfRegistrationProfile#disallowed_email_domains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.externalId">external_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#external_id IdentityDomainsSelfRegistrationProfile#external_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.footerLogo">footer_logo</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#footer_logo IdentityDomainsSelfRegistrationProfile#footer_logo}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.footerText">footer_text</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterText">IdentityDomainsSelfRegistrationProfileFooterText</a>]]</code> | footer_text block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.headerLogo">header_logo</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#header_logo IdentityDomainsSelfRegistrationProfile#header_logo}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.headerText">header_text</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderText">IdentityDomainsSelfRegistrationProfileHeaderText</a>]]</code> | header_text block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.ocid">ocid</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#ocid IdentityDomainsSelfRegistrationProfile#ocid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#resource_type_schema_version IdentityDomainsSelfRegistrationProfile#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.tags">tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTags">IdentityDomainsSelfRegistrationProfileTags</a>]]</code> | tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeouts">IdentityDomainsSelfRegistrationProfileTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.userAttributes">user_attributes</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributes">IdentityDomainsSelfRegistrationProfileUserAttributes</a>]]</code> | user_attributes block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `activation_email_required`<sup>Required</sup> <a name="activation_email_required" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.activationEmailRequired"></a>

```python
activation_email_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#activation_email_required IdentityDomainsSelfRegistrationProfile#activation_email_required}.

---

##### `consent_text_present`<sup>Required</sup> <a name="consent_text_present" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.consentTextPresent"></a>

```python
consent_text_present: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#consent_text_present IdentityDomainsSelfRegistrationProfile#consent_text_present}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.displayName"></a>

```python
display_name: typing.Union[IResolvable, typing.List[IdentityDomainsSelfRegistrationProfileDisplayName]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayName">IdentityDomainsSelfRegistrationProfileDisplayName</a>]]

display_name block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#display_name IdentityDomainsSelfRegistrationProfile#display_name}

---

##### `email_template`<sup>Required</sup> <a name="email_template" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.emailTemplate"></a>

```python
email_template: IdentityDomainsSelfRegistrationProfileEmailTemplate
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplate">IdentityDomainsSelfRegistrationProfileEmailTemplate</a>

email_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#email_template IdentityDomainsSelfRegistrationProfile#email_template}

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#idcs_endpoint IdentityDomainsSelfRegistrationProfile#idcs_endpoint}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#name IdentityDomainsSelfRegistrationProfile#name}.

---

##### `number_of_days_redirect_url_is_valid`<sup>Required</sup> <a name="number_of_days_redirect_url_is_valid" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.numberOfDaysRedirectUrlIsValid"></a>

```python
number_of_days_redirect_url_is_valid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#number_of_days_redirect_url_is_valid IdentityDomainsSelfRegistrationProfile#number_of_days_redirect_url_is_valid}.

---

##### `redirect_url`<sup>Required</sup> <a name="redirect_url" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.redirectUrl"></a>

```python
redirect_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#redirect_url IdentityDomainsSelfRegistrationProfile#redirect_url}.

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#schemas IdentityDomainsSelfRegistrationProfile#schemas}.

---

##### `show_on_login_page`<sup>Required</sup> <a name="show_on_login_page" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.showOnLoginPage"></a>

```python
show_on_login_page: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#show_on_login_page IdentityDomainsSelfRegistrationProfile#show_on_login_page}.

---

##### `active`<sup>Optional</sup> <a name="active" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.active"></a>

```python
active: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#active IdentityDomainsSelfRegistrationProfile#active}.

---

##### `after_submit_text`<sup>Optional</sup> <a name="after_submit_text" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.afterSubmitText"></a>

```python
after_submit_text: typing.Union[IResolvable, typing.List[IdentityDomainsSelfRegistrationProfileAfterSubmitText]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitText">IdentityDomainsSelfRegistrationProfileAfterSubmitText</a>]]

after_submit_text block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#after_submit_text IdentityDomainsSelfRegistrationProfile#after_submit_text}

---

##### `allowed_email_domains`<sup>Optional</sup> <a name="allowed_email_domains" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.allowedEmailDomains"></a>

```python
allowed_email_domains: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#allowed_email_domains IdentityDomainsSelfRegistrationProfile#allowed_email_domains}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#attributes IdentityDomainsSelfRegistrationProfile#attributes}.

---

##### `attribute_sets`<sup>Optional</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#attribute_sets IdentityDomainsSelfRegistrationProfile#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#authorization IdentityDomainsSelfRegistrationProfile#authorization}.

---

##### `consent_text`<sup>Optional</sup> <a name="consent_text" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.consentText"></a>

```python
consent_text: typing.Union[IResolvable, typing.List[IdentityDomainsSelfRegistrationProfileConsentText]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentText">IdentityDomainsSelfRegistrationProfileConsentText</a>]]

consent_text block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#consent_text IdentityDomainsSelfRegistrationProfile#consent_text}

---

##### `default_groups`<sup>Optional</sup> <a name="default_groups" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.defaultGroups"></a>

```python
default_groups: typing.Union[IResolvable, typing.List[IdentityDomainsSelfRegistrationProfileDefaultGroups]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroups">IdentityDomainsSelfRegistrationProfileDefaultGroups</a>]]

default_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#default_groups IdentityDomainsSelfRegistrationProfile#default_groups}

---

##### `disallowed_email_domains`<sup>Optional</sup> <a name="disallowed_email_domains" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.disallowedEmailDomains"></a>

```python
disallowed_email_domains: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#disallowed_email_domains IdentityDomainsSelfRegistrationProfile#disallowed_email_domains}.

---

##### `external_id`<sup>Optional</sup> <a name="external_id" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#external_id IdentityDomainsSelfRegistrationProfile#external_id}.

---

##### `footer_logo`<sup>Optional</sup> <a name="footer_logo" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.footerLogo"></a>

```python
footer_logo: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#footer_logo IdentityDomainsSelfRegistrationProfile#footer_logo}.

---

##### `footer_text`<sup>Optional</sup> <a name="footer_text" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.footerText"></a>

```python
footer_text: typing.Union[IResolvable, typing.List[IdentityDomainsSelfRegistrationProfileFooterText]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterText">IdentityDomainsSelfRegistrationProfileFooterText</a>]]

footer_text block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#footer_text IdentityDomainsSelfRegistrationProfile#footer_text}

---

##### `header_logo`<sup>Optional</sup> <a name="header_logo" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.headerLogo"></a>

```python
header_logo: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#header_logo IdentityDomainsSelfRegistrationProfile#header_logo}.

---

##### `header_text`<sup>Optional</sup> <a name="header_text" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.headerText"></a>

```python
header_text: typing.Union[IResolvable, typing.List[IdentityDomainsSelfRegistrationProfileHeaderText]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderText">IdentityDomainsSelfRegistrationProfileHeaderText</a>]]

header_text block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#header_text IdentityDomainsSelfRegistrationProfile#header_text}

---

##### `ocid`<sup>Optional</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#ocid IdentityDomainsSelfRegistrationProfile#ocid}.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#resource_type_schema_version IdentityDomainsSelfRegistrationProfile#resource_type_schema_version}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.tags"></a>

```python
tags: typing.Union[IResolvable, typing.List[IdentityDomainsSelfRegistrationProfileTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTags">IdentityDomainsSelfRegistrationProfileTags</a>]]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#tags IdentityDomainsSelfRegistrationProfile#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.timeouts"></a>

```python
timeouts: IdentityDomainsSelfRegistrationProfileTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeouts">IdentityDomainsSelfRegistrationProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#timeouts IdentityDomainsSelfRegistrationProfile#timeouts}

---

##### `user_attributes`<sup>Optional</sup> <a name="user_attributes" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.userAttributes"></a>

```python
user_attributes: typing.Union[IResolvable, typing.List[IdentityDomainsSelfRegistrationProfileUserAttributes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributes">IdentityDomainsSelfRegistrationProfileUserAttributes</a>]]

user_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#user_attributes IdentityDomainsSelfRegistrationProfile#user_attributes}

---

### IdentityDomainsSelfRegistrationProfileConsentText <a name="IdentityDomainsSelfRegistrationProfileConsentText" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentText"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentText.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_self_registration_profile

identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentText(
  locale: str,
  value: str,
  default: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentText.property.locale">locale</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#locale IdentityDomainsSelfRegistrationProfile#locale}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentText.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#value IdentityDomainsSelfRegistrationProfile#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentText.property.default">default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#default IdentityDomainsSelfRegistrationProfile#default}. |

---

##### `locale`<sup>Required</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentText.property.locale"></a>

```python
locale: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#locale IdentityDomainsSelfRegistrationProfile#locale}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentText.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#value IdentityDomainsSelfRegistrationProfile#value}.

---

##### `default`<sup>Optional</sup> <a name="default" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentText.property.default"></a>

```python
default: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#default IdentityDomainsSelfRegistrationProfile#default}.

---

### IdentityDomainsSelfRegistrationProfileDefaultGroups <a name="IdentityDomainsSelfRegistrationProfileDefaultGroups" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroups.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_self_registration_profile

identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroups(
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroups.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#value IdentityDomainsSelfRegistrationProfile#value}. |

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroups.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#value IdentityDomainsSelfRegistrationProfile#value}.

---

### IdentityDomainsSelfRegistrationProfileDisplayName <a name="IdentityDomainsSelfRegistrationProfileDisplayName" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayName"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayName.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_self_registration_profile

identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayName(
  locale: str,
  value: str,
  default: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayName.property.locale">locale</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#locale IdentityDomainsSelfRegistrationProfile#locale}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayName.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#value IdentityDomainsSelfRegistrationProfile#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayName.property.default">default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#default IdentityDomainsSelfRegistrationProfile#default}. |

---

##### `locale`<sup>Required</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayName.property.locale"></a>

```python
locale: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#locale IdentityDomainsSelfRegistrationProfile#locale}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayName.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#value IdentityDomainsSelfRegistrationProfile#value}.

---

##### `default`<sup>Optional</sup> <a name="default" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayName.property.default"></a>

```python
default: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#default IdentityDomainsSelfRegistrationProfile#default}.

---

### IdentityDomainsSelfRegistrationProfileEmailTemplate <a name="IdentityDomainsSelfRegistrationProfileEmailTemplate" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplate"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplate.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_self_registration_profile

identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplate(
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplate.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#value IdentityDomainsSelfRegistrationProfile#value}. |

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplate.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#value IdentityDomainsSelfRegistrationProfile#value}.

---

### IdentityDomainsSelfRegistrationProfileFooterText <a name="IdentityDomainsSelfRegistrationProfileFooterText" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterText"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterText.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_self_registration_profile

identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterText(
  locale: str,
  value: str,
  default: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterText.property.locale">locale</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#locale IdentityDomainsSelfRegistrationProfile#locale}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterText.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#value IdentityDomainsSelfRegistrationProfile#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterText.property.default">default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#default IdentityDomainsSelfRegistrationProfile#default}. |

---

##### `locale`<sup>Required</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterText.property.locale"></a>

```python
locale: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#locale IdentityDomainsSelfRegistrationProfile#locale}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterText.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#value IdentityDomainsSelfRegistrationProfile#value}.

---

##### `default`<sup>Optional</sup> <a name="default" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterText.property.default"></a>

```python
default: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#default IdentityDomainsSelfRegistrationProfile#default}.

---

### IdentityDomainsSelfRegistrationProfileHeaderText <a name="IdentityDomainsSelfRegistrationProfileHeaderText" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderText"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderText.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_self_registration_profile

identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderText(
  locale: str,
  value: str,
  default: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderText.property.locale">locale</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#locale IdentityDomainsSelfRegistrationProfile#locale}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderText.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#value IdentityDomainsSelfRegistrationProfile#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderText.property.default">default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#default IdentityDomainsSelfRegistrationProfile#default}. |

---

##### `locale`<sup>Required</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderText.property.locale"></a>

```python
locale: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#locale IdentityDomainsSelfRegistrationProfile#locale}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderText.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#value IdentityDomainsSelfRegistrationProfile#value}.

---

##### `default`<sup>Optional</sup> <a name="default" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderText.property.default"></a>

```python
default: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#default IdentityDomainsSelfRegistrationProfile#default}.

---

### IdentityDomainsSelfRegistrationProfileIdcsCreatedBy <a name="IdentityDomainsSelfRegistrationProfileIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_self_registration_profile

identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedBy()
```


### IdentityDomainsSelfRegistrationProfileIdcsLastModifiedBy <a name="IdentityDomainsSelfRegistrationProfileIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_self_registration_profile

identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedBy()
```


### IdentityDomainsSelfRegistrationProfileMeta <a name="IdentityDomainsSelfRegistrationProfileMeta" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMeta.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_self_registration_profile

identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMeta()
```


### IdentityDomainsSelfRegistrationProfileTags <a name="IdentityDomainsSelfRegistrationProfileTags" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTags.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_self_registration_profile

identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTags(
  key: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#key IdentityDomainsSelfRegistrationProfile#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#value IdentityDomainsSelfRegistrationProfile#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#key IdentityDomainsSelfRegistrationProfile#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#value IdentityDomainsSelfRegistrationProfile#value}.

---

### IdentityDomainsSelfRegistrationProfileTimeouts <a name="IdentityDomainsSelfRegistrationProfileTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_self_registration_profile

identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#create IdentityDomainsSelfRegistrationProfile#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#delete IdentityDomainsSelfRegistrationProfile#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#update IdentityDomainsSelfRegistrationProfile#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#create IdentityDomainsSelfRegistrationProfile#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#delete IdentityDomainsSelfRegistrationProfile#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#update IdentityDomainsSelfRegistrationProfile#update}.

---

### IdentityDomainsSelfRegistrationProfileUserAttributes <a name="IdentityDomainsSelfRegistrationProfileUserAttributes" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributes.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_self_registration_profile

identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributes(
  seq_number: typing.Union[int, float],
  value: str,
  fully_qualified_attribute_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributes.property.seqNumber">seq_number</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#seq_number IdentityDomainsSelfRegistrationProfile#seq_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributes.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#value IdentityDomainsSelfRegistrationProfile#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributes.property.fullyQualifiedAttributeName">fully_qualified_attribute_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#fully_qualified_attribute_name IdentityDomainsSelfRegistrationProfile#fully_qualified_attribute_name}. |

---

##### `seq_number`<sup>Required</sup> <a name="seq_number" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributes.property.seqNumber"></a>

```python
seq_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#seq_number IdentityDomainsSelfRegistrationProfile#seq_number}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributes.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#value IdentityDomainsSelfRegistrationProfile#value}.

---

##### `fully_qualified_attribute_name`<sup>Optional</sup> <a name="fully_qualified_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributes.property.fullyQualifiedAttributeName"></a>

```python
fully_qualified_attribute_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#fully_qualified_attribute_name IdentityDomainsSelfRegistrationProfile#fully_qualified_attribute_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityDomainsSelfRegistrationProfileAfterSubmitTextList <a name="IdentityDomainsSelfRegistrationProfileAfterSubmitTextList" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_self_registration_profile

identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitText">IdentityDomainsSelfRegistrationProfileAfterSubmitText</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[IdentityDomainsSelfRegistrationProfileAfterSubmitText]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitText">IdentityDomainsSelfRegistrationProfileAfterSubmitText</a>]]

---


### IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference <a name="IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_self_registration_profile

identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.resetDefault">reset_default</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_default` <a name="reset_default" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.defaultInput">default_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.localeInput">locale_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.default">default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.locale">locale</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitText">IdentityDomainsSelfRegistrationProfileAfterSubmitText</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.defaultInput"></a>

```python
default_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `locale_input`<sup>Optional</sup> <a name="locale_input" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.localeInput"></a>

```python
locale_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.default"></a>

```python
default: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `locale`<sup>Required</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.locale"></a>

```python
locale: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IdentityDomainsSelfRegistrationProfileAfterSubmitText]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitText">IdentityDomainsSelfRegistrationProfileAfterSubmitText</a>]

---


### IdentityDomainsSelfRegistrationProfileConsentTextList <a name="IdentityDomainsSelfRegistrationProfileConsentTextList" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_self_registration_profile

identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsSelfRegistrationProfileConsentTextOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentText">IdentityDomainsSelfRegistrationProfileConsentText</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[IdentityDomainsSelfRegistrationProfileConsentText]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentText">IdentityDomainsSelfRegistrationProfileConsentText</a>]]

---


### IdentityDomainsSelfRegistrationProfileConsentTextOutputReference <a name="IdentityDomainsSelfRegistrationProfileConsentTextOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_self_registration_profile

identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.resetDefault">reset_default</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_default` <a name="reset_default" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.defaultInput">default_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.localeInput">locale_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.default">default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.locale">locale</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentText">IdentityDomainsSelfRegistrationProfileConsentText</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.defaultInput"></a>

```python
default_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `locale_input`<sup>Optional</sup> <a name="locale_input" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.localeInput"></a>

```python
locale_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.default"></a>

```python
default: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `locale`<sup>Required</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.locale"></a>

```python
locale: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IdentityDomainsSelfRegistrationProfileConsentText]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentText">IdentityDomainsSelfRegistrationProfileConsentText</a>]

---


### IdentityDomainsSelfRegistrationProfileDefaultGroupsList <a name="IdentityDomainsSelfRegistrationProfileDefaultGroupsList" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_self_registration_profile

identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroups">IdentityDomainsSelfRegistrationProfileDefaultGroups</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[IdentityDomainsSelfRegistrationProfileDefaultGroups]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroups">IdentityDomainsSelfRegistrationProfileDefaultGroups</a>]]

---


### IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference <a name="IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_self_registration_profile

identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroups">IdentityDomainsSelfRegistrationProfileDefaultGroups</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IdentityDomainsSelfRegistrationProfileDefaultGroups]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroups">IdentityDomainsSelfRegistrationProfileDefaultGroups</a>]

---


### IdentityDomainsSelfRegistrationProfileDisplayNameList <a name="IdentityDomainsSelfRegistrationProfileDisplayNameList" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_self_registration_profile

identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayName">IdentityDomainsSelfRegistrationProfileDisplayName</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[IdentityDomainsSelfRegistrationProfileDisplayName]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayName">IdentityDomainsSelfRegistrationProfileDisplayName</a>]]

---


### IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference <a name="IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_self_registration_profile

identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.resetDefault">reset_default</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_default` <a name="reset_default" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.defaultInput">default_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.localeInput">locale_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.default">default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.locale">locale</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayName">IdentityDomainsSelfRegistrationProfileDisplayName</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.defaultInput"></a>

```python
default_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `locale_input`<sup>Optional</sup> <a name="locale_input" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.localeInput"></a>

```python
locale_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.default"></a>

```python
default: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `locale`<sup>Required</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.locale"></a>

```python
locale: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IdentityDomainsSelfRegistrationProfileDisplayName]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayName">IdentityDomainsSelfRegistrationProfileDisplayName</a>]

---


### IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference <a name="IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_self_registration_profile

identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplate">IdentityDomainsSelfRegistrationProfileEmailTemplate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsSelfRegistrationProfileEmailTemplate
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplate">IdentityDomainsSelfRegistrationProfileEmailTemplate</a>

---


### IdentityDomainsSelfRegistrationProfileFooterTextList <a name="IdentityDomainsSelfRegistrationProfileFooterTextList" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_self_registration_profile

identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsSelfRegistrationProfileFooterTextOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterText">IdentityDomainsSelfRegistrationProfileFooterText</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[IdentityDomainsSelfRegistrationProfileFooterText]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterText">IdentityDomainsSelfRegistrationProfileFooterText</a>]]

---


### IdentityDomainsSelfRegistrationProfileFooterTextOutputReference <a name="IdentityDomainsSelfRegistrationProfileFooterTextOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_self_registration_profile

identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.resetDefault">reset_default</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_default` <a name="reset_default" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.defaultInput">default_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.localeInput">locale_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.default">default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.locale">locale</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterText">IdentityDomainsSelfRegistrationProfileFooterText</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.defaultInput"></a>

```python
default_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `locale_input`<sup>Optional</sup> <a name="locale_input" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.localeInput"></a>

```python
locale_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.default"></a>

```python
default: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `locale`<sup>Required</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.locale"></a>

```python
locale: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IdentityDomainsSelfRegistrationProfileFooterText]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterText">IdentityDomainsSelfRegistrationProfileFooterText</a>]

---


### IdentityDomainsSelfRegistrationProfileHeaderTextList <a name="IdentityDomainsSelfRegistrationProfileHeaderTextList" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_self_registration_profile

identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderText">IdentityDomainsSelfRegistrationProfileHeaderText</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[IdentityDomainsSelfRegistrationProfileHeaderText]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderText">IdentityDomainsSelfRegistrationProfileHeaderText</a>]]

---


### IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference <a name="IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_self_registration_profile

identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.resetDefault">reset_default</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_default` <a name="reset_default" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.defaultInput">default_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.localeInput">locale_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.default">default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.locale">locale</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderText">IdentityDomainsSelfRegistrationProfileHeaderText</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.defaultInput"></a>

```python
default_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `locale_input`<sup>Optional</sup> <a name="locale_input" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.localeInput"></a>

```python
locale_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.default"></a>

```python
default: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `locale`<sup>Required</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.locale"></a>

```python
locale: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IdentityDomainsSelfRegistrationProfileHeaderText]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderText">IdentityDomainsSelfRegistrationProfileHeaderText</a>]

---


### IdentityDomainsSelfRegistrationProfileIdcsCreatedByList <a name="IdentityDomainsSelfRegistrationProfileIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_self_registration_profile

identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference <a name="IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_self_registration_profile

identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedBy">IdentityDomainsSelfRegistrationProfileIdcsCreatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsSelfRegistrationProfileIdcsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedBy">IdentityDomainsSelfRegistrationProfileIdcsCreatedBy</a>

---


### IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList <a name="IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_self_registration_profile

identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference <a name="IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_self_registration_profile

identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedBy">IdentityDomainsSelfRegistrationProfileIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsSelfRegistrationProfileIdcsLastModifiedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedBy">IdentityDomainsSelfRegistrationProfileIdcsLastModifiedBy</a>

---


### IdentityDomainsSelfRegistrationProfileMetaList <a name="IdentityDomainsSelfRegistrationProfileMetaList" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_self_registration_profile

identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsSelfRegistrationProfileMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IdentityDomainsSelfRegistrationProfileMetaOutputReference <a name="IdentityDomainsSelfRegistrationProfileMetaOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_self_registration_profile

identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.property.lastModified">last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMeta">IdentityDomainsSelfRegistrationProfileMeta</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `last_modified`<sup>Required</sup> <a name="last_modified" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.property.lastModified"></a>

```python
last_modified: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsSelfRegistrationProfileMeta
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMeta">IdentityDomainsSelfRegistrationProfileMeta</a>

---


### IdentityDomainsSelfRegistrationProfileTagsList <a name="IdentityDomainsSelfRegistrationProfileTagsList" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_self_registration_profile

identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsSelfRegistrationProfileTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTags">IdentityDomainsSelfRegistrationProfileTags</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[IdentityDomainsSelfRegistrationProfileTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTags">IdentityDomainsSelfRegistrationProfileTags</a>]]

---


### IdentityDomainsSelfRegistrationProfileTagsOutputReference <a name="IdentityDomainsSelfRegistrationProfileTagsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_self_registration_profile

identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTags">IdentityDomainsSelfRegistrationProfileTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IdentityDomainsSelfRegistrationProfileTags]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTags">IdentityDomainsSelfRegistrationProfileTags</a>]

---


### IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference <a name="IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_self_registration_profile

identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeouts">IdentityDomainsSelfRegistrationProfileTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IdentityDomainsSelfRegistrationProfileTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeouts">IdentityDomainsSelfRegistrationProfileTimeouts</a>]

---


### IdentityDomainsSelfRegistrationProfileUserAttributesList <a name="IdentityDomainsSelfRegistrationProfileUserAttributesList" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_self_registration_profile

identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributes">IdentityDomainsSelfRegistrationProfileUserAttributes</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[IdentityDomainsSelfRegistrationProfileUserAttributes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributes">IdentityDomainsSelfRegistrationProfileUserAttributes</a>]]

---


### IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference <a name="IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_self_registration_profile

identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.resetFullyQualifiedAttributeName">reset_fully_qualified_attribute_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_fully_qualified_attribute_name` <a name="reset_fully_qualified_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.resetFullyQualifiedAttributeName"></a>

```python
def reset_fully_qualified_attribute_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.deletable">deletable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.metadata">metadata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.fullyQualifiedAttributeNameInput">fully_qualified_attribute_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.seqNumberInput">seq_number_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.fullyQualifiedAttributeName">fully_qualified_attribute_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.seqNumber">seq_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributes">IdentityDomainsSelfRegistrationProfileUserAttributes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `deletable`<sup>Required</sup> <a name="deletable" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.deletable"></a>

```python
deletable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.metadata"></a>

```python
metadata: str
```

- *Type:* str

---

##### `fully_qualified_attribute_name_input`<sup>Optional</sup> <a name="fully_qualified_attribute_name_input" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.fullyQualifiedAttributeNameInput"></a>

```python
fully_qualified_attribute_name_input: str
```

- *Type:* str

---

##### `seq_number_input`<sup>Optional</sup> <a name="seq_number_input" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.seqNumberInput"></a>

```python
seq_number_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `fully_qualified_attribute_name`<sup>Required</sup> <a name="fully_qualified_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.fullyQualifiedAttributeName"></a>

```python
fully_qualified_attribute_name: str
```

- *Type:* str

---

##### `seq_number`<sup>Required</sup> <a name="seq_number" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.seqNumber"></a>

```python
seq_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IdentityDomainsSelfRegistrationProfileUserAttributes]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributes">IdentityDomainsSelfRegistrationProfileUserAttributes</a>]

---



