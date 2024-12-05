# `identityDomainsSocialIdentityProvider` Submodule <a name="`identityDomainsSocialIdentityProvider` Submodule" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityDomainsSocialIdentityProvider <a name="IdentityDomainsSocialIdentityProvider" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider oci_identity_domains_social_identity_provider}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_social_identity_provider.IdentityDomainsSocialIdentityProvider;

IdentityDomainsSocialIdentityProvider.Builder.create(Construct scope, java.lang.String id)
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
    .accountLinkingEnabled(java.lang.Boolean)
    .accountLinkingEnabled(IResolvable)
    .consumerKey(java.lang.String)
    .consumerSecret(java.lang.String)
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
    .idcsEndpoint(java.lang.String)
    .name(java.lang.String)
    .registrationEnabled(java.lang.Boolean)
    .registrationEnabled(IResolvable)
    .schemas(java.util.List<java.lang.String>)
    .serviceProviderName(java.lang.String)
    .showOnLogin(java.lang.Boolean)
    .showOnLogin(IResolvable)
//  .accessTokenUrl(java.lang.String)
//  .adminScope(java.util.List<java.lang.String>)
//  .authorization(java.lang.String)
//  .authzUrl(java.lang.String)
//  .autoRedirectEnabled(java.lang.Boolean)
//  .autoRedirectEnabled(IResolvable)
//  .clientCredentialInPayload(java.lang.Boolean)
//  .clientCredentialInPayload(IResolvable)
//  .clockSkewInSeconds(java.lang.Number)
//  .description(java.lang.String)
//  .discoveryUrl(java.lang.String)
//  .iconUrl(java.lang.String)
//  .id(java.lang.String)
//  .idAttribute(java.lang.String)
//  .jitProvAssignedGroups(IResolvable)
//  .jitProvAssignedGroups(java.util.List<IdentityDomainsSocialIdentityProviderJitProvAssignedGroups>)
//  .jitProvGroupStaticListEnabled(java.lang.Boolean)
//  .jitProvGroupStaticListEnabled(IResolvable)
//  .ocid(java.lang.String)
//  .profileUrl(java.lang.String)
//  .redirectUrl(java.lang.String)
//  .refreshTokenUrl(java.lang.String)
//  .relayIdpParamMappings(IResolvable)
//  .relayIdpParamMappings(java.util.List<IdentityDomainsSocialIdentityProviderRelayIdpParamMappings>)
//  .resourceTypeSchemaVersion(java.lang.String)
//  .scope(java.util.List<java.lang.String>)
//  .socialJitProvisioningEnabled(java.lang.Boolean)
//  .socialJitProvisioningEnabled(IResolvable)
//  .status(java.lang.String)
//  .tags(IResolvable)
//  .tags(java.util.List<IdentityDomainsSocialIdentityProviderTags>)
//  .timeouts(IdentityDomainsSocialIdentityProviderTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.accountLinkingEnabled">accountLinkingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#account_linking_enabled IdentityDomainsSocialIdentityProvider#account_linking_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.consumerKey">consumerKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#consumer_key IdentityDomainsSocialIdentityProvider#consumer_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.consumerSecret">consumerSecret</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#consumer_secret IdentityDomainsSocialIdentityProvider#consumer_secret}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#enabled IdentityDomainsSocialIdentityProvider#enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.idcsEndpoint">idcsEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#idcs_endpoint IdentityDomainsSocialIdentityProvider#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#name IdentityDomainsSocialIdentityProvider#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.registrationEnabled">registrationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#registration_enabled IdentityDomainsSocialIdentityProvider#registration_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.schemas">schemas</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#schemas IdentityDomainsSocialIdentityProvider#schemas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.serviceProviderName">serviceProviderName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#service_provider_name IdentityDomainsSocialIdentityProvider#service_provider_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.showOnLogin">showOnLogin</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#show_on_login IdentityDomainsSocialIdentityProvider#show_on_login}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.accessTokenUrl">accessTokenUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#access_token_url IdentityDomainsSocialIdentityProvider#access_token_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.adminScope">adminScope</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#admin_scope IdentityDomainsSocialIdentityProvider#admin_scope}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.authorization">authorization</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#authorization IdentityDomainsSocialIdentityProvider#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.authzUrl">authzUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#authz_url IdentityDomainsSocialIdentityProvider#authz_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.autoRedirectEnabled">autoRedirectEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#auto_redirect_enabled IdentityDomainsSocialIdentityProvider#auto_redirect_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.clientCredentialInPayload">clientCredentialInPayload</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#client_credential_in_payload IdentityDomainsSocialIdentityProvider#client_credential_in_payload}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.clockSkewInSeconds">clockSkewInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#clock_skew_in_seconds IdentityDomainsSocialIdentityProvider#clock_skew_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#description IdentityDomainsSocialIdentityProvider#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.discoveryUrl">discoveryUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#discovery_url IdentityDomainsSocialIdentityProvider#discovery_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.iconUrl">iconUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#icon_url IdentityDomainsSocialIdentityProvider#icon_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#id IdentityDomainsSocialIdentityProvider#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.idAttribute">idAttribute</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#id_attribute IdentityDomainsSocialIdentityProvider#id_attribute}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.jitProvAssignedGroups">jitProvAssignedGroups</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroups">IdentityDomainsSocialIdentityProviderJitProvAssignedGroups</a>></code> | jit_prov_assigned_groups block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.jitProvGroupStaticListEnabled">jitProvGroupStaticListEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#jit_prov_group_static_list_enabled IdentityDomainsSocialIdentityProvider#jit_prov_group_static_list_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.ocid">ocid</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#ocid IdentityDomainsSocialIdentityProvider#ocid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.profileUrl">profileUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#profile_url IdentityDomainsSocialIdentityProvider#profile_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.redirectUrl">redirectUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#redirect_url IdentityDomainsSocialIdentityProvider#redirect_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.refreshTokenUrl">refreshTokenUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#refresh_token_url IdentityDomainsSocialIdentityProvider#refresh_token_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.relayIdpParamMappings">relayIdpParamMappings</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappings">IdentityDomainsSocialIdentityProviderRelayIdpParamMappings</a>></code> | relay_idp_param_mappings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#resource_type_schema_version IdentityDomainsSocialIdentityProvider#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.scope">scope</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#scope IdentityDomainsSocialIdentityProvider#scope}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.socialJitProvisioningEnabled">socialJitProvisioningEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#social_jit_provisioning_enabled IdentityDomainsSocialIdentityProvider#social_jit_provisioning_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#status IdentityDomainsSocialIdentityProvider#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.tags">tags</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTags">IdentityDomainsSocialIdentityProviderTags</a>></code> | tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeouts">IdentityDomainsSocialIdentityProviderTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountLinkingEnabled`<sup>Required</sup> <a name="accountLinkingEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.accountLinkingEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#account_linking_enabled IdentityDomainsSocialIdentityProvider#account_linking_enabled}.

---

##### `consumerKey`<sup>Required</sup> <a name="consumerKey" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.consumerKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#consumer_key IdentityDomainsSocialIdentityProvider#consumer_key}.

---

##### `consumerSecret`<sup>Required</sup> <a name="consumerSecret" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.consumerSecret"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#consumer_secret IdentityDomainsSocialIdentityProvider#consumer_secret}.

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#enabled IdentityDomainsSocialIdentityProvider#enabled}.

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.idcsEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#idcs_endpoint IdentityDomainsSocialIdentityProvider#idcs_endpoint}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#name IdentityDomainsSocialIdentityProvider#name}.

---

##### `registrationEnabled`<sup>Required</sup> <a name="registrationEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.registrationEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#registration_enabled IdentityDomainsSocialIdentityProvider#registration_enabled}.

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.schemas"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#schemas IdentityDomainsSocialIdentityProvider#schemas}.

---

##### `serviceProviderName`<sup>Required</sup> <a name="serviceProviderName" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.serviceProviderName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#service_provider_name IdentityDomainsSocialIdentityProvider#service_provider_name}.

---

##### `showOnLogin`<sup>Required</sup> <a name="showOnLogin" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.showOnLogin"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#show_on_login IdentityDomainsSocialIdentityProvider#show_on_login}.

---

##### `accessTokenUrl`<sup>Optional</sup> <a name="accessTokenUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.accessTokenUrl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#access_token_url IdentityDomainsSocialIdentityProvider#access_token_url}.

---

##### `adminScope`<sup>Optional</sup> <a name="adminScope" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.adminScope"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#admin_scope IdentityDomainsSocialIdentityProvider#admin_scope}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.authorization"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#authorization IdentityDomainsSocialIdentityProvider#authorization}.

---

##### `authzUrl`<sup>Optional</sup> <a name="authzUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.authzUrl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#authz_url IdentityDomainsSocialIdentityProvider#authz_url}.

---

##### `autoRedirectEnabled`<sup>Optional</sup> <a name="autoRedirectEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.autoRedirectEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#auto_redirect_enabled IdentityDomainsSocialIdentityProvider#auto_redirect_enabled}.

---

##### `clientCredentialInPayload`<sup>Optional</sup> <a name="clientCredentialInPayload" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.clientCredentialInPayload"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#client_credential_in_payload IdentityDomainsSocialIdentityProvider#client_credential_in_payload}.

---

##### `clockSkewInSeconds`<sup>Optional</sup> <a name="clockSkewInSeconds" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.clockSkewInSeconds"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#clock_skew_in_seconds IdentityDomainsSocialIdentityProvider#clock_skew_in_seconds}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#description IdentityDomainsSocialIdentityProvider#description}.

---

##### `discoveryUrl`<sup>Optional</sup> <a name="discoveryUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.discoveryUrl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#discovery_url IdentityDomainsSocialIdentityProvider#discovery_url}.

---

##### `iconUrl`<sup>Optional</sup> <a name="iconUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.iconUrl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#icon_url IdentityDomainsSocialIdentityProvider#icon_url}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#id IdentityDomainsSocialIdentityProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idAttribute`<sup>Optional</sup> <a name="idAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.idAttribute"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#id_attribute IdentityDomainsSocialIdentityProvider#id_attribute}.

---

##### `jitProvAssignedGroups`<sup>Optional</sup> <a name="jitProvAssignedGroups" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.jitProvAssignedGroups"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroups">IdentityDomainsSocialIdentityProviderJitProvAssignedGroups</a>>

jit_prov_assigned_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#jit_prov_assigned_groups IdentityDomainsSocialIdentityProvider#jit_prov_assigned_groups}

---

##### `jitProvGroupStaticListEnabled`<sup>Optional</sup> <a name="jitProvGroupStaticListEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.jitProvGroupStaticListEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#jit_prov_group_static_list_enabled IdentityDomainsSocialIdentityProvider#jit_prov_group_static_list_enabled}.

---

##### `ocid`<sup>Optional</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.ocid"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#ocid IdentityDomainsSocialIdentityProvider#ocid}.

---

##### `profileUrl`<sup>Optional</sup> <a name="profileUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.profileUrl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#profile_url IdentityDomainsSocialIdentityProvider#profile_url}.

---

##### `redirectUrl`<sup>Optional</sup> <a name="redirectUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.redirectUrl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#redirect_url IdentityDomainsSocialIdentityProvider#redirect_url}.

---

##### `refreshTokenUrl`<sup>Optional</sup> <a name="refreshTokenUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.refreshTokenUrl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#refresh_token_url IdentityDomainsSocialIdentityProvider#refresh_token_url}.

---

##### `relayIdpParamMappings`<sup>Optional</sup> <a name="relayIdpParamMappings" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.relayIdpParamMappings"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappings">IdentityDomainsSocialIdentityProviderRelayIdpParamMappings</a>>

relay_idp_param_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#relay_idp_param_mappings IdentityDomainsSocialIdentityProvider#relay_idp_param_mappings}

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.resourceTypeSchemaVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#resource_type_schema_version IdentityDomainsSocialIdentityProvider#resource_type_schema_version}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.scope"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#scope IdentityDomainsSocialIdentityProvider#scope}.

---

##### `socialJitProvisioningEnabled`<sup>Optional</sup> <a name="socialJitProvisioningEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.socialJitProvisioningEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#social_jit_provisioning_enabled IdentityDomainsSocialIdentityProvider#social_jit_provisioning_enabled}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#status IdentityDomainsSocialIdentityProvider#status}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.tags"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTags">IdentityDomainsSocialIdentityProviderTags</a>>

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#tags IdentityDomainsSocialIdentityProvider#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeouts">IdentityDomainsSocialIdentityProviderTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#timeouts IdentityDomainsSocialIdentityProvider#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.putJitProvAssignedGroups">putJitProvAssignedGroups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.putRelayIdpParamMappings">putRelayIdpParamMappings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.putTags">putTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetAccessTokenUrl">resetAccessTokenUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetAdminScope">resetAdminScope</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetAuthzUrl">resetAuthzUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetAutoRedirectEnabled">resetAutoRedirectEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetClientCredentialInPayload">resetClientCredentialInPayload</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetClockSkewInSeconds">resetClockSkewInSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetDiscoveryUrl">resetDiscoveryUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetIconUrl">resetIconUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetIdAttribute">resetIdAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetJitProvAssignedGroups">resetJitProvAssignedGroups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetJitProvGroupStaticListEnabled">resetJitProvGroupStaticListEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetOcid">resetOcid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetProfileUrl">resetProfileUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetRedirectUrl">resetRedirectUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetRefreshTokenUrl">resetRefreshTokenUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetRelayIdpParamMappings">resetRelayIdpParamMappings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetResourceTypeSchemaVersion">resetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetSocialJitProvisioningEnabled">resetSocialJitProvisioningEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putJitProvAssignedGroups` <a name="putJitProvAssignedGroups" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.putJitProvAssignedGroups"></a>

```java
public void putJitProvAssignedGroups(IResolvable OR java.util.List<IdentityDomainsSocialIdentityProviderJitProvAssignedGroups> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.putJitProvAssignedGroups.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroups">IdentityDomainsSocialIdentityProviderJitProvAssignedGroups</a>>

---

##### `putRelayIdpParamMappings` <a name="putRelayIdpParamMappings" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.putRelayIdpParamMappings"></a>

```java
public void putRelayIdpParamMappings(IResolvable OR java.util.List<IdentityDomainsSocialIdentityProviderRelayIdpParamMappings> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.putRelayIdpParamMappings.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappings">IdentityDomainsSocialIdentityProviderRelayIdpParamMappings</a>>

---

##### `putTags` <a name="putTags" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.putTags"></a>

```java
public void putTags(IResolvable OR java.util.List<IdentityDomainsSocialIdentityProviderTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.putTags.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTags">IdentityDomainsSocialIdentityProviderTags</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.putTimeouts"></a>

```java
public void putTimeouts(IdentityDomainsSocialIdentityProviderTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeouts">IdentityDomainsSocialIdentityProviderTimeouts</a>

---

##### `resetAccessTokenUrl` <a name="resetAccessTokenUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetAccessTokenUrl"></a>

```java
public void resetAccessTokenUrl()
```

##### `resetAdminScope` <a name="resetAdminScope" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetAdminScope"></a>

```java
public void resetAdminScope()
```

##### `resetAuthorization` <a name="resetAuthorization" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetAuthorization"></a>

```java
public void resetAuthorization()
```

##### `resetAuthzUrl` <a name="resetAuthzUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetAuthzUrl"></a>

```java
public void resetAuthzUrl()
```

##### `resetAutoRedirectEnabled` <a name="resetAutoRedirectEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetAutoRedirectEnabled"></a>

```java
public void resetAutoRedirectEnabled()
```

##### `resetClientCredentialInPayload` <a name="resetClientCredentialInPayload" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetClientCredentialInPayload"></a>

```java
public void resetClientCredentialInPayload()
```

##### `resetClockSkewInSeconds` <a name="resetClockSkewInSeconds" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetClockSkewInSeconds"></a>

```java
public void resetClockSkewInSeconds()
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDiscoveryUrl` <a name="resetDiscoveryUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetDiscoveryUrl"></a>

```java
public void resetDiscoveryUrl()
```

##### `resetIconUrl` <a name="resetIconUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetIconUrl"></a>

```java
public void resetIconUrl()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetId"></a>

```java
public void resetId()
```

##### `resetIdAttribute` <a name="resetIdAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetIdAttribute"></a>

```java
public void resetIdAttribute()
```

##### `resetJitProvAssignedGroups` <a name="resetJitProvAssignedGroups" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetJitProvAssignedGroups"></a>

```java
public void resetJitProvAssignedGroups()
```

##### `resetJitProvGroupStaticListEnabled` <a name="resetJitProvGroupStaticListEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetJitProvGroupStaticListEnabled"></a>

```java
public void resetJitProvGroupStaticListEnabled()
```

##### `resetOcid` <a name="resetOcid" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetOcid"></a>

```java
public void resetOcid()
```

##### `resetProfileUrl` <a name="resetProfileUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetProfileUrl"></a>

```java
public void resetProfileUrl()
```

##### `resetRedirectUrl` <a name="resetRedirectUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetRedirectUrl"></a>

```java
public void resetRedirectUrl()
```

##### `resetRefreshTokenUrl` <a name="resetRefreshTokenUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetRefreshTokenUrl"></a>

```java
public void resetRefreshTokenUrl()
```

##### `resetRelayIdpParamMappings` <a name="resetRelayIdpParamMappings" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetRelayIdpParamMappings"></a>

```java
public void resetRelayIdpParamMappings()
```

##### `resetResourceTypeSchemaVersion` <a name="resetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetResourceTypeSchemaVersion"></a>

```java
public void resetResourceTypeSchemaVersion()
```

##### `resetScope` <a name="resetScope" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetScope"></a>

```java
public void resetScope()
```

##### `resetSocialJitProvisioningEnabled` <a name="resetSocialJitProvisioningEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetSocialJitProvisioningEnabled"></a>

```java
public void resetSocialJitProvisioningEnabled()
```

##### `resetStatus` <a name="resetStatus" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetTags` <a name="resetTags" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityDomainsSocialIdentityProvider resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_social_identity_provider.IdentityDomainsSocialIdentityProvider;

IdentityDomainsSocialIdentityProvider.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_social_identity_provider.IdentityDomainsSocialIdentityProvider;

IdentityDomainsSocialIdentityProvider.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_social_identity_provider.IdentityDomainsSocialIdentityProvider;

IdentityDomainsSocialIdentityProvider.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_social_identity_provider.IdentityDomainsSocialIdentityProvider;

IdentityDomainsSocialIdentityProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IdentityDomainsSocialIdentityProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a IdentityDomainsSocialIdentityProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IdentityDomainsSocialIdentityProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IdentityDomainsSocialIdentityProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the IdentityDomainsSocialIdentityProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.compartmentOcid">compartmentOcid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.deleteInProgress">deleteInProgress</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.domainOcid">domainOcid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.idcsCreatedBy">idcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByList">IdentityDomainsSocialIdentityProviderIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.idcsLastModifiedBy">idcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByList">IdentityDomainsSocialIdentityProviderIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.idcsLastUpgradedInRelease">idcsLastUpgradedInRelease</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.idcsPreventedOperations">idcsPreventedOperations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.jitProvAssignedGroups">jitProvAssignedGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList">IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaList">IdentityDomainsSocialIdentityProviderMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.relayIdpParamMappings">relayIdpParamMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList">IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsList">IdentityDomainsSocialIdentityProviderTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.tenancyOcid">tenancyOcid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference">IdentityDomainsSocialIdentityProviderTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.accessTokenUrlInput">accessTokenUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.accountLinkingEnabledInput">accountLinkingEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.adminScopeInput">adminScopeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.authorizationInput">authorizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.authzUrlInput">authzUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.autoRedirectEnabledInput">autoRedirectEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.clientCredentialInPayloadInput">clientCredentialInPayloadInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.clockSkewInSecondsInput">clockSkewInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.consumerKeyInput">consumerKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.consumerSecretInput">consumerSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.discoveryUrlInput">discoveryUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.iconUrlInput">iconUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.idAttributeInput">idAttributeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.idcsEndpointInput">idcsEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.jitProvAssignedGroupsInput">jitProvAssignedGroupsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroups">IdentityDomainsSocialIdentityProviderJitProvAssignedGroups</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.jitProvGroupStaticListEnabledInput">jitProvGroupStaticListEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.ocidInput">ocidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.profileUrlInput">profileUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.redirectUrlInput">redirectUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.refreshTokenUrlInput">refreshTokenUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.registrationEnabledInput">registrationEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.relayIdpParamMappingsInput">relayIdpParamMappingsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappings">IdentityDomainsSocialIdentityProviderRelayIdpParamMappings</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.resourceTypeSchemaVersionInput">resourceTypeSchemaVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.schemasInput">schemasInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.scopeInput">scopeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.serviceProviderNameInput">serviceProviderNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.showOnLoginInput">showOnLoginInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.socialJitProvisioningEnabledInput">socialJitProvisioningEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.tagsInput">tagsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTags">IdentityDomainsSocialIdentityProviderTags</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeouts">IdentityDomainsSocialIdentityProviderTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.accessTokenUrl">accessTokenUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.accountLinkingEnabled">accountLinkingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.adminScope">adminScope</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.authorization">authorization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.authzUrl">authzUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.autoRedirectEnabled">autoRedirectEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.clientCredentialInPayload">clientCredentialInPayload</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.clockSkewInSeconds">clockSkewInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.consumerKey">consumerKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.consumerSecret">consumerSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.discoveryUrl">discoveryUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.iconUrl">iconUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.idAttribute">idAttribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.idcsEndpoint">idcsEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.jitProvGroupStaticListEnabled">jitProvGroupStaticListEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.profileUrl">profileUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.redirectUrl">redirectUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.refreshTokenUrl">refreshTokenUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.registrationEnabled">registrationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.schemas">schemas</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.scope">scope</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.serviceProviderName">serviceProviderName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.showOnLogin">showOnLogin</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.socialJitProvisioningEnabled">socialJitProvisioningEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentOcid`<sup>Required</sup> <a name="compartmentOcid" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.compartmentOcid"></a>

```java
public java.lang.String getCompartmentOcid();
```

- *Type:* java.lang.String

---

##### `deleteInProgress`<sup>Required</sup> <a name="deleteInProgress" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.deleteInProgress"></a>

```java
public IResolvable getDeleteInProgress();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `domainOcid`<sup>Required</sup> <a name="domainOcid" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.domainOcid"></a>

```java
public java.lang.String getDomainOcid();
```

- *Type:* java.lang.String

---

##### `idcsCreatedBy`<sup>Required</sup> <a name="idcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.idcsCreatedBy"></a>

```java
public IdentityDomainsSocialIdentityProviderIdcsCreatedByList getIdcsCreatedBy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByList">IdentityDomainsSocialIdentityProviderIdcsCreatedByList</a>

---

##### `idcsLastModifiedBy`<sup>Required</sup> <a name="idcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.idcsLastModifiedBy"></a>

```java
public IdentityDomainsSocialIdentityProviderIdcsLastModifiedByList getIdcsLastModifiedBy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByList">IdentityDomainsSocialIdentityProviderIdcsLastModifiedByList</a>

---

##### `idcsLastUpgradedInRelease`<sup>Required</sup> <a name="idcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.idcsLastUpgradedInRelease"></a>

```java
public java.lang.String getIdcsLastUpgradedInRelease();
```

- *Type:* java.lang.String

---

##### `idcsPreventedOperations`<sup>Required</sup> <a name="idcsPreventedOperations" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.idcsPreventedOperations"></a>

```java
public java.util.List<java.lang.String> getIdcsPreventedOperations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `jitProvAssignedGroups`<sup>Required</sup> <a name="jitProvAssignedGroups" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.jitProvAssignedGroups"></a>

```java
public IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList getJitProvAssignedGroups();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList">IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList</a>

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.meta"></a>

```java
public IdentityDomainsSocialIdentityProviderMetaList getMeta();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaList">IdentityDomainsSocialIdentityProviderMetaList</a>

---

##### `relayIdpParamMappings`<sup>Required</sup> <a name="relayIdpParamMappings" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.relayIdpParamMappings"></a>

```java
public IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList getRelayIdpParamMappings();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList">IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.tags"></a>

```java
public IdentityDomainsSocialIdentityProviderTagsList getTags();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsList">IdentityDomainsSocialIdentityProviderTagsList</a>

---

##### `tenancyOcid`<sup>Required</sup> <a name="tenancyOcid" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.tenancyOcid"></a>

```java
public java.lang.String getTenancyOcid();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.timeouts"></a>

```java
public IdentityDomainsSocialIdentityProviderTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference">IdentityDomainsSocialIdentityProviderTimeoutsOutputReference</a>

---

##### `accessTokenUrlInput`<sup>Optional</sup> <a name="accessTokenUrlInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.accessTokenUrlInput"></a>

```java
public java.lang.String getAccessTokenUrlInput();
```

- *Type:* java.lang.String

---

##### `accountLinkingEnabledInput`<sup>Optional</sup> <a name="accountLinkingEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.accountLinkingEnabledInput"></a>

```java
public java.lang.Object getAccountLinkingEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `adminScopeInput`<sup>Optional</sup> <a name="adminScopeInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.adminScopeInput"></a>

```java
public java.util.List<java.lang.String> getAdminScopeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.authorizationInput"></a>

```java
public java.lang.String getAuthorizationInput();
```

- *Type:* java.lang.String

---

##### `authzUrlInput`<sup>Optional</sup> <a name="authzUrlInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.authzUrlInput"></a>

```java
public java.lang.String getAuthzUrlInput();
```

- *Type:* java.lang.String

---

##### `autoRedirectEnabledInput`<sup>Optional</sup> <a name="autoRedirectEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.autoRedirectEnabledInput"></a>

```java
public java.lang.Object getAutoRedirectEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clientCredentialInPayloadInput`<sup>Optional</sup> <a name="clientCredentialInPayloadInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.clientCredentialInPayloadInput"></a>

```java
public java.lang.Object getClientCredentialInPayloadInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clockSkewInSecondsInput`<sup>Optional</sup> <a name="clockSkewInSecondsInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.clockSkewInSecondsInput"></a>

```java
public java.lang.Number getClockSkewInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `consumerKeyInput`<sup>Optional</sup> <a name="consumerKeyInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.consumerKeyInput"></a>

```java
public java.lang.String getConsumerKeyInput();
```

- *Type:* java.lang.String

---

##### `consumerSecretInput`<sup>Optional</sup> <a name="consumerSecretInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.consumerSecretInput"></a>

```java
public java.lang.String getConsumerSecretInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `discoveryUrlInput`<sup>Optional</sup> <a name="discoveryUrlInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.discoveryUrlInput"></a>

```java
public java.lang.String getDiscoveryUrlInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `iconUrlInput`<sup>Optional</sup> <a name="iconUrlInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.iconUrlInput"></a>

```java
public java.lang.String getIconUrlInput();
```

- *Type:* java.lang.String

---

##### `idAttributeInput`<sup>Optional</sup> <a name="idAttributeInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.idAttributeInput"></a>

```java
public java.lang.String getIdAttributeInput();
```

- *Type:* java.lang.String

---

##### `idcsEndpointInput`<sup>Optional</sup> <a name="idcsEndpointInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.idcsEndpointInput"></a>

```java
public java.lang.String getIdcsEndpointInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `jitProvAssignedGroupsInput`<sup>Optional</sup> <a name="jitProvAssignedGroupsInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.jitProvAssignedGroupsInput"></a>

```java
public java.lang.Object getJitProvAssignedGroupsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroups">IdentityDomainsSocialIdentityProviderJitProvAssignedGroups</a>>

---

##### `jitProvGroupStaticListEnabledInput`<sup>Optional</sup> <a name="jitProvGroupStaticListEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.jitProvGroupStaticListEnabledInput"></a>

```java
public java.lang.Object getJitProvGroupStaticListEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `ocidInput`<sup>Optional</sup> <a name="ocidInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.ocidInput"></a>

```java
public java.lang.String getOcidInput();
```

- *Type:* java.lang.String

---

##### `profileUrlInput`<sup>Optional</sup> <a name="profileUrlInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.profileUrlInput"></a>

```java
public java.lang.String getProfileUrlInput();
```

- *Type:* java.lang.String

---

##### `redirectUrlInput`<sup>Optional</sup> <a name="redirectUrlInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.redirectUrlInput"></a>

```java
public java.lang.String getRedirectUrlInput();
```

- *Type:* java.lang.String

---

##### `refreshTokenUrlInput`<sup>Optional</sup> <a name="refreshTokenUrlInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.refreshTokenUrlInput"></a>

```java
public java.lang.String getRefreshTokenUrlInput();
```

- *Type:* java.lang.String

---

##### `registrationEnabledInput`<sup>Optional</sup> <a name="registrationEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.registrationEnabledInput"></a>

```java
public java.lang.Object getRegistrationEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `relayIdpParamMappingsInput`<sup>Optional</sup> <a name="relayIdpParamMappingsInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.relayIdpParamMappingsInput"></a>

```java
public java.lang.Object getRelayIdpParamMappingsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappings">IdentityDomainsSocialIdentityProviderRelayIdpParamMappings</a>>

---

##### `resourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="resourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.resourceTypeSchemaVersionInput"></a>

```java
public java.lang.String getResourceTypeSchemaVersionInput();
```

- *Type:* java.lang.String

---

##### `schemasInput`<sup>Optional</sup> <a name="schemasInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.schemasInput"></a>

```java
public java.util.List<java.lang.String> getSchemasInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.scopeInput"></a>

```java
public java.util.List<java.lang.String> getScopeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceProviderNameInput`<sup>Optional</sup> <a name="serviceProviderNameInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.serviceProviderNameInput"></a>

```java
public java.lang.String getServiceProviderNameInput();
```

- *Type:* java.lang.String

---

##### `showOnLoginInput`<sup>Optional</sup> <a name="showOnLoginInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.showOnLoginInput"></a>

```java
public java.lang.Object getShowOnLoginInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `socialJitProvisioningEnabledInput`<sup>Optional</sup> <a name="socialJitProvisioningEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.socialJitProvisioningEnabledInput"></a>

```java
public java.lang.Object getSocialJitProvisioningEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.tagsInput"></a>

```java
public java.lang.Object getTagsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTags">IdentityDomainsSocialIdentityProviderTags</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeouts">IdentityDomainsSocialIdentityProviderTimeouts</a>

---

##### `accessTokenUrl`<sup>Required</sup> <a name="accessTokenUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.accessTokenUrl"></a>

```java
public java.lang.String getAccessTokenUrl();
```

- *Type:* java.lang.String

---

##### `accountLinkingEnabled`<sup>Required</sup> <a name="accountLinkingEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.accountLinkingEnabled"></a>

```java
public java.lang.Object getAccountLinkingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `adminScope`<sup>Required</sup> <a name="adminScope" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.adminScope"></a>

```java
public java.util.List<java.lang.String> getAdminScope();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.authorization"></a>

```java
public java.lang.String getAuthorization();
```

- *Type:* java.lang.String

---

##### `authzUrl`<sup>Required</sup> <a name="authzUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.authzUrl"></a>

```java
public java.lang.String getAuthzUrl();
```

- *Type:* java.lang.String

---

##### `autoRedirectEnabled`<sup>Required</sup> <a name="autoRedirectEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.autoRedirectEnabled"></a>

```java
public java.lang.Object getAutoRedirectEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clientCredentialInPayload`<sup>Required</sup> <a name="clientCredentialInPayload" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.clientCredentialInPayload"></a>

```java
public java.lang.Object getClientCredentialInPayload();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clockSkewInSeconds`<sup>Required</sup> <a name="clockSkewInSeconds" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.clockSkewInSeconds"></a>

```java
public java.lang.Number getClockSkewInSeconds();
```

- *Type:* java.lang.Number

---

##### `consumerKey`<sup>Required</sup> <a name="consumerKey" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.consumerKey"></a>

```java
public java.lang.String getConsumerKey();
```

- *Type:* java.lang.String

---

##### `consumerSecret`<sup>Required</sup> <a name="consumerSecret" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.consumerSecret"></a>

```java
public java.lang.String getConsumerSecret();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `discoveryUrl`<sup>Required</sup> <a name="discoveryUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.discoveryUrl"></a>

```java
public java.lang.String getDiscoveryUrl();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `iconUrl`<sup>Required</sup> <a name="iconUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.iconUrl"></a>

```java
public java.lang.String getIconUrl();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `idAttribute`<sup>Required</sup> <a name="idAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.idAttribute"></a>

```java
public java.lang.String getIdAttribute();
```

- *Type:* java.lang.String

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.idcsEndpoint"></a>

```java
public java.lang.String getIdcsEndpoint();
```

- *Type:* java.lang.String

---

##### `jitProvGroupStaticListEnabled`<sup>Required</sup> <a name="jitProvGroupStaticListEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.jitProvGroupStaticListEnabled"></a>

```java
public java.lang.Object getJitProvGroupStaticListEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `profileUrl`<sup>Required</sup> <a name="profileUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.profileUrl"></a>

```java
public java.lang.String getProfileUrl();
```

- *Type:* java.lang.String

---

##### `redirectUrl`<sup>Required</sup> <a name="redirectUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.redirectUrl"></a>

```java
public java.lang.String getRedirectUrl();
```

- *Type:* java.lang.String

---

##### `refreshTokenUrl`<sup>Required</sup> <a name="refreshTokenUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.refreshTokenUrl"></a>

```java
public java.lang.String getRefreshTokenUrl();
```

- *Type:* java.lang.String

---

##### `registrationEnabled`<sup>Required</sup> <a name="registrationEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.registrationEnabled"></a>

```java
public java.lang.Object getRegistrationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.resourceTypeSchemaVersion"></a>

```java
public java.lang.String getResourceTypeSchemaVersion();
```

- *Type:* java.lang.String

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.schemas"></a>

```java
public java.util.List<java.lang.String> getSchemas();
```

- *Type:* java.util.List<java.lang.String>

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.scope"></a>

```java
public java.util.List<java.lang.String> getScope();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceProviderName`<sup>Required</sup> <a name="serviceProviderName" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.serviceProviderName"></a>

```java
public java.lang.String getServiceProviderName();
```

- *Type:* java.lang.String

---

##### `showOnLogin`<sup>Required</sup> <a name="showOnLogin" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.showOnLogin"></a>

```java
public java.lang.Object getShowOnLogin();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `socialJitProvisioningEnabled`<sup>Required</sup> <a name="socialJitProvisioningEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.socialJitProvisioningEnabled"></a>

```java
public java.lang.Object getSocialJitProvisioningEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityDomainsSocialIdentityProviderConfig <a name="IdentityDomainsSocialIdentityProviderConfig" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_social_identity_provider.IdentityDomainsSocialIdentityProviderConfig;

IdentityDomainsSocialIdentityProviderConfig.builder()
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
    .accountLinkingEnabled(java.lang.Boolean)
    .accountLinkingEnabled(IResolvable)
    .consumerKey(java.lang.String)
    .consumerSecret(java.lang.String)
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
    .idcsEndpoint(java.lang.String)
    .name(java.lang.String)
    .registrationEnabled(java.lang.Boolean)
    .registrationEnabled(IResolvable)
    .schemas(java.util.List<java.lang.String>)
    .serviceProviderName(java.lang.String)
    .showOnLogin(java.lang.Boolean)
    .showOnLogin(IResolvable)
//  .accessTokenUrl(java.lang.String)
//  .adminScope(java.util.List<java.lang.String>)
//  .authorization(java.lang.String)
//  .authzUrl(java.lang.String)
//  .autoRedirectEnabled(java.lang.Boolean)
//  .autoRedirectEnabled(IResolvable)
//  .clientCredentialInPayload(java.lang.Boolean)
//  .clientCredentialInPayload(IResolvable)
//  .clockSkewInSeconds(java.lang.Number)
//  .description(java.lang.String)
//  .discoveryUrl(java.lang.String)
//  .iconUrl(java.lang.String)
//  .id(java.lang.String)
//  .idAttribute(java.lang.String)
//  .jitProvAssignedGroups(IResolvable)
//  .jitProvAssignedGroups(java.util.List<IdentityDomainsSocialIdentityProviderJitProvAssignedGroups>)
//  .jitProvGroupStaticListEnabled(java.lang.Boolean)
//  .jitProvGroupStaticListEnabled(IResolvable)
//  .ocid(java.lang.String)
//  .profileUrl(java.lang.String)
//  .redirectUrl(java.lang.String)
//  .refreshTokenUrl(java.lang.String)
//  .relayIdpParamMappings(IResolvable)
//  .relayIdpParamMappings(java.util.List<IdentityDomainsSocialIdentityProviderRelayIdpParamMappings>)
//  .resourceTypeSchemaVersion(java.lang.String)
//  .scope(java.util.List<java.lang.String>)
//  .socialJitProvisioningEnabled(java.lang.Boolean)
//  .socialJitProvisioningEnabled(IResolvable)
//  .status(java.lang.String)
//  .tags(IResolvable)
//  .tags(java.util.List<IdentityDomainsSocialIdentityProviderTags>)
//  .timeouts(IdentityDomainsSocialIdentityProviderTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.accountLinkingEnabled">accountLinkingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#account_linking_enabled IdentityDomainsSocialIdentityProvider#account_linking_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.consumerKey">consumerKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#consumer_key IdentityDomainsSocialIdentityProvider#consumer_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.consumerSecret">consumerSecret</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#consumer_secret IdentityDomainsSocialIdentityProvider#consumer_secret}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#enabled IdentityDomainsSocialIdentityProvider#enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.idcsEndpoint">idcsEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#idcs_endpoint IdentityDomainsSocialIdentityProvider#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#name IdentityDomainsSocialIdentityProvider#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.registrationEnabled">registrationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#registration_enabled IdentityDomainsSocialIdentityProvider#registration_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.schemas">schemas</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#schemas IdentityDomainsSocialIdentityProvider#schemas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.serviceProviderName">serviceProviderName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#service_provider_name IdentityDomainsSocialIdentityProvider#service_provider_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.showOnLogin">showOnLogin</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#show_on_login IdentityDomainsSocialIdentityProvider#show_on_login}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.accessTokenUrl">accessTokenUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#access_token_url IdentityDomainsSocialIdentityProvider#access_token_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.adminScope">adminScope</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#admin_scope IdentityDomainsSocialIdentityProvider#admin_scope}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.authorization">authorization</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#authorization IdentityDomainsSocialIdentityProvider#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.authzUrl">authzUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#authz_url IdentityDomainsSocialIdentityProvider#authz_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.autoRedirectEnabled">autoRedirectEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#auto_redirect_enabled IdentityDomainsSocialIdentityProvider#auto_redirect_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.clientCredentialInPayload">clientCredentialInPayload</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#client_credential_in_payload IdentityDomainsSocialIdentityProvider#client_credential_in_payload}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.clockSkewInSeconds">clockSkewInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#clock_skew_in_seconds IdentityDomainsSocialIdentityProvider#clock_skew_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#description IdentityDomainsSocialIdentityProvider#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.discoveryUrl">discoveryUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#discovery_url IdentityDomainsSocialIdentityProvider#discovery_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.iconUrl">iconUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#icon_url IdentityDomainsSocialIdentityProvider#icon_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#id IdentityDomainsSocialIdentityProvider#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.idAttribute">idAttribute</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#id_attribute IdentityDomainsSocialIdentityProvider#id_attribute}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.jitProvAssignedGroups">jitProvAssignedGroups</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroups">IdentityDomainsSocialIdentityProviderJitProvAssignedGroups</a>></code> | jit_prov_assigned_groups block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.jitProvGroupStaticListEnabled">jitProvGroupStaticListEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#jit_prov_group_static_list_enabled IdentityDomainsSocialIdentityProvider#jit_prov_group_static_list_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.ocid">ocid</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#ocid IdentityDomainsSocialIdentityProvider#ocid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.profileUrl">profileUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#profile_url IdentityDomainsSocialIdentityProvider#profile_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.redirectUrl">redirectUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#redirect_url IdentityDomainsSocialIdentityProvider#redirect_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.refreshTokenUrl">refreshTokenUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#refresh_token_url IdentityDomainsSocialIdentityProvider#refresh_token_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.relayIdpParamMappings">relayIdpParamMappings</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappings">IdentityDomainsSocialIdentityProviderRelayIdpParamMappings</a>></code> | relay_idp_param_mappings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#resource_type_schema_version IdentityDomainsSocialIdentityProvider#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.scope">scope</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#scope IdentityDomainsSocialIdentityProvider#scope}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.socialJitProvisioningEnabled">socialJitProvisioningEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#social_jit_provisioning_enabled IdentityDomainsSocialIdentityProvider#social_jit_provisioning_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#status IdentityDomainsSocialIdentityProvider#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.tags">tags</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTags">IdentityDomainsSocialIdentityProviderTags</a>></code> | tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeouts">IdentityDomainsSocialIdentityProviderTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountLinkingEnabled`<sup>Required</sup> <a name="accountLinkingEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.accountLinkingEnabled"></a>

```java
public java.lang.Object getAccountLinkingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#account_linking_enabled IdentityDomainsSocialIdentityProvider#account_linking_enabled}.

---

##### `consumerKey`<sup>Required</sup> <a name="consumerKey" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.consumerKey"></a>

```java
public java.lang.String getConsumerKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#consumer_key IdentityDomainsSocialIdentityProvider#consumer_key}.

---

##### `consumerSecret`<sup>Required</sup> <a name="consumerSecret" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.consumerSecret"></a>

```java
public java.lang.String getConsumerSecret();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#consumer_secret IdentityDomainsSocialIdentityProvider#consumer_secret}.

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#enabled IdentityDomainsSocialIdentityProvider#enabled}.

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.idcsEndpoint"></a>

```java
public java.lang.String getIdcsEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#idcs_endpoint IdentityDomainsSocialIdentityProvider#idcs_endpoint}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#name IdentityDomainsSocialIdentityProvider#name}.

---

##### `registrationEnabled`<sup>Required</sup> <a name="registrationEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.registrationEnabled"></a>

```java
public java.lang.Object getRegistrationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#registration_enabled IdentityDomainsSocialIdentityProvider#registration_enabled}.

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.schemas"></a>

```java
public java.util.List<java.lang.String> getSchemas();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#schemas IdentityDomainsSocialIdentityProvider#schemas}.

---

##### `serviceProviderName`<sup>Required</sup> <a name="serviceProviderName" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.serviceProviderName"></a>

```java
public java.lang.String getServiceProviderName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#service_provider_name IdentityDomainsSocialIdentityProvider#service_provider_name}.

---

##### `showOnLogin`<sup>Required</sup> <a name="showOnLogin" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.showOnLogin"></a>

```java
public java.lang.Object getShowOnLogin();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#show_on_login IdentityDomainsSocialIdentityProvider#show_on_login}.

---

##### `accessTokenUrl`<sup>Optional</sup> <a name="accessTokenUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.accessTokenUrl"></a>

```java
public java.lang.String getAccessTokenUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#access_token_url IdentityDomainsSocialIdentityProvider#access_token_url}.

---

##### `adminScope`<sup>Optional</sup> <a name="adminScope" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.adminScope"></a>

```java
public java.util.List<java.lang.String> getAdminScope();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#admin_scope IdentityDomainsSocialIdentityProvider#admin_scope}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.authorization"></a>

```java
public java.lang.String getAuthorization();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#authorization IdentityDomainsSocialIdentityProvider#authorization}.

---

##### `authzUrl`<sup>Optional</sup> <a name="authzUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.authzUrl"></a>

```java
public java.lang.String getAuthzUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#authz_url IdentityDomainsSocialIdentityProvider#authz_url}.

---

##### `autoRedirectEnabled`<sup>Optional</sup> <a name="autoRedirectEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.autoRedirectEnabled"></a>

```java
public java.lang.Object getAutoRedirectEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#auto_redirect_enabled IdentityDomainsSocialIdentityProvider#auto_redirect_enabled}.

---

##### `clientCredentialInPayload`<sup>Optional</sup> <a name="clientCredentialInPayload" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.clientCredentialInPayload"></a>

```java
public java.lang.Object getClientCredentialInPayload();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#client_credential_in_payload IdentityDomainsSocialIdentityProvider#client_credential_in_payload}.

---

##### `clockSkewInSeconds`<sup>Optional</sup> <a name="clockSkewInSeconds" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.clockSkewInSeconds"></a>

```java
public java.lang.Number getClockSkewInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#clock_skew_in_seconds IdentityDomainsSocialIdentityProvider#clock_skew_in_seconds}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#description IdentityDomainsSocialIdentityProvider#description}.

---

##### `discoveryUrl`<sup>Optional</sup> <a name="discoveryUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.discoveryUrl"></a>

```java
public java.lang.String getDiscoveryUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#discovery_url IdentityDomainsSocialIdentityProvider#discovery_url}.

---

##### `iconUrl`<sup>Optional</sup> <a name="iconUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.iconUrl"></a>

```java
public java.lang.String getIconUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#icon_url IdentityDomainsSocialIdentityProvider#icon_url}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#id IdentityDomainsSocialIdentityProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idAttribute`<sup>Optional</sup> <a name="idAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.idAttribute"></a>

```java
public java.lang.String getIdAttribute();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#id_attribute IdentityDomainsSocialIdentityProvider#id_attribute}.

---

##### `jitProvAssignedGroups`<sup>Optional</sup> <a name="jitProvAssignedGroups" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.jitProvAssignedGroups"></a>

```java
public java.lang.Object getJitProvAssignedGroups();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroups">IdentityDomainsSocialIdentityProviderJitProvAssignedGroups</a>>

jit_prov_assigned_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#jit_prov_assigned_groups IdentityDomainsSocialIdentityProvider#jit_prov_assigned_groups}

---

##### `jitProvGroupStaticListEnabled`<sup>Optional</sup> <a name="jitProvGroupStaticListEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.jitProvGroupStaticListEnabled"></a>

```java
public java.lang.Object getJitProvGroupStaticListEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#jit_prov_group_static_list_enabled IdentityDomainsSocialIdentityProvider#jit_prov_group_static_list_enabled}.

---

##### `ocid`<sup>Optional</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#ocid IdentityDomainsSocialIdentityProvider#ocid}.

---

##### `profileUrl`<sup>Optional</sup> <a name="profileUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.profileUrl"></a>

```java
public java.lang.String getProfileUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#profile_url IdentityDomainsSocialIdentityProvider#profile_url}.

---

##### `redirectUrl`<sup>Optional</sup> <a name="redirectUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.redirectUrl"></a>

```java
public java.lang.String getRedirectUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#redirect_url IdentityDomainsSocialIdentityProvider#redirect_url}.

---

##### `refreshTokenUrl`<sup>Optional</sup> <a name="refreshTokenUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.refreshTokenUrl"></a>

```java
public java.lang.String getRefreshTokenUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#refresh_token_url IdentityDomainsSocialIdentityProvider#refresh_token_url}.

---

##### `relayIdpParamMappings`<sup>Optional</sup> <a name="relayIdpParamMappings" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.relayIdpParamMappings"></a>

```java
public java.lang.Object getRelayIdpParamMappings();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappings">IdentityDomainsSocialIdentityProviderRelayIdpParamMappings</a>>

relay_idp_param_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#relay_idp_param_mappings IdentityDomainsSocialIdentityProvider#relay_idp_param_mappings}

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.resourceTypeSchemaVersion"></a>

```java
public java.lang.String getResourceTypeSchemaVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#resource_type_schema_version IdentityDomainsSocialIdentityProvider#resource_type_schema_version}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.scope"></a>

```java
public java.util.List<java.lang.String> getScope();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#scope IdentityDomainsSocialIdentityProvider#scope}.

---

##### `socialJitProvisioningEnabled`<sup>Optional</sup> <a name="socialJitProvisioningEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.socialJitProvisioningEnabled"></a>

```java
public java.lang.Object getSocialJitProvisioningEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#social_jit_provisioning_enabled IdentityDomainsSocialIdentityProvider#social_jit_provisioning_enabled}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#status IdentityDomainsSocialIdentityProvider#status}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.tags"></a>

```java
public java.lang.Object getTags();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTags">IdentityDomainsSocialIdentityProviderTags</a>>

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#tags IdentityDomainsSocialIdentityProvider#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.timeouts"></a>

```java
public IdentityDomainsSocialIdentityProviderTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeouts">IdentityDomainsSocialIdentityProviderTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#timeouts IdentityDomainsSocialIdentityProvider#timeouts}

---

### IdentityDomainsSocialIdentityProviderIdcsCreatedBy <a name="IdentityDomainsSocialIdentityProviderIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedBy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_social_identity_provider.IdentityDomainsSocialIdentityProviderIdcsCreatedBy;

IdentityDomainsSocialIdentityProviderIdcsCreatedBy.builder()
    .build();
```


### IdentityDomainsSocialIdentityProviderIdcsLastModifiedBy <a name="IdentityDomainsSocialIdentityProviderIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedBy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_social_identity_provider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedBy;

IdentityDomainsSocialIdentityProviderIdcsLastModifiedBy.builder()
    .build();
```


### IdentityDomainsSocialIdentityProviderJitProvAssignedGroups <a name="IdentityDomainsSocialIdentityProviderJitProvAssignedGroups" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroups.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_social_identity_provider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroups;

IdentityDomainsSocialIdentityProviderJitProvAssignedGroups.builder()
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroups.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#value IdentityDomainsSocialIdentityProvider#value}. |

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroups.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#value IdentityDomainsSocialIdentityProvider#value}.

---

### IdentityDomainsSocialIdentityProviderMeta <a name="IdentityDomainsSocialIdentityProviderMeta" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMeta.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_social_identity_provider.IdentityDomainsSocialIdentityProviderMeta;

IdentityDomainsSocialIdentityProviderMeta.builder()
    .build();
```


### IdentityDomainsSocialIdentityProviderRelayIdpParamMappings <a name="IdentityDomainsSocialIdentityProviderRelayIdpParamMappings" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_social_identity_provider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappings;

IdentityDomainsSocialIdentityProviderRelayIdpParamMappings.builder()
    .relayParamKey(java.lang.String)
//  .relayParamValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappings.property.relayParamKey">relayParamKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#relay_param_key IdentityDomainsSocialIdentityProvider#relay_param_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappings.property.relayParamValue">relayParamValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#relay_param_value IdentityDomainsSocialIdentityProvider#relay_param_value}. |

---

##### `relayParamKey`<sup>Required</sup> <a name="relayParamKey" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappings.property.relayParamKey"></a>

```java
public java.lang.String getRelayParamKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#relay_param_key IdentityDomainsSocialIdentityProvider#relay_param_key}.

---

##### `relayParamValue`<sup>Optional</sup> <a name="relayParamValue" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappings.property.relayParamValue"></a>

```java
public java.lang.String getRelayParamValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#relay_param_value IdentityDomainsSocialIdentityProvider#relay_param_value}.

---

### IdentityDomainsSocialIdentityProviderTags <a name="IdentityDomainsSocialIdentityProviderTags" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_social_identity_provider.IdentityDomainsSocialIdentityProviderTags;

IdentityDomainsSocialIdentityProviderTags.builder()
    .key(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#key IdentityDomainsSocialIdentityProvider#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#value IdentityDomainsSocialIdentityProvider#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#key IdentityDomainsSocialIdentityProvider#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#value IdentityDomainsSocialIdentityProvider#value}.

---

### IdentityDomainsSocialIdentityProviderTimeouts <a name="IdentityDomainsSocialIdentityProviderTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_social_identity_provider.IdentityDomainsSocialIdentityProviderTimeouts;

IdentityDomainsSocialIdentityProviderTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#create IdentityDomainsSocialIdentityProvider#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#delete IdentityDomainsSocialIdentityProvider#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#update IdentityDomainsSocialIdentityProvider#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#create IdentityDomainsSocialIdentityProvider#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#delete IdentityDomainsSocialIdentityProvider#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#update IdentityDomainsSocialIdentityProvider#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityDomainsSocialIdentityProviderIdcsCreatedByList <a name="IdentityDomainsSocialIdentityProviderIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_social_identity_provider.IdentityDomainsSocialIdentityProviderIdcsCreatedByList;

new IdentityDomainsSocialIdentityProviderIdcsCreatedByList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByList.get"></a>

```java
public IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference <a name="IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_social_identity_provider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference;

new IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.property.display">display</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedBy">IdentityDomainsSocialIdentityProviderIdcsCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.property.display"></a>

```java
public java.lang.String getDisplay();
```

- *Type:* java.lang.String

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.property.internalValue"></a>

```java
public IdentityDomainsSocialIdentityProviderIdcsCreatedBy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedBy">IdentityDomainsSocialIdentityProviderIdcsCreatedBy</a>

---


### IdentityDomainsSocialIdentityProviderIdcsLastModifiedByList <a name="IdentityDomainsSocialIdentityProviderIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_social_identity_provider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByList;

new IdentityDomainsSocialIdentityProviderIdcsLastModifiedByList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.get"></a>

```java
public IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference <a name="IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_social_identity_provider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference;

new IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedBy">IdentityDomainsSocialIdentityProviderIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.property.display"></a>

```java
public java.lang.String getDisplay();
```

- *Type:* java.lang.String

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.property.internalValue"></a>

```java
public IdentityDomainsSocialIdentityProviderIdcsLastModifiedBy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedBy">IdentityDomainsSocialIdentityProviderIdcsLastModifiedBy</a>

---


### IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList <a name="IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_social_identity_provider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList;

new IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.get"></a>

```java
public IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroups">IdentityDomainsSocialIdentityProviderJitProvAssignedGroups</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroups">IdentityDomainsSocialIdentityProviderJitProvAssignedGroups</a>>

---


### IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference <a name="IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_social_identity_provider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference;

new IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.property.display">display</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroups">IdentityDomainsSocialIdentityProviderJitProvAssignedGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.property.display"></a>

```java
public java.lang.String getDisplay();
```

- *Type:* java.lang.String

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroups">IdentityDomainsSocialIdentityProviderJitProvAssignedGroups</a>

---


### IdentityDomainsSocialIdentityProviderMetaList <a name="IdentityDomainsSocialIdentityProviderMetaList" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_social_identity_provider.IdentityDomainsSocialIdentityProviderMetaList;

new IdentityDomainsSocialIdentityProviderMetaList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaList.get"></a>

```java
public IdentityDomainsSocialIdentityProviderMetaOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### IdentityDomainsSocialIdentityProviderMetaOutputReference <a name="IdentityDomainsSocialIdentityProviderMetaOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_social_identity_provider.IdentityDomainsSocialIdentityProviderMetaOutputReference;

new IdentityDomainsSocialIdentityProviderMetaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.property.created">created</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.property.lastModified">lastModified</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMeta">IdentityDomainsSocialIdentityProviderMeta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.property.created"></a>

```java
public java.lang.String getCreated();
```

- *Type:* java.lang.String

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.property.lastModified"></a>

```java
public java.lang.String getLastModified();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.property.internalValue"></a>

```java
public IdentityDomainsSocialIdentityProviderMeta getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMeta">IdentityDomainsSocialIdentityProviderMeta</a>

---


### IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList <a name="IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_social_identity_provider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList;

new IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.get"></a>

```java
public IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappings">IdentityDomainsSocialIdentityProviderRelayIdpParamMappings</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappings">IdentityDomainsSocialIdentityProviderRelayIdpParamMappings</a>>

---


### IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference <a name="IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_social_identity_provider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference;

new IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.resetRelayParamValue">resetRelayParamValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRelayParamValue` <a name="resetRelayParamValue" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.resetRelayParamValue"></a>

```java
public void resetRelayParamValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.property.relayParamKeyInput">relayParamKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.property.relayParamValueInput">relayParamValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.property.relayParamKey">relayParamKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.property.relayParamValue">relayParamValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappings">IdentityDomainsSocialIdentityProviderRelayIdpParamMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `relayParamKeyInput`<sup>Optional</sup> <a name="relayParamKeyInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.property.relayParamKeyInput"></a>

```java
public java.lang.String getRelayParamKeyInput();
```

- *Type:* java.lang.String

---

##### `relayParamValueInput`<sup>Optional</sup> <a name="relayParamValueInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.property.relayParamValueInput"></a>

```java
public java.lang.String getRelayParamValueInput();
```

- *Type:* java.lang.String

---

##### `relayParamKey`<sup>Required</sup> <a name="relayParamKey" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.property.relayParamKey"></a>

```java
public java.lang.String getRelayParamKey();
```

- *Type:* java.lang.String

---

##### `relayParamValue`<sup>Required</sup> <a name="relayParamValue" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.property.relayParamValue"></a>

```java
public java.lang.String getRelayParamValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappings">IdentityDomainsSocialIdentityProviderRelayIdpParamMappings</a>

---


### IdentityDomainsSocialIdentityProviderTagsList <a name="IdentityDomainsSocialIdentityProviderTagsList" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_social_identity_provider.IdentityDomainsSocialIdentityProviderTagsList;

new IdentityDomainsSocialIdentityProviderTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsList.get"></a>

```java
public IdentityDomainsSocialIdentityProviderTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTags">IdentityDomainsSocialIdentityProviderTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTags">IdentityDomainsSocialIdentityProviderTags</a>>

---


### IdentityDomainsSocialIdentityProviderTagsOutputReference <a name="IdentityDomainsSocialIdentityProviderTagsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_social_identity_provider.IdentityDomainsSocialIdentityProviderTagsOutputReference;

new IdentityDomainsSocialIdentityProviderTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTags">IdentityDomainsSocialIdentityProviderTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTags">IdentityDomainsSocialIdentityProviderTags</a>

---


### IdentityDomainsSocialIdentityProviderTimeoutsOutputReference <a name="IdentityDomainsSocialIdentityProviderTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_social_identity_provider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference;

new IdentityDomainsSocialIdentityProviderTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeouts">IdentityDomainsSocialIdentityProviderTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeouts">IdentityDomainsSocialIdentityProviderTimeouts</a>

---



