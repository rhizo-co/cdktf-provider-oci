# `identityDomainsIdentityProvider` Submodule <a name="`identityDomainsIdentityProvider` Submodule" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityDomainsIdentityProvider <a name="IdentityDomainsIdentityProvider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider oci_identity_domains_identity_provider}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_identity_provider.IdentityDomainsIdentityProvider;

IdentityDomainsIdentityProvider.Builder.create(Construct scope, java.lang.String id)
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
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
    .idcsEndpoint(java.lang.String)
    .partnerName(java.lang.String)
    .schemas(java.util.List<java.lang.String>)
//  .assertionAttribute(java.lang.String)
//  .attributes(java.lang.String)
//  .attributeSets(java.util.List<java.lang.String>)
//  .authnRequestBinding(java.lang.String)
//  .authorization(java.lang.String)
//  .correlationPolicy(IdentityDomainsIdentityProviderCorrelationPolicy)
//  .description(java.lang.String)
//  .encryptionCertificate(java.lang.String)
//  .externalId(java.lang.String)
//  .iconUrl(java.lang.String)
//  .idpSsoUrl(java.lang.String)
//  .includeSigningCertInSignature(java.lang.Boolean)
//  .includeSigningCertInSignature(IResolvable)
//  .jitUserProvAssignedGroups(IResolvable)
//  .jitUserProvAssignedGroups(java.util.List<IdentityDomainsIdentityProviderJitUserProvAssignedGroups>)
//  .jitUserProvAttributes(IdentityDomainsIdentityProviderJitUserProvAttributes)
//  .jitUserProvAttributeUpdateEnabled(java.lang.Boolean)
//  .jitUserProvAttributeUpdateEnabled(IResolvable)
//  .jitUserProvCreateUserEnabled(java.lang.Boolean)
//  .jitUserProvCreateUserEnabled(IResolvable)
//  .jitUserProvEnabled(java.lang.Boolean)
//  .jitUserProvEnabled(IResolvable)
//  .jitUserProvGroupAssertionAttributeEnabled(java.lang.Boolean)
//  .jitUserProvGroupAssertionAttributeEnabled(IResolvable)
//  .jitUserProvGroupAssignmentMethod(java.lang.String)
//  .jitUserProvGroupMappingMode(java.lang.String)
//  .jitUserProvGroupMappings(IResolvable)
//  .jitUserProvGroupMappings(java.util.List<IdentityDomainsIdentityProviderJitUserProvGroupMappings>)
//  .jitUserProvGroupSamlAttributeName(java.lang.String)
//  .jitUserProvGroupStaticListEnabled(java.lang.Boolean)
//  .jitUserProvGroupStaticListEnabled(IResolvable)
//  .jitUserProvIgnoreErrorOnAbsentGroups(java.lang.Boolean)
//  .jitUserProvIgnoreErrorOnAbsentGroups(IResolvable)
//  .logoutBinding(java.lang.String)
//  .logoutEnabled(java.lang.Boolean)
//  .logoutEnabled(IResolvable)
//  .logoutRequestUrl(java.lang.String)
//  .logoutResponseUrl(java.lang.String)
//  .metadata(java.lang.String)
//  .nameIdFormat(java.lang.String)
//  .ocid(java.lang.String)
//  .partnerProviderId(java.lang.String)
//  .requestedAuthenticationContext(java.util.List<java.lang.String>)
//  .requireForceAuthn(java.lang.Boolean)
//  .requireForceAuthn(IResolvable)
//  .requiresEncryptedAssertion(java.lang.Boolean)
//  .requiresEncryptedAssertion(IResolvable)
//  .resourceTypeSchemaVersion(java.lang.String)
//  .samlHoKrequired(java.lang.Boolean)
//  .samlHoKrequired(IResolvable)
//  .serviceInstanceIdentifier(java.lang.String)
//  .shownOnLoginPage(java.lang.Boolean)
//  .shownOnLoginPage(IResolvable)
//  .signatureHashAlgorithm(java.lang.String)
//  .signingCertificate(java.lang.String)
//  .succinctId(java.lang.String)
//  .tags(IResolvable)
//  .tags(java.util.List<IdentityDomainsIdentityProviderTags>)
//  .timeouts(IdentityDomainsIdentityProviderTimeouts)
//  .type(java.lang.String)
//  .urnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider(IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider)
//  .urnietfparamsscimschemasoracleidcsextensionx509IdentityProvider(IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider)
//  .userMappingMethod(java.lang.String)
//  .userMappingStoreAttribute(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#enabled IdentityDomainsIdentityProvider#enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.idcsEndpoint">idcsEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#idcs_endpoint IdentityDomainsIdentityProvider#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.partnerName">partnerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#partner_name IdentityDomainsIdentityProvider#partner_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.schemas">schemas</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#schemas IdentityDomainsIdentityProvider#schemas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.assertionAttribute">assertionAttribute</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#assertion_attribute IdentityDomainsIdentityProvider#assertion_attribute}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.attributes">attributes</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#attributes IdentityDomainsIdentityProvider#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.attributeSets">attributeSets</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#attribute_sets IdentityDomainsIdentityProvider#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.authnRequestBinding">authnRequestBinding</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#authn_request_binding IdentityDomainsIdentityProvider#authn_request_binding}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.authorization">authorization</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#authorization IdentityDomainsIdentityProvider#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.correlationPolicy">correlationPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicy">IdentityDomainsIdentityProviderCorrelationPolicy</a></code> | correlation_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#description IdentityDomainsIdentityProvider#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.encryptionCertificate">encryptionCertificate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#encryption_certificate IdentityDomainsIdentityProvider#encryption_certificate}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.externalId">externalId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#external_id IdentityDomainsIdentityProvider#external_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.iconUrl">iconUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#icon_url IdentityDomainsIdentityProvider#icon_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.idpSsoUrl">idpSsoUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#idp_sso_url IdentityDomainsIdentityProvider#idp_sso_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.includeSigningCertInSignature">includeSigningCertInSignature</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#include_signing_cert_in_signature IdentityDomainsIdentityProvider#include_signing_cert_in_signature}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.jitUserProvAssignedGroups">jitUserProvAssignedGroups</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroups">IdentityDomainsIdentityProviderJitUserProvAssignedGroups</a>></code> | jit_user_prov_assigned_groups block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.jitUserProvAttributes">jitUserProvAttributes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributes">IdentityDomainsIdentityProviderJitUserProvAttributes</a></code> | jit_user_prov_attributes block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.jitUserProvAttributeUpdateEnabled">jitUserProvAttributeUpdateEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_attribute_update_enabled IdentityDomainsIdentityProvider#jit_user_prov_attribute_update_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.jitUserProvCreateUserEnabled">jitUserProvCreateUserEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_create_user_enabled IdentityDomainsIdentityProvider#jit_user_prov_create_user_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.jitUserProvEnabled">jitUserProvEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_enabled IdentityDomainsIdentityProvider#jit_user_prov_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.jitUserProvGroupAssertionAttributeEnabled">jitUserProvGroupAssertionAttributeEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_group_assertion_attribute_enabled IdentityDomainsIdentityProvider#jit_user_prov_group_assertion_attribute_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.jitUserProvGroupAssignmentMethod">jitUserProvGroupAssignmentMethod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_group_assignment_method IdentityDomainsIdentityProvider#jit_user_prov_group_assignment_method}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.jitUserProvGroupMappingMode">jitUserProvGroupMappingMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_group_mapping_mode IdentityDomainsIdentityProvider#jit_user_prov_group_mapping_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.jitUserProvGroupMappings">jitUserProvGroupMappings</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappings">IdentityDomainsIdentityProviderJitUserProvGroupMappings</a>></code> | jit_user_prov_group_mappings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.jitUserProvGroupSamlAttributeName">jitUserProvGroupSamlAttributeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_group_saml_attribute_name IdentityDomainsIdentityProvider#jit_user_prov_group_saml_attribute_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.jitUserProvGroupStaticListEnabled">jitUserProvGroupStaticListEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_group_static_list_enabled IdentityDomainsIdentityProvider#jit_user_prov_group_static_list_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.jitUserProvIgnoreErrorOnAbsentGroups">jitUserProvIgnoreErrorOnAbsentGroups</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_ignore_error_on_absent_groups IdentityDomainsIdentityProvider#jit_user_prov_ignore_error_on_absent_groups}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.logoutBinding">logoutBinding</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#logout_binding IdentityDomainsIdentityProvider#logout_binding}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.logoutEnabled">logoutEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#logout_enabled IdentityDomainsIdentityProvider#logout_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.logoutRequestUrl">logoutRequestUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#logout_request_url IdentityDomainsIdentityProvider#logout_request_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.logoutResponseUrl">logoutResponseUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#logout_response_url IdentityDomainsIdentityProvider#logout_response_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.metadata">metadata</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#metadata IdentityDomainsIdentityProvider#metadata}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.nameIdFormat">nameIdFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#name_id_format IdentityDomainsIdentityProvider#name_id_format}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.ocid">ocid</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#ocid IdentityDomainsIdentityProvider#ocid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.partnerProviderId">partnerProviderId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#partner_provider_id IdentityDomainsIdentityProvider#partner_provider_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.requestedAuthenticationContext">requestedAuthenticationContext</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#requested_authentication_context IdentityDomainsIdentityProvider#requested_authentication_context}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.requireForceAuthn">requireForceAuthn</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#require_force_authn IdentityDomainsIdentityProvider#require_force_authn}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.requiresEncryptedAssertion">requiresEncryptedAssertion</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#requires_encrypted_assertion IdentityDomainsIdentityProvider#requires_encrypted_assertion}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#resource_type_schema_version IdentityDomainsIdentityProvider#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.samlHoKrequired">samlHoKrequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#saml_ho_krequired IdentityDomainsIdentityProvider#saml_ho_krequired}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.serviceInstanceIdentifier">serviceInstanceIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#service_instance_identifier IdentityDomainsIdentityProvider#service_instance_identifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.shownOnLoginPage">shownOnLoginPage</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#shown_on_login_page IdentityDomainsIdentityProvider#shown_on_login_page}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.signatureHashAlgorithm">signatureHashAlgorithm</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#signature_hash_algorithm IdentityDomainsIdentityProvider#signature_hash_algorithm}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.signingCertificate">signingCertificate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#signing_certificate IdentityDomainsIdentityProvider#signing_certificate}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.succinctId">succinctId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#succinct_id IdentityDomainsIdentityProvider#succinct_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.tags">tags</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTags">IdentityDomainsIdentityProviderTags</a>></code> | tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeouts">IdentityDomainsIdentityProviderTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#type IdentityDomainsIdentityProvider#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.urnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider">urnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider</a></code> | urnietfparamsscimschemasoracleidcsextensionsocial_identity_provider block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.urnietfparamsscimschemasoracleidcsextensionx509IdentityProvider">urnietfparamsscimschemasoracleidcsextensionx509IdentityProvider</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider</a></code> | urnietfparamsscimschemasoracleidcsextensionx509identity_provider block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.userMappingMethod">userMappingMethod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#user_mapping_method IdentityDomainsIdentityProvider#user_mapping_method}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.userMappingStoreAttribute">userMappingStoreAttribute</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#user_mapping_store_attribute IdentityDomainsIdentityProvider#user_mapping_store_attribute}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#enabled IdentityDomainsIdentityProvider#enabled}.

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.idcsEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#idcs_endpoint IdentityDomainsIdentityProvider#idcs_endpoint}.

---

##### `partnerName`<sup>Required</sup> <a name="partnerName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.partnerName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#partner_name IdentityDomainsIdentityProvider#partner_name}.

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.schemas"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#schemas IdentityDomainsIdentityProvider#schemas}.

---

##### `assertionAttribute`<sup>Optional</sup> <a name="assertionAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.assertionAttribute"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#assertion_attribute IdentityDomainsIdentityProvider#assertion_attribute}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.attributes"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#attributes IdentityDomainsIdentityProvider#attributes}.

---

##### `attributeSets`<sup>Optional</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.attributeSets"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#attribute_sets IdentityDomainsIdentityProvider#attribute_sets}.

---

##### `authnRequestBinding`<sup>Optional</sup> <a name="authnRequestBinding" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.authnRequestBinding"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#authn_request_binding IdentityDomainsIdentityProvider#authn_request_binding}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.authorization"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#authorization IdentityDomainsIdentityProvider#authorization}.

---

##### `correlationPolicy`<sup>Optional</sup> <a name="correlationPolicy" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.correlationPolicy"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicy">IdentityDomainsIdentityProviderCorrelationPolicy</a>

correlation_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#correlation_policy IdentityDomainsIdentityProvider#correlation_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#description IdentityDomainsIdentityProvider#description}.

---

##### `encryptionCertificate`<sup>Optional</sup> <a name="encryptionCertificate" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.encryptionCertificate"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#encryption_certificate IdentityDomainsIdentityProvider#encryption_certificate}.

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.externalId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#external_id IdentityDomainsIdentityProvider#external_id}.

---

##### `iconUrl`<sup>Optional</sup> <a name="iconUrl" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.iconUrl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#icon_url IdentityDomainsIdentityProvider#icon_url}.

---

##### `idpSsoUrl`<sup>Optional</sup> <a name="idpSsoUrl" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.idpSsoUrl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#idp_sso_url IdentityDomainsIdentityProvider#idp_sso_url}.

---

##### `includeSigningCertInSignature`<sup>Optional</sup> <a name="includeSigningCertInSignature" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.includeSigningCertInSignature"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#include_signing_cert_in_signature IdentityDomainsIdentityProvider#include_signing_cert_in_signature}.

---

##### `jitUserProvAssignedGroups`<sup>Optional</sup> <a name="jitUserProvAssignedGroups" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.jitUserProvAssignedGroups"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroups">IdentityDomainsIdentityProviderJitUserProvAssignedGroups</a>>

jit_user_prov_assigned_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_assigned_groups IdentityDomainsIdentityProvider#jit_user_prov_assigned_groups}

---

##### `jitUserProvAttributes`<sup>Optional</sup> <a name="jitUserProvAttributes" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.jitUserProvAttributes"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributes">IdentityDomainsIdentityProviderJitUserProvAttributes</a>

jit_user_prov_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_attributes IdentityDomainsIdentityProvider#jit_user_prov_attributes}

---

##### `jitUserProvAttributeUpdateEnabled`<sup>Optional</sup> <a name="jitUserProvAttributeUpdateEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.jitUserProvAttributeUpdateEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_attribute_update_enabled IdentityDomainsIdentityProvider#jit_user_prov_attribute_update_enabled}.

---

##### `jitUserProvCreateUserEnabled`<sup>Optional</sup> <a name="jitUserProvCreateUserEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.jitUserProvCreateUserEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_create_user_enabled IdentityDomainsIdentityProvider#jit_user_prov_create_user_enabled}.

---

##### `jitUserProvEnabled`<sup>Optional</sup> <a name="jitUserProvEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.jitUserProvEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_enabled IdentityDomainsIdentityProvider#jit_user_prov_enabled}.

---

##### `jitUserProvGroupAssertionAttributeEnabled`<sup>Optional</sup> <a name="jitUserProvGroupAssertionAttributeEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.jitUserProvGroupAssertionAttributeEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_group_assertion_attribute_enabled IdentityDomainsIdentityProvider#jit_user_prov_group_assertion_attribute_enabled}.

---

##### `jitUserProvGroupAssignmentMethod`<sup>Optional</sup> <a name="jitUserProvGroupAssignmentMethod" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.jitUserProvGroupAssignmentMethod"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_group_assignment_method IdentityDomainsIdentityProvider#jit_user_prov_group_assignment_method}.

---

##### `jitUserProvGroupMappingMode`<sup>Optional</sup> <a name="jitUserProvGroupMappingMode" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.jitUserProvGroupMappingMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_group_mapping_mode IdentityDomainsIdentityProvider#jit_user_prov_group_mapping_mode}.

---

##### `jitUserProvGroupMappings`<sup>Optional</sup> <a name="jitUserProvGroupMappings" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.jitUserProvGroupMappings"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappings">IdentityDomainsIdentityProviderJitUserProvGroupMappings</a>>

jit_user_prov_group_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_group_mappings IdentityDomainsIdentityProvider#jit_user_prov_group_mappings}

---

##### `jitUserProvGroupSamlAttributeName`<sup>Optional</sup> <a name="jitUserProvGroupSamlAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.jitUserProvGroupSamlAttributeName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_group_saml_attribute_name IdentityDomainsIdentityProvider#jit_user_prov_group_saml_attribute_name}.

---

##### `jitUserProvGroupStaticListEnabled`<sup>Optional</sup> <a name="jitUserProvGroupStaticListEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.jitUserProvGroupStaticListEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_group_static_list_enabled IdentityDomainsIdentityProvider#jit_user_prov_group_static_list_enabled}.

---

##### `jitUserProvIgnoreErrorOnAbsentGroups`<sup>Optional</sup> <a name="jitUserProvIgnoreErrorOnAbsentGroups" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.jitUserProvIgnoreErrorOnAbsentGroups"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_ignore_error_on_absent_groups IdentityDomainsIdentityProvider#jit_user_prov_ignore_error_on_absent_groups}.

---

##### `logoutBinding`<sup>Optional</sup> <a name="logoutBinding" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.logoutBinding"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#logout_binding IdentityDomainsIdentityProvider#logout_binding}.

---

##### `logoutEnabled`<sup>Optional</sup> <a name="logoutEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.logoutEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#logout_enabled IdentityDomainsIdentityProvider#logout_enabled}.

---

##### `logoutRequestUrl`<sup>Optional</sup> <a name="logoutRequestUrl" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.logoutRequestUrl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#logout_request_url IdentityDomainsIdentityProvider#logout_request_url}.

---

##### `logoutResponseUrl`<sup>Optional</sup> <a name="logoutResponseUrl" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.logoutResponseUrl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#logout_response_url IdentityDomainsIdentityProvider#logout_response_url}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.metadata"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#metadata IdentityDomainsIdentityProvider#metadata}.

---

##### `nameIdFormat`<sup>Optional</sup> <a name="nameIdFormat" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.nameIdFormat"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#name_id_format IdentityDomainsIdentityProvider#name_id_format}.

---

##### `ocid`<sup>Optional</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.ocid"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#ocid IdentityDomainsIdentityProvider#ocid}.

---

##### `partnerProviderId`<sup>Optional</sup> <a name="partnerProviderId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.partnerProviderId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#partner_provider_id IdentityDomainsIdentityProvider#partner_provider_id}.

---

##### `requestedAuthenticationContext`<sup>Optional</sup> <a name="requestedAuthenticationContext" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.requestedAuthenticationContext"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#requested_authentication_context IdentityDomainsIdentityProvider#requested_authentication_context}.

---

##### `requireForceAuthn`<sup>Optional</sup> <a name="requireForceAuthn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.requireForceAuthn"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#require_force_authn IdentityDomainsIdentityProvider#require_force_authn}.

---

##### `requiresEncryptedAssertion`<sup>Optional</sup> <a name="requiresEncryptedAssertion" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.requiresEncryptedAssertion"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#requires_encrypted_assertion IdentityDomainsIdentityProvider#requires_encrypted_assertion}.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.resourceTypeSchemaVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#resource_type_schema_version IdentityDomainsIdentityProvider#resource_type_schema_version}.

---

##### `samlHoKrequired`<sup>Optional</sup> <a name="samlHoKrequired" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.samlHoKrequired"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#saml_ho_krequired IdentityDomainsIdentityProvider#saml_ho_krequired}.

---

##### `serviceInstanceIdentifier`<sup>Optional</sup> <a name="serviceInstanceIdentifier" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.serviceInstanceIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#service_instance_identifier IdentityDomainsIdentityProvider#service_instance_identifier}.

---

##### `shownOnLoginPage`<sup>Optional</sup> <a name="shownOnLoginPage" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.shownOnLoginPage"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#shown_on_login_page IdentityDomainsIdentityProvider#shown_on_login_page}.

---

##### `signatureHashAlgorithm`<sup>Optional</sup> <a name="signatureHashAlgorithm" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.signatureHashAlgorithm"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#signature_hash_algorithm IdentityDomainsIdentityProvider#signature_hash_algorithm}.

---

##### `signingCertificate`<sup>Optional</sup> <a name="signingCertificate" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.signingCertificate"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#signing_certificate IdentityDomainsIdentityProvider#signing_certificate}.

---

##### `succinctId`<sup>Optional</sup> <a name="succinctId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.succinctId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#succinct_id IdentityDomainsIdentityProvider#succinct_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.tags"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTags">IdentityDomainsIdentityProviderTags</a>>

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#tags IdentityDomainsIdentityProvider#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeouts">IdentityDomainsIdentityProviderTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#timeouts IdentityDomainsIdentityProvider#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#type IdentityDomainsIdentityProvider#type}.

---

##### `urnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider`<sup>Optional</sup> <a name="urnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.urnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider</a>

urnietfparamsscimschemasoracleidcsextensionsocial_identity_provider block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#urnietfparamsscimschemasoracleidcsextensionsocial_identity_provider IdentityDomainsIdentityProvider#urnietfparamsscimschemasoracleidcsextensionsocial_identity_provider}

---

##### `urnietfparamsscimschemasoracleidcsextensionx509IdentityProvider`<sup>Optional</sup> <a name="urnietfparamsscimschemasoracleidcsextensionx509IdentityProvider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.urnietfparamsscimschemasoracleidcsextensionx509IdentityProvider"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider</a>

urnietfparamsscimschemasoracleidcsextensionx509identity_provider block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#urnietfparamsscimschemasoracleidcsextensionx509identity_provider IdentityDomainsIdentityProvider#urnietfparamsscimschemasoracleidcsextensionx509identity_provider}

---

##### `userMappingMethod`<sup>Optional</sup> <a name="userMappingMethod" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.userMappingMethod"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#user_mapping_method IdentityDomainsIdentityProvider#user_mapping_method}.

---

##### `userMappingStoreAttribute`<sup>Optional</sup> <a name="userMappingStoreAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.userMappingStoreAttribute"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#user_mapping_store_attribute IdentityDomainsIdentityProvider#user_mapping_store_attribute}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putCorrelationPolicy">putCorrelationPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putJitUserProvAssignedGroups">putJitUserProvAssignedGroups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putJitUserProvAttributes">putJitUserProvAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putJitUserProvGroupMappings">putJitUserProvGroupMappings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putTags">putTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider">putUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider">putUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetAssertionAttribute">resetAssertionAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetAttributeSets">resetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetAuthnRequestBinding">resetAuthnRequestBinding</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetCorrelationPolicy">resetCorrelationPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetEncryptionCertificate">resetEncryptionCertificate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetExternalId">resetExternalId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetIconUrl">resetIconUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetIdpSsoUrl">resetIdpSsoUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetIncludeSigningCertInSignature">resetIncludeSigningCertInSignature</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetJitUserProvAssignedGroups">resetJitUserProvAssignedGroups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetJitUserProvAttributes">resetJitUserProvAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetJitUserProvAttributeUpdateEnabled">resetJitUserProvAttributeUpdateEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetJitUserProvCreateUserEnabled">resetJitUserProvCreateUserEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetJitUserProvEnabled">resetJitUserProvEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetJitUserProvGroupAssertionAttributeEnabled">resetJitUserProvGroupAssertionAttributeEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetJitUserProvGroupAssignmentMethod">resetJitUserProvGroupAssignmentMethod</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetJitUserProvGroupMappingMode">resetJitUserProvGroupMappingMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetJitUserProvGroupMappings">resetJitUserProvGroupMappings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetJitUserProvGroupSamlAttributeName">resetJitUserProvGroupSamlAttributeName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetJitUserProvGroupStaticListEnabled">resetJitUserProvGroupStaticListEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetJitUserProvIgnoreErrorOnAbsentGroups">resetJitUserProvIgnoreErrorOnAbsentGroups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetLogoutBinding">resetLogoutBinding</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetLogoutEnabled">resetLogoutEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetLogoutRequestUrl">resetLogoutRequestUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetLogoutResponseUrl">resetLogoutResponseUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetNameIdFormat">resetNameIdFormat</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetOcid">resetOcid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetPartnerProviderId">resetPartnerProviderId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetRequestedAuthenticationContext">resetRequestedAuthenticationContext</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetRequireForceAuthn">resetRequireForceAuthn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetRequiresEncryptedAssertion">resetRequiresEncryptedAssertion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetResourceTypeSchemaVersion">resetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetSamlHoKrequired">resetSamlHoKrequired</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetServiceInstanceIdentifier">resetServiceInstanceIdentifier</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetShownOnLoginPage">resetShownOnLoginPage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetSignatureHashAlgorithm">resetSignatureHashAlgorithm</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetSigningCertificate">resetSigningCertificate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetSuccinctId">resetSuccinctId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetType">resetType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider">resetUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider">resetUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetUserMappingMethod">resetUserMappingMethod</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetUserMappingStoreAttribute">resetUserMappingStoreAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCorrelationPolicy` <a name="putCorrelationPolicy" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putCorrelationPolicy"></a>

```java
public void putCorrelationPolicy(IdentityDomainsIdentityProviderCorrelationPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putCorrelationPolicy.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicy">IdentityDomainsIdentityProviderCorrelationPolicy</a>

---

##### `putJitUserProvAssignedGroups` <a name="putJitUserProvAssignedGroups" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putJitUserProvAssignedGroups"></a>

```java
public void putJitUserProvAssignedGroups(IResolvable OR java.util.List<IdentityDomainsIdentityProviderJitUserProvAssignedGroups> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putJitUserProvAssignedGroups.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroups">IdentityDomainsIdentityProviderJitUserProvAssignedGroups</a>>

---

##### `putJitUserProvAttributes` <a name="putJitUserProvAttributes" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putJitUserProvAttributes"></a>

```java
public void putJitUserProvAttributes(IdentityDomainsIdentityProviderJitUserProvAttributes value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putJitUserProvAttributes.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributes">IdentityDomainsIdentityProviderJitUserProvAttributes</a>

---

##### `putJitUserProvGroupMappings` <a name="putJitUserProvGroupMappings" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putJitUserProvGroupMappings"></a>

```java
public void putJitUserProvGroupMappings(IResolvable OR java.util.List<IdentityDomainsIdentityProviderJitUserProvGroupMappings> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putJitUserProvGroupMappings.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappings">IdentityDomainsIdentityProviderJitUserProvGroupMappings</a>>

---

##### `putTags` <a name="putTags" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putTags"></a>

```java
public void putTags(IResolvable OR java.util.List<IdentityDomainsIdentityProviderTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putTags.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTags">IdentityDomainsIdentityProviderTags</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putTimeouts"></a>

```java
public void putTimeouts(IdentityDomainsIdentityProviderTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeouts">IdentityDomainsIdentityProviderTimeouts</a>

---

##### `putUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider` <a name="putUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider"></a>

```java
public void putUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider(IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider</a>

---

##### `putUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider` <a name="putUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider"></a>

```java
public void putUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider(IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider</a>

---

##### `resetAssertionAttribute` <a name="resetAssertionAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetAssertionAttribute"></a>

```java
public void resetAssertionAttribute()
```

##### `resetAttributes` <a name="resetAttributes" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetAttributes"></a>

```java
public void resetAttributes()
```

##### `resetAttributeSets` <a name="resetAttributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetAttributeSets"></a>

```java
public void resetAttributeSets()
```

##### `resetAuthnRequestBinding` <a name="resetAuthnRequestBinding" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetAuthnRequestBinding"></a>

```java
public void resetAuthnRequestBinding()
```

##### `resetAuthorization` <a name="resetAuthorization" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetAuthorization"></a>

```java
public void resetAuthorization()
```

##### `resetCorrelationPolicy` <a name="resetCorrelationPolicy" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetCorrelationPolicy"></a>

```java
public void resetCorrelationPolicy()
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEncryptionCertificate` <a name="resetEncryptionCertificate" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetEncryptionCertificate"></a>

```java
public void resetEncryptionCertificate()
```

##### `resetExternalId` <a name="resetExternalId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetExternalId"></a>

```java
public void resetExternalId()
```

##### `resetIconUrl` <a name="resetIconUrl" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetIconUrl"></a>

```java
public void resetIconUrl()
```

##### `resetIdpSsoUrl` <a name="resetIdpSsoUrl" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetIdpSsoUrl"></a>

```java
public void resetIdpSsoUrl()
```

##### `resetIncludeSigningCertInSignature` <a name="resetIncludeSigningCertInSignature" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetIncludeSigningCertInSignature"></a>

```java
public void resetIncludeSigningCertInSignature()
```

##### `resetJitUserProvAssignedGroups` <a name="resetJitUserProvAssignedGroups" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetJitUserProvAssignedGroups"></a>

```java
public void resetJitUserProvAssignedGroups()
```

##### `resetJitUserProvAttributes` <a name="resetJitUserProvAttributes" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetJitUserProvAttributes"></a>

```java
public void resetJitUserProvAttributes()
```

##### `resetJitUserProvAttributeUpdateEnabled` <a name="resetJitUserProvAttributeUpdateEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetJitUserProvAttributeUpdateEnabled"></a>

```java
public void resetJitUserProvAttributeUpdateEnabled()
```

##### `resetJitUserProvCreateUserEnabled` <a name="resetJitUserProvCreateUserEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetJitUserProvCreateUserEnabled"></a>

```java
public void resetJitUserProvCreateUserEnabled()
```

##### `resetJitUserProvEnabled` <a name="resetJitUserProvEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetJitUserProvEnabled"></a>

```java
public void resetJitUserProvEnabled()
```

##### `resetJitUserProvGroupAssertionAttributeEnabled` <a name="resetJitUserProvGroupAssertionAttributeEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetJitUserProvGroupAssertionAttributeEnabled"></a>

```java
public void resetJitUserProvGroupAssertionAttributeEnabled()
```

##### `resetJitUserProvGroupAssignmentMethod` <a name="resetJitUserProvGroupAssignmentMethod" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetJitUserProvGroupAssignmentMethod"></a>

```java
public void resetJitUserProvGroupAssignmentMethod()
```

##### `resetJitUserProvGroupMappingMode` <a name="resetJitUserProvGroupMappingMode" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetJitUserProvGroupMappingMode"></a>

```java
public void resetJitUserProvGroupMappingMode()
```

##### `resetJitUserProvGroupMappings` <a name="resetJitUserProvGroupMappings" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetJitUserProvGroupMappings"></a>

```java
public void resetJitUserProvGroupMappings()
```

##### `resetJitUserProvGroupSamlAttributeName` <a name="resetJitUserProvGroupSamlAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetJitUserProvGroupSamlAttributeName"></a>

```java
public void resetJitUserProvGroupSamlAttributeName()
```

##### `resetJitUserProvGroupStaticListEnabled` <a name="resetJitUserProvGroupStaticListEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetJitUserProvGroupStaticListEnabled"></a>

```java
public void resetJitUserProvGroupStaticListEnabled()
```

##### `resetJitUserProvIgnoreErrorOnAbsentGroups` <a name="resetJitUserProvIgnoreErrorOnAbsentGroups" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetJitUserProvIgnoreErrorOnAbsentGroups"></a>

```java
public void resetJitUserProvIgnoreErrorOnAbsentGroups()
```

##### `resetLogoutBinding` <a name="resetLogoutBinding" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetLogoutBinding"></a>

```java
public void resetLogoutBinding()
```

##### `resetLogoutEnabled` <a name="resetLogoutEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetLogoutEnabled"></a>

```java
public void resetLogoutEnabled()
```

##### `resetLogoutRequestUrl` <a name="resetLogoutRequestUrl" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetLogoutRequestUrl"></a>

```java
public void resetLogoutRequestUrl()
```

##### `resetLogoutResponseUrl` <a name="resetLogoutResponseUrl" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetLogoutResponseUrl"></a>

```java
public void resetLogoutResponseUrl()
```

##### `resetMetadata` <a name="resetMetadata" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetNameIdFormat` <a name="resetNameIdFormat" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetNameIdFormat"></a>

```java
public void resetNameIdFormat()
```

##### `resetOcid` <a name="resetOcid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetOcid"></a>

```java
public void resetOcid()
```

##### `resetPartnerProviderId` <a name="resetPartnerProviderId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetPartnerProviderId"></a>

```java
public void resetPartnerProviderId()
```

##### `resetRequestedAuthenticationContext` <a name="resetRequestedAuthenticationContext" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetRequestedAuthenticationContext"></a>

```java
public void resetRequestedAuthenticationContext()
```

##### `resetRequireForceAuthn` <a name="resetRequireForceAuthn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetRequireForceAuthn"></a>

```java
public void resetRequireForceAuthn()
```

##### `resetRequiresEncryptedAssertion` <a name="resetRequiresEncryptedAssertion" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetRequiresEncryptedAssertion"></a>

```java
public void resetRequiresEncryptedAssertion()
```

##### `resetResourceTypeSchemaVersion` <a name="resetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetResourceTypeSchemaVersion"></a>

```java
public void resetResourceTypeSchemaVersion()
```

##### `resetSamlHoKrequired` <a name="resetSamlHoKrequired" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetSamlHoKrequired"></a>

```java
public void resetSamlHoKrequired()
```

##### `resetServiceInstanceIdentifier` <a name="resetServiceInstanceIdentifier" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetServiceInstanceIdentifier"></a>

```java
public void resetServiceInstanceIdentifier()
```

##### `resetShownOnLoginPage` <a name="resetShownOnLoginPage" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetShownOnLoginPage"></a>

```java
public void resetShownOnLoginPage()
```

##### `resetSignatureHashAlgorithm` <a name="resetSignatureHashAlgorithm" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetSignatureHashAlgorithm"></a>

```java
public void resetSignatureHashAlgorithm()
```

##### `resetSigningCertificate` <a name="resetSigningCertificate" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetSigningCertificate"></a>

```java
public void resetSigningCertificate()
```

##### `resetSuccinctId` <a name="resetSuccinctId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetSuccinctId"></a>

```java
public void resetSuccinctId()
```

##### `resetTags` <a name="resetTags" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetType` <a name="resetType" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetType"></a>

```java
public void resetType()
```

##### `resetUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider` <a name="resetUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider"></a>

```java
public void resetUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider()
```

##### `resetUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider` <a name="resetUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider"></a>

```java
public void resetUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider()
```

##### `resetUserMappingMethod` <a name="resetUserMappingMethod" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetUserMappingMethod"></a>

```java
public void resetUserMappingMethod()
```

##### `resetUserMappingStoreAttribute` <a name="resetUserMappingStoreAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetUserMappingStoreAttribute"></a>

```java
public void resetUserMappingStoreAttribute()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityDomainsIdentityProvider resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_identity_provider.IdentityDomainsIdentityProvider;

IdentityDomainsIdentityProvider.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_identity_provider.IdentityDomainsIdentityProvider;

IdentityDomainsIdentityProvider.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_identity_provider.IdentityDomainsIdentityProvider;

IdentityDomainsIdentityProvider.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_identity_provider.IdentityDomainsIdentityProvider;

IdentityDomainsIdentityProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IdentityDomainsIdentityProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a IdentityDomainsIdentityProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IdentityDomainsIdentityProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IdentityDomainsIdentityProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the IdentityDomainsIdentityProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.compartmentOcid">compartmentOcid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.correlationPolicy">correlationPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference">IdentityDomainsIdentityProviderCorrelationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.deleteInProgress">deleteInProgress</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.domainOcid">domainOcid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.idcsCreatedBy">idcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList">IdentityDomainsIdentityProviderIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.idcsLastModifiedBy">idcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList">IdentityDomainsIdentityProviderIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.idcsLastUpgradedInRelease">idcsLastUpgradedInRelease</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.idcsPreventedOperations">idcsPreventedOperations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvAssignedGroups">jitUserProvAssignedGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList">IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvAttributes">jitUserProvAttributes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference">IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvGroupMappings">jitUserProvGroupMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList">IdentityDomainsIdentityProviderJitUserProvGroupMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.lastNotificationSentTime">lastNotificationSentTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList">IdentityDomainsIdentityProviderMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList">IdentityDomainsIdentityProviderTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.tenancyOcid">tenancyOcid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.tenantProviderId">tenantProviderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference">IdentityDomainsIdentityProviderTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.urnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider">urnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.urnietfparamsscimschemasoracleidcsextensionx509IdentityProvider">urnietfparamsscimschemasoracleidcsextensionx509IdentityProvider</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.assertionAttributeInput">assertionAttributeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.attributeSetsInput">attributeSetsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.attributesInput">attributesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.authnRequestBindingInput">authnRequestBindingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.authorizationInput">authorizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.correlationPolicyInput">correlationPolicyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicy">IdentityDomainsIdentityProviderCorrelationPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.encryptionCertificateInput">encryptionCertificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.externalIdInput">externalIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.iconUrlInput">iconUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.idcsEndpointInput">idcsEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.idpSsoUrlInput">idpSsoUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.includeSigningCertInSignatureInput">includeSigningCertInSignatureInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvAssignedGroupsInput">jitUserProvAssignedGroupsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroups">IdentityDomainsIdentityProviderJitUserProvAssignedGroups</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvAttributesInput">jitUserProvAttributesInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributes">IdentityDomainsIdentityProviderJitUserProvAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvAttributeUpdateEnabledInput">jitUserProvAttributeUpdateEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvCreateUserEnabledInput">jitUserProvCreateUserEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvEnabledInput">jitUserProvEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvGroupAssertionAttributeEnabledInput">jitUserProvGroupAssertionAttributeEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvGroupAssignmentMethodInput">jitUserProvGroupAssignmentMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvGroupMappingModeInput">jitUserProvGroupMappingModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvGroupMappingsInput">jitUserProvGroupMappingsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappings">IdentityDomainsIdentityProviderJitUserProvGroupMappings</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvGroupSamlAttributeNameInput">jitUserProvGroupSamlAttributeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvGroupStaticListEnabledInput">jitUserProvGroupStaticListEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvIgnoreErrorOnAbsentGroupsInput">jitUserProvIgnoreErrorOnAbsentGroupsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.logoutBindingInput">logoutBindingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.logoutEnabledInput">logoutEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.logoutRequestUrlInput">logoutRequestUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.logoutResponseUrlInput">logoutResponseUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.metadataInput">metadataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.nameIdFormatInput">nameIdFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.ocidInput">ocidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.partnerNameInput">partnerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.partnerProviderIdInput">partnerProviderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.requestedAuthenticationContextInput">requestedAuthenticationContextInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.requireForceAuthnInput">requireForceAuthnInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.requiresEncryptedAssertionInput">requiresEncryptedAssertionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.resourceTypeSchemaVersionInput">resourceTypeSchemaVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.samlHoKrequiredInput">samlHoKrequiredInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.schemasInput">schemasInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.serviceInstanceIdentifierInput">serviceInstanceIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.shownOnLoginPageInput">shownOnLoginPageInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.signatureHashAlgorithmInput">signatureHashAlgorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.signingCertificateInput">signingCertificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.succinctIdInput">succinctIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.tagsInput">tagsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTags">IdentityDomainsIdentityProviderTags</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeouts">IdentityDomainsIdentityProviderTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.urnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderInput">urnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.urnietfparamsscimschemasoracleidcsextensionx509IdentityProviderInput">urnietfparamsscimschemasoracleidcsextensionx509IdentityProviderInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.userMappingMethodInput">userMappingMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.userMappingStoreAttributeInput">userMappingStoreAttributeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.assertionAttribute">assertionAttribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.attributes">attributes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.attributeSets">attributeSets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.authnRequestBinding">authnRequestBinding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.authorization">authorization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.encryptionCertificate">encryptionCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.externalId">externalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.iconUrl">iconUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.idcsEndpoint">idcsEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.idpSsoUrl">idpSsoUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.includeSigningCertInSignature">includeSigningCertInSignature</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvAttributeUpdateEnabled">jitUserProvAttributeUpdateEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvCreateUserEnabled">jitUserProvCreateUserEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvEnabled">jitUserProvEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvGroupAssertionAttributeEnabled">jitUserProvGroupAssertionAttributeEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvGroupAssignmentMethod">jitUserProvGroupAssignmentMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvGroupMappingMode">jitUserProvGroupMappingMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvGroupSamlAttributeName">jitUserProvGroupSamlAttributeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvGroupStaticListEnabled">jitUserProvGroupStaticListEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvIgnoreErrorOnAbsentGroups">jitUserProvIgnoreErrorOnAbsentGroups</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.logoutBinding">logoutBinding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.logoutEnabled">logoutEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.logoutRequestUrl">logoutRequestUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.logoutResponseUrl">logoutResponseUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.metadata">metadata</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.nameIdFormat">nameIdFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.partnerName">partnerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.partnerProviderId">partnerProviderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.requestedAuthenticationContext">requestedAuthenticationContext</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.requireForceAuthn">requireForceAuthn</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.requiresEncryptedAssertion">requiresEncryptedAssertion</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.samlHoKrequired">samlHoKrequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.schemas">schemas</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.serviceInstanceIdentifier">serviceInstanceIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.shownOnLoginPage">shownOnLoginPage</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.signatureHashAlgorithm">signatureHashAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.signingCertificate">signingCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.succinctId">succinctId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.userMappingMethod">userMappingMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.userMappingStoreAttribute">userMappingStoreAttribute</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentOcid`<sup>Required</sup> <a name="compartmentOcid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.compartmentOcid"></a>

```java
public java.lang.String getCompartmentOcid();
```

- *Type:* java.lang.String

---

##### `correlationPolicy`<sup>Required</sup> <a name="correlationPolicy" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.correlationPolicy"></a>

```java
public IdentityDomainsIdentityProviderCorrelationPolicyOutputReference getCorrelationPolicy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference">IdentityDomainsIdentityProviderCorrelationPolicyOutputReference</a>

---

##### `deleteInProgress`<sup>Required</sup> <a name="deleteInProgress" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.deleteInProgress"></a>

```java
public IResolvable getDeleteInProgress();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `domainOcid`<sup>Required</sup> <a name="domainOcid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.domainOcid"></a>

```java
public java.lang.String getDomainOcid();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `idcsCreatedBy`<sup>Required</sup> <a name="idcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.idcsCreatedBy"></a>

```java
public IdentityDomainsIdentityProviderIdcsCreatedByList getIdcsCreatedBy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList">IdentityDomainsIdentityProviderIdcsCreatedByList</a>

---

##### `idcsLastModifiedBy`<sup>Required</sup> <a name="idcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.idcsLastModifiedBy"></a>

```java
public IdentityDomainsIdentityProviderIdcsLastModifiedByList getIdcsLastModifiedBy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList">IdentityDomainsIdentityProviderIdcsLastModifiedByList</a>

---

##### `idcsLastUpgradedInRelease`<sup>Required</sup> <a name="idcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.idcsLastUpgradedInRelease"></a>

```java
public java.lang.String getIdcsLastUpgradedInRelease();
```

- *Type:* java.lang.String

---

##### `idcsPreventedOperations`<sup>Required</sup> <a name="idcsPreventedOperations" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.idcsPreventedOperations"></a>

```java
public java.util.List<java.lang.String> getIdcsPreventedOperations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `jitUserProvAssignedGroups`<sup>Required</sup> <a name="jitUserProvAssignedGroups" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvAssignedGroups"></a>

```java
public IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList getJitUserProvAssignedGroups();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList">IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList</a>

---

##### `jitUserProvAttributes`<sup>Required</sup> <a name="jitUserProvAttributes" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvAttributes"></a>

```java
public IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference getJitUserProvAttributes();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference">IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference</a>

---

##### `jitUserProvGroupMappings`<sup>Required</sup> <a name="jitUserProvGroupMappings" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvGroupMappings"></a>

```java
public IdentityDomainsIdentityProviderJitUserProvGroupMappingsList getJitUserProvGroupMappings();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList">IdentityDomainsIdentityProviderJitUserProvGroupMappingsList</a>

---

##### `lastNotificationSentTime`<sup>Required</sup> <a name="lastNotificationSentTime" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.lastNotificationSentTime"></a>

```java
public java.lang.String getLastNotificationSentTime();
```

- *Type:* java.lang.String

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.meta"></a>

```java
public IdentityDomainsIdentityProviderMetaList getMeta();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList">IdentityDomainsIdentityProviderMetaList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.tags"></a>

```java
public IdentityDomainsIdentityProviderTagsList getTags();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList">IdentityDomainsIdentityProviderTagsList</a>

---

##### `tenancyOcid`<sup>Required</sup> <a name="tenancyOcid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.tenancyOcid"></a>

```java
public java.lang.String getTenancyOcid();
```

- *Type:* java.lang.String

---

##### `tenantProviderId`<sup>Required</sup> <a name="tenantProviderId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.tenantProviderId"></a>

```java
public java.lang.String getTenantProviderId();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.timeouts"></a>

```java
public IdentityDomainsIdentityProviderTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference">IdentityDomainsIdentityProviderTimeoutsOutputReference</a>

---

##### `urnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider`<sup>Required</sup> <a name="urnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.urnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider"></a>

```java
public IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference getUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference</a>

---

##### `urnietfparamsscimschemasoracleidcsextensionx509IdentityProvider`<sup>Required</sup> <a name="urnietfparamsscimschemasoracleidcsextensionx509IdentityProvider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.urnietfparamsscimschemasoracleidcsextensionx509IdentityProvider"></a>

```java
public IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference getUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference</a>

---

##### `assertionAttributeInput`<sup>Optional</sup> <a name="assertionAttributeInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.assertionAttributeInput"></a>

```java
public java.lang.String getAssertionAttributeInput();
```

- *Type:* java.lang.String

---

##### `attributeSetsInput`<sup>Optional</sup> <a name="attributeSetsInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.attributeSetsInput"></a>

```java
public java.util.List<java.lang.String> getAttributeSetsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.attributesInput"></a>

```java
public java.lang.String getAttributesInput();
```

- *Type:* java.lang.String

---

##### `authnRequestBindingInput`<sup>Optional</sup> <a name="authnRequestBindingInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.authnRequestBindingInput"></a>

```java
public java.lang.String getAuthnRequestBindingInput();
```

- *Type:* java.lang.String

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.authorizationInput"></a>

```java
public java.lang.String getAuthorizationInput();
```

- *Type:* java.lang.String

---

##### `correlationPolicyInput`<sup>Optional</sup> <a name="correlationPolicyInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.correlationPolicyInput"></a>

```java
public IdentityDomainsIdentityProviderCorrelationPolicy getCorrelationPolicyInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicy">IdentityDomainsIdentityProviderCorrelationPolicy</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `encryptionCertificateInput`<sup>Optional</sup> <a name="encryptionCertificateInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.encryptionCertificateInput"></a>

```java
public java.lang.String getEncryptionCertificateInput();
```

- *Type:* java.lang.String

---

##### `externalIdInput`<sup>Optional</sup> <a name="externalIdInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.externalIdInput"></a>

```java
public java.lang.String getExternalIdInput();
```

- *Type:* java.lang.String

---

##### `iconUrlInput`<sup>Optional</sup> <a name="iconUrlInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.iconUrlInput"></a>

```java
public java.lang.String getIconUrlInput();
```

- *Type:* java.lang.String

---

##### `idcsEndpointInput`<sup>Optional</sup> <a name="idcsEndpointInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.idcsEndpointInput"></a>

```java
public java.lang.String getIdcsEndpointInput();
```

- *Type:* java.lang.String

---

##### `idpSsoUrlInput`<sup>Optional</sup> <a name="idpSsoUrlInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.idpSsoUrlInput"></a>

```java
public java.lang.String getIdpSsoUrlInput();
```

- *Type:* java.lang.String

---

##### `includeSigningCertInSignatureInput`<sup>Optional</sup> <a name="includeSigningCertInSignatureInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.includeSigningCertInSignatureInput"></a>

```java
public java.lang.Object getIncludeSigningCertInSignatureInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `jitUserProvAssignedGroupsInput`<sup>Optional</sup> <a name="jitUserProvAssignedGroupsInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvAssignedGroupsInput"></a>

```java
public java.lang.Object getJitUserProvAssignedGroupsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroups">IdentityDomainsIdentityProviderJitUserProvAssignedGroups</a>>

---

##### `jitUserProvAttributesInput`<sup>Optional</sup> <a name="jitUserProvAttributesInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvAttributesInput"></a>

```java
public IdentityDomainsIdentityProviderJitUserProvAttributes getJitUserProvAttributesInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributes">IdentityDomainsIdentityProviderJitUserProvAttributes</a>

---

##### `jitUserProvAttributeUpdateEnabledInput`<sup>Optional</sup> <a name="jitUserProvAttributeUpdateEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvAttributeUpdateEnabledInput"></a>

```java
public java.lang.Object getJitUserProvAttributeUpdateEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `jitUserProvCreateUserEnabledInput`<sup>Optional</sup> <a name="jitUserProvCreateUserEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvCreateUserEnabledInput"></a>

```java
public java.lang.Object getJitUserProvCreateUserEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `jitUserProvEnabledInput`<sup>Optional</sup> <a name="jitUserProvEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvEnabledInput"></a>

```java
public java.lang.Object getJitUserProvEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `jitUserProvGroupAssertionAttributeEnabledInput`<sup>Optional</sup> <a name="jitUserProvGroupAssertionAttributeEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvGroupAssertionAttributeEnabledInput"></a>

```java
public java.lang.Object getJitUserProvGroupAssertionAttributeEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `jitUserProvGroupAssignmentMethodInput`<sup>Optional</sup> <a name="jitUserProvGroupAssignmentMethodInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvGroupAssignmentMethodInput"></a>

```java
public java.lang.String getJitUserProvGroupAssignmentMethodInput();
```

- *Type:* java.lang.String

---

##### `jitUserProvGroupMappingModeInput`<sup>Optional</sup> <a name="jitUserProvGroupMappingModeInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvGroupMappingModeInput"></a>

```java
public java.lang.String getJitUserProvGroupMappingModeInput();
```

- *Type:* java.lang.String

---

##### `jitUserProvGroupMappingsInput`<sup>Optional</sup> <a name="jitUserProvGroupMappingsInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvGroupMappingsInput"></a>

```java
public java.lang.Object getJitUserProvGroupMappingsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappings">IdentityDomainsIdentityProviderJitUserProvGroupMappings</a>>

---

##### `jitUserProvGroupSamlAttributeNameInput`<sup>Optional</sup> <a name="jitUserProvGroupSamlAttributeNameInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvGroupSamlAttributeNameInput"></a>

```java
public java.lang.String getJitUserProvGroupSamlAttributeNameInput();
```

- *Type:* java.lang.String

---

##### `jitUserProvGroupStaticListEnabledInput`<sup>Optional</sup> <a name="jitUserProvGroupStaticListEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvGroupStaticListEnabledInput"></a>

```java
public java.lang.Object getJitUserProvGroupStaticListEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `jitUserProvIgnoreErrorOnAbsentGroupsInput`<sup>Optional</sup> <a name="jitUserProvIgnoreErrorOnAbsentGroupsInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvIgnoreErrorOnAbsentGroupsInput"></a>

```java
public java.lang.Object getJitUserProvIgnoreErrorOnAbsentGroupsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `logoutBindingInput`<sup>Optional</sup> <a name="logoutBindingInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.logoutBindingInput"></a>

```java
public java.lang.String getLogoutBindingInput();
```

- *Type:* java.lang.String

---

##### `logoutEnabledInput`<sup>Optional</sup> <a name="logoutEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.logoutEnabledInput"></a>

```java
public java.lang.Object getLogoutEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `logoutRequestUrlInput`<sup>Optional</sup> <a name="logoutRequestUrlInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.logoutRequestUrlInput"></a>

```java
public java.lang.String getLogoutRequestUrlInput();
```

- *Type:* java.lang.String

---

##### `logoutResponseUrlInput`<sup>Optional</sup> <a name="logoutResponseUrlInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.logoutResponseUrlInput"></a>

```java
public java.lang.String getLogoutResponseUrlInput();
```

- *Type:* java.lang.String

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.metadataInput"></a>

```java
public java.lang.String getMetadataInput();
```

- *Type:* java.lang.String

---

##### `nameIdFormatInput`<sup>Optional</sup> <a name="nameIdFormatInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.nameIdFormatInput"></a>

```java
public java.lang.String getNameIdFormatInput();
```

- *Type:* java.lang.String

---

##### `ocidInput`<sup>Optional</sup> <a name="ocidInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.ocidInput"></a>

```java
public java.lang.String getOcidInput();
```

- *Type:* java.lang.String

---

##### `partnerNameInput`<sup>Optional</sup> <a name="partnerNameInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.partnerNameInput"></a>

```java
public java.lang.String getPartnerNameInput();
```

- *Type:* java.lang.String

---

##### `partnerProviderIdInput`<sup>Optional</sup> <a name="partnerProviderIdInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.partnerProviderIdInput"></a>

```java
public java.lang.String getPartnerProviderIdInput();
```

- *Type:* java.lang.String

---

##### `requestedAuthenticationContextInput`<sup>Optional</sup> <a name="requestedAuthenticationContextInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.requestedAuthenticationContextInput"></a>

```java
public java.util.List<java.lang.String> getRequestedAuthenticationContextInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `requireForceAuthnInput`<sup>Optional</sup> <a name="requireForceAuthnInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.requireForceAuthnInput"></a>

```java
public java.lang.Object getRequireForceAuthnInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `requiresEncryptedAssertionInput`<sup>Optional</sup> <a name="requiresEncryptedAssertionInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.requiresEncryptedAssertionInput"></a>

```java
public java.lang.Object getRequiresEncryptedAssertionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `resourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="resourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.resourceTypeSchemaVersionInput"></a>

```java
public java.lang.String getResourceTypeSchemaVersionInput();
```

- *Type:* java.lang.String

---

##### `samlHoKrequiredInput`<sup>Optional</sup> <a name="samlHoKrequiredInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.samlHoKrequiredInput"></a>

```java
public java.lang.Object getSamlHoKrequiredInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `schemasInput`<sup>Optional</sup> <a name="schemasInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.schemasInput"></a>

```java
public java.util.List<java.lang.String> getSchemasInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceInstanceIdentifierInput`<sup>Optional</sup> <a name="serviceInstanceIdentifierInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.serviceInstanceIdentifierInput"></a>

```java
public java.lang.String getServiceInstanceIdentifierInput();
```

- *Type:* java.lang.String

---

##### `shownOnLoginPageInput`<sup>Optional</sup> <a name="shownOnLoginPageInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.shownOnLoginPageInput"></a>

```java
public java.lang.Object getShownOnLoginPageInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `signatureHashAlgorithmInput`<sup>Optional</sup> <a name="signatureHashAlgorithmInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.signatureHashAlgorithmInput"></a>

```java
public java.lang.String getSignatureHashAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `signingCertificateInput`<sup>Optional</sup> <a name="signingCertificateInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.signingCertificateInput"></a>

```java
public java.lang.String getSigningCertificateInput();
```

- *Type:* java.lang.String

---

##### `succinctIdInput`<sup>Optional</sup> <a name="succinctIdInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.succinctIdInput"></a>

```java
public java.lang.String getSuccinctIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.tagsInput"></a>

```java
public java.lang.Object getTagsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTags">IdentityDomainsIdentityProviderTags</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeouts">IdentityDomainsIdentityProviderTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `urnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderInput`<sup>Optional</sup> <a name="urnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.urnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderInput"></a>

```java
public IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider getUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider</a>

---

##### `urnietfparamsscimschemasoracleidcsextensionx509IdentityProviderInput`<sup>Optional</sup> <a name="urnietfparamsscimschemasoracleidcsextensionx509IdentityProviderInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.urnietfparamsscimschemasoracleidcsextensionx509IdentityProviderInput"></a>

```java
public IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider getUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider</a>

---

##### `userMappingMethodInput`<sup>Optional</sup> <a name="userMappingMethodInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.userMappingMethodInput"></a>

```java
public java.lang.String getUserMappingMethodInput();
```

- *Type:* java.lang.String

---

##### `userMappingStoreAttributeInput`<sup>Optional</sup> <a name="userMappingStoreAttributeInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.userMappingStoreAttributeInput"></a>

```java
public java.lang.String getUserMappingStoreAttributeInput();
```

- *Type:* java.lang.String

---

##### `assertionAttribute`<sup>Required</sup> <a name="assertionAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.assertionAttribute"></a>

```java
public java.lang.String getAssertionAttribute();
```

- *Type:* java.lang.String

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.attributes"></a>

```java
public java.lang.String getAttributes();
```

- *Type:* java.lang.String

---

##### `attributeSets`<sup>Required</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.attributeSets"></a>

```java
public java.util.List<java.lang.String> getAttributeSets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authnRequestBinding`<sup>Required</sup> <a name="authnRequestBinding" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.authnRequestBinding"></a>

```java
public java.lang.String getAuthnRequestBinding();
```

- *Type:* java.lang.String

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.authorization"></a>

```java
public java.lang.String getAuthorization();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `encryptionCertificate`<sup>Required</sup> <a name="encryptionCertificate" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.encryptionCertificate"></a>

```java
public java.lang.String getEncryptionCertificate();
```

- *Type:* java.lang.String

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

---

##### `iconUrl`<sup>Required</sup> <a name="iconUrl" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.iconUrl"></a>

```java
public java.lang.String getIconUrl();
```

- *Type:* java.lang.String

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.idcsEndpoint"></a>

```java
public java.lang.String getIdcsEndpoint();
```

- *Type:* java.lang.String

---

##### `idpSsoUrl`<sup>Required</sup> <a name="idpSsoUrl" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.idpSsoUrl"></a>

```java
public java.lang.String getIdpSsoUrl();
```

- *Type:* java.lang.String

---

##### `includeSigningCertInSignature`<sup>Required</sup> <a name="includeSigningCertInSignature" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.includeSigningCertInSignature"></a>

```java
public java.lang.Object getIncludeSigningCertInSignature();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `jitUserProvAttributeUpdateEnabled`<sup>Required</sup> <a name="jitUserProvAttributeUpdateEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvAttributeUpdateEnabled"></a>

```java
public java.lang.Object getJitUserProvAttributeUpdateEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `jitUserProvCreateUserEnabled`<sup>Required</sup> <a name="jitUserProvCreateUserEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvCreateUserEnabled"></a>

```java
public java.lang.Object getJitUserProvCreateUserEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `jitUserProvEnabled`<sup>Required</sup> <a name="jitUserProvEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvEnabled"></a>

```java
public java.lang.Object getJitUserProvEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `jitUserProvGroupAssertionAttributeEnabled`<sup>Required</sup> <a name="jitUserProvGroupAssertionAttributeEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvGroupAssertionAttributeEnabled"></a>

```java
public java.lang.Object getJitUserProvGroupAssertionAttributeEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `jitUserProvGroupAssignmentMethod`<sup>Required</sup> <a name="jitUserProvGroupAssignmentMethod" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvGroupAssignmentMethod"></a>

```java
public java.lang.String getJitUserProvGroupAssignmentMethod();
```

- *Type:* java.lang.String

---

##### `jitUserProvGroupMappingMode`<sup>Required</sup> <a name="jitUserProvGroupMappingMode" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvGroupMappingMode"></a>

```java
public java.lang.String getJitUserProvGroupMappingMode();
```

- *Type:* java.lang.String

---

##### `jitUserProvGroupSamlAttributeName`<sup>Required</sup> <a name="jitUserProvGroupSamlAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvGroupSamlAttributeName"></a>

```java
public java.lang.String getJitUserProvGroupSamlAttributeName();
```

- *Type:* java.lang.String

---

##### `jitUserProvGroupStaticListEnabled`<sup>Required</sup> <a name="jitUserProvGroupStaticListEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvGroupStaticListEnabled"></a>

```java
public java.lang.Object getJitUserProvGroupStaticListEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `jitUserProvIgnoreErrorOnAbsentGroups`<sup>Required</sup> <a name="jitUserProvIgnoreErrorOnAbsentGroups" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvIgnoreErrorOnAbsentGroups"></a>

```java
public java.lang.Object getJitUserProvIgnoreErrorOnAbsentGroups();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `logoutBinding`<sup>Required</sup> <a name="logoutBinding" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.logoutBinding"></a>

```java
public java.lang.String getLogoutBinding();
```

- *Type:* java.lang.String

---

##### `logoutEnabled`<sup>Required</sup> <a name="logoutEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.logoutEnabled"></a>

```java
public java.lang.Object getLogoutEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `logoutRequestUrl`<sup>Required</sup> <a name="logoutRequestUrl" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.logoutRequestUrl"></a>

```java
public java.lang.String getLogoutRequestUrl();
```

- *Type:* java.lang.String

---

##### `logoutResponseUrl`<sup>Required</sup> <a name="logoutResponseUrl" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.logoutResponseUrl"></a>

```java
public java.lang.String getLogoutResponseUrl();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.metadata"></a>

```java
public java.lang.String getMetadata();
```

- *Type:* java.lang.String

---

##### `nameIdFormat`<sup>Required</sup> <a name="nameIdFormat" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.nameIdFormat"></a>

```java
public java.lang.String getNameIdFormat();
```

- *Type:* java.lang.String

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `partnerName`<sup>Required</sup> <a name="partnerName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.partnerName"></a>

```java
public java.lang.String getPartnerName();
```

- *Type:* java.lang.String

---

##### `partnerProviderId`<sup>Required</sup> <a name="partnerProviderId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.partnerProviderId"></a>

```java
public java.lang.String getPartnerProviderId();
```

- *Type:* java.lang.String

---

##### `requestedAuthenticationContext`<sup>Required</sup> <a name="requestedAuthenticationContext" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.requestedAuthenticationContext"></a>

```java
public java.util.List<java.lang.String> getRequestedAuthenticationContext();
```

- *Type:* java.util.List<java.lang.String>

---

##### `requireForceAuthn`<sup>Required</sup> <a name="requireForceAuthn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.requireForceAuthn"></a>

```java
public java.lang.Object getRequireForceAuthn();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `requiresEncryptedAssertion`<sup>Required</sup> <a name="requiresEncryptedAssertion" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.requiresEncryptedAssertion"></a>

```java
public java.lang.Object getRequiresEncryptedAssertion();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.resourceTypeSchemaVersion"></a>

```java
public java.lang.String getResourceTypeSchemaVersion();
```

- *Type:* java.lang.String

---

##### `samlHoKrequired`<sup>Required</sup> <a name="samlHoKrequired" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.samlHoKrequired"></a>

```java
public java.lang.Object getSamlHoKrequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.schemas"></a>

```java
public java.util.List<java.lang.String> getSchemas();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceInstanceIdentifier`<sup>Required</sup> <a name="serviceInstanceIdentifier" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.serviceInstanceIdentifier"></a>

```java
public java.lang.String getServiceInstanceIdentifier();
```

- *Type:* java.lang.String

---

##### `shownOnLoginPage`<sup>Required</sup> <a name="shownOnLoginPage" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.shownOnLoginPage"></a>

```java
public java.lang.Object getShownOnLoginPage();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `signatureHashAlgorithm`<sup>Required</sup> <a name="signatureHashAlgorithm" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.signatureHashAlgorithm"></a>

```java
public java.lang.String getSignatureHashAlgorithm();
```

- *Type:* java.lang.String

---

##### `signingCertificate`<sup>Required</sup> <a name="signingCertificate" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.signingCertificate"></a>

```java
public java.lang.String getSigningCertificate();
```

- *Type:* java.lang.String

---

##### `succinctId`<sup>Required</sup> <a name="succinctId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.succinctId"></a>

```java
public java.lang.String getSuccinctId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `userMappingMethod`<sup>Required</sup> <a name="userMappingMethod" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.userMappingMethod"></a>

```java
public java.lang.String getUserMappingMethod();
```

- *Type:* java.lang.String

---

##### `userMappingStoreAttribute`<sup>Required</sup> <a name="userMappingStoreAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.userMappingStoreAttribute"></a>

```java
public java.lang.String getUserMappingStoreAttribute();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityDomainsIdentityProviderConfig <a name="IdentityDomainsIdentityProviderConfig" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_identity_provider.IdentityDomainsIdentityProviderConfig;

IdentityDomainsIdentityProviderConfig.builder()
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
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
    .idcsEndpoint(java.lang.String)
    .partnerName(java.lang.String)
    .schemas(java.util.List<java.lang.String>)
//  .assertionAttribute(java.lang.String)
//  .attributes(java.lang.String)
//  .attributeSets(java.util.List<java.lang.String>)
//  .authnRequestBinding(java.lang.String)
//  .authorization(java.lang.String)
//  .correlationPolicy(IdentityDomainsIdentityProviderCorrelationPolicy)
//  .description(java.lang.String)
//  .encryptionCertificate(java.lang.String)
//  .externalId(java.lang.String)
//  .iconUrl(java.lang.String)
//  .idpSsoUrl(java.lang.String)
//  .includeSigningCertInSignature(java.lang.Boolean)
//  .includeSigningCertInSignature(IResolvable)
//  .jitUserProvAssignedGroups(IResolvable)
//  .jitUserProvAssignedGroups(java.util.List<IdentityDomainsIdentityProviderJitUserProvAssignedGroups>)
//  .jitUserProvAttributes(IdentityDomainsIdentityProviderJitUserProvAttributes)
//  .jitUserProvAttributeUpdateEnabled(java.lang.Boolean)
//  .jitUserProvAttributeUpdateEnabled(IResolvable)
//  .jitUserProvCreateUserEnabled(java.lang.Boolean)
//  .jitUserProvCreateUserEnabled(IResolvable)
//  .jitUserProvEnabled(java.lang.Boolean)
//  .jitUserProvEnabled(IResolvable)
//  .jitUserProvGroupAssertionAttributeEnabled(java.lang.Boolean)
//  .jitUserProvGroupAssertionAttributeEnabled(IResolvable)
//  .jitUserProvGroupAssignmentMethod(java.lang.String)
//  .jitUserProvGroupMappingMode(java.lang.String)
//  .jitUserProvGroupMappings(IResolvable)
//  .jitUserProvGroupMappings(java.util.List<IdentityDomainsIdentityProviderJitUserProvGroupMappings>)
//  .jitUserProvGroupSamlAttributeName(java.lang.String)
//  .jitUserProvGroupStaticListEnabled(java.lang.Boolean)
//  .jitUserProvGroupStaticListEnabled(IResolvable)
//  .jitUserProvIgnoreErrorOnAbsentGroups(java.lang.Boolean)
//  .jitUserProvIgnoreErrorOnAbsentGroups(IResolvable)
//  .logoutBinding(java.lang.String)
//  .logoutEnabled(java.lang.Boolean)
//  .logoutEnabled(IResolvable)
//  .logoutRequestUrl(java.lang.String)
//  .logoutResponseUrl(java.lang.String)
//  .metadata(java.lang.String)
//  .nameIdFormat(java.lang.String)
//  .ocid(java.lang.String)
//  .partnerProviderId(java.lang.String)
//  .requestedAuthenticationContext(java.util.List<java.lang.String>)
//  .requireForceAuthn(java.lang.Boolean)
//  .requireForceAuthn(IResolvable)
//  .requiresEncryptedAssertion(java.lang.Boolean)
//  .requiresEncryptedAssertion(IResolvable)
//  .resourceTypeSchemaVersion(java.lang.String)
//  .samlHoKrequired(java.lang.Boolean)
//  .samlHoKrequired(IResolvable)
//  .serviceInstanceIdentifier(java.lang.String)
//  .shownOnLoginPage(java.lang.Boolean)
//  .shownOnLoginPage(IResolvable)
//  .signatureHashAlgorithm(java.lang.String)
//  .signingCertificate(java.lang.String)
//  .succinctId(java.lang.String)
//  .tags(IResolvable)
//  .tags(java.util.List<IdentityDomainsIdentityProviderTags>)
//  .timeouts(IdentityDomainsIdentityProviderTimeouts)
//  .type(java.lang.String)
//  .urnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider(IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider)
//  .urnietfparamsscimschemasoracleidcsextensionx509IdentityProvider(IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider)
//  .userMappingMethod(java.lang.String)
//  .userMappingStoreAttribute(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#enabled IdentityDomainsIdentityProvider#enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.idcsEndpoint">idcsEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#idcs_endpoint IdentityDomainsIdentityProvider#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.partnerName">partnerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#partner_name IdentityDomainsIdentityProvider#partner_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.schemas">schemas</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#schemas IdentityDomainsIdentityProvider#schemas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.assertionAttribute">assertionAttribute</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#assertion_attribute IdentityDomainsIdentityProvider#assertion_attribute}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.attributes">attributes</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#attributes IdentityDomainsIdentityProvider#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.attributeSets">attributeSets</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#attribute_sets IdentityDomainsIdentityProvider#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.authnRequestBinding">authnRequestBinding</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#authn_request_binding IdentityDomainsIdentityProvider#authn_request_binding}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.authorization">authorization</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#authorization IdentityDomainsIdentityProvider#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.correlationPolicy">correlationPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicy">IdentityDomainsIdentityProviderCorrelationPolicy</a></code> | correlation_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#description IdentityDomainsIdentityProvider#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.encryptionCertificate">encryptionCertificate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#encryption_certificate IdentityDomainsIdentityProvider#encryption_certificate}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.externalId">externalId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#external_id IdentityDomainsIdentityProvider#external_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.iconUrl">iconUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#icon_url IdentityDomainsIdentityProvider#icon_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.idpSsoUrl">idpSsoUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#idp_sso_url IdentityDomainsIdentityProvider#idp_sso_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.includeSigningCertInSignature">includeSigningCertInSignature</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#include_signing_cert_in_signature IdentityDomainsIdentityProvider#include_signing_cert_in_signature}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.jitUserProvAssignedGroups">jitUserProvAssignedGroups</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroups">IdentityDomainsIdentityProviderJitUserProvAssignedGroups</a>></code> | jit_user_prov_assigned_groups block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.jitUserProvAttributes">jitUserProvAttributes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributes">IdentityDomainsIdentityProviderJitUserProvAttributes</a></code> | jit_user_prov_attributes block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.jitUserProvAttributeUpdateEnabled">jitUserProvAttributeUpdateEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_attribute_update_enabled IdentityDomainsIdentityProvider#jit_user_prov_attribute_update_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.jitUserProvCreateUserEnabled">jitUserProvCreateUserEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_create_user_enabled IdentityDomainsIdentityProvider#jit_user_prov_create_user_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.jitUserProvEnabled">jitUserProvEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_enabled IdentityDomainsIdentityProvider#jit_user_prov_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.jitUserProvGroupAssertionAttributeEnabled">jitUserProvGroupAssertionAttributeEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_group_assertion_attribute_enabled IdentityDomainsIdentityProvider#jit_user_prov_group_assertion_attribute_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.jitUserProvGroupAssignmentMethod">jitUserProvGroupAssignmentMethod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_group_assignment_method IdentityDomainsIdentityProvider#jit_user_prov_group_assignment_method}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.jitUserProvGroupMappingMode">jitUserProvGroupMappingMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_group_mapping_mode IdentityDomainsIdentityProvider#jit_user_prov_group_mapping_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.jitUserProvGroupMappings">jitUserProvGroupMappings</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappings">IdentityDomainsIdentityProviderJitUserProvGroupMappings</a>></code> | jit_user_prov_group_mappings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.jitUserProvGroupSamlAttributeName">jitUserProvGroupSamlAttributeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_group_saml_attribute_name IdentityDomainsIdentityProvider#jit_user_prov_group_saml_attribute_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.jitUserProvGroupStaticListEnabled">jitUserProvGroupStaticListEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_group_static_list_enabled IdentityDomainsIdentityProvider#jit_user_prov_group_static_list_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.jitUserProvIgnoreErrorOnAbsentGroups">jitUserProvIgnoreErrorOnAbsentGroups</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_ignore_error_on_absent_groups IdentityDomainsIdentityProvider#jit_user_prov_ignore_error_on_absent_groups}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.logoutBinding">logoutBinding</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#logout_binding IdentityDomainsIdentityProvider#logout_binding}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.logoutEnabled">logoutEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#logout_enabled IdentityDomainsIdentityProvider#logout_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.logoutRequestUrl">logoutRequestUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#logout_request_url IdentityDomainsIdentityProvider#logout_request_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.logoutResponseUrl">logoutResponseUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#logout_response_url IdentityDomainsIdentityProvider#logout_response_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.metadata">metadata</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#metadata IdentityDomainsIdentityProvider#metadata}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.nameIdFormat">nameIdFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#name_id_format IdentityDomainsIdentityProvider#name_id_format}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.ocid">ocid</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#ocid IdentityDomainsIdentityProvider#ocid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.partnerProviderId">partnerProviderId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#partner_provider_id IdentityDomainsIdentityProvider#partner_provider_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.requestedAuthenticationContext">requestedAuthenticationContext</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#requested_authentication_context IdentityDomainsIdentityProvider#requested_authentication_context}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.requireForceAuthn">requireForceAuthn</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#require_force_authn IdentityDomainsIdentityProvider#require_force_authn}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.requiresEncryptedAssertion">requiresEncryptedAssertion</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#requires_encrypted_assertion IdentityDomainsIdentityProvider#requires_encrypted_assertion}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#resource_type_schema_version IdentityDomainsIdentityProvider#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.samlHoKrequired">samlHoKrequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#saml_ho_krequired IdentityDomainsIdentityProvider#saml_ho_krequired}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.serviceInstanceIdentifier">serviceInstanceIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#service_instance_identifier IdentityDomainsIdentityProvider#service_instance_identifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.shownOnLoginPage">shownOnLoginPage</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#shown_on_login_page IdentityDomainsIdentityProvider#shown_on_login_page}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.signatureHashAlgorithm">signatureHashAlgorithm</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#signature_hash_algorithm IdentityDomainsIdentityProvider#signature_hash_algorithm}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.signingCertificate">signingCertificate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#signing_certificate IdentityDomainsIdentityProvider#signing_certificate}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.succinctId">succinctId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#succinct_id IdentityDomainsIdentityProvider#succinct_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.tags">tags</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTags">IdentityDomainsIdentityProviderTags</a>></code> | tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeouts">IdentityDomainsIdentityProviderTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#type IdentityDomainsIdentityProvider#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.urnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider">urnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider</a></code> | urnietfparamsscimschemasoracleidcsextensionsocial_identity_provider block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.urnietfparamsscimschemasoracleidcsextensionx509IdentityProvider">urnietfparamsscimschemasoracleidcsextensionx509IdentityProvider</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider</a></code> | urnietfparamsscimschemasoracleidcsextensionx509identity_provider block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.userMappingMethod">userMappingMethod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#user_mapping_method IdentityDomainsIdentityProvider#user_mapping_method}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.userMappingStoreAttribute">userMappingStoreAttribute</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#user_mapping_store_attribute IdentityDomainsIdentityProvider#user_mapping_store_attribute}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#enabled IdentityDomainsIdentityProvider#enabled}.

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.idcsEndpoint"></a>

```java
public java.lang.String getIdcsEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#idcs_endpoint IdentityDomainsIdentityProvider#idcs_endpoint}.

---

##### `partnerName`<sup>Required</sup> <a name="partnerName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.partnerName"></a>

```java
public java.lang.String getPartnerName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#partner_name IdentityDomainsIdentityProvider#partner_name}.

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.schemas"></a>

```java
public java.util.List<java.lang.String> getSchemas();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#schemas IdentityDomainsIdentityProvider#schemas}.

---

##### `assertionAttribute`<sup>Optional</sup> <a name="assertionAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.assertionAttribute"></a>

```java
public java.lang.String getAssertionAttribute();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#assertion_attribute IdentityDomainsIdentityProvider#assertion_attribute}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.attributes"></a>

```java
public java.lang.String getAttributes();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#attributes IdentityDomainsIdentityProvider#attributes}.

---

##### `attributeSets`<sup>Optional</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.attributeSets"></a>

```java
public java.util.List<java.lang.String> getAttributeSets();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#attribute_sets IdentityDomainsIdentityProvider#attribute_sets}.

---

##### `authnRequestBinding`<sup>Optional</sup> <a name="authnRequestBinding" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.authnRequestBinding"></a>

```java
public java.lang.String getAuthnRequestBinding();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#authn_request_binding IdentityDomainsIdentityProvider#authn_request_binding}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.authorization"></a>

```java
public java.lang.String getAuthorization();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#authorization IdentityDomainsIdentityProvider#authorization}.

---

##### `correlationPolicy`<sup>Optional</sup> <a name="correlationPolicy" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.correlationPolicy"></a>

```java
public IdentityDomainsIdentityProviderCorrelationPolicy getCorrelationPolicy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicy">IdentityDomainsIdentityProviderCorrelationPolicy</a>

correlation_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#correlation_policy IdentityDomainsIdentityProvider#correlation_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#description IdentityDomainsIdentityProvider#description}.

---

##### `encryptionCertificate`<sup>Optional</sup> <a name="encryptionCertificate" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.encryptionCertificate"></a>

```java
public java.lang.String getEncryptionCertificate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#encryption_certificate IdentityDomainsIdentityProvider#encryption_certificate}.

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#external_id IdentityDomainsIdentityProvider#external_id}.

---

##### `iconUrl`<sup>Optional</sup> <a name="iconUrl" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.iconUrl"></a>

```java
public java.lang.String getIconUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#icon_url IdentityDomainsIdentityProvider#icon_url}.

---

##### `idpSsoUrl`<sup>Optional</sup> <a name="idpSsoUrl" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.idpSsoUrl"></a>

```java
public java.lang.String getIdpSsoUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#idp_sso_url IdentityDomainsIdentityProvider#idp_sso_url}.

---

##### `includeSigningCertInSignature`<sup>Optional</sup> <a name="includeSigningCertInSignature" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.includeSigningCertInSignature"></a>

```java
public java.lang.Object getIncludeSigningCertInSignature();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#include_signing_cert_in_signature IdentityDomainsIdentityProvider#include_signing_cert_in_signature}.

---

##### `jitUserProvAssignedGroups`<sup>Optional</sup> <a name="jitUserProvAssignedGroups" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.jitUserProvAssignedGroups"></a>

```java
public java.lang.Object getJitUserProvAssignedGroups();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroups">IdentityDomainsIdentityProviderJitUserProvAssignedGroups</a>>

jit_user_prov_assigned_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_assigned_groups IdentityDomainsIdentityProvider#jit_user_prov_assigned_groups}

---

##### `jitUserProvAttributes`<sup>Optional</sup> <a name="jitUserProvAttributes" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.jitUserProvAttributes"></a>

```java
public IdentityDomainsIdentityProviderJitUserProvAttributes getJitUserProvAttributes();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributes">IdentityDomainsIdentityProviderJitUserProvAttributes</a>

jit_user_prov_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_attributes IdentityDomainsIdentityProvider#jit_user_prov_attributes}

---

##### `jitUserProvAttributeUpdateEnabled`<sup>Optional</sup> <a name="jitUserProvAttributeUpdateEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.jitUserProvAttributeUpdateEnabled"></a>

```java
public java.lang.Object getJitUserProvAttributeUpdateEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_attribute_update_enabled IdentityDomainsIdentityProvider#jit_user_prov_attribute_update_enabled}.

---

##### `jitUserProvCreateUserEnabled`<sup>Optional</sup> <a name="jitUserProvCreateUserEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.jitUserProvCreateUserEnabled"></a>

```java
public java.lang.Object getJitUserProvCreateUserEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_create_user_enabled IdentityDomainsIdentityProvider#jit_user_prov_create_user_enabled}.

---

##### `jitUserProvEnabled`<sup>Optional</sup> <a name="jitUserProvEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.jitUserProvEnabled"></a>

```java
public java.lang.Object getJitUserProvEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_enabled IdentityDomainsIdentityProvider#jit_user_prov_enabled}.

---

##### `jitUserProvGroupAssertionAttributeEnabled`<sup>Optional</sup> <a name="jitUserProvGroupAssertionAttributeEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.jitUserProvGroupAssertionAttributeEnabled"></a>

```java
public java.lang.Object getJitUserProvGroupAssertionAttributeEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_group_assertion_attribute_enabled IdentityDomainsIdentityProvider#jit_user_prov_group_assertion_attribute_enabled}.

---

##### `jitUserProvGroupAssignmentMethod`<sup>Optional</sup> <a name="jitUserProvGroupAssignmentMethod" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.jitUserProvGroupAssignmentMethod"></a>

```java
public java.lang.String getJitUserProvGroupAssignmentMethod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_group_assignment_method IdentityDomainsIdentityProvider#jit_user_prov_group_assignment_method}.

---

##### `jitUserProvGroupMappingMode`<sup>Optional</sup> <a name="jitUserProvGroupMappingMode" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.jitUserProvGroupMappingMode"></a>

```java
public java.lang.String getJitUserProvGroupMappingMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_group_mapping_mode IdentityDomainsIdentityProvider#jit_user_prov_group_mapping_mode}.

---

##### `jitUserProvGroupMappings`<sup>Optional</sup> <a name="jitUserProvGroupMappings" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.jitUserProvGroupMappings"></a>

```java
public java.lang.Object getJitUserProvGroupMappings();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappings">IdentityDomainsIdentityProviderJitUserProvGroupMappings</a>>

jit_user_prov_group_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_group_mappings IdentityDomainsIdentityProvider#jit_user_prov_group_mappings}

---

##### `jitUserProvGroupSamlAttributeName`<sup>Optional</sup> <a name="jitUserProvGroupSamlAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.jitUserProvGroupSamlAttributeName"></a>

```java
public java.lang.String getJitUserProvGroupSamlAttributeName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_group_saml_attribute_name IdentityDomainsIdentityProvider#jit_user_prov_group_saml_attribute_name}.

---

##### `jitUserProvGroupStaticListEnabled`<sup>Optional</sup> <a name="jitUserProvGroupStaticListEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.jitUserProvGroupStaticListEnabled"></a>

```java
public java.lang.Object getJitUserProvGroupStaticListEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_group_static_list_enabled IdentityDomainsIdentityProvider#jit_user_prov_group_static_list_enabled}.

---

##### `jitUserProvIgnoreErrorOnAbsentGroups`<sup>Optional</sup> <a name="jitUserProvIgnoreErrorOnAbsentGroups" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.jitUserProvIgnoreErrorOnAbsentGroups"></a>

```java
public java.lang.Object getJitUserProvIgnoreErrorOnAbsentGroups();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_ignore_error_on_absent_groups IdentityDomainsIdentityProvider#jit_user_prov_ignore_error_on_absent_groups}.

---

##### `logoutBinding`<sup>Optional</sup> <a name="logoutBinding" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.logoutBinding"></a>

```java
public java.lang.String getLogoutBinding();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#logout_binding IdentityDomainsIdentityProvider#logout_binding}.

---

##### `logoutEnabled`<sup>Optional</sup> <a name="logoutEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.logoutEnabled"></a>

```java
public java.lang.Object getLogoutEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#logout_enabled IdentityDomainsIdentityProvider#logout_enabled}.

---

##### `logoutRequestUrl`<sup>Optional</sup> <a name="logoutRequestUrl" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.logoutRequestUrl"></a>

```java
public java.lang.String getLogoutRequestUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#logout_request_url IdentityDomainsIdentityProvider#logout_request_url}.

---

##### `logoutResponseUrl`<sup>Optional</sup> <a name="logoutResponseUrl" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.logoutResponseUrl"></a>

```java
public java.lang.String getLogoutResponseUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#logout_response_url IdentityDomainsIdentityProvider#logout_response_url}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.metadata"></a>

```java
public java.lang.String getMetadata();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#metadata IdentityDomainsIdentityProvider#metadata}.

---

##### `nameIdFormat`<sup>Optional</sup> <a name="nameIdFormat" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.nameIdFormat"></a>

```java
public java.lang.String getNameIdFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#name_id_format IdentityDomainsIdentityProvider#name_id_format}.

---

##### `ocid`<sup>Optional</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#ocid IdentityDomainsIdentityProvider#ocid}.

---

##### `partnerProviderId`<sup>Optional</sup> <a name="partnerProviderId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.partnerProviderId"></a>

```java
public java.lang.String getPartnerProviderId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#partner_provider_id IdentityDomainsIdentityProvider#partner_provider_id}.

---

##### `requestedAuthenticationContext`<sup>Optional</sup> <a name="requestedAuthenticationContext" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.requestedAuthenticationContext"></a>

```java
public java.util.List<java.lang.String> getRequestedAuthenticationContext();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#requested_authentication_context IdentityDomainsIdentityProvider#requested_authentication_context}.

---

##### `requireForceAuthn`<sup>Optional</sup> <a name="requireForceAuthn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.requireForceAuthn"></a>

```java
public java.lang.Object getRequireForceAuthn();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#require_force_authn IdentityDomainsIdentityProvider#require_force_authn}.

---

##### `requiresEncryptedAssertion`<sup>Optional</sup> <a name="requiresEncryptedAssertion" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.requiresEncryptedAssertion"></a>

```java
public java.lang.Object getRequiresEncryptedAssertion();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#requires_encrypted_assertion IdentityDomainsIdentityProvider#requires_encrypted_assertion}.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.resourceTypeSchemaVersion"></a>

```java
public java.lang.String getResourceTypeSchemaVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#resource_type_schema_version IdentityDomainsIdentityProvider#resource_type_schema_version}.

---

##### `samlHoKrequired`<sup>Optional</sup> <a name="samlHoKrequired" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.samlHoKrequired"></a>

```java
public java.lang.Object getSamlHoKrequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#saml_ho_krequired IdentityDomainsIdentityProvider#saml_ho_krequired}.

---

##### `serviceInstanceIdentifier`<sup>Optional</sup> <a name="serviceInstanceIdentifier" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.serviceInstanceIdentifier"></a>

```java
public java.lang.String getServiceInstanceIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#service_instance_identifier IdentityDomainsIdentityProvider#service_instance_identifier}.

---

##### `shownOnLoginPage`<sup>Optional</sup> <a name="shownOnLoginPage" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.shownOnLoginPage"></a>

```java
public java.lang.Object getShownOnLoginPage();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#shown_on_login_page IdentityDomainsIdentityProvider#shown_on_login_page}.

---

##### `signatureHashAlgorithm`<sup>Optional</sup> <a name="signatureHashAlgorithm" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.signatureHashAlgorithm"></a>

```java
public java.lang.String getSignatureHashAlgorithm();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#signature_hash_algorithm IdentityDomainsIdentityProvider#signature_hash_algorithm}.

---

##### `signingCertificate`<sup>Optional</sup> <a name="signingCertificate" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.signingCertificate"></a>

```java
public java.lang.String getSigningCertificate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#signing_certificate IdentityDomainsIdentityProvider#signing_certificate}.

---

##### `succinctId`<sup>Optional</sup> <a name="succinctId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.succinctId"></a>

```java
public java.lang.String getSuccinctId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#succinct_id IdentityDomainsIdentityProvider#succinct_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.tags"></a>

```java
public java.lang.Object getTags();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTags">IdentityDomainsIdentityProviderTags</a>>

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#tags IdentityDomainsIdentityProvider#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.timeouts"></a>

```java
public IdentityDomainsIdentityProviderTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeouts">IdentityDomainsIdentityProviderTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#timeouts IdentityDomainsIdentityProvider#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#type IdentityDomainsIdentityProvider#type}.

---

##### `urnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider`<sup>Optional</sup> <a name="urnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.urnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider"></a>

```java
public IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider getUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider</a>

urnietfparamsscimschemasoracleidcsextensionsocial_identity_provider block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#urnietfparamsscimschemasoracleidcsextensionsocial_identity_provider IdentityDomainsIdentityProvider#urnietfparamsscimschemasoracleidcsextensionsocial_identity_provider}

---

##### `urnietfparamsscimschemasoracleidcsextensionx509IdentityProvider`<sup>Optional</sup> <a name="urnietfparamsscimschemasoracleidcsextensionx509IdentityProvider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.urnietfparamsscimschemasoracleidcsextensionx509IdentityProvider"></a>

```java
public IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider getUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider</a>

urnietfparamsscimschemasoracleidcsextensionx509identity_provider block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#urnietfparamsscimschemasoracleidcsextensionx509identity_provider IdentityDomainsIdentityProvider#urnietfparamsscimschemasoracleidcsextensionx509identity_provider}

---

##### `userMappingMethod`<sup>Optional</sup> <a name="userMappingMethod" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.userMappingMethod"></a>

```java
public java.lang.String getUserMappingMethod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#user_mapping_method IdentityDomainsIdentityProvider#user_mapping_method}.

---

##### `userMappingStoreAttribute`<sup>Optional</sup> <a name="userMappingStoreAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.userMappingStoreAttribute"></a>

```java
public java.lang.String getUserMappingStoreAttribute();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#user_mapping_store_attribute IdentityDomainsIdentityProvider#user_mapping_store_attribute}.

---

### IdentityDomainsIdentityProviderCorrelationPolicy <a name="IdentityDomainsIdentityProviderCorrelationPolicy" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_identity_provider.IdentityDomainsIdentityProviderCorrelationPolicy;

IdentityDomainsIdentityProviderCorrelationPolicy.builder()
    .type(java.lang.String)
    .value(java.lang.String)
//  .display(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicy.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#type IdentityDomainsIdentityProvider#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicy.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#value IdentityDomainsIdentityProvider#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicy.property.display">display</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#display IdentityDomainsIdentityProvider#display}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicy.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#type IdentityDomainsIdentityProvider#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicy.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#value IdentityDomainsIdentityProvider#value}.

---

##### `display`<sup>Optional</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicy.property.display"></a>

```java
public java.lang.String getDisplay();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#display IdentityDomainsIdentityProvider#display}.

---

### IdentityDomainsIdentityProviderIdcsCreatedBy <a name="IdentityDomainsIdentityProviderIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedBy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_identity_provider.IdentityDomainsIdentityProviderIdcsCreatedBy;

IdentityDomainsIdentityProviderIdcsCreatedBy.builder()
    .build();
```


### IdentityDomainsIdentityProviderIdcsLastModifiedBy <a name="IdentityDomainsIdentityProviderIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedBy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_identity_provider.IdentityDomainsIdentityProviderIdcsLastModifiedBy;

IdentityDomainsIdentityProviderIdcsLastModifiedBy.builder()
    .build();
```


### IdentityDomainsIdentityProviderJitUserProvAssignedGroups <a name="IdentityDomainsIdentityProviderJitUserProvAssignedGroups" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroups.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_identity_provider.IdentityDomainsIdentityProviderJitUserProvAssignedGroups;

IdentityDomainsIdentityProviderJitUserProvAssignedGroups.builder()
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroups.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#value IdentityDomainsIdentityProvider#value}. |

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroups.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#value IdentityDomainsIdentityProvider#value}.

---

### IdentityDomainsIdentityProviderJitUserProvAttributes <a name="IdentityDomainsIdentityProviderJitUserProvAttributes" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_identity_provider.IdentityDomainsIdentityProviderJitUserProvAttributes;

IdentityDomainsIdentityProviderJitUserProvAttributes.builder()
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributes.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#value IdentityDomainsIdentityProvider#value}. |

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributes.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#value IdentityDomainsIdentityProvider#value}.

---

### IdentityDomainsIdentityProviderJitUserProvGroupMappings <a name="IdentityDomainsIdentityProviderJitUserProvGroupMappings" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_identity_provider.IdentityDomainsIdentityProviderJitUserProvGroupMappings;

IdentityDomainsIdentityProviderJitUserProvGroupMappings.builder()
    .idpGroup(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappings.property.idpGroup">idpGroup</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#idp_group IdentityDomainsIdentityProvider#idp_group}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappings.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#value IdentityDomainsIdentityProvider#value}. |

---

##### `idpGroup`<sup>Required</sup> <a name="idpGroup" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappings.property.idpGroup"></a>

```java
public java.lang.String getIdpGroup();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#idp_group IdentityDomainsIdentityProvider#idp_group}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappings.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#value IdentityDomainsIdentityProvider#value}.

---

### IdentityDomainsIdentityProviderMeta <a name="IdentityDomainsIdentityProviderMeta" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMeta.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_identity_provider.IdentityDomainsIdentityProviderMeta;

IdentityDomainsIdentityProviderMeta.builder()
    .build();
```


### IdentityDomainsIdentityProviderTags <a name="IdentityDomainsIdentityProviderTags" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_identity_provider.IdentityDomainsIdentityProviderTags;

IdentityDomainsIdentityProviderTags.builder()
    .key(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#key IdentityDomainsIdentityProvider#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#value IdentityDomainsIdentityProvider#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#key IdentityDomainsIdentityProvider#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#value IdentityDomainsIdentityProvider#value}.

---

### IdentityDomainsIdentityProviderTimeouts <a name="IdentityDomainsIdentityProviderTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_identity_provider.IdentityDomainsIdentityProviderTimeouts;

IdentityDomainsIdentityProviderTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#create IdentityDomainsIdentityProvider#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#delete IdentityDomainsIdentityProvider#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#update IdentityDomainsIdentityProvider#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#create IdentityDomainsIdentityProvider#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#delete IdentityDomainsIdentityProvider#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#update IdentityDomainsIdentityProvider#update}.

---

### IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider <a name="IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_identity_provider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider;

IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.builder()
    .accountLinkingEnabled(java.lang.Boolean)
    .accountLinkingEnabled(IResolvable)
    .consumerKey(java.lang.String)
    .consumerSecret(java.lang.String)
    .registrationEnabled(java.lang.Boolean)
    .registrationEnabled(IResolvable)
    .serviceProviderName(java.lang.String)
//  .accessTokenUrl(java.lang.String)
//  .adminScope(java.util.List<java.lang.String>)
//  .authzUrl(java.lang.String)
//  .autoRedirectEnabled(java.lang.Boolean)
//  .autoRedirectEnabled(IResolvable)
//  .clientCredentialInPayload(java.lang.Boolean)
//  .clientCredentialInPayload(IResolvable)
//  .clockSkewInSeconds(java.lang.Number)
//  .discoveryUrl(java.lang.String)
//  .idAttribute(java.lang.String)
//  .jitProvAssignedGroups(IResolvable)
//  .jitProvAssignedGroups(java.util.List<IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups>)
//  .jitProvGroupStaticListEnabled(java.lang.Boolean)
//  .jitProvGroupStaticListEnabled(IResolvable)
//  .profileUrl(java.lang.String)
//  .redirectUrl(java.lang.String)
//  .scope(java.util.List<java.lang.String>)
//  .socialJitProvisioningEnabled(java.lang.Boolean)
//  .socialJitProvisioningEnabled(IResolvable)
//  .status(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.accountLinkingEnabled">accountLinkingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#account_linking_enabled IdentityDomainsIdentityProvider#account_linking_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.consumerKey">consumerKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#consumer_key IdentityDomainsIdentityProvider#consumer_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.consumerSecret">consumerSecret</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#consumer_secret IdentityDomainsIdentityProvider#consumer_secret}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.registrationEnabled">registrationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#registration_enabled IdentityDomainsIdentityProvider#registration_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.serviceProviderName">serviceProviderName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#service_provider_name IdentityDomainsIdentityProvider#service_provider_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.accessTokenUrl">accessTokenUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#access_token_url IdentityDomainsIdentityProvider#access_token_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.adminScope">adminScope</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#admin_scope IdentityDomainsIdentityProvider#admin_scope}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.authzUrl">authzUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#authz_url IdentityDomainsIdentityProvider#authz_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.autoRedirectEnabled">autoRedirectEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#auto_redirect_enabled IdentityDomainsIdentityProvider#auto_redirect_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.clientCredentialInPayload">clientCredentialInPayload</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#client_credential_in_payload IdentityDomainsIdentityProvider#client_credential_in_payload}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.clockSkewInSeconds">clockSkewInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#clock_skew_in_seconds IdentityDomainsIdentityProvider#clock_skew_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.discoveryUrl">discoveryUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#discovery_url IdentityDomainsIdentityProvider#discovery_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.idAttribute">idAttribute</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#id_attribute IdentityDomainsIdentityProvider#id_attribute}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.jitProvAssignedGroups">jitProvAssignedGroups</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups</a>></code> | jit_prov_assigned_groups block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.jitProvGroupStaticListEnabled">jitProvGroupStaticListEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_prov_group_static_list_enabled IdentityDomainsIdentityProvider#jit_prov_group_static_list_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.profileUrl">profileUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#profile_url IdentityDomainsIdentityProvider#profile_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.redirectUrl">redirectUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#redirect_url IdentityDomainsIdentityProvider#redirect_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.scope">scope</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#scope IdentityDomainsIdentityProvider#scope}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.socialJitProvisioningEnabled">socialJitProvisioningEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#social_jit_provisioning_enabled IdentityDomainsIdentityProvider#social_jit_provisioning_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#status IdentityDomainsIdentityProvider#status}. |

---

##### `accountLinkingEnabled`<sup>Required</sup> <a name="accountLinkingEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.accountLinkingEnabled"></a>

```java
public java.lang.Object getAccountLinkingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#account_linking_enabled IdentityDomainsIdentityProvider#account_linking_enabled}.

---

##### `consumerKey`<sup>Required</sup> <a name="consumerKey" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.consumerKey"></a>

```java
public java.lang.String getConsumerKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#consumer_key IdentityDomainsIdentityProvider#consumer_key}.

---

##### `consumerSecret`<sup>Required</sup> <a name="consumerSecret" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.consumerSecret"></a>

```java
public java.lang.String getConsumerSecret();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#consumer_secret IdentityDomainsIdentityProvider#consumer_secret}.

---

##### `registrationEnabled`<sup>Required</sup> <a name="registrationEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.registrationEnabled"></a>

```java
public java.lang.Object getRegistrationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#registration_enabled IdentityDomainsIdentityProvider#registration_enabled}.

---

##### `serviceProviderName`<sup>Required</sup> <a name="serviceProviderName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.serviceProviderName"></a>

```java
public java.lang.String getServiceProviderName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#service_provider_name IdentityDomainsIdentityProvider#service_provider_name}.

---

##### `accessTokenUrl`<sup>Optional</sup> <a name="accessTokenUrl" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.accessTokenUrl"></a>

```java
public java.lang.String getAccessTokenUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#access_token_url IdentityDomainsIdentityProvider#access_token_url}.

---

##### `adminScope`<sup>Optional</sup> <a name="adminScope" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.adminScope"></a>

```java
public java.util.List<java.lang.String> getAdminScope();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#admin_scope IdentityDomainsIdentityProvider#admin_scope}.

---

##### `authzUrl`<sup>Optional</sup> <a name="authzUrl" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.authzUrl"></a>

```java
public java.lang.String getAuthzUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#authz_url IdentityDomainsIdentityProvider#authz_url}.

---

##### `autoRedirectEnabled`<sup>Optional</sup> <a name="autoRedirectEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.autoRedirectEnabled"></a>

```java
public java.lang.Object getAutoRedirectEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#auto_redirect_enabled IdentityDomainsIdentityProvider#auto_redirect_enabled}.

---

##### `clientCredentialInPayload`<sup>Optional</sup> <a name="clientCredentialInPayload" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.clientCredentialInPayload"></a>

```java
public java.lang.Object getClientCredentialInPayload();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#client_credential_in_payload IdentityDomainsIdentityProvider#client_credential_in_payload}.

---

##### `clockSkewInSeconds`<sup>Optional</sup> <a name="clockSkewInSeconds" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.clockSkewInSeconds"></a>

```java
public java.lang.Number getClockSkewInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#clock_skew_in_seconds IdentityDomainsIdentityProvider#clock_skew_in_seconds}.

---

##### `discoveryUrl`<sup>Optional</sup> <a name="discoveryUrl" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.discoveryUrl"></a>

```java
public java.lang.String getDiscoveryUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#discovery_url IdentityDomainsIdentityProvider#discovery_url}.

---

##### `idAttribute`<sup>Optional</sup> <a name="idAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.idAttribute"></a>

```java
public java.lang.String getIdAttribute();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#id_attribute IdentityDomainsIdentityProvider#id_attribute}.

---

##### `jitProvAssignedGroups`<sup>Optional</sup> <a name="jitProvAssignedGroups" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.jitProvAssignedGroups"></a>

```java
public java.lang.Object getJitProvAssignedGroups();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups</a>>

jit_prov_assigned_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_prov_assigned_groups IdentityDomainsIdentityProvider#jit_prov_assigned_groups}

---

##### `jitProvGroupStaticListEnabled`<sup>Optional</sup> <a name="jitProvGroupStaticListEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.jitProvGroupStaticListEnabled"></a>

```java
public java.lang.Object getJitProvGroupStaticListEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_prov_group_static_list_enabled IdentityDomainsIdentityProvider#jit_prov_group_static_list_enabled}.

---

##### `profileUrl`<sup>Optional</sup> <a name="profileUrl" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.profileUrl"></a>

```java
public java.lang.String getProfileUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#profile_url IdentityDomainsIdentityProvider#profile_url}.

---

##### `redirectUrl`<sup>Optional</sup> <a name="redirectUrl" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.redirectUrl"></a>

```java
public java.lang.String getRedirectUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#redirect_url IdentityDomainsIdentityProvider#redirect_url}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.scope"></a>

```java
public java.util.List<java.lang.String> getScope();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#scope IdentityDomainsIdentityProvider#scope}.

---

##### `socialJitProvisioningEnabled`<sup>Optional</sup> <a name="socialJitProvisioningEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.socialJitProvisioningEnabled"></a>

```java
public java.lang.Object getSocialJitProvisioningEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#social_jit_provisioning_enabled IdentityDomainsIdentityProvider#social_jit_provisioning_enabled}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#status IdentityDomainsIdentityProvider#status}.

---

### IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups <a name="IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_identity_provider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups;

IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups.builder()
    .value(java.lang.String)
//  .display(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#value IdentityDomainsIdentityProvider#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups.property.display">display</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#display IdentityDomainsIdentityProvider#display}. |

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#value IdentityDomainsIdentityProvider#value}.

---

##### `display`<sup>Optional</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups.property.display"></a>

```java
public java.lang.String getDisplay();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#display IdentityDomainsIdentityProvider#display}.

---

### IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider <a name="IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_identity_provider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider;

IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.builder()
    .certMatchAttribute(java.lang.String)
    .signingCertificateChain(java.util.List<java.lang.String>)
    .userMatchAttribute(java.lang.String)
//  .crlCheckOnOcspFailureEnabled(java.lang.Boolean)
//  .crlCheckOnOcspFailureEnabled(IResolvable)
//  .crlEnabled(java.lang.Boolean)
//  .crlEnabled(IResolvable)
//  .crlLocation(java.lang.String)
//  .crlReloadDuration(java.lang.Number)
//  .ekuValidationEnabled(java.lang.Boolean)
//  .ekuValidationEnabled(IResolvable)
//  .ekuValues(java.util.List<java.lang.String>)
//  .ocspAllowUnknownResponseStatus(java.lang.Boolean)
//  .ocspAllowUnknownResponseStatus(IResolvable)
//  .ocspEnabled(java.lang.Boolean)
//  .ocspEnabled(IResolvable)
//  .ocspEnableSignedResponse(java.lang.Boolean)
//  .ocspEnableSignedResponse(IResolvable)
//  .ocspResponderUrl(java.lang.String)
//  .ocspRevalidateTime(java.lang.Number)
//  .ocspServerName(java.lang.String)
//  .ocspTrustCertChain(java.util.List<java.lang.String>)
//  .otherCertMatchAttribute(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.certMatchAttribute">certMatchAttribute</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#cert_match_attribute IdentityDomainsIdentityProvider#cert_match_attribute}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.signingCertificateChain">signingCertificateChain</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#signing_certificate_chain IdentityDomainsIdentityProvider#signing_certificate_chain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.userMatchAttribute">userMatchAttribute</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#user_match_attribute IdentityDomainsIdentityProvider#user_match_attribute}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.crlCheckOnOcspFailureEnabled">crlCheckOnOcspFailureEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#crl_check_on_ocsp_failure_enabled IdentityDomainsIdentityProvider#crl_check_on_ocsp_failure_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.crlEnabled">crlEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#crl_enabled IdentityDomainsIdentityProvider#crl_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.crlLocation">crlLocation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#crl_location IdentityDomainsIdentityProvider#crl_location}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.crlReloadDuration">crlReloadDuration</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#crl_reload_duration IdentityDomainsIdentityProvider#crl_reload_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.ekuValidationEnabled">ekuValidationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#eku_validation_enabled IdentityDomainsIdentityProvider#eku_validation_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.ekuValues">ekuValues</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#eku_values IdentityDomainsIdentityProvider#eku_values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.ocspAllowUnknownResponseStatus">ocspAllowUnknownResponseStatus</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#ocsp_allow_unknown_response_status IdentityDomainsIdentityProvider#ocsp_allow_unknown_response_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.ocspEnabled">ocspEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#ocsp_enabled IdentityDomainsIdentityProvider#ocsp_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.ocspEnableSignedResponse">ocspEnableSignedResponse</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#ocsp_enable_signed_response IdentityDomainsIdentityProvider#ocsp_enable_signed_response}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.ocspResponderUrl">ocspResponderUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#ocsp_responder_url IdentityDomainsIdentityProvider#ocsp_responder_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.ocspRevalidateTime">ocspRevalidateTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#ocsp_revalidate_time IdentityDomainsIdentityProvider#ocsp_revalidate_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.ocspServerName">ocspServerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#ocsp_server_name IdentityDomainsIdentityProvider#ocsp_server_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.ocspTrustCertChain">ocspTrustCertChain</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#ocsp_trust_cert_chain IdentityDomainsIdentityProvider#ocsp_trust_cert_chain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.otherCertMatchAttribute">otherCertMatchAttribute</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#other_cert_match_attribute IdentityDomainsIdentityProvider#other_cert_match_attribute}. |

---

##### `certMatchAttribute`<sup>Required</sup> <a name="certMatchAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.certMatchAttribute"></a>

```java
public java.lang.String getCertMatchAttribute();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#cert_match_attribute IdentityDomainsIdentityProvider#cert_match_attribute}.

---

##### `signingCertificateChain`<sup>Required</sup> <a name="signingCertificateChain" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.signingCertificateChain"></a>

```java
public java.util.List<java.lang.String> getSigningCertificateChain();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#signing_certificate_chain IdentityDomainsIdentityProvider#signing_certificate_chain}.

---

##### `userMatchAttribute`<sup>Required</sup> <a name="userMatchAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.userMatchAttribute"></a>

```java
public java.lang.String getUserMatchAttribute();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#user_match_attribute IdentityDomainsIdentityProvider#user_match_attribute}.

---

##### `crlCheckOnOcspFailureEnabled`<sup>Optional</sup> <a name="crlCheckOnOcspFailureEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.crlCheckOnOcspFailureEnabled"></a>

```java
public java.lang.Object getCrlCheckOnOcspFailureEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#crl_check_on_ocsp_failure_enabled IdentityDomainsIdentityProvider#crl_check_on_ocsp_failure_enabled}.

---

##### `crlEnabled`<sup>Optional</sup> <a name="crlEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.crlEnabled"></a>

```java
public java.lang.Object getCrlEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#crl_enabled IdentityDomainsIdentityProvider#crl_enabled}.

---

##### `crlLocation`<sup>Optional</sup> <a name="crlLocation" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.crlLocation"></a>

```java
public java.lang.String getCrlLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#crl_location IdentityDomainsIdentityProvider#crl_location}.

---

##### `crlReloadDuration`<sup>Optional</sup> <a name="crlReloadDuration" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.crlReloadDuration"></a>

```java
public java.lang.Number getCrlReloadDuration();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#crl_reload_duration IdentityDomainsIdentityProvider#crl_reload_duration}.

---

##### `ekuValidationEnabled`<sup>Optional</sup> <a name="ekuValidationEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.ekuValidationEnabled"></a>

```java
public java.lang.Object getEkuValidationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#eku_validation_enabled IdentityDomainsIdentityProvider#eku_validation_enabled}.

---

##### `ekuValues`<sup>Optional</sup> <a name="ekuValues" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.ekuValues"></a>

```java
public java.util.List<java.lang.String> getEkuValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#eku_values IdentityDomainsIdentityProvider#eku_values}.

---

##### `ocspAllowUnknownResponseStatus`<sup>Optional</sup> <a name="ocspAllowUnknownResponseStatus" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.ocspAllowUnknownResponseStatus"></a>

```java
public java.lang.Object getOcspAllowUnknownResponseStatus();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#ocsp_allow_unknown_response_status IdentityDomainsIdentityProvider#ocsp_allow_unknown_response_status}.

---

##### `ocspEnabled`<sup>Optional</sup> <a name="ocspEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.ocspEnabled"></a>

```java
public java.lang.Object getOcspEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#ocsp_enabled IdentityDomainsIdentityProvider#ocsp_enabled}.

---

##### `ocspEnableSignedResponse`<sup>Optional</sup> <a name="ocspEnableSignedResponse" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.ocspEnableSignedResponse"></a>

```java
public java.lang.Object getOcspEnableSignedResponse();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#ocsp_enable_signed_response IdentityDomainsIdentityProvider#ocsp_enable_signed_response}.

---

##### `ocspResponderUrl`<sup>Optional</sup> <a name="ocspResponderUrl" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.ocspResponderUrl"></a>

```java
public java.lang.String getOcspResponderUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#ocsp_responder_url IdentityDomainsIdentityProvider#ocsp_responder_url}.

---

##### `ocspRevalidateTime`<sup>Optional</sup> <a name="ocspRevalidateTime" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.ocspRevalidateTime"></a>

```java
public java.lang.Number getOcspRevalidateTime();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#ocsp_revalidate_time IdentityDomainsIdentityProvider#ocsp_revalidate_time}.

---

##### `ocspServerName`<sup>Optional</sup> <a name="ocspServerName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.ocspServerName"></a>

```java
public java.lang.String getOcspServerName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#ocsp_server_name IdentityDomainsIdentityProvider#ocsp_server_name}.

---

##### `ocspTrustCertChain`<sup>Optional</sup> <a name="ocspTrustCertChain" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.ocspTrustCertChain"></a>

```java
public java.util.List<java.lang.String> getOcspTrustCertChain();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#ocsp_trust_cert_chain IdentityDomainsIdentityProvider#ocsp_trust_cert_chain}.

---

##### `otherCertMatchAttribute`<sup>Optional</sup> <a name="otherCertMatchAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.otherCertMatchAttribute"></a>

```java
public java.lang.String getOtherCertMatchAttribute();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#other_cert_match_attribute IdentityDomainsIdentityProvider#other_cert_match_attribute}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityDomainsIdentityProviderCorrelationPolicyOutputReference <a name="IdentityDomainsIdentityProviderCorrelationPolicyOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_identity_provider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference;

new IdentityDomainsIdentityProviderCorrelationPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.resetDisplay">resetDisplay</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplay` <a name="resetDisplay" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.resetDisplay"></a>

```java
public void resetDisplay()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.displayInput">displayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.display">display</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicy">IdentityDomainsIdentityProviderCorrelationPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

##### `displayInput`<sup>Optional</sup> <a name="displayInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.displayInput"></a>

```java
public java.lang.String getDisplayInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.display"></a>

```java
public java.lang.String getDisplay();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.internalValue"></a>

```java
public IdentityDomainsIdentityProviderCorrelationPolicy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicy">IdentityDomainsIdentityProviderCorrelationPolicy</a>

---


### IdentityDomainsIdentityProviderIdcsCreatedByList <a name="IdentityDomainsIdentityProviderIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_identity_provider.IdentityDomainsIdentityProviderIdcsCreatedByList;

new IdentityDomainsIdentityProviderIdcsCreatedByList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList.get"></a>

```java
public IdentityDomainsIdentityProviderIdcsCreatedByOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### IdentityDomainsIdentityProviderIdcsCreatedByOutputReference <a name="IdentityDomainsIdentityProviderIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_identity_provider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference;

new IdentityDomainsIdentityProviderIdcsCreatedByOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.display">display</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedBy">IdentityDomainsIdentityProviderIdcsCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.display"></a>

```java
public java.lang.String getDisplay();
```

- *Type:* java.lang.String

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.internalValue"></a>

```java
public IdentityDomainsIdentityProviderIdcsCreatedBy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedBy">IdentityDomainsIdentityProviderIdcsCreatedBy</a>

---


### IdentityDomainsIdentityProviderIdcsLastModifiedByList <a name="IdentityDomainsIdentityProviderIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_identity_provider.IdentityDomainsIdentityProviderIdcsLastModifiedByList;

new IdentityDomainsIdentityProviderIdcsLastModifiedByList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList.get"></a>

```java
public IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference <a name="IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_identity_provider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference;

new IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedBy">IdentityDomainsIdentityProviderIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.display"></a>

```java
public java.lang.String getDisplay();
```

- *Type:* java.lang.String

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.internalValue"></a>

```java
public IdentityDomainsIdentityProviderIdcsLastModifiedBy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedBy">IdentityDomainsIdentityProviderIdcsLastModifiedBy</a>

---


### IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList <a name="IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_identity_provider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList;

new IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.get"></a>

```java
public IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroups">IdentityDomainsIdentityProviderJitUserProvAssignedGroups</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroups">IdentityDomainsIdentityProviderJitUserProvAssignedGroups</a>>

---


### IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference <a name="IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_identity_provider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference;

new IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.property.display">display</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroups">IdentityDomainsIdentityProviderJitUserProvAssignedGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.property.display"></a>

```java
public java.lang.String getDisplay();
```

- *Type:* java.lang.String

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroups">IdentityDomainsIdentityProviderJitUserProvAssignedGroups</a>

---


### IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference <a name="IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_identity_provider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference;

new IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributes">IdentityDomainsIdentityProviderJitUserProvAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.property.internalValue"></a>

```java
public IdentityDomainsIdentityProviderJitUserProvAttributes getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributes">IdentityDomainsIdentityProviderJitUserProvAttributes</a>

---


### IdentityDomainsIdentityProviderJitUserProvGroupMappingsList <a name="IdentityDomainsIdentityProviderJitUserProvGroupMappingsList" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_identity_provider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList;

new IdentityDomainsIdentityProviderJitUserProvGroupMappingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.get"></a>

```java
public IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappings">IdentityDomainsIdentityProviderJitUserProvGroupMappings</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappings">IdentityDomainsIdentityProviderJitUserProvGroupMappings</a>>

---


### IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference <a name="IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_identity_provider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference;

new IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.property.idpGroupInput">idpGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.property.idpGroup">idpGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappings">IdentityDomainsIdentityProviderJitUserProvGroupMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

##### `idpGroupInput`<sup>Optional</sup> <a name="idpGroupInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.property.idpGroupInput"></a>

```java
public java.lang.String getIdpGroupInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `idpGroup`<sup>Required</sup> <a name="idpGroup" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.property.idpGroup"></a>

```java
public java.lang.String getIdpGroup();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappings">IdentityDomainsIdentityProviderJitUserProvGroupMappings</a>

---


### IdentityDomainsIdentityProviderMetaList <a name="IdentityDomainsIdentityProviderMetaList" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_identity_provider.IdentityDomainsIdentityProviderMetaList;

new IdentityDomainsIdentityProviderMetaList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList.get"></a>

```java
public IdentityDomainsIdentityProviderMetaOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### IdentityDomainsIdentityProviderMetaOutputReference <a name="IdentityDomainsIdentityProviderMetaOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_identity_provider.IdentityDomainsIdentityProviderMetaOutputReference;

new IdentityDomainsIdentityProviderMetaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.property.created">created</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.property.lastModified">lastModified</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMeta">IdentityDomainsIdentityProviderMeta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.property.created"></a>

```java
public java.lang.String getCreated();
```

- *Type:* java.lang.String

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.property.lastModified"></a>

```java
public java.lang.String getLastModified();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.property.internalValue"></a>

```java
public IdentityDomainsIdentityProviderMeta getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMeta">IdentityDomainsIdentityProviderMeta</a>

---


### IdentityDomainsIdentityProviderTagsList <a name="IdentityDomainsIdentityProviderTagsList" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_identity_provider.IdentityDomainsIdentityProviderTagsList;

new IdentityDomainsIdentityProviderTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.get"></a>

```java
public IdentityDomainsIdentityProviderTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTags">IdentityDomainsIdentityProviderTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTags">IdentityDomainsIdentityProviderTags</a>>

---


### IdentityDomainsIdentityProviderTagsOutputReference <a name="IdentityDomainsIdentityProviderTagsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_identity_provider.IdentityDomainsIdentityProviderTagsOutputReference;

new IdentityDomainsIdentityProviderTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTags">IdentityDomainsIdentityProviderTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTags">IdentityDomainsIdentityProviderTags</a>

---


### IdentityDomainsIdentityProviderTimeoutsOutputReference <a name="IdentityDomainsIdentityProviderTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_identity_provider.IdentityDomainsIdentityProviderTimeoutsOutputReference;

new IdentityDomainsIdentityProviderTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeouts">IdentityDomainsIdentityProviderTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeouts">IdentityDomainsIdentityProviderTimeouts</a>

---


### IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList <a name="IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_identity_provider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList;

new IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.get"></a>

```java
public IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups</a>>

---


### IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference <a name="IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_identity_provider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference;

new IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.resetDisplay">resetDisplay</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplay` <a name="resetDisplay" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.resetDisplay"></a>

```java
public void resetDisplay()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.displayInput">displayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.display">display</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

##### `displayInput`<sup>Optional</sup> <a name="displayInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.displayInput"></a>

```java
public java.lang.String getDisplayInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.display"></a>

```java
public java.lang.String getDisplay();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups</a>

---


### IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference <a name="IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_identity_provider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference;

new IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.putJitProvAssignedGroups">putJitProvAssignedGroups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetAccessTokenUrl">resetAccessTokenUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetAdminScope">resetAdminScope</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetAuthzUrl">resetAuthzUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetAutoRedirectEnabled">resetAutoRedirectEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetClientCredentialInPayload">resetClientCredentialInPayload</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetClockSkewInSeconds">resetClockSkewInSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetDiscoveryUrl">resetDiscoveryUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetIdAttribute">resetIdAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetJitProvAssignedGroups">resetJitProvAssignedGroups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetJitProvGroupStaticListEnabled">resetJitProvGroupStaticListEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetProfileUrl">resetProfileUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetRedirectUrl">resetRedirectUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetSocialJitProvisioningEnabled">resetSocialJitProvisioningEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putJitProvAssignedGroups` <a name="putJitProvAssignedGroups" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.putJitProvAssignedGroups"></a>

```java
public void putJitProvAssignedGroups(IResolvable OR java.util.List<IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.putJitProvAssignedGroups.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups</a>>

---

##### `resetAccessTokenUrl` <a name="resetAccessTokenUrl" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetAccessTokenUrl"></a>

```java
public void resetAccessTokenUrl()
```

##### `resetAdminScope` <a name="resetAdminScope" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetAdminScope"></a>

```java
public void resetAdminScope()
```

##### `resetAuthzUrl` <a name="resetAuthzUrl" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetAuthzUrl"></a>

```java
public void resetAuthzUrl()
```

##### `resetAutoRedirectEnabled` <a name="resetAutoRedirectEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetAutoRedirectEnabled"></a>

```java
public void resetAutoRedirectEnabled()
```

##### `resetClientCredentialInPayload` <a name="resetClientCredentialInPayload" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetClientCredentialInPayload"></a>

```java
public void resetClientCredentialInPayload()
```

##### `resetClockSkewInSeconds` <a name="resetClockSkewInSeconds" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetClockSkewInSeconds"></a>

```java
public void resetClockSkewInSeconds()
```

##### `resetDiscoveryUrl` <a name="resetDiscoveryUrl" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetDiscoveryUrl"></a>

```java
public void resetDiscoveryUrl()
```

##### `resetIdAttribute` <a name="resetIdAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetIdAttribute"></a>

```java
public void resetIdAttribute()
```

##### `resetJitProvAssignedGroups` <a name="resetJitProvAssignedGroups" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetJitProvAssignedGroups"></a>

```java
public void resetJitProvAssignedGroups()
```

##### `resetJitProvGroupStaticListEnabled` <a name="resetJitProvGroupStaticListEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetJitProvGroupStaticListEnabled"></a>

```java
public void resetJitProvGroupStaticListEnabled()
```

##### `resetProfileUrl` <a name="resetProfileUrl" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetProfileUrl"></a>

```java
public void resetProfileUrl()
```

##### `resetRedirectUrl` <a name="resetRedirectUrl" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetRedirectUrl"></a>

```java
public void resetRedirectUrl()
```

##### `resetScope` <a name="resetScope" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetScope"></a>

```java
public void resetScope()
```

##### `resetSocialJitProvisioningEnabled` <a name="resetSocialJitProvisioningEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetSocialJitProvisioningEnabled"></a>

```java
public void resetSocialJitProvisioningEnabled()
```

##### `resetStatus` <a name="resetStatus" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetStatus"></a>

```java
public void resetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.jitProvAssignedGroups">jitProvAssignedGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.accessTokenUrlInput">accessTokenUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.accountLinkingEnabledInput">accountLinkingEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.adminScopeInput">adminScopeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.authzUrlInput">authzUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.autoRedirectEnabledInput">autoRedirectEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.clientCredentialInPayloadInput">clientCredentialInPayloadInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.clockSkewInSecondsInput">clockSkewInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.consumerKeyInput">consumerKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.consumerSecretInput">consumerSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.discoveryUrlInput">discoveryUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.idAttributeInput">idAttributeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.jitProvAssignedGroupsInput">jitProvAssignedGroupsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.jitProvGroupStaticListEnabledInput">jitProvGroupStaticListEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.profileUrlInput">profileUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.redirectUrlInput">redirectUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.registrationEnabledInput">registrationEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.scopeInput">scopeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.serviceProviderNameInput">serviceProviderNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.socialJitProvisioningEnabledInput">socialJitProvisioningEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.accessTokenUrl">accessTokenUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.accountLinkingEnabled">accountLinkingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.adminScope">adminScope</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.authzUrl">authzUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.autoRedirectEnabled">autoRedirectEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.clientCredentialInPayload">clientCredentialInPayload</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.clockSkewInSeconds">clockSkewInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.consumerKey">consumerKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.consumerSecret">consumerSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.discoveryUrl">discoveryUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.idAttribute">idAttribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.jitProvGroupStaticListEnabled">jitProvGroupStaticListEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.profileUrl">profileUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.redirectUrl">redirectUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.registrationEnabled">registrationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.scope">scope</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.serviceProviderName">serviceProviderName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.socialJitProvisioningEnabled">socialJitProvisioningEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `jitProvAssignedGroups`<sup>Required</sup> <a name="jitProvAssignedGroups" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.jitProvAssignedGroups"></a>

```java
public IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList getJitProvAssignedGroups();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList</a>

---

##### `accessTokenUrlInput`<sup>Optional</sup> <a name="accessTokenUrlInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.accessTokenUrlInput"></a>

```java
public java.lang.String getAccessTokenUrlInput();
```

- *Type:* java.lang.String

---

##### `accountLinkingEnabledInput`<sup>Optional</sup> <a name="accountLinkingEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.accountLinkingEnabledInput"></a>

```java
public java.lang.Object getAccountLinkingEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `adminScopeInput`<sup>Optional</sup> <a name="adminScopeInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.adminScopeInput"></a>

```java
public java.util.List<java.lang.String> getAdminScopeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authzUrlInput`<sup>Optional</sup> <a name="authzUrlInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.authzUrlInput"></a>

```java
public java.lang.String getAuthzUrlInput();
```

- *Type:* java.lang.String

---

##### `autoRedirectEnabledInput`<sup>Optional</sup> <a name="autoRedirectEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.autoRedirectEnabledInput"></a>

```java
public java.lang.Object getAutoRedirectEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clientCredentialInPayloadInput`<sup>Optional</sup> <a name="clientCredentialInPayloadInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.clientCredentialInPayloadInput"></a>

```java
public java.lang.Object getClientCredentialInPayloadInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clockSkewInSecondsInput`<sup>Optional</sup> <a name="clockSkewInSecondsInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.clockSkewInSecondsInput"></a>

```java
public java.lang.Number getClockSkewInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `consumerKeyInput`<sup>Optional</sup> <a name="consumerKeyInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.consumerKeyInput"></a>

```java
public java.lang.String getConsumerKeyInput();
```

- *Type:* java.lang.String

---

##### `consumerSecretInput`<sup>Optional</sup> <a name="consumerSecretInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.consumerSecretInput"></a>

```java
public java.lang.String getConsumerSecretInput();
```

- *Type:* java.lang.String

---

##### `discoveryUrlInput`<sup>Optional</sup> <a name="discoveryUrlInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.discoveryUrlInput"></a>

```java
public java.lang.String getDiscoveryUrlInput();
```

- *Type:* java.lang.String

---

##### `idAttributeInput`<sup>Optional</sup> <a name="idAttributeInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.idAttributeInput"></a>

```java
public java.lang.String getIdAttributeInput();
```

- *Type:* java.lang.String

---

##### `jitProvAssignedGroupsInput`<sup>Optional</sup> <a name="jitProvAssignedGroupsInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.jitProvAssignedGroupsInput"></a>

```java
public java.lang.Object getJitProvAssignedGroupsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups</a>>

---

##### `jitProvGroupStaticListEnabledInput`<sup>Optional</sup> <a name="jitProvGroupStaticListEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.jitProvGroupStaticListEnabledInput"></a>

```java
public java.lang.Object getJitProvGroupStaticListEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `profileUrlInput`<sup>Optional</sup> <a name="profileUrlInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.profileUrlInput"></a>

```java
public java.lang.String getProfileUrlInput();
```

- *Type:* java.lang.String

---

##### `redirectUrlInput`<sup>Optional</sup> <a name="redirectUrlInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.redirectUrlInput"></a>

```java
public java.lang.String getRedirectUrlInput();
```

- *Type:* java.lang.String

---

##### `registrationEnabledInput`<sup>Optional</sup> <a name="registrationEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.registrationEnabledInput"></a>

```java
public java.lang.Object getRegistrationEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.scopeInput"></a>

```java
public java.util.List<java.lang.String> getScopeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceProviderNameInput`<sup>Optional</sup> <a name="serviceProviderNameInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.serviceProviderNameInput"></a>

```java
public java.lang.String getServiceProviderNameInput();
```

- *Type:* java.lang.String

---

##### `socialJitProvisioningEnabledInput`<sup>Optional</sup> <a name="socialJitProvisioningEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.socialJitProvisioningEnabledInput"></a>

```java
public java.lang.Object getSocialJitProvisioningEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `accessTokenUrl`<sup>Required</sup> <a name="accessTokenUrl" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.accessTokenUrl"></a>

```java
public java.lang.String getAccessTokenUrl();
```

- *Type:* java.lang.String

---

##### `accountLinkingEnabled`<sup>Required</sup> <a name="accountLinkingEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.accountLinkingEnabled"></a>

```java
public java.lang.Object getAccountLinkingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `adminScope`<sup>Required</sup> <a name="adminScope" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.adminScope"></a>

```java
public java.util.List<java.lang.String> getAdminScope();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authzUrl`<sup>Required</sup> <a name="authzUrl" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.authzUrl"></a>

```java
public java.lang.String getAuthzUrl();
```

- *Type:* java.lang.String

---

##### `autoRedirectEnabled`<sup>Required</sup> <a name="autoRedirectEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.autoRedirectEnabled"></a>

```java
public java.lang.Object getAutoRedirectEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clientCredentialInPayload`<sup>Required</sup> <a name="clientCredentialInPayload" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.clientCredentialInPayload"></a>

```java
public java.lang.Object getClientCredentialInPayload();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clockSkewInSeconds`<sup>Required</sup> <a name="clockSkewInSeconds" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.clockSkewInSeconds"></a>

```java
public java.lang.Number getClockSkewInSeconds();
```

- *Type:* java.lang.Number

---

##### `consumerKey`<sup>Required</sup> <a name="consumerKey" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.consumerKey"></a>

```java
public java.lang.String getConsumerKey();
```

- *Type:* java.lang.String

---

##### `consumerSecret`<sup>Required</sup> <a name="consumerSecret" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.consumerSecret"></a>

```java
public java.lang.String getConsumerSecret();
```

- *Type:* java.lang.String

---

##### `discoveryUrl`<sup>Required</sup> <a name="discoveryUrl" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.discoveryUrl"></a>

```java
public java.lang.String getDiscoveryUrl();
```

- *Type:* java.lang.String

---

##### `idAttribute`<sup>Required</sup> <a name="idAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.idAttribute"></a>

```java
public java.lang.String getIdAttribute();
```

- *Type:* java.lang.String

---

##### `jitProvGroupStaticListEnabled`<sup>Required</sup> <a name="jitProvGroupStaticListEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.jitProvGroupStaticListEnabled"></a>

```java
public java.lang.Object getJitProvGroupStaticListEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `profileUrl`<sup>Required</sup> <a name="profileUrl" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.profileUrl"></a>

```java
public java.lang.String getProfileUrl();
```

- *Type:* java.lang.String

---

##### `redirectUrl`<sup>Required</sup> <a name="redirectUrl" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.redirectUrl"></a>

```java
public java.lang.String getRedirectUrl();
```

- *Type:* java.lang.String

---

##### `registrationEnabled`<sup>Required</sup> <a name="registrationEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.registrationEnabled"></a>

```java
public java.lang.Object getRegistrationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.scope"></a>

```java
public java.util.List<java.lang.String> getScope();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceProviderName`<sup>Required</sup> <a name="serviceProviderName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.serviceProviderName"></a>

```java
public java.lang.String getServiceProviderName();
```

- *Type:* java.lang.String

---

##### `socialJitProvisioningEnabled`<sup>Required</sup> <a name="socialJitProvisioningEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.socialJitProvisioningEnabled"></a>

```java
public java.lang.Object getSocialJitProvisioningEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.internalValue"></a>

```java
public IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider</a>

---


### IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference <a name="IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_identity_provider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference;

new IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetCrlCheckOnOcspFailureEnabled">resetCrlCheckOnOcspFailureEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetCrlEnabled">resetCrlEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetCrlLocation">resetCrlLocation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetCrlReloadDuration">resetCrlReloadDuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetEkuValidationEnabled">resetEkuValidationEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetEkuValues">resetEkuValues</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetOcspAllowUnknownResponseStatus">resetOcspAllowUnknownResponseStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetOcspEnabled">resetOcspEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetOcspEnableSignedResponse">resetOcspEnableSignedResponse</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetOcspResponderUrl">resetOcspResponderUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetOcspRevalidateTime">resetOcspRevalidateTime</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetOcspServerName">resetOcspServerName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetOcspTrustCertChain">resetOcspTrustCertChain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetOtherCertMatchAttribute">resetOtherCertMatchAttribute</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCrlCheckOnOcspFailureEnabled` <a name="resetCrlCheckOnOcspFailureEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetCrlCheckOnOcspFailureEnabled"></a>

```java
public void resetCrlCheckOnOcspFailureEnabled()
```

##### `resetCrlEnabled` <a name="resetCrlEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetCrlEnabled"></a>

```java
public void resetCrlEnabled()
```

##### `resetCrlLocation` <a name="resetCrlLocation" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetCrlLocation"></a>

```java
public void resetCrlLocation()
```

##### `resetCrlReloadDuration` <a name="resetCrlReloadDuration" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetCrlReloadDuration"></a>

```java
public void resetCrlReloadDuration()
```

##### `resetEkuValidationEnabled` <a name="resetEkuValidationEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetEkuValidationEnabled"></a>

```java
public void resetEkuValidationEnabled()
```

##### `resetEkuValues` <a name="resetEkuValues" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetEkuValues"></a>

```java
public void resetEkuValues()
```

##### `resetOcspAllowUnknownResponseStatus` <a name="resetOcspAllowUnknownResponseStatus" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetOcspAllowUnknownResponseStatus"></a>

```java
public void resetOcspAllowUnknownResponseStatus()
```

##### `resetOcspEnabled` <a name="resetOcspEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetOcspEnabled"></a>

```java
public void resetOcspEnabled()
```

##### `resetOcspEnableSignedResponse` <a name="resetOcspEnableSignedResponse" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetOcspEnableSignedResponse"></a>

```java
public void resetOcspEnableSignedResponse()
```

##### `resetOcspResponderUrl` <a name="resetOcspResponderUrl" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetOcspResponderUrl"></a>

```java
public void resetOcspResponderUrl()
```

##### `resetOcspRevalidateTime` <a name="resetOcspRevalidateTime" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetOcspRevalidateTime"></a>

```java
public void resetOcspRevalidateTime()
```

##### `resetOcspServerName` <a name="resetOcspServerName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetOcspServerName"></a>

```java
public void resetOcspServerName()
```

##### `resetOcspTrustCertChain` <a name="resetOcspTrustCertChain" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetOcspTrustCertChain"></a>

```java
public void resetOcspTrustCertChain()
```

##### `resetOtherCertMatchAttribute` <a name="resetOtherCertMatchAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetOtherCertMatchAttribute"></a>

```java
public void resetOtherCertMatchAttribute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.certMatchAttributeInput">certMatchAttributeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlCheckOnOcspFailureEnabledInput">crlCheckOnOcspFailureEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlEnabledInput">crlEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlLocationInput">crlLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlReloadDurationInput">crlReloadDurationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ekuValidationEnabledInput">ekuValidationEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ekuValuesInput">ekuValuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspAllowUnknownResponseStatusInput">ocspAllowUnknownResponseStatusInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspEnabledInput">ocspEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspEnableSignedResponseInput">ocspEnableSignedResponseInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspResponderUrlInput">ocspResponderUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspRevalidateTimeInput">ocspRevalidateTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspServerNameInput">ocspServerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspTrustCertChainInput">ocspTrustCertChainInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.otherCertMatchAttributeInput">otherCertMatchAttributeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.signingCertificateChainInput">signingCertificateChainInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.userMatchAttributeInput">userMatchAttributeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.certMatchAttribute">certMatchAttribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlCheckOnOcspFailureEnabled">crlCheckOnOcspFailureEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlEnabled">crlEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlLocation">crlLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlReloadDuration">crlReloadDuration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ekuValidationEnabled">ekuValidationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ekuValues">ekuValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspAllowUnknownResponseStatus">ocspAllowUnknownResponseStatus</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspEnabled">ocspEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspEnableSignedResponse">ocspEnableSignedResponse</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspResponderUrl">ocspResponderUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspRevalidateTime">ocspRevalidateTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspServerName">ocspServerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspTrustCertChain">ocspTrustCertChain</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.otherCertMatchAttribute">otherCertMatchAttribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.signingCertificateChain">signingCertificateChain</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.userMatchAttribute">userMatchAttribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certMatchAttributeInput`<sup>Optional</sup> <a name="certMatchAttributeInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.certMatchAttributeInput"></a>

```java
public java.lang.String getCertMatchAttributeInput();
```

- *Type:* java.lang.String

---

##### `crlCheckOnOcspFailureEnabledInput`<sup>Optional</sup> <a name="crlCheckOnOcspFailureEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlCheckOnOcspFailureEnabledInput"></a>

```java
public java.lang.Object getCrlCheckOnOcspFailureEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `crlEnabledInput`<sup>Optional</sup> <a name="crlEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlEnabledInput"></a>

```java
public java.lang.Object getCrlEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `crlLocationInput`<sup>Optional</sup> <a name="crlLocationInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlLocationInput"></a>

```java
public java.lang.String getCrlLocationInput();
```

- *Type:* java.lang.String

---

##### `crlReloadDurationInput`<sup>Optional</sup> <a name="crlReloadDurationInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlReloadDurationInput"></a>

```java
public java.lang.Number getCrlReloadDurationInput();
```

- *Type:* java.lang.Number

---

##### `ekuValidationEnabledInput`<sup>Optional</sup> <a name="ekuValidationEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ekuValidationEnabledInput"></a>

```java
public java.lang.Object getEkuValidationEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ekuValuesInput`<sup>Optional</sup> <a name="ekuValuesInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ekuValuesInput"></a>

```java
public java.util.List<java.lang.String> getEkuValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ocspAllowUnknownResponseStatusInput`<sup>Optional</sup> <a name="ocspAllowUnknownResponseStatusInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspAllowUnknownResponseStatusInput"></a>

```java
public java.lang.Object getOcspAllowUnknownResponseStatusInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ocspEnabledInput`<sup>Optional</sup> <a name="ocspEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspEnabledInput"></a>

```java
public java.lang.Object getOcspEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ocspEnableSignedResponseInput`<sup>Optional</sup> <a name="ocspEnableSignedResponseInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspEnableSignedResponseInput"></a>

```java
public java.lang.Object getOcspEnableSignedResponseInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ocspResponderUrlInput`<sup>Optional</sup> <a name="ocspResponderUrlInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspResponderUrlInput"></a>

```java
public java.lang.String getOcspResponderUrlInput();
```

- *Type:* java.lang.String

---

##### `ocspRevalidateTimeInput`<sup>Optional</sup> <a name="ocspRevalidateTimeInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspRevalidateTimeInput"></a>

```java
public java.lang.Number getOcspRevalidateTimeInput();
```

- *Type:* java.lang.Number

---

##### `ocspServerNameInput`<sup>Optional</sup> <a name="ocspServerNameInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspServerNameInput"></a>

```java
public java.lang.String getOcspServerNameInput();
```

- *Type:* java.lang.String

---

##### `ocspTrustCertChainInput`<sup>Optional</sup> <a name="ocspTrustCertChainInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspTrustCertChainInput"></a>

```java
public java.util.List<java.lang.String> getOcspTrustCertChainInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `otherCertMatchAttributeInput`<sup>Optional</sup> <a name="otherCertMatchAttributeInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.otherCertMatchAttributeInput"></a>

```java
public java.lang.String getOtherCertMatchAttributeInput();
```

- *Type:* java.lang.String

---

##### `signingCertificateChainInput`<sup>Optional</sup> <a name="signingCertificateChainInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.signingCertificateChainInput"></a>

```java
public java.util.List<java.lang.String> getSigningCertificateChainInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `userMatchAttributeInput`<sup>Optional</sup> <a name="userMatchAttributeInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.userMatchAttributeInput"></a>

```java
public java.lang.String getUserMatchAttributeInput();
```

- *Type:* java.lang.String

---

##### `certMatchAttribute`<sup>Required</sup> <a name="certMatchAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.certMatchAttribute"></a>

```java
public java.lang.String getCertMatchAttribute();
```

- *Type:* java.lang.String

---

##### `crlCheckOnOcspFailureEnabled`<sup>Required</sup> <a name="crlCheckOnOcspFailureEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlCheckOnOcspFailureEnabled"></a>

```java
public java.lang.Object getCrlCheckOnOcspFailureEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `crlEnabled`<sup>Required</sup> <a name="crlEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlEnabled"></a>

```java
public java.lang.Object getCrlEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `crlLocation`<sup>Required</sup> <a name="crlLocation" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlLocation"></a>

```java
public java.lang.String getCrlLocation();
```

- *Type:* java.lang.String

---

##### `crlReloadDuration`<sup>Required</sup> <a name="crlReloadDuration" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlReloadDuration"></a>

```java
public java.lang.Number getCrlReloadDuration();
```

- *Type:* java.lang.Number

---

##### `ekuValidationEnabled`<sup>Required</sup> <a name="ekuValidationEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ekuValidationEnabled"></a>

```java
public java.lang.Object getEkuValidationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ekuValues`<sup>Required</sup> <a name="ekuValues" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ekuValues"></a>

```java
public java.util.List<java.lang.String> getEkuValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ocspAllowUnknownResponseStatus`<sup>Required</sup> <a name="ocspAllowUnknownResponseStatus" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspAllowUnknownResponseStatus"></a>

```java
public java.lang.Object getOcspAllowUnknownResponseStatus();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ocspEnabled`<sup>Required</sup> <a name="ocspEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspEnabled"></a>

```java
public java.lang.Object getOcspEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ocspEnableSignedResponse`<sup>Required</sup> <a name="ocspEnableSignedResponse" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspEnableSignedResponse"></a>

```java
public java.lang.Object getOcspEnableSignedResponse();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ocspResponderUrl`<sup>Required</sup> <a name="ocspResponderUrl" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspResponderUrl"></a>

```java
public java.lang.String getOcspResponderUrl();
```

- *Type:* java.lang.String

---

##### `ocspRevalidateTime`<sup>Required</sup> <a name="ocspRevalidateTime" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspRevalidateTime"></a>

```java
public java.lang.Number getOcspRevalidateTime();
```

- *Type:* java.lang.Number

---

##### `ocspServerName`<sup>Required</sup> <a name="ocspServerName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspServerName"></a>

```java
public java.lang.String getOcspServerName();
```

- *Type:* java.lang.String

---

##### `ocspTrustCertChain`<sup>Required</sup> <a name="ocspTrustCertChain" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspTrustCertChain"></a>

```java
public java.util.List<java.lang.String> getOcspTrustCertChain();
```

- *Type:* java.util.List<java.lang.String>

---

##### `otherCertMatchAttribute`<sup>Required</sup> <a name="otherCertMatchAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.otherCertMatchAttribute"></a>

```java
public java.lang.String getOtherCertMatchAttribute();
```

- *Type:* java.lang.String

---

##### `signingCertificateChain`<sup>Required</sup> <a name="signingCertificateChain" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.signingCertificateChain"></a>

```java
public java.util.List<java.lang.String> getSigningCertificateChain();
```

- *Type:* java.util.List<java.lang.String>

---

##### `userMatchAttribute`<sup>Required</sup> <a name="userMatchAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.userMatchAttribute"></a>

```java
public java.lang.String getUserMatchAttribute();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.internalValue"></a>

```java
public IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider</a>

---



