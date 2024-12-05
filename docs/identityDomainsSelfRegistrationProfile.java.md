# `identityDomainsSelfRegistrationProfile` Submodule <a name="`identityDomainsSelfRegistrationProfile` Submodule" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityDomainsSelfRegistrationProfile <a name="IdentityDomainsSelfRegistrationProfile" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile oci_identity_domains_self_registration_profile}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_self_registration_profile.IdentityDomainsSelfRegistrationProfile;

IdentityDomainsSelfRegistrationProfile.Builder.create(Construct scope, java.lang.String id)
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
    .activationEmailRequired(java.lang.Boolean)
    .activationEmailRequired(IResolvable)
    .consentTextPresent(java.lang.Boolean)
    .consentTextPresent(IResolvable)
    .displayName(IResolvable)
    .displayName(java.util.List<IdentityDomainsSelfRegistrationProfileDisplayName>)
    .emailTemplate(IdentityDomainsSelfRegistrationProfileEmailTemplate)
    .idcsEndpoint(java.lang.String)
    .name(java.lang.String)
    .numberOfDaysRedirectUrlIsValid(java.lang.Number)
    .redirectUrl(java.lang.String)
    .schemas(java.util.List<java.lang.String>)
    .showOnLoginPage(java.lang.Boolean)
    .showOnLoginPage(IResolvable)
//  .active(java.lang.Boolean)
//  .active(IResolvable)
//  .afterSubmitText(IResolvable)
//  .afterSubmitText(java.util.List<IdentityDomainsSelfRegistrationProfileAfterSubmitText>)
//  .allowedEmailDomains(java.util.List<java.lang.String>)
//  .attributes(java.lang.String)
//  .attributeSets(java.util.List<java.lang.String>)
//  .authorization(java.lang.String)
//  .consentText(IResolvable)
//  .consentText(java.util.List<IdentityDomainsSelfRegistrationProfileConsentText>)
//  .defaultGroups(IResolvable)
//  .defaultGroups(java.util.List<IdentityDomainsSelfRegistrationProfileDefaultGroups>)
//  .disallowedEmailDomains(java.util.List<java.lang.String>)
//  .externalId(java.lang.String)
//  .footerLogo(java.lang.String)
//  .footerText(IResolvable)
//  .footerText(java.util.List<IdentityDomainsSelfRegistrationProfileFooterText>)
//  .headerLogo(java.lang.String)
//  .headerText(IResolvable)
//  .headerText(java.util.List<IdentityDomainsSelfRegistrationProfileHeaderText>)
//  .ocid(java.lang.String)
//  .resourceTypeSchemaVersion(java.lang.String)
//  .tags(IResolvable)
//  .tags(java.util.List<IdentityDomainsSelfRegistrationProfileTags>)
//  .timeouts(IdentityDomainsSelfRegistrationProfileTimeouts)
//  .userAttributes(IResolvable)
//  .userAttributes(java.util.List<IdentityDomainsSelfRegistrationProfileUserAttributes>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.activationEmailRequired">activationEmailRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#activation_email_required IdentityDomainsSelfRegistrationProfile#activation_email_required}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.consentTextPresent">consentTextPresent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#consent_text_present IdentityDomainsSelfRegistrationProfile#consent_text_present}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.displayName">displayName</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayName">IdentityDomainsSelfRegistrationProfileDisplayName</a>></code> | display_name block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.emailTemplate">emailTemplate</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplate">IdentityDomainsSelfRegistrationProfileEmailTemplate</a></code> | email_template block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.idcsEndpoint">idcsEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#idcs_endpoint IdentityDomainsSelfRegistrationProfile#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#name IdentityDomainsSelfRegistrationProfile#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.numberOfDaysRedirectUrlIsValid">numberOfDaysRedirectUrlIsValid</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#number_of_days_redirect_url_is_valid IdentityDomainsSelfRegistrationProfile#number_of_days_redirect_url_is_valid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.redirectUrl">redirectUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#redirect_url IdentityDomainsSelfRegistrationProfile#redirect_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.schemas">schemas</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#schemas IdentityDomainsSelfRegistrationProfile#schemas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.showOnLoginPage">showOnLoginPage</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#show_on_login_page IdentityDomainsSelfRegistrationProfile#show_on_login_page}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.active">active</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#active IdentityDomainsSelfRegistrationProfile#active}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.afterSubmitText">afterSubmitText</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitText">IdentityDomainsSelfRegistrationProfileAfterSubmitText</a>></code> | after_submit_text block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.allowedEmailDomains">allowedEmailDomains</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#allowed_email_domains IdentityDomainsSelfRegistrationProfile#allowed_email_domains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.attributes">attributes</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#attributes IdentityDomainsSelfRegistrationProfile#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.attributeSets">attributeSets</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#attribute_sets IdentityDomainsSelfRegistrationProfile#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.authorization">authorization</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#authorization IdentityDomainsSelfRegistrationProfile#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.consentText">consentText</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentText">IdentityDomainsSelfRegistrationProfileConsentText</a>></code> | consent_text block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.defaultGroups">defaultGroups</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroups">IdentityDomainsSelfRegistrationProfileDefaultGroups</a>></code> | default_groups block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.disallowedEmailDomains">disallowedEmailDomains</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#disallowed_email_domains IdentityDomainsSelfRegistrationProfile#disallowed_email_domains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.externalId">externalId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#external_id IdentityDomainsSelfRegistrationProfile#external_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.footerLogo">footerLogo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#footer_logo IdentityDomainsSelfRegistrationProfile#footer_logo}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.footerText">footerText</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterText">IdentityDomainsSelfRegistrationProfileFooterText</a>></code> | footer_text block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.headerLogo">headerLogo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#header_logo IdentityDomainsSelfRegistrationProfile#header_logo}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.headerText">headerText</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderText">IdentityDomainsSelfRegistrationProfileHeaderText</a>></code> | header_text block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.ocid">ocid</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#ocid IdentityDomainsSelfRegistrationProfile#ocid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#resource_type_schema_version IdentityDomainsSelfRegistrationProfile#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.tags">tags</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTags">IdentityDomainsSelfRegistrationProfileTags</a>></code> | tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeouts">IdentityDomainsSelfRegistrationProfileTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.userAttributes">userAttributes</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributes">IdentityDomainsSelfRegistrationProfileUserAttributes</a>></code> | user_attributes block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `activationEmailRequired`<sup>Required</sup> <a name="activationEmailRequired" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.activationEmailRequired"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#activation_email_required IdentityDomainsSelfRegistrationProfile#activation_email_required}.

---

##### `consentTextPresent`<sup>Required</sup> <a name="consentTextPresent" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.consentTextPresent"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#consent_text_present IdentityDomainsSelfRegistrationProfile#consent_text_present}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.displayName"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayName">IdentityDomainsSelfRegistrationProfileDisplayName</a>>

display_name block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#display_name IdentityDomainsSelfRegistrationProfile#display_name}

---

##### `emailTemplate`<sup>Required</sup> <a name="emailTemplate" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.emailTemplate"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplate">IdentityDomainsSelfRegistrationProfileEmailTemplate</a>

email_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#email_template IdentityDomainsSelfRegistrationProfile#email_template}

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.idcsEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#idcs_endpoint IdentityDomainsSelfRegistrationProfile#idcs_endpoint}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#name IdentityDomainsSelfRegistrationProfile#name}.

---

##### `numberOfDaysRedirectUrlIsValid`<sup>Required</sup> <a name="numberOfDaysRedirectUrlIsValid" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.numberOfDaysRedirectUrlIsValid"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#number_of_days_redirect_url_is_valid IdentityDomainsSelfRegistrationProfile#number_of_days_redirect_url_is_valid}.

---

##### `redirectUrl`<sup>Required</sup> <a name="redirectUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.redirectUrl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#redirect_url IdentityDomainsSelfRegistrationProfile#redirect_url}.

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.schemas"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#schemas IdentityDomainsSelfRegistrationProfile#schemas}.

---

##### `showOnLoginPage`<sup>Required</sup> <a name="showOnLoginPage" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.showOnLoginPage"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#show_on_login_page IdentityDomainsSelfRegistrationProfile#show_on_login_page}.

---

##### `active`<sup>Optional</sup> <a name="active" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.active"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#active IdentityDomainsSelfRegistrationProfile#active}.

---

##### `afterSubmitText`<sup>Optional</sup> <a name="afterSubmitText" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.afterSubmitText"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitText">IdentityDomainsSelfRegistrationProfileAfterSubmitText</a>>

after_submit_text block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#after_submit_text IdentityDomainsSelfRegistrationProfile#after_submit_text}

---

##### `allowedEmailDomains`<sup>Optional</sup> <a name="allowedEmailDomains" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.allowedEmailDomains"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#allowed_email_domains IdentityDomainsSelfRegistrationProfile#allowed_email_domains}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.attributes"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#attributes IdentityDomainsSelfRegistrationProfile#attributes}.

---

##### `attributeSets`<sup>Optional</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.attributeSets"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#attribute_sets IdentityDomainsSelfRegistrationProfile#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.authorization"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#authorization IdentityDomainsSelfRegistrationProfile#authorization}.

---

##### `consentText`<sup>Optional</sup> <a name="consentText" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.consentText"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentText">IdentityDomainsSelfRegistrationProfileConsentText</a>>

consent_text block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#consent_text IdentityDomainsSelfRegistrationProfile#consent_text}

---

##### `defaultGroups`<sup>Optional</sup> <a name="defaultGroups" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.defaultGroups"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroups">IdentityDomainsSelfRegistrationProfileDefaultGroups</a>>

default_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#default_groups IdentityDomainsSelfRegistrationProfile#default_groups}

---

##### `disallowedEmailDomains`<sup>Optional</sup> <a name="disallowedEmailDomains" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.disallowedEmailDomains"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#disallowed_email_domains IdentityDomainsSelfRegistrationProfile#disallowed_email_domains}.

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.externalId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#external_id IdentityDomainsSelfRegistrationProfile#external_id}.

---

##### `footerLogo`<sup>Optional</sup> <a name="footerLogo" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.footerLogo"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#footer_logo IdentityDomainsSelfRegistrationProfile#footer_logo}.

---

##### `footerText`<sup>Optional</sup> <a name="footerText" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.footerText"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterText">IdentityDomainsSelfRegistrationProfileFooterText</a>>

footer_text block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#footer_text IdentityDomainsSelfRegistrationProfile#footer_text}

---

##### `headerLogo`<sup>Optional</sup> <a name="headerLogo" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.headerLogo"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#header_logo IdentityDomainsSelfRegistrationProfile#header_logo}.

---

##### `headerText`<sup>Optional</sup> <a name="headerText" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.headerText"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderText">IdentityDomainsSelfRegistrationProfileHeaderText</a>>

header_text block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#header_text IdentityDomainsSelfRegistrationProfile#header_text}

---

##### `ocid`<sup>Optional</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.ocid"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#ocid IdentityDomainsSelfRegistrationProfile#ocid}.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.resourceTypeSchemaVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#resource_type_schema_version IdentityDomainsSelfRegistrationProfile#resource_type_schema_version}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.tags"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTags">IdentityDomainsSelfRegistrationProfileTags</a>>

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#tags IdentityDomainsSelfRegistrationProfile#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeouts">IdentityDomainsSelfRegistrationProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#timeouts IdentityDomainsSelfRegistrationProfile#timeouts}

---

##### `userAttributes`<sup>Optional</sup> <a name="userAttributes" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.userAttributes"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributes">IdentityDomainsSelfRegistrationProfileUserAttributes</a>>

user_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#user_attributes IdentityDomainsSelfRegistrationProfile#user_attributes}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putAfterSubmitText">putAfterSubmitText</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putConsentText">putConsentText</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putDefaultGroups">putDefaultGroups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putDisplayName">putDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putEmailTemplate">putEmailTemplate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putFooterText">putFooterText</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putHeaderText">putHeaderText</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putTags">putTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putUserAttributes">putUserAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetActive">resetActive</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetAfterSubmitText">resetAfterSubmitText</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetAllowedEmailDomains">resetAllowedEmailDomains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetAttributeSets">resetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetConsentText">resetConsentText</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetDefaultGroups">resetDefaultGroups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetDisallowedEmailDomains">resetDisallowedEmailDomains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetExternalId">resetExternalId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetFooterLogo">resetFooterLogo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetFooterText">resetFooterText</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetHeaderLogo">resetHeaderLogo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetHeaderText">resetHeaderText</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetOcid">resetOcid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetResourceTypeSchemaVersion">resetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetUserAttributes">resetUserAttributes</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAfterSubmitText` <a name="putAfterSubmitText" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putAfterSubmitText"></a>

```java
public void putAfterSubmitText(IResolvable OR java.util.List<IdentityDomainsSelfRegistrationProfileAfterSubmitText> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putAfterSubmitText.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitText">IdentityDomainsSelfRegistrationProfileAfterSubmitText</a>>

---

##### `putConsentText` <a name="putConsentText" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putConsentText"></a>

```java
public void putConsentText(IResolvable OR java.util.List<IdentityDomainsSelfRegistrationProfileConsentText> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putConsentText.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentText">IdentityDomainsSelfRegistrationProfileConsentText</a>>

---

##### `putDefaultGroups` <a name="putDefaultGroups" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putDefaultGroups"></a>

```java
public void putDefaultGroups(IResolvable OR java.util.List<IdentityDomainsSelfRegistrationProfileDefaultGroups> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putDefaultGroups.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroups">IdentityDomainsSelfRegistrationProfileDefaultGroups</a>>

---

##### `putDisplayName` <a name="putDisplayName" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putDisplayName"></a>

```java
public void putDisplayName(IResolvable OR java.util.List<IdentityDomainsSelfRegistrationProfileDisplayName> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putDisplayName.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayName">IdentityDomainsSelfRegistrationProfileDisplayName</a>>

---

##### `putEmailTemplate` <a name="putEmailTemplate" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putEmailTemplate"></a>

```java
public void putEmailTemplate(IdentityDomainsSelfRegistrationProfileEmailTemplate value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putEmailTemplate.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplate">IdentityDomainsSelfRegistrationProfileEmailTemplate</a>

---

##### `putFooterText` <a name="putFooterText" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putFooterText"></a>

```java
public void putFooterText(IResolvable OR java.util.List<IdentityDomainsSelfRegistrationProfileFooterText> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putFooterText.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterText">IdentityDomainsSelfRegistrationProfileFooterText</a>>

---

##### `putHeaderText` <a name="putHeaderText" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putHeaderText"></a>

```java
public void putHeaderText(IResolvable OR java.util.List<IdentityDomainsSelfRegistrationProfileHeaderText> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putHeaderText.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderText">IdentityDomainsSelfRegistrationProfileHeaderText</a>>

---

##### `putTags` <a name="putTags" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putTags"></a>

```java
public void putTags(IResolvable OR java.util.List<IdentityDomainsSelfRegistrationProfileTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putTags.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTags">IdentityDomainsSelfRegistrationProfileTags</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putTimeouts"></a>

```java
public void putTimeouts(IdentityDomainsSelfRegistrationProfileTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeouts">IdentityDomainsSelfRegistrationProfileTimeouts</a>

---

##### `putUserAttributes` <a name="putUserAttributes" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putUserAttributes"></a>

```java
public void putUserAttributes(IResolvable OR java.util.List<IdentityDomainsSelfRegistrationProfileUserAttributes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putUserAttributes.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributes">IdentityDomainsSelfRegistrationProfileUserAttributes</a>>

---

##### `resetActive` <a name="resetActive" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetActive"></a>

```java
public void resetActive()
```

##### `resetAfterSubmitText` <a name="resetAfterSubmitText" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetAfterSubmitText"></a>

```java
public void resetAfterSubmitText()
```

##### `resetAllowedEmailDomains` <a name="resetAllowedEmailDomains" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetAllowedEmailDomains"></a>

```java
public void resetAllowedEmailDomains()
```

##### `resetAttributes` <a name="resetAttributes" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetAttributes"></a>

```java
public void resetAttributes()
```

##### `resetAttributeSets` <a name="resetAttributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetAttributeSets"></a>

```java
public void resetAttributeSets()
```

##### `resetAuthorization` <a name="resetAuthorization" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetAuthorization"></a>

```java
public void resetAuthorization()
```

##### `resetConsentText` <a name="resetConsentText" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetConsentText"></a>

```java
public void resetConsentText()
```

##### `resetDefaultGroups` <a name="resetDefaultGroups" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetDefaultGroups"></a>

```java
public void resetDefaultGroups()
```

##### `resetDisallowedEmailDomains` <a name="resetDisallowedEmailDomains" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetDisallowedEmailDomains"></a>

```java
public void resetDisallowedEmailDomains()
```

##### `resetExternalId` <a name="resetExternalId" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetExternalId"></a>

```java
public void resetExternalId()
```

##### `resetFooterLogo` <a name="resetFooterLogo" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetFooterLogo"></a>

```java
public void resetFooterLogo()
```

##### `resetFooterText` <a name="resetFooterText" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetFooterText"></a>

```java
public void resetFooterText()
```

##### `resetHeaderLogo` <a name="resetHeaderLogo" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetHeaderLogo"></a>

```java
public void resetHeaderLogo()
```

##### `resetHeaderText` <a name="resetHeaderText" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetHeaderText"></a>

```java
public void resetHeaderText()
```

##### `resetOcid` <a name="resetOcid" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetOcid"></a>

```java
public void resetOcid()
```

##### `resetResourceTypeSchemaVersion` <a name="resetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetResourceTypeSchemaVersion"></a>

```java
public void resetResourceTypeSchemaVersion()
```

##### `resetTags` <a name="resetTags" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUserAttributes` <a name="resetUserAttributes" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetUserAttributes"></a>

```java
public void resetUserAttributes()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityDomainsSelfRegistrationProfile resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_self_registration_profile.IdentityDomainsSelfRegistrationProfile;

IdentityDomainsSelfRegistrationProfile.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_self_registration_profile.IdentityDomainsSelfRegistrationProfile;

IdentityDomainsSelfRegistrationProfile.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_self_registration_profile.IdentityDomainsSelfRegistrationProfile;

IdentityDomainsSelfRegistrationProfile.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_self_registration_profile.IdentityDomainsSelfRegistrationProfile;

IdentityDomainsSelfRegistrationProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IdentityDomainsSelfRegistrationProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a IdentityDomainsSelfRegistrationProfile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IdentityDomainsSelfRegistrationProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IdentityDomainsSelfRegistrationProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the IdentityDomainsSelfRegistrationProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.afterSubmitText">afterSubmitText</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList">IdentityDomainsSelfRegistrationProfileAfterSubmitTextList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.compartmentOcid">compartmentOcid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.consentText">consentText</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList">IdentityDomainsSelfRegistrationProfileConsentTextList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.defaultGroups">defaultGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList">IdentityDomainsSelfRegistrationProfileDefaultGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.deleteInProgress">deleteInProgress</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.displayName">displayName</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList">IdentityDomainsSelfRegistrationProfileDisplayNameList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.domainOcid">domainOcid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.emailTemplate">emailTemplate</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference">IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.footerText">footerText</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList">IdentityDomainsSelfRegistrationProfileFooterTextList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.headerText">headerText</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList">IdentityDomainsSelfRegistrationProfileHeaderTextList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.idcsCreatedBy">idcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList">IdentityDomainsSelfRegistrationProfileIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.idcsLastModifiedBy">idcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList">IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.idcsLastUpgradedInRelease">idcsLastUpgradedInRelease</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.idcsPreventedOperations">idcsPreventedOperations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList">IdentityDomainsSelfRegistrationProfileMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList">IdentityDomainsSelfRegistrationProfileTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.tenancyOcid">tenancyOcid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference">IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.userAttributes">userAttributes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList">IdentityDomainsSelfRegistrationProfileUserAttributesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.activationEmailRequiredInput">activationEmailRequiredInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.activeInput">activeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.afterSubmitTextInput">afterSubmitTextInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitText">IdentityDomainsSelfRegistrationProfileAfterSubmitText</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.allowedEmailDomainsInput">allowedEmailDomainsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.attributeSetsInput">attributeSetsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.attributesInput">attributesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.authorizationInput">authorizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.consentTextInput">consentTextInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentText">IdentityDomainsSelfRegistrationProfileConsentText</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.consentTextPresentInput">consentTextPresentInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.defaultGroupsInput">defaultGroupsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroups">IdentityDomainsSelfRegistrationProfileDefaultGroups</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.disallowedEmailDomainsInput">disallowedEmailDomainsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.displayNameInput">displayNameInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayName">IdentityDomainsSelfRegistrationProfileDisplayName</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.emailTemplateInput">emailTemplateInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplate">IdentityDomainsSelfRegistrationProfileEmailTemplate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.externalIdInput">externalIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.footerLogoInput">footerLogoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.footerTextInput">footerTextInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterText">IdentityDomainsSelfRegistrationProfileFooterText</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.headerLogoInput">headerLogoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.headerTextInput">headerTextInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderText">IdentityDomainsSelfRegistrationProfileHeaderText</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.idcsEndpointInput">idcsEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.numberOfDaysRedirectUrlIsValidInput">numberOfDaysRedirectUrlIsValidInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.ocidInput">ocidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.redirectUrlInput">redirectUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.resourceTypeSchemaVersionInput">resourceTypeSchemaVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.schemasInput">schemasInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.showOnLoginPageInput">showOnLoginPageInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.tagsInput">tagsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTags">IdentityDomainsSelfRegistrationProfileTags</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeouts">IdentityDomainsSelfRegistrationProfileTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.userAttributesInput">userAttributesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributes">IdentityDomainsSelfRegistrationProfileUserAttributes</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.activationEmailRequired">activationEmailRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.active">active</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.allowedEmailDomains">allowedEmailDomains</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.attributes">attributes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.attributeSets">attributeSets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.authorization">authorization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.consentTextPresent">consentTextPresent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.disallowedEmailDomains">disallowedEmailDomains</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.externalId">externalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.footerLogo">footerLogo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.headerLogo">headerLogo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.idcsEndpoint">idcsEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.numberOfDaysRedirectUrlIsValid">numberOfDaysRedirectUrlIsValid</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.redirectUrl">redirectUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.schemas">schemas</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.showOnLoginPage">showOnLoginPage</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `afterSubmitText`<sup>Required</sup> <a name="afterSubmitText" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.afterSubmitText"></a>

```java
public IdentityDomainsSelfRegistrationProfileAfterSubmitTextList getAfterSubmitText();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList">IdentityDomainsSelfRegistrationProfileAfterSubmitTextList</a>

---

##### `compartmentOcid`<sup>Required</sup> <a name="compartmentOcid" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.compartmentOcid"></a>

```java
public java.lang.String getCompartmentOcid();
```

- *Type:* java.lang.String

---

##### `consentText`<sup>Required</sup> <a name="consentText" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.consentText"></a>

```java
public IdentityDomainsSelfRegistrationProfileConsentTextList getConsentText();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList">IdentityDomainsSelfRegistrationProfileConsentTextList</a>

---

##### `defaultGroups`<sup>Required</sup> <a name="defaultGroups" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.defaultGroups"></a>

```java
public IdentityDomainsSelfRegistrationProfileDefaultGroupsList getDefaultGroups();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList">IdentityDomainsSelfRegistrationProfileDefaultGroupsList</a>

---

##### `deleteInProgress`<sup>Required</sup> <a name="deleteInProgress" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.deleteInProgress"></a>

```java
public IResolvable getDeleteInProgress();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.displayName"></a>

```java
public IdentityDomainsSelfRegistrationProfileDisplayNameList getDisplayName();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList">IdentityDomainsSelfRegistrationProfileDisplayNameList</a>

---

##### `domainOcid`<sup>Required</sup> <a name="domainOcid" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.domainOcid"></a>

```java
public java.lang.String getDomainOcid();
```

- *Type:* java.lang.String

---

##### `emailTemplate`<sup>Required</sup> <a name="emailTemplate" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.emailTemplate"></a>

```java
public IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference getEmailTemplate();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference">IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference</a>

---

##### `footerText`<sup>Required</sup> <a name="footerText" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.footerText"></a>

```java
public IdentityDomainsSelfRegistrationProfileFooterTextList getFooterText();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList">IdentityDomainsSelfRegistrationProfileFooterTextList</a>

---

##### `headerText`<sup>Required</sup> <a name="headerText" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.headerText"></a>

```java
public IdentityDomainsSelfRegistrationProfileHeaderTextList getHeaderText();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList">IdentityDomainsSelfRegistrationProfileHeaderTextList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `idcsCreatedBy`<sup>Required</sup> <a name="idcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.idcsCreatedBy"></a>

```java
public IdentityDomainsSelfRegistrationProfileIdcsCreatedByList getIdcsCreatedBy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList">IdentityDomainsSelfRegistrationProfileIdcsCreatedByList</a>

---

##### `idcsLastModifiedBy`<sup>Required</sup> <a name="idcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.idcsLastModifiedBy"></a>

```java
public IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList getIdcsLastModifiedBy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList">IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList</a>

---

##### `idcsLastUpgradedInRelease`<sup>Required</sup> <a name="idcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.idcsLastUpgradedInRelease"></a>

```java
public java.lang.String getIdcsLastUpgradedInRelease();
```

- *Type:* java.lang.String

---

##### `idcsPreventedOperations`<sup>Required</sup> <a name="idcsPreventedOperations" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.idcsPreventedOperations"></a>

```java
public java.util.List<java.lang.String> getIdcsPreventedOperations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.meta"></a>

```java
public IdentityDomainsSelfRegistrationProfileMetaList getMeta();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList">IdentityDomainsSelfRegistrationProfileMetaList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.tags"></a>

```java
public IdentityDomainsSelfRegistrationProfileTagsList getTags();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList">IdentityDomainsSelfRegistrationProfileTagsList</a>

---

##### `tenancyOcid`<sup>Required</sup> <a name="tenancyOcid" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.tenancyOcid"></a>

```java
public java.lang.String getTenancyOcid();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.timeouts"></a>

```java
public IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference">IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference</a>

---

##### `userAttributes`<sup>Required</sup> <a name="userAttributes" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.userAttributes"></a>

```java
public IdentityDomainsSelfRegistrationProfileUserAttributesList getUserAttributes();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList">IdentityDomainsSelfRegistrationProfileUserAttributesList</a>

---

##### `activationEmailRequiredInput`<sup>Optional</sup> <a name="activationEmailRequiredInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.activationEmailRequiredInput"></a>

```java
public java.lang.Object getActivationEmailRequiredInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `activeInput`<sup>Optional</sup> <a name="activeInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.activeInput"></a>

```java
public java.lang.Object getActiveInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `afterSubmitTextInput`<sup>Optional</sup> <a name="afterSubmitTextInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.afterSubmitTextInput"></a>

```java
public java.lang.Object getAfterSubmitTextInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitText">IdentityDomainsSelfRegistrationProfileAfterSubmitText</a>>

---

##### `allowedEmailDomainsInput`<sup>Optional</sup> <a name="allowedEmailDomainsInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.allowedEmailDomainsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedEmailDomainsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `attributeSetsInput`<sup>Optional</sup> <a name="attributeSetsInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.attributeSetsInput"></a>

```java
public java.util.List<java.lang.String> getAttributeSetsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.attributesInput"></a>

```java
public java.lang.String getAttributesInput();
```

- *Type:* java.lang.String

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.authorizationInput"></a>

```java
public java.lang.String getAuthorizationInput();
```

- *Type:* java.lang.String

---

##### `consentTextInput`<sup>Optional</sup> <a name="consentTextInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.consentTextInput"></a>

```java
public java.lang.Object getConsentTextInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentText">IdentityDomainsSelfRegistrationProfileConsentText</a>>

---

##### `consentTextPresentInput`<sup>Optional</sup> <a name="consentTextPresentInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.consentTextPresentInput"></a>

```java
public java.lang.Object getConsentTextPresentInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `defaultGroupsInput`<sup>Optional</sup> <a name="defaultGroupsInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.defaultGroupsInput"></a>

```java
public java.lang.Object getDefaultGroupsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroups">IdentityDomainsSelfRegistrationProfileDefaultGroups</a>>

---

##### `disallowedEmailDomainsInput`<sup>Optional</sup> <a name="disallowedEmailDomainsInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.disallowedEmailDomainsInput"></a>

```java
public java.util.List<java.lang.String> getDisallowedEmailDomainsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.displayNameInput"></a>

```java
public java.lang.Object getDisplayNameInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayName">IdentityDomainsSelfRegistrationProfileDisplayName</a>>

---

##### `emailTemplateInput`<sup>Optional</sup> <a name="emailTemplateInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.emailTemplateInput"></a>

```java
public IdentityDomainsSelfRegistrationProfileEmailTemplate getEmailTemplateInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplate">IdentityDomainsSelfRegistrationProfileEmailTemplate</a>

---

##### `externalIdInput`<sup>Optional</sup> <a name="externalIdInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.externalIdInput"></a>

```java
public java.lang.String getExternalIdInput();
```

- *Type:* java.lang.String

---

##### `footerLogoInput`<sup>Optional</sup> <a name="footerLogoInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.footerLogoInput"></a>

```java
public java.lang.String getFooterLogoInput();
```

- *Type:* java.lang.String

---

##### `footerTextInput`<sup>Optional</sup> <a name="footerTextInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.footerTextInput"></a>

```java
public java.lang.Object getFooterTextInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterText">IdentityDomainsSelfRegistrationProfileFooterText</a>>

---

##### `headerLogoInput`<sup>Optional</sup> <a name="headerLogoInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.headerLogoInput"></a>

```java
public java.lang.String getHeaderLogoInput();
```

- *Type:* java.lang.String

---

##### `headerTextInput`<sup>Optional</sup> <a name="headerTextInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.headerTextInput"></a>

```java
public java.lang.Object getHeaderTextInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderText">IdentityDomainsSelfRegistrationProfileHeaderText</a>>

---

##### `idcsEndpointInput`<sup>Optional</sup> <a name="idcsEndpointInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.idcsEndpointInput"></a>

```java
public java.lang.String getIdcsEndpointInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `numberOfDaysRedirectUrlIsValidInput`<sup>Optional</sup> <a name="numberOfDaysRedirectUrlIsValidInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.numberOfDaysRedirectUrlIsValidInput"></a>

```java
public java.lang.Number getNumberOfDaysRedirectUrlIsValidInput();
```

- *Type:* java.lang.Number

---

##### `ocidInput`<sup>Optional</sup> <a name="ocidInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.ocidInput"></a>

```java
public java.lang.String getOcidInput();
```

- *Type:* java.lang.String

---

##### `redirectUrlInput`<sup>Optional</sup> <a name="redirectUrlInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.redirectUrlInput"></a>

```java
public java.lang.String getRedirectUrlInput();
```

- *Type:* java.lang.String

---

##### `resourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="resourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.resourceTypeSchemaVersionInput"></a>

```java
public java.lang.String getResourceTypeSchemaVersionInput();
```

- *Type:* java.lang.String

---

##### `schemasInput`<sup>Optional</sup> <a name="schemasInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.schemasInput"></a>

```java
public java.util.List<java.lang.String> getSchemasInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `showOnLoginPageInput`<sup>Optional</sup> <a name="showOnLoginPageInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.showOnLoginPageInput"></a>

```java
public java.lang.Object getShowOnLoginPageInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.tagsInput"></a>

```java
public java.lang.Object getTagsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTags">IdentityDomainsSelfRegistrationProfileTags</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeouts">IdentityDomainsSelfRegistrationProfileTimeouts</a>

---

##### `userAttributesInput`<sup>Optional</sup> <a name="userAttributesInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.userAttributesInput"></a>

```java
public java.lang.Object getUserAttributesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributes">IdentityDomainsSelfRegistrationProfileUserAttributes</a>>

---

##### `activationEmailRequired`<sup>Required</sup> <a name="activationEmailRequired" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.activationEmailRequired"></a>

```java
public java.lang.Object getActivationEmailRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `active`<sup>Required</sup> <a name="active" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.active"></a>

```java
public java.lang.Object getActive();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowedEmailDomains`<sup>Required</sup> <a name="allowedEmailDomains" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.allowedEmailDomains"></a>

```java
public java.util.List<java.lang.String> getAllowedEmailDomains();
```

- *Type:* java.util.List<java.lang.String>

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.attributes"></a>

```java
public java.lang.String getAttributes();
```

- *Type:* java.lang.String

---

##### `attributeSets`<sup>Required</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.attributeSets"></a>

```java
public java.util.List<java.lang.String> getAttributeSets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.authorization"></a>

```java
public java.lang.String getAuthorization();
```

- *Type:* java.lang.String

---

##### `consentTextPresent`<sup>Required</sup> <a name="consentTextPresent" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.consentTextPresent"></a>

```java
public java.lang.Object getConsentTextPresent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `disallowedEmailDomains`<sup>Required</sup> <a name="disallowedEmailDomains" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.disallowedEmailDomains"></a>

```java
public java.util.List<java.lang.String> getDisallowedEmailDomains();
```

- *Type:* java.util.List<java.lang.String>

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

---

##### `footerLogo`<sup>Required</sup> <a name="footerLogo" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.footerLogo"></a>

```java
public java.lang.String getFooterLogo();
```

- *Type:* java.lang.String

---

##### `headerLogo`<sup>Required</sup> <a name="headerLogo" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.headerLogo"></a>

```java
public java.lang.String getHeaderLogo();
```

- *Type:* java.lang.String

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.idcsEndpoint"></a>

```java
public java.lang.String getIdcsEndpoint();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `numberOfDaysRedirectUrlIsValid`<sup>Required</sup> <a name="numberOfDaysRedirectUrlIsValid" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.numberOfDaysRedirectUrlIsValid"></a>

```java
public java.lang.Number getNumberOfDaysRedirectUrlIsValid();
```

- *Type:* java.lang.Number

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `redirectUrl`<sup>Required</sup> <a name="redirectUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.redirectUrl"></a>

```java
public java.lang.String getRedirectUrl();
```

- *Type:* java.lang.String

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.resourceTypeSchemaVersion"></a>

```java
public java.lang.String getResourceTypeSchemaVersion();
```

- *Type:* java.lang.String

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.schemas"></a>

```java
public java.util.List<java.lang.String> getSchemas();
```

- *Type:* java.util.List<java.lang.String>

---

##### `showOnLoginPage`<sup>Required</sup> <a name="showOnLoginPage" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.showOnLoginPage"></a>

```java
public java.lang.Object getShowOnLoginPage();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityDomainsSelfRegistrationProfileAfterSubmitText <a name="IdentityDomainsSelfRegistrationProfileAfterSubmitText" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitText"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitText.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_self_registration_profile.IdentityDomainsSelfRegistrationProfileAfterSubmitText;

IdentityDomainsSelfRegistrationProfileAfterSubmitText.builder()
    .locale(java.lang.String)
    .value(java.lang.String)
//  .default(java.lang.Boolean)
//  .default(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitText.property.locale">locale</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#locale IdentityDomainsSelfRegistrationProfile#locale}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitText.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#value IdentityDomainsSelfRegistrationProfile#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitText.property.default">default</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#default IdentityDomainsSelfRegistrationProfile#default}. |

---

##### `locale`<sup>Required</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitText.property.locale"></a>

```java
public java.lang.String getLocale();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#locale IdentityDomainsSelfRegistrationProfile#locale}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitText.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#value IdentityDomainsSelfRegistrationProfile#value}.

---

##### `default`<sup>Optional</sup> <a name="default" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitText.property.default"></a>

```java
public java.lang.Object getDefault();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#default IdentityDomainsSelfRegistrationProfile#default}.

---

### IdentityDomainsSelfRegistrationProfileConfig <a name="IdentityDomainsSelfRegistrationProfileConfig" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_self_registration_profile.IdentityDomainsSelfRegistrationProfileConfig;

IdentityDomainsSelfRegistrationProfileConfig.builder()
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
    .activationEmailRequired(java.lang.Boolean)
    .activationEmailRequired(IResolvable)
    .consentTextPresent(java.lang.Boolean)
    .consentTextPresent(IResolvable)
    .displayName(IResolvable)
    .displayName(java.util.List<IdentityDomainsSelfRegistrationProfileDisplayName>)
    .emailTemplate(IdentityDomainsSelfRegistrationProfileEmailTemplate)
    .idcsEndpoint(java.lang.String)
    .name(java.lang.String)
    .numberOfDaysRedirectUrlIsValid(java.lang.Number)
    .redirectUrl(java.lang.String)
    .schemas(java.util.List<java.lang.String>)
    .showOnLoginPage(java.lang.Boolean)
    .showOnLoginPage(IResolvable)
//  .active(java.lang.Boolean)
//  .active(IResolvable)
//  .afterSubmitText(IResolvable)
//  .afterSubmitText(java.util.List<IdentityDomainsSelfRegistrationProfileAfterSubmitText>)
//  .allowedEmailDomains(java.util.List<java.lang.String>)
//  .attributes(java.lang.String)
//  .attributeSets(java.util.List<java.lang.String>)
//  .authorization(java.lang.String)
//  .consentText(IResolvable)
//  .consentText(java.util.List<IdentityDomainsSelfRegistrationProfileConsentText>)
//  .defaultGroups(IResolvable)
//  .defaultGroups(java.util.List<IdentityDomainsSelfRegistrationProfileDefaultGroups>)
//  .disallowedEmailDomains(java.util.List<java.lang.String>)
//  .externalId(java.lang.String)
//  .footerLogo(java.lang.String)
//  .footerText(IResolvable)
//  .footerText(java.util.List<IdentityDomainsSelfRegistrationProfileFooterText>)
//  .headerLogo(java.lang.String)
//  .headerText(IResolvable)
//  .headerText(java.util.List<IdentityDomainsSelfRegistrationProfileHeaderText>)
//  .ocid(java.lang.String)
//  .resourceTypeSchemaVersion(java.lang.String)
//  .tags(IResolvable)
//  .tags(java.util.List<IdentityDomainsSelfRegistrationProfileTags>)
//  .timeouts(IdentityDomainsSelfRegistrationProfileTimeouts)
//  .userAttributes(IResolvable)
//  .userAttributes(java.util.List<IdentityDomainsSelfRegistrationProfileUserAttributes>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.activationEmailRequired">activationEmailRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#activation_email_required IdentityDomainsSelfRegistrationProfile#activation_email_required}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.consentTextPresent">consentTextPresent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#consent_text_present IdentityDomainsSelfRegistrationProfile#consent_text_present}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.displayName">displayName</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayName">IdentityDomainsSelfRegistrationProfileDisplayName</a>></code> | display_name block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.emailTemplate">emailTemplate</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplate">IdentityDomainsSelfRegistrationProfileEmailTemplate</a></code> | email_template block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.idcsEndpoint">idcsEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#idcs_endpoint IdentityDomainsSelfRegistrationProfile#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#name IdentityDomainsSelfRegistrationProfile#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.numberOfDaysRedirectUrlIsValid">numberOfDaysRedirectUrlIsValid</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#number_of_days_redirect_url_is_valid IdentityDomainsSelfRegistrationProfile#number_of_days_redirect_url_is_valid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.redirectUrl">redirectUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#redirect_url IdentityDomainsSelfRegistrationProfile#redirect_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.schemas">schemas</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#schemas IdentityDomainsSelfRegistrationProfile#schemas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.showOnLoginPage">showOnLoginPage</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#show_on_login_page IdentityDomainsSelfRegistrationProfile#show_on_login_page}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.active">active</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#active IdentityDomainsSelfRegistrationProfile#active}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.afterSubmitText">afterSubmitText</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitText">IdentityDomainsSelfRegistrationProfileAfterSubmitText</a>></code> | after_submit_text block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.allowedEmailDomains">allowedEmailDomains</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#allowed_email_domains IdentityDomainsSelfRegistrationProfile#allowed_email_domains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.attributes">attributes</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#attributes IdentityDomainsSelfRegistrationProfile#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.attributeSets">attributeSets</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#attribute_sets IdentityDomainsSelfRegistrationProfile#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.authorization">authorization</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#authorization IdentityDomainsSelfRegistrationProfile#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.consentText">consentText</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentText">IdentityDomainsSelfRegistrationProfileConsentText</a>></code> | consent_text block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.defaultGroups">defaultGroups</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroups">IdentityDomainsSelfRegistrationProfileDefaultGroups</a>></code> | default_groups block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.disallowedEmailDomains">disallowedEmailDomains</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#disallowed_email_domains IdentityDomainsSelfRegistrationProfile#disallowed_email_domains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.externalId">externalId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#external_id IdentityDomainsSelfRegistrationProfile#external_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.footerLogo">footerLogo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#footer_logo IdentityDomainsSelfRegistrationProfile#footer_logo}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.footerText">footerText</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterText">IdentityDomainsSelfRegistrationProfileFooterText</a>></code> | footer_text block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.headerLogo">headerLogo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#header_logo IdentityDomainsSelfRegistrationProfile#header_logo}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.headerText">headerText</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderText">IdentityDomainsSelfRegistrationProfileHeaderText</a>></code> | header_text block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.ocid">ocid</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#ocid IdentityDomainsSelfRegistrationProfile#ocid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#resource_type_schema_version IdentityDomainsSelfRegistrationProfile#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.tags">tags</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTags">IdentityDomainsSelfRegistrationProfileTags</a>></code> | tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeouts">IdentityDomainsSelfRegistrationProfileTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.userAttributes">userAttributes</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributes">IdentityDomainsSelfRegistrationProfileUserAttributes</a>></code> | user_attributes block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `activationEmailRequired`<sup>Required</sup> <a name="activationEmailRequired" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.activationEmailRequired"></a>

```java
public java.lang.Object getActivationEmailRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#activation_email_required IdentityDomainsSelfRegistrationProfile#activation_email_required}.

---

##### `consentTextPresent`<sup>Required</sup> <a name="consentTextPresent" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.consentTextPresent"></a>

```java
public java.lang.Object getConsentTextPresent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#consent_text_present IdentityDomainsSelfRegistrationProfile#consent_text_present}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.displayName"></a>

```java
public java.lang.Object getDisplayName();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayName">IdentityDomainsSelfRegistrationProfileDisplayName</a>>

display_name block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#display_name IdentityDomainsSelfRegistrationProfile#display_name}

---

##### `emailTemplate`<sup>Required</sup> <a name="emailTemplate" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.emailTemplate"></a>

```java
public IdentityDomainsSelfRegistrationProfileEmailTemplate getEmailTemplate();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplate">IdentityDomainsSelfRegistrationProfileEmailTemplate</a>

email_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#email_template IdentityDomainsSelfRegistrationProfile#email_template}

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.idcsEndpoint"></a>

```java
public java.lang.String getIdcsEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#idcs_endpoint IdentityDomainsSelfRegistrationProfile#idcs_endpoint}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#name IdentityDomainsSelfRegistrationProfile#name}.

---

##### `numberOfDaysRedirectUrlIsValid`<sup>Required</sup> <a name="numberOfDaysRedirectUrlIsValid" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.numberOfDaysRedirectUrlIsValid"></a>

```java
public java.lang.Number getNumberOfDaysRedirectUrlIsValid();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#number_of_days_redirect_url_is_valid IdentityDomainsSelfRegistrationProfile#number_of_days_redirect_url_is_valid}.

---

##### `redirectUrl`<sup>Required</sup> <a name="redirectUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.redirectUrl"></a>

```java
public java.lang.String getRedirectUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#redirect_url IdentityDomainsSelfRegistrationProfile#redirect_url}.

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.schemas"></a>

```java
public java.util.List<java.lang.String> getSchemas();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#schemas IdentityDomainsSelfRegistrationProfile#schemas}.

---

##### `showOnLoginPage`<sup>Required</sup> <a name="showOnLoginPage" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.showOnLoginPage"></a>

```java
public java.lang.Object getShowOnLoginPage();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#show_on_login_page IdentityDomainsSelfRegistrationProfile#show_on_login_page}.

---

##### `active`<sup>Optional</sup> <a name="active" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.active"></a>

```java
public java.lang.Object getActive();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#active IdentityDomainsSelfRegistrationProfile#active}.

---

##### `afterSubmitText`<sup>Optional</sup> <a name="afterSubmitText" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.afterSubmitText"></a>

```java
public java.lang.Object getAfterSubmitText();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitText">IdentityDomainsSelfRegistrationProfileAfterSubmitText</a>>

after_submit_text block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#after_submit_text IdentityDomainsSelfRegistrationProfile#after_submit_text}

---

##### `allowedEmailDomains`<sup>Optional</sup> <a name="allowedEmailDomains" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.allowedEmailDomains"></a>

```java
public java.util.List<java.lang.String> getAllowedEmailDomains();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#allowed_email_domains IdentityDomainsSelfRegistrationProfile#allowed_email_domains}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.attributes"></a>

```java
public java.lang.String getAttributes();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#attributes IdentityDomainsSelfRegistrationProfile#attributes}.

---

##### `attributeSets`<sup>Optional</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.attributeSets"></a>

```java
public java.util.List<java.lang.String> getAttributeSets();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#attribute_sets IdentityDomainsSelfRegistrationProfile#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.authorization"></a>

```java
public java.lang.String getAuthorization();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#authorization IdentityDomainsSelfRegistrationProfile#authorization}.

---

##### `consentText`<sup>Optional</sup> <a name="consentText" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.consentText"></a>

```java
public java.lang.Object getConsentText();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentText">IdentityDomainsSelfRegistrationProfileConsentText</a>>

consent_text block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#consent_text IdentityDomainsSelfRegistrationProfile#consent_text}

---

##### `defaultGroups`<sup>Optional</sup> <a name="defaultGroups" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.defaultGroups"></a>

```java
public java.lang.Object getDefaultGroups();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroups">IdentityDomainsSelfRegistrationProfileDefaultGroups</a>>

default_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#default_groups IdentityDomainsSelfRegistrationProfile#default_groups}

---

##### `disallowedEmailDomains`<sup>Optional</sup> <a name="disallowedEmailDomains" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.disallowedEmailDomains"></a>

```java
public java.util.List<java.lang.String> getDisallowedEmailDomains();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#disallowed_email_domains IdentityDomainsSelfRegistrationProfile#disallowed_email_domains}.

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#external_id IdentityDomainsSelfRegistrationProfile#external_id}.

---

##### `footerLogo`<sup>Optional</sup> <a name="footerLogo" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.footerLogo"></a>

```java
public java.lang.String getFooterLogo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#footer_logo IdentityDomainsSelfRegistrationProfile#footer_logo}.

---

##### `footerText`<sup>Optional</sup> <a name="footerText" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.footerText"></a>

```java
public java.lang.Object getFooterText();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterText">IdentityDomainsSelfRegistrationProfileFooterText</a>>

footer_text block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#footer_text IdentityDomainsSelfRegistrationProfile#footer_text}

---

##### `headerLogo`<sup>Optional</sup> <a name="headerLogo" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.headerLogo"></a>

```java
public java.lang.String getHeaderLogo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#header_logo IdentityDomainsSelfRegistrationProfile#header_logo}.

---

##### `headerText`<sup>Optional</sup> <a name="headerText" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.headerText"></a>

```java
public java.lang.Object getHeaderText();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderText">IdentityDomainsSelfRegistrationProfileHeaderText</a>>

header_text block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#header_text IdentityDomainsSelfRegistrationProfile#header_text}

---

##### `ocid`<sup>Optional</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#ocid IdentityDomainsSelfRegistrationProfile#ocid}.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.resourceTypeSchemaVersion"></a>

```java
public java.lang.String getResourceTypeSchemaVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#resource_type_schema_version IdentityDomainsSelfRegistrationProfile#resource_type_schema_version}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.tags"></a>

```java
public java.lang.Object getTags();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTags">IdentityDomainsSelfRegistrationProfileTags</a>>

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#tags IdentityDomainsSelfRegistrationProfile#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.timeouts"></a>

```java
public IdentityDomainsSelfRegistrationProfileTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeouts">IdentityDomainsSelfRegistrationProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#timeouts IdentityDomainsSelfRegistrationProfile#timeouts}

---

##### `userAttributes`<sup>Optional</sup> <a name="userAttributes" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.userAttributes"></a>

```java
public java.lang.Object getUserAttributes();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributes">IdentityDomainsSelfRegistrationProfileUserAttributes</a>>

user_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#user_attributes IdentityDomainsSelfRegistrationProfile#user_attributes}

---

### IdentityDomainsSelfRegistrationProfileConsentText <a name="IdentityDomainsSelfRegistrationProfileConsentText" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentText"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentText.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_self_registration_profile.IdentityDomainsSelfRegistrationProfileConsentText;

IdentityDomainsSelfRegistrationProfileConsentText.builder()
    .locale(java.lang.String)
    .value(java.lang.String)
//  .default(java.lang.Boolean)
//  .default(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentText.property.locale">locale</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#locale IdentityDomainsSelfRegistrationProfile#locale}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentText.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#value IdentityDomainsSelfRegistrationProfile#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentText.property.default">default</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#default IdentityDomainsSelfRegistrationProfile#default}. |

---

##### `locale`<sup>Required</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentText.property.locale"></a>

```java
public java.lang.String getLocale();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#locale IdentityDomainsSelfRegistrationProfile#locale}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentText.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#value IdentityDomainsSelfRegistrationProfile#value}.

---

##### `default`<sup>Optional</sup> <a name="default" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentText.property.default"></a>

```java
public java.lang.Object getDefault();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#default IdentityDomainsSelfRegistrationProfile#default}.

---

### IdentityDomainsSelfRegistrationProfileDefaultGroups <a name="IdentityDomainsSelfRegistrationProfileDefaultGroups" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroups.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_self_registration_profile.IdentityDomainsSelfRegistrationProfileDefaultGroups;

IdentityDomainsSelfRegistrationProfileDefaultGroups.builder()
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroups.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#value IdentityDomainsSelfRegistrationProfile#value}. |

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroups.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#value IdentityDomainsSelfRegistrationProfile#value}.

---

### IdentityDomainsSelfRegistrationProfileDisplayName <a name="IdentityDomainsSelfRegistrationProfileDisplayName" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayName"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayName.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_self_registration_profile.IdentityDomainsSelfRegistrationProfileDisplayName;

IdentityDomainsSelfRegistrationProfileDisplayName.builder()
    .locale(java.lang.String)
    .value(java.lang.String)
//  .default(java.lang.Boolean)
//  .default(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayName.property.locale">locale</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#locale IdentityDomainsSelfRegistrationProfile#locale}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayName.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#value IdentityDomainsSelfRegistrationProfile#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayName.property.default">default</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#default IdentityDomainsSelfRegistrationProfile#default}. |

---

##### `locale`<sup>Required</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayName.property.locale"></a>

```java
public java.lang.String getLocale();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#locale IdentityDomainsSelfRegistrationProfile#locale}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayName.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#value IdentityDomainsSelfRegistrationProfile#value}.

---

##### `default`<sup>Optional</sup> <a name="default" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayName.property.default"></a>

```java
public java.lang.Object getDefault();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#default IdentityDomainsSelfRegistrationProfile#default}.

---

### IdentityDomainsSelfRegistrationProfileEmailTemplate <a name="IdentityDomainsSelfRegistrationProfileEmailTemplate" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplate"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_self_registration_profile.IdentityDomainsSelfRegistrationProfileEmailTemplate;

IdentityDomainsSelfRegistrationProfileEmailTemplate.builder()
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplate.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#value IdentityDomainsSelfRegistrationProfile#value}. |

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplate.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#value IdentityDomainsSelfRegistrationProfile#value}.

---

### IdentityDomainsSelfRegistrationProfileFooterText <a name="IdentityDomainsSelfRegistrationProfileFooterText" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterText"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterText.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_self_registration_profile.IdentityDomainsSelfRegistrationProfileFooterText;

IdentityDomainsSelfRegistrationProfileFooterText.builder()
    .locale(java.lang.String)
    .value(java.lang.String)
//  .default(java.lang.Boolean)
//  .default(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterText.property.locale">locale</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#locale IdentityDomainsSelfRegistrationProfile#locale}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterText.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#value IdentityDomainsSelfRegistrationProfile#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterText.property.default">default</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#default IdentityDomainsSelfRegistrationProfile#default}. |

---

##### `locale`<sup>Required</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterText.property.locale"></a>

```java
public java.lang.String getLocale();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#locale IdentityDomainsSelfRegistrationProfile#locale}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterText.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#value IdentityDomainsSelfRegistrationProfile#value}.

---

##### `default`<sup>Optional</sup> <a name="default" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterText.property.default"></a>

```java
public java.lang.Object getDefault();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#default IdentityDomainsSelfRegistrationProfile#default}.

---

### IdentityDomainsSelfRegistrationProfileHeaderText <a name="IdentityDomainsSelfRegistrationProfileHeaderText" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderText"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderText.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_self_registration_profile.IdentityDomainsSelfRegistrationProfileHeaderText;

IdentityDomainsSelfRegistrationProfileHeaderText.builder()
    .locale(java.lang.String)
    .value(java.lang.String)
//  .default(java.lang.Boolean)
//  .default(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderText.property.locale">locale</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#locale IdentityDomainsSelfRegistrationProfile#locale}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderText.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#value IdentityDomainsSelfRegistrationProfile#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderText.property.default">default</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#default IdentityDomainsSelfRegistrationProfile#default}. |

---

##### `locale`<sup>Required</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderText.property.locale"></a>

```java
public java.lang.String getLocale();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#locale IdentityDomainsSelfRegistrationProfile#locale}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderText.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#value IdentityDomainsSelfRegistrationProfile#value}.

---

##### `default`<sup>Optional</sup> <a name="default" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderText.property.default"></a>

```java
public java.lang.Object getDefault();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#default IdentityDomainsSelfRegistrationProfile#default}.

---

### IdentityDomainsSelfRegistrationProfileIdcsCreatedBy <a name="IdentityDomainsSelfRegistrationProfileIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedBy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_self_registration_profile.IdentityDomainsSelfRegistrationProfileIdcsCreatedBy;

IdentityDomainsSelfRegistrationProfileIdcsCreatedBy.builder()
    .build();
```


### IdentityDomainsSelfRegistrationProfileIdcsLastModifiedBy <a name="IdentityDomainsSelfRegistrationProfileIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedBy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_self_registration_profile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedBy;

IdentityDomainsSelfRegistrationProfileIdcsLastModifiedBy.builder()
    .build();
```


### IdentityDomainsSelfRegistrationProfileMeta <a name="IdentityDomainsSelfRegistrationProfileMeta" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMeta.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_self_registration_profile.IdentityDomainsSelfRegistrationProfileMeta;

IdentityDomainsSelfRegistrationProfileMeta.builder()
    .build();
```


### IdentityDomainsSelfRegistrationProfileTags <a name="IdentityDomainsSelfRegistrationProfileTags" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_self_registration_profile.IdentityDomainsSelfRegistrationProfileTags;

IdentityDomainsSelfRegistrationProfileTags.builder()
    .key(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#key IdentityDomainsSelfRegistrationProfile#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#value IdentityDomainsSelfRegistrationProfile#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#key IdentityDomainsSelfRegistrationProfile#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#value IdentityDomainsSelfRegistrationProfile#value}.

---

### IdentityDomainsSelfRegistrationProfileTimeouts <a name="IdentityDomainsSelfRegistrationProfileTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_self_registration_profile.IdentityDomainsSelfRegistrationProfileTimeouts;

IdentityDomainsSelfRegistrationProfileTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#create IdentityDomainsSelfRegistrationProfile#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#delete IdentityDomainsSelfRegistrationProfile#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#update IdentityDomainsSelfRegistrationProfile#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#create IdentityDomainsSelfRegistrationProfile#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#delete IdentityDomainsSelfRegistrationProfile#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#update IdentityDomainsSelfRegistrationProfile#update}.

---

### IdentityDomainsSelfRegistrationProfileUserAttributes <a name="IdentityDomainsSelfRegistrationProfileUserAttributes" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_self_registration_profile.IdentityDomainsSelfRegistrationProfileUserAttributes;

IdentityDomainsSelfRegistrationProfileUserAttributes.builder()
    .seqNumber(java.lang.Number)
    .value(java.lang.String)
//  .fullyQualifiedAttributeName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributes.property.seqNumber">seqNumber</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#seq_number IdentityDomainsSelfRegistrationProfile#seq_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributes.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#value IdentityDomainsSelfRegistrationProfile#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributes.property.fullyQualifiedAttributeName">fullyQualifiedAttributeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#fully_qualified_attribute_name IdentityDomainsSelfRegistrationProfile#fully_qualified_attribute_name}. |

---

##### `seqNumber`<sup>Required</sup> <a name="seqNumber" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributes.property.seqNumber"></a>

```java
public java.lang.Number getSeqNumber();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#seq_number IdentityDomainsSelfRegistrationProfile#seq_number}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributes.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#value IdentityDomainsSelfRegistrationProfile#value}.

---

##### `fullyQualifiedAttributeName`<sup>Optional</sup> <a name="fullyQualifiedAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributes.property.fullyQualifiedAttributeName"></a>

```java
public java.lang.String getFullyQualifiedAttributeName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#fully_qualified_attribute_name IdentityDomainsSelfRegistrationProfile#fully_qualified_attribute_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityDomainsSelfRegistrationProfileAfterSubmitTextList <a name="IdentityDomainsSelfRegistrationProfileAfterSubmitTextList" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_self_registration_profile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList;

new IdentityDomainsSelfRegistrationProfileAfterSubmitTextList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.get"></a>

```java
public IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitText">IdentityDomainsSelfRegistrationProfileAfterSubmitText</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitText">IdentityDomainsSelfRegistrationProfileAfterSubmitText</a>>

---


### IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference <a name="IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_self_registration_profile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference;

new IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.resetDefault">resetDefault</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefault` <a name="resetDefault" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.resetDefault"></a>

```java
public void resetDefault()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.defaultInput">defaultInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.localeInput">localeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.default">default</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.locale">locale</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitText">IdentityDomainsSelfRegistrationProfileAfterSubmitText</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.defaultInput"></a>

```java
public java.lang.Object getDefaultInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `localeInput`<sup>Optional</sup> <a name="localeInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.localeInput"></a>

```java
public java.lang.String getLocaleInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.default"></a>

```java
public java.lang.Object getDefault();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `locale`<sup>Required</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.locale"></a>

```java
public java.lang.String getLocale();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitText">IdentityDomainsSelfRegistrationProfileAfterSubmitText</a>

---


### IdentityDomainsSelfRegistrationProfileConsentTextList <a name="IdentityDomainsSelfRegistrationProfileConsentTextList" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_self_registration_profile.IdentityDomainsSelfRegistrationProfileConsentTextList;

new IdentityDomainsSelfRegistrationProfileConsentTextList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.get"></a>

```java
public IdentityDomainsSelfRegistrationProfileConsentTextOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentText">IdentityDomainsSelfRegistrationProfileConsentText</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentText">IdentityDomainsSelfRegistrationProfileConsentText</a>>

---


### IdentityDomainsSelfRegistrationProfileConsentTextOutputReference <a name="IdentityDomainsSelfRegistrationProfileConsentTextOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_self_registration_profile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference;

new IdentityDomainsSelfRegistrationProfileConsentTextOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.resetDefault">resetDefault</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefault` <a name="resetDefault" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.resetDefault"></a>

```java
public void resetDefault()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.defaultInput">defaultInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.localeInput">localeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.default">default</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.locale">locale</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentText">IdentityDomainsSelfRegistrationProfileConsentText</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.defaultInput"></a>

```java
public java.lang.Object getDefaultInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `localeInput`<sup>Optional</sup> <a name="localeInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.localeInput"></a>

```java
public java.lang.String getLocaleInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.default"></a>

```java
public java.lang.Object getDefault();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `locale`<sup>Required</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.locale"></a>

```java
public java.lang.String getLocale();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentText">IdentityDomainsSelfRegistrationProfileConsentText</a>

---


### IdentityDomainsSelfRegistrationProfileDefaultGroupsList <a name="IdentityDomainsSelfRegistrationProfileDefaultGroupsList" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_self_registration_profile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList;

new IdentityDomainsSelfRegistrationProfileDefaultGroupsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.get"></a>

```java
public IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroups">IdentityDomainsSelfRegistrationProfileDefaultGroups</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroups">IdentityDomainsSelfRegistrationProfileDefaultGroups</a>>

---


### IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference <a name="IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_self_registration_profile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference;

new IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.display">display</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroups">IdentityDomainsSelfRegistrationProfileDefaultGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.display"></a>

```java
public java.lang.String getDisplay();
```

- *Type:* java.lang.String

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroups">IdentityDomainsSelfRegistrationProfileDefaultGroups</a>

---


### IdentityDomainsSelfRegistrationProfileDisplayNameList <a name="IdentityDomainsSelfRegistrationProfileDisplayNameList" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_self_registration_profile.IdentityDomainsSelfRegistrationProfileDisplayNameList;

new IdentityDomainsSelfRegistrationProfileDisplayNameList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.get"></a>

```java
public IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayName">IdentityDomainsSelfRegistrationProfileDisplayName</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayName">IdentityDomainsSelfRegistrationProfileDisplayName</a>>

---


### IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference <a name="IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_self_registration_profile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference;

new IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.resetDefault">resetDefault</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefault` <a name="resetDefault" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.resetDefault"></a>

```java
public void resetDefault()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.defaultInput">defaultInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.localeInput">localeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.default">default</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.locale">locale</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayName">IdentityDomainsSelfRegistrationProfileDisplayName</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.defaultInput"></a>

```java
public java.lang.Object getDefaultInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `localeInput`<sup>Optional</sup> <a name="localeInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.localeInput"></a>

```java
public java.lang.String getLocaleInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.default"></a>

```java
public java.lang.Object getDefault();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `locale`<sup>Required</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.locale"></a>

```java
public java.lang.String getLocale();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayName">IdentityDomainsSelfRegistrationProfileDisplayName</a>

---


### IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference <a name="IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_self_registration_profile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference;

new IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.display">display</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplate">IdentityDomainsSelfRegistrationProfileEmailTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.display"></a>

```java
public java.lang.String getDisplay();
```

- *Type:* java.lang.String

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.internalValue"></a>

```java
public IdentityDomainsSelfRegistrationProfileEmailTemplate getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplate">IdentityDomainsSelfRegistrationProfileEmailTemplate</a>

---


### IdentityDomainsSelfRegistrationProfileFooterTextList <a name="IdentityDomainsSelfRegistrationProfileFooterTextList" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_self_registration_profile.IdentityDomainsSelfRegistrationProfileFooterTextList;

new IdentityDomainsSelfRegistrationProfileFooterTextList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.get"></a>

```java
public IdentityDomainsSelfRegistrationProfileFooterTextOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterText">IdentityDomainsSelfRegistrationProfileFooterText</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterText">IdentityDomainsSelfRegistrationProfileFooterText</a>>

---


### IdentityDomainsSelfRegistrationProfileFooterTextOutputReference <a name="IdentityDomainsSelfRegistrationProfileFooterTextOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_self_registration_profile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference;

new IdentityDomainsSelfRegistrationProfileFooterTextOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.resetDefault">resetDefault</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefault` <a name="resetDefault" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.resetDefault"></a>

```java
public void resetDefault()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.defaultInput">defaultInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.localeInput">localeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.default">default</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.locale">locale</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterText">IdentityDomainsSelfRegistrationProfileFooterText</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.defaultInput"></a>

```java
public java.lang.Object getDefaultInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `localeInput`<sup>Optional</sup> <a name="localeInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.localeInput"></a>

```java
public java.lang.String getLocaleInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.default"></a>

```java
public java.lang.Object getDefault();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `locale`<sup>Required</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.locale"></a>

```java
public java.lang.String getLocale();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterText">IdentityDomainsSelfRegistrationProfileFooterText</a>

---


### IdentityDomainsSelfRegistrationProfileHeaderTextList <a name="IdentityDomainsSelfRegistrationProfileHeaderTextList" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_self_registration_profile.IdentityDomainsSelfRegistrationProfileHeaderTextList;

new IdentityDomainsSelfRegistrationProfileHeaderTextList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.get"></a>

```java
public IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderText">IdentityDomainsSelfRegistrationProfileHeaderText</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderText">IdentityDomainsSelfRegistrationProfileHeaderText</a>>

---


### IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference <a name="IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_self_registration_profile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference;

new IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.resetDefault">resetDefault</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefault` <a name="resetDefault" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.resetDefault"></a>

```java
public void resetDefault()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.defaultInput">defaultInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.localeInput">localeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.default">default</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.locale">locale</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderText">IdentityDomainsSelfRegistrationProfileHeaderText</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.defaultInput"></a>

```java
public java.lang.Object getDefaultInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `localeInput`<sup>Optional</sup> <a name="localeInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.localeInput"></a>

```java
public java.lang.String getLocaleInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.default"></a>

```java
public java.lang.Object getDefault();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `locale`<sup>Required</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.locale"></a>

```java
public java.lang.String getLocale();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderText">IdentityDomainsSelfRegistrationProfileHeaderText</a>

---


### IdentityDomainsSelfRegistrationProfileIdcsCreatedByList <a name="IdentityDomainsSelfRegistrationProfileIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_self_registration_profile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList;

new IdentityDomainsSelfRegistrationProfileIdcsCreatedByList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.get"></a>

```java
public IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference <a name="IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_self_registration_profile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference;

new IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.display">display</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedBy">IdentityDomainsSelfRegistrationProfileIdcsCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.display"></a>

```java
public java.lang.String getDisplay();
```

- *Type:* java.lang.String

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.internalValue"></a>

```java
public IdentityDomainsSelfRegistrationProfileIdcsCreatedBy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedBy">IdentityDomainsSelfRegistrationProfileIdcsCreatedBy</a>

---


### IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList <a name="IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_self_registration_profile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList;

new IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.get"></a>

```java
public IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference <a name="IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_self_registration_profile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference;

new IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedBy">IdentityDomainsSelfRegistrationProfileIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.display"></a>

```java
public java.lang.String getDisplay();
```

- *Type:* java.lang.String

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.internalValue"></a>

```java
public IdentityDomainsSelfRegistrationProfileIdcsLastModifiedBy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedBy">IdentityDomainsSelfRegistrationProfileIdcsLastModifiedBy</a>

---


### IdentityDomainsSelfRegistrationProfileMetaList <a name="IdentityDomainsSelfRegistrationProfileMetaList" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_self_registration_profile.IdentityDomainsSelfRegistrationProfileMetaList;

new IdentityDomainsSelfRegistrationProfileMetaList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.get"></a>

```java
public IdentityDomainsSelfRegistrationProfileMetaOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### IdentityDomainsSelfRegistrationProfileMetaOutputReference <a name="IdentityDomainsSelfRegistrationProfileMetaOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_self_registration_profile.IdentityDomainsSelfRegistrationProfileMetaOutputReference;

new IdentityDomainsSelfRegistrationProfileMetaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.property.created">created</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.property.lastModified">lastModified</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMeta">IdentityDomainsSelfRegistrationProfileMeta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.property.created"></a>

```java
public java.lang.String getCreated();
```

- *Type:* java.lang.String

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.property.lastModified"></a>

```java
public java.lang.String getLastModified();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.property.internalValue"></a>

```java
public IdentityDomainsSelfRegistrationProfileMeta getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMeta">IdentityDomainsSelfRegistrationProfileMeta</a>

---


### IdentityDomainsSelfRegistrationProfileTagsList <a name="IdentityDomainsSelfRegistrationProfileTagsList" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_self_registration_profile.IdentityDomainsSelfRegistrationProfileTagsList;

new IdentityDomainsSelfRegistrationProfileTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.get"></a>

```java
public IdentityDomainsSelfRegistrationProfileTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTags">IdentityDomainsSelfRegistrationProfileTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTags">IdentityDomainsSelfRegistrationProfileTags</a>>

---


### IdentityDomainsSelfRegistrationProfileTagsOutputReference <a name="IdentityDomainsSelfRegistrationProfileTagsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_self_registration_profile.IdentityDomainsSelfRegistrationProfileTagsOutputReference;

new IdentityDomainsSelfRegistrationProfileTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTags">IdentityDomainsSelfRegistrationProfileTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTags">IdentityDomainsSelfRegistrationProfileTags</a>

---


### IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference <a name="IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_self_registration_profile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference;

new IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeouts">IdentityDomainsSelfRegistrationProfileTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeouts">IdentityDomainsSelfRegistrationProfileTimeouts</a>

---


### IdentityDomainsSelfRegistrationProfileUserAttributesList <a name="IdentityDomainsSelfRegistrationProfileUserAttributesList" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_self_registration_profile.IdentityDomainsSelfRegistrationProfileUserAttributesList;

new IdentityDomainsSelfRegistrationProfileUserAttributesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.get"></a>

```java
public IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributes">IdentityDomainsSelfRegistrationProfileUserAttributes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributes">IdentityDomainsSelfRegistrationProfileUserAttributes</a>>

---


### IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference <a name="IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_self_registration_profile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference;

new IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.resetFullyQualifiedAttributeName">resetFullyQualifiedAttributeName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFullyQualifiedAttributeName` <a name="resetFullyQualifiedAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.resetFullyQualifiedAttributeName"></a>

```java
public void resetFullyQualifiedAttributeName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.deletable">deletable</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.metadata">metadata</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.fullyQualifiedAttributeNameInput">fullyQualifiedAttributeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.seqNumberInput">seqNumberInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.fullyQualifiedAttributeName">fullyQualifiedAttributeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.seqNumber">seqNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributes">IdentityDomainsSelfRegistrationProfileUserAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deletable`<sup>Required</sup> <a name="deletable" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.deletable"></a>

```java
public IResolvable getDeletable();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.metadata"></a>

```java
public java.lang.String getMetadata();
```

- *Type:* java.lang.String

---

##### `fullyQualifiedAttributeNameInput`<sup>Optional</sup> <a name="fullyQualifiedAttributeNameInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.fullyQualifiedAttributeNameInput"></a>

```java
public java.lang.String getFullyQualifiedAttributeNameInput();
```

- *Type:* java.lang.String

---

##### `seqNumberInput`<sup>Optional</sup> <a name="seqNumberInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.seqNumberInput"></a>

```java
public java.lang.Number getSeqNumberInput();
```

- *Type:* java.lang.Number

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `fullyQualifiedAttributeName`<sup>Required</sup> <a name="fullyQualifiedAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.fullyQualifiedAttributeName"></a>

```java
public java.lang.String getFullyQualifiedAttributeName();
```

- *Type:* java.lang.String

---

##### `seqNumber`<sup>Required</sup> <a name="seqNumber" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.seqNumber"></a>

```java
public java.lang.Number getSeqNumber();
```

- *Type:* java.lang.Number

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributes">IdentityDomainsSelfRegistrationProfileUserAttributes</a>

---



