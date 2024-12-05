# `identityDomainsIdentityProvider` Submodule <a name="`identityDomainsIdentityProvider` Submodule" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityDomainsIdentityProvider <a name="IdentityDomainsIdentityProvider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider oci_identity_domains_identity_provider}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_identity_provider

identityDomainsIdentityProvider.IdentityDomainsIdentityProvider(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  enabled: typing.Union[bool, IResolvable],
  idcs_endpoint: str,
  partner_name: str,
  schemas: typing.List[str],
  assertion_attribute: str = None,
  attributes: str = None,
  attribute_sets: typing.List[str] = None,
  authn_request_binding: str = None,
  authorization: str = None,
  correlation_policy: IdentityDomainsIdentityProviderCorrelationPolicy = None,
  description: str = None,
  encryption_certificate: str = None,
  external_id: str = None,
  icon_url: str = None,
  idp_sso_url: str = None,
  include_signing_cert_in_signature: typing.Union[bool, IResolvable] = None,
  jit_user_prov_assigned_groups: typing.Union[IResolvable, typing.List[IdentityDomainsIdentityProviderJitUserProvAssignedGroups]] = None,
  jit_user_prov_attributes: IdentityDomainsIdentityProviderJitUserProvAttributes = None,
  jit_user_prov_attribute_update_enabled: typing.Union[bool, IResolvable] = None,
  jit_user_prov_create_user_enabled: typing.Union[bool, IResolvable] = None,
  jit_user_prov_enabled: typing.Union[bool, IResolvable] = None,
  jit_user_prov_group_assertion_attribute_enabled: typing.Union[bool, IResolvable] = None,
  jit_user_prov_group_assignment_method: str = None,
  jit_user_prov_group_mapping_mode: str = None,
  jit_user_prov_group_mappings: typing.Union[IResolvable, typing.List[IdentityDomainsIdentityProviderJitUserProvGroupMappings]] = None,
  jit_user_prov_group_saml_attribute_name: str = None,
  jit_user_prov_group_static_list_enabled: typing.Union[bool, IResolvable] = None,
  jit_user_prov_ignore_error_on_absent_groups: typing.Union[bool, IResolvable] = None,
  logout_binding: str = None,
  logout_enabled: typing.Union[bool, IResolvable] = None,
  logout_request_url: str = None,
  logout_response_url: str = None,
  metadata: str = None,
  name_id_format: str = None,
  ocid: str = None,
  partner_provider_id: str = None,
  requested_authentication_context: typing.List[str] = None,
  require_force_authn: typing.Union[bool, IResolvable] = None,
  requires_encrypted_assertion: typing.Union[bool, IResolvable] = None,
  resource_type_schema_version: str = None,
  saml_ho_krequired: typing.Union[bool, IResolvable] = None,
  service_instance_identifier: str = None,
  shown_on_login_page: typing.Union[bool, IResolvable] = None,
  signature_hash_algorithm: str = None,
  signing_certificate: str = None,
  succinct_id: str = None,
  tags: typing.Union[IResolvable, typing.List[IdentityDomainsIdentityProviderTags]] = None,
  timeouts: IdentityDomainsIdentityProviderTimeouts = None,
  type: str = None,
  urnietfparamsscimschemasoracleidcsextensionsocial_identity_provider: IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider = None,
  urnietfparamsscimschemasoracleidcsextensionx509_identity_provider: IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider = None,
  user_mapping_method: str = None,
  user_mapping_store_attribute: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#enabled IdentityDomainsIdentityProvider#enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#idcs_endpoint IdentityDomainsIdentityProvider#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.partnerName">partner_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#partner_name IdentityDomainsIdentityProvider#partner_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.schemas">schemas</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#schemas IdentityDomainsIdentityProvider#schemas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.assertionAttribute">assertion_attribute</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#assertion_attribute IdentityDomainsIdentityProvider#assertion_attribute}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.attributes">attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#attributes IdentityDomainsIdentityProvider#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#attribute_sets IdentityDomainsIdentityProvider#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.authnRequestBinding">authn_request_binding</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#authn_request_binding IdentityDomainsIdentityProvider#authn_request_binding}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#authorization IdentityDomainsIdentityProvider#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.correlationPolicy">correlation_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicy">IdentityDomainsIdentityProviderCorrelationPolicy</a></code> | correlation_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#description IdentityDomainsIdentityProvider#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.encryptionCertificate">encryption_certificate</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#encryption_certificate IdentityDomainsIdentityProvider#encryption_certificate}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.externalId">external_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#external_id IdentityDomainsIdentityProvider#external_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.iconUrl">icon_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#icon_url IdentityDomainsIdentityProvider#icon_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.idpSsoUrl">idp_sso_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#idp_sso_url IdentityDomainsIdentityProvider#idp_sso_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.includeSigningCertInSignature">include_signing_cert_in_signature</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#include_signing_cert_in_signature IdentityDomainsIdentityProvider#include_signing_cert_in_signature}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.jitUserProvAssignedGroups">jit_user_prov_assigned_groups</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroups">IdentityDomainsIdentityProviderJitUserProvAssignedGroups</a>]]</code> | jit_user_prov_assigned_groups block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.jitUserProvAttributes">jit_user_prov_attributes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributes">IdentityDomainsIdentityProviderJitUserProvAttributes</a></code> | jit_user_prov_attributes block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.jitUserProvAttributeUpdateEnabled">jit_user_prov_attribute_update_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_attribute_update_enabled IdentityDomainsIdentityProvider#jit_user_prov_attribute_update_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.jitUserProvCreateUserEnabled">jit_user_prov_create_user_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_create_user_enabled IdentityDomainsIdentityProvider#jit_user_prov_create_user_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.jitUserProvEnabled">jit_user_prov_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_enabled IdentityDomainsIdentityProvider#jit_user_prov_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.jitUserProvGroupAssertionAttributeEnabled">jit_user_prov_group_assertion_attribute_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_group_assertion_attribute_enabled IdentityDomainsIdentityProvider#jit_user_prov_group_assertion_attribute_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.jitUserProvGroupAssignmentMethod">jit_user_prov_group_assignment_method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_group_assignment_method IdentityDomainsIdentityProvider#jit_user_prov_group_assignment_method}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.jitUserProvGroupMappingMode">jit_user_prov_group_mapping_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_group_mapping_mode IdentityDomainsIdentityProvider#jit_user_prov_group_mapping_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.jitUserProvGroupMappings">jit_user_prov_group_mappings</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappings">IdentityDomainsIdentityProviderJitUserProvGroupMappings</a>]]</code> | jit_user_prov_group_mappings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.jitUserProvGroupSamlAttributeName">jit_user_prov_group_saml_attribute_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_group_saml_attribute_name IdentityDomainsIdentityProvider#jit_user_prov_group_saml_attribute_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.jitUserProvGroupStaticListEnabled">jit_user_prov_group_static_list_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_group_static_list_enabled IdentityDomainsIdentityProvider#jit_user_prov_group_static_list_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.jitUserProvIgnoreErrorOnAbsentGroups">jit_user_prov_ignore_error_on_absent_groups</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_ignore_error_on_absent_groups IdentityDomainsIdentityProvider#jit_user_prov_ignore_error_on_absent_groups}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.logoutBinding">logout_binding</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#logout_binding IdentityDomainsIdentityProvider#logout_binding}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.logoutEnabled">logout_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#logout_enabled IdentityDomainsIdentityProvider#logout_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.logoutRequestUrl">logout_request_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#logout_request_url IdentityDomainsIdentityProvider#logout_request_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.logoutResponseUrl">logout_response_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#logout_response_url IdentityDomainsIdentityProvider#logout_response_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.metadata">metadata</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#metadata IdentityDomainsIdentityProvider#metadata}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.nameIdFormat">name_id_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#name_id_format IdentityDomainsIdentityProvider#name_id_format}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.ocid">ocid</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#ocid IdentityDomainsIdentityProvider#ocid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.partnerProviderId">partner_provider_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#partner_provider_id IdentityDomainsIdentityProvider#partner_provider_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.requestedAuthenticationContext">requested_authentication_context</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#requested_authentication_context IdentityDomainsIdentityProvider#requested_authentication_context}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.requireForceAuthn">require_force_authn</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#require_force_authn IdentityDomainsIdentityProvider#require_force_authn}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.requiresEncryptedAssertion">requires_encrypted_assertion</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#requires_encrypted_assertion IdentityDomainsIdentityProvider#requires_encrypted_assertion}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#resource_type_schema_version IdentityDomainsIdentityProvider#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.samlHoKrequired">saml_ho_krequired</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#saml_ho_krequired IdentityDomainsIdentityProvider#saml_ho_krequired}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.serviceInstanceIdentifier">service_instance_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#service_instance_identifier IdentityDomainsIdentityProvider#service_instance_identifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.shownOnLoginPage">shown_on_login_page</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#shown_on_login_page IdentityDomainsIdentityProvider#shown_on_login_page}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.signatureHashAlgorithm">signature_hash_algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#signature_hash_algorithm IdentityDomainsIdentityProvider#signature_hash_algorithm}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.signingCertificate">signing_certificate</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#signing_certificate IdentityDomainsIdentityProvider#signing_certificate}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.succinctId">succinct_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#succinct_id IdentityDomainsIdentityProvider#succinct_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.tags">tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTags">IdentityDomainsIdentityProviderTags</a>]]</code> | tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeouts">IdentityDomainsIdentityProviderTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#type IdentityDomainsIdentityProvider#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.urnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider">urnietfparamsscimschemasoracleidcsextensionsocial_identity_provider</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider</a></code> | urnietfparamsscimschemasoracleidcsextensionsocial_identity_provider block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.urnietfparamsscimschemasoracleidcsextensionx509IdentityProvider">urnietfparamsscimschemasoracleidcsextensionx509_identity_provider</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider</a></code> | urnietfparamsscimschemasoracleidcsextensionx509identity_provider block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.userMappingMethod">user_mapping_method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#user_mapping_method IdentityDomainsIdentityProvider#user_mapping_method}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.userMappingStoreAttribute">user_mapping_store_attribute</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#user_mapping_store_attribute IdentityDomainsIdentityProvider#user_mapping_store_attribute}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#enabled IdentityDomainsIdentityProvider#enabled}.

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.idcsEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#idcs_endpoint IdentityDomainsIdentityProvider#idcs_endpoint}.

---

##### `partner_name`<sup>Required</sup> <a name="partner_name" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.partnerName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#partner_name IdentityDomainsIdentityProvider#partner_name}.

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.schemas"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#schemas IdentityDomainsIdentityProvider#schemas}.

---

##### `assertion_attribute`<sup>Optional</sup> <a name="assertion_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.assertionAttribute"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#assertion_attribute IdentityDomainsIdentityProvider#assertion_attribute}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.attributes"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#attributes IdentityDomainsIdentityProvider#attributes}.

---

##### `attribute_sets`<sup>Optional</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.attributeSets"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#attribute_sets IdentityDomainsIdentityProvider#attribute_sets}.

---

##### `authn_request_binding`<sup>Optional</sup> <a name="authn_request_binding" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.authnRequestBinding"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#authn_request_binding IdentityDomainsIdentityProvider#authn_request_binding}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.authorization"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#authorization IdentityDomainsIdentityProvider#authorization}.

---

##### `correlation_policy`<sup>Optional</sup> <a name="correlation_policy" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.correlationPolicy"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicy">IdentityDomainsIdentityProviderCorrelationPolicy</a>

correlation_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#correlation_policy IdentityDomainsIdentityProvider#correlation_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#description IdentityDomainsIdentityProvider#description}.

---

##### `encryption_certificate`<sup>Optional</sup> <a name="encryption_certificate" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.encryptionCertificate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#encryption_certificate IdentityDomainsIdentityProvider#encryption_certificate}.

---

##### `external_id`<sup>Optional</sup> <a name="external_id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.externalId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#external_id IdentityDomainsIdentityProvider#external_id}.

---

##### `icon_url`<sup>Optional</sup> <a name="icon_url" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.iconUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#icon_url IdentityDomainsIdentityProvider#icon_url}.

---

##### `idp_sso_url`<sup>Optional</sup> <a name="idp_sso_url" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.idpSsoUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#idp_sso_url IdentityDomainsIdentityProvider#idp_sso_url}.

---

##### `include_signing_cert_in_signature`<sup>Optional</sup> <a name="include_signing_cert_in_signature" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.includeSigningCertInSignature"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#include_signing_cert_in_signature IdentityDomainsIdentityProvider#include_signing_cert_in_signature}.

---

##### `jit_user_prov_assigned_groups`<sup>Optional</sup> <a name="jit_user_prov_assigned_groups" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.jitUserProvAssignedGroups"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroups">IdentityDomainsIdentityProviderJitUserProvAssignedGroups</a>]]

jit_user_prov_assigned_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_assigned_groups IdentityDomainsIdentityProvider#jit_user_prov_assigned_groups}

---

##### `jit_user_prov_attributes`<sup>Optional</sup> <a name="jit_user_prov_attributes" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.jitUserProvAttributes"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributes">IdentityDomainsIdentityProviderJitUserProvAttributes</a>

jit_user_prov_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_attributes IdentityDomainsIdentityProvider#jit_user_prov_attributes}

---

##### `jit_user_prov_attribute_update_enabled`<sup>Optional</sup> <a name="jit_user_prov_attribute_update_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.jitUserProvAttributeUpdateEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_attribute_update_enabled IdentityDomainsIdentityProvider#jit_user_prov_attribute_update_enabled}.

---

##### `jit_user_prov_create_user_enabled`<sup>Optional</sup> <a name="jit_user_prov_create_user_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.jitUserProvCreateUserEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_create_user_enabled IdentityDomainsIdentityProvider#jit_user_prov_create_user_enabled}.

---

##### `jit_user_prov_enabled`<sup>Optional</sup> <a name="jit_user_prov_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.jitUserProvEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_enabled IdentityDomainsIdentityProvider#jit_user_prov_enabled}.

---

##### `jit_user_prov_group_assertion_attribute_enabled`<sup>Optional</sup> <a name="jit_user_prov_group_assertion_attribute_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.jitUserProvGroupAssertionAttributeEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_group_assertion_attribute_enabled IdentityDomainsIdentityProvider#jit_user_prov_group_assertion_attribute_enabled}.

---

##### `jit_user_prov_group_assignment_method`<sup>Optional</sup> <a name="jit_user_prov_group_assignment_method" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.jitUserProvGroupAssignmentMethod"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_group_assignment_method IdentityDomainsIdentityProvider#jit_user_prov_group_assignment_method}.

---

##### `jit_user_prov_group_mapping_mode`<sup>Optional</sup> <a name="jit_user_prov_group_mapping_mode" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.jitUserProvGroupMappingMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_group_mapping_mode IdentityDomainsIdentityProvider#jit_user_prov_group_mapping_mode}.

---

##### `jit_user_prov_group_mappings`<sup>Optional</sup> <a name="jit_user_prov_group_mappings" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.jitUserProvGroupMappings"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappings">IdentityDomainsIdentityProviderJitUserProvGroupMappings</a>]]

jit_user_prov_group_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_group_mappings IdentityDomainsIdentityProvider#jit_user_prov_group_mappings}

---

##### `jit_user_prov_group_saml_attribute_name`<sup>Optional</sup> <a name="jit_user_prov_group_saml_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.jitUserProvGroupSamlAttributeName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_group_saml_attribute_name IdentityDomainsIdentityProvider#jit_user_prov_group_saml_attribute_name}.

---

##### `jit_user_prov_group_static_list_enabled`<sup>Optional</sup> <a name="jit_user_prov_group_static_list_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.jitUserProvGroupStaticListEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_group_static_list_enabled IdentityDomainsIdentityProvider#jit_user_prov_group_static_list_enabled}.

---

##### `jit_user_prov_ignore_error_on_absent_groups`<sup>Optional</sup> <a name="jit_user_prov_ignore_error_on_absent_groups" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.jitUserProvIgnoreErrorOnAbsentGroups"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_ignore_error_on_absent_groups IdentityDomainsIdentityProvider#jit_user_prov_ignore_error_on_absent_groups}.

---

##### `logout_binding`<sup>Optional</sup> <a name="logout_binding" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.logoutBinding"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#logout_binding IdentityDomainsIdentityProvider#logout_binding}.

---

##### `logout_enabled`<sup>Optional</sup> <a name="logout_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.logoutEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#logout_enabled IdentityDomainsIdentityProvider#logout_enabled}.

---

##### `logout_request_url`<sup>Optional</sup> <a name="logout_request_url" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.logoutRequestUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#logout_request_url IdentityDomainsIdentityProvider#logout_request_url}.

---

##### `logout_response_url`<sup>Optional</sup> <a name="logout_response_url" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.logoutResponseUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#logout_response_url IdentityDomainsIdentityProvider#logout_response_url}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.metadata"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#metadata IdentityDomainsIdentityProvider#metadata}.

---

##### `name_id_format`<sup>Optional</sup> <a name="name_id_format" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.nameIdFormat"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#name_id_format IdentityDomainsIdentityProvider#name_id_format}.

---

##### `ocid`<sup>Optional</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.ocid"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#ocid IdentityDomainsIdentityProvider#ocid}.

---

##### `partner_provider_id`<sup>Optional</sup> <a name="partner_provider_id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.partnerProviderId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#partner_provider_id IdentityDomainsIdentityProvider#partner_provider_id}.

---

##### `requested_authentication_context`<sup>Optional</sup> <a name="requested_authentication_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.requestedAuthenticationContext"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#requested_authentication_context IdentityDomainsIdentityProvider#requested_authentication_context}.

---

##### `require_force_authn`<sup>Optional</sup> <a name="require_force_authn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.requireForceAuthn"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#require_force_authn IdentityDomainsIdentityProvider#require_force_authn}.

---

##### `requires_encrypted_assertion`<sup>Optional</sup> <a name="requires_encrypted_assertion" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.requiresEncryptedAssertion"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#requires_encrypted_assertion IdentityDomainsIdentityProvider#requires_encrypted_assertion}.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.resourceTypeSchemaVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#resource_type_schema_version IdentityDomainsIdentityProvider#resource_type_schema_version}.

---

##### `saml_ho_krequired`<sup>Optional</sup> <a name="saml_ho_krequired" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.samlHoKrequired"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#saml_ho_krequired IdentityDomainsIdentityProvider#saml_ho_krequired}.

---

##### `service_instance_identifier`<sup>Optional</sup> <a name="service_instance_identifier" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.serviceInstanceIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#service_instance_identifier IdentityDomainsIdentityProvider#service_instance_identifier}.

---

##### `shown_on_login_page`<sup>Optional</sup> <a name="shown_on_login_page" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.shownOnLoginPage"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#shown_on_login_page IdentityDomainsIdentityProvider#shown_on_login_page}.

---

##### `signature_hash_algorithm`<sup>Optional</sup> <a name="signature_hash_algorithm" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.signatureHashAlgorithm"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#signature_hash_algorithm IdentityDomainsIdentityProvider#signature_hash_algorithm}.

---

##### `signing_certificate`<sup>Optional</sup> <a name="signing_certificate" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.signingCertificate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#signing_certificate IdentityDomainsIdentityProvider#signing_certificate}.

---

##### `succinct_id`<sup>Optional</sup> <a name="succinct_id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.succinctId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#succinct_id IdentityDomainsIdentityProvider#succinct_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.tags"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTags">IdentityDomainsIdentityProviderTags</a>]]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#tags IdentityDomainsIdentityProvider#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeouts">IdentityDomainsIdentityProviderTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#timeouts IdentityDomainsIdentityProvider#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#type IdentityDomainsIdentityProvider#type}.

---

##### `urnietfparamsscimschemasoracleidcsextensionsocial_identity_provider`<sup>Optional</sup> <a name="urnietfparamsscimschemasoracleidcsextensionsocial_identity_provider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.urnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider</a>

urnietfparamsscimschemasoracleidcsextensionsocial_identity_provider block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#urnietfparamsscimschemasoracleidcsextensionsocial_identity_provider IdentityDomainsIdentityProvider#urnietfparamsscimschemasoracleidcsextensionsocial_identity_provider}

---

##### `urnietfparamsscimschemasoracleidcsextensionx509_identity_provider`<sup>Optional</sup> <a name="urnietfparamsscimschemasoracleidcsextensionx509_identity_provider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.urnietfparamsscimschemasoracleidcsextensionx509IdentityProvider"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider</a>

urnietfparamsscimschemasoracleidcsextensionx509identity_provider block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#urnietfparamsscimschemasoracleidcsextensionx509identity_provider IdentityDomainsIdentityProvider#urnietfparamsscimschemasoracleidcsextensionx509identity_provider}

---

##### `user_mapping_method`<sup>Optional</sup> <a name="user_mapping_method" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.userMappingMethod"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#user_mapping_method IdentityDomainsIdentityProvider#user_mapping_method}.

---

##### `user_mapping_store_attribute`<sup>Optional</sup> <a name="user_mapping_store_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.userMappingStoreAttribute"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#user_mapping_store_attribute IdentityDomainsIdentityProvider#user_mapping_store_attribute}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putCorrelationPolicy">put_correlation_policy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putJitUserProvAssignedGroups">put_jit_user_prov_assigned_groups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putJitUserProvAttributes">put_jit_user_prov_attributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putJitUserProvGroupMappings">put_jit_user_prov_group_mappings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider">put_urnietfparamsscimschemasoracleidcsextensionsocial_identity_provider</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider">put_urnietfparamsscimschemasoracleidcsextensionx509_identity_provider</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetAssertionAttribute">reset_assertion_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetAttributes">reset_attributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetAttributeSets">reset_attribute_sets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetAuthnRequestBinding">reset_authn_request_binding</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetAuthorization">reset_authorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetCorrelationPolicy">reset_correlation_policy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetEncryptionCertificate">reset_encryption_certificate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetExternalId">reset_external_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetIconUrl">reset_icon_url</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetIdpSsoUrl">reset_idp_sso_url</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetIncludeSigningCertInSignature">reset_include_signing_cert_in_signature</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetJitUserProvAssignedGroups">reset_jit_user_prov_assigned_groups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetJitUserProvAttributes">reset_jit_user_prov_attributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetJitUserProvAttributeUpdateEnabled">reset_jit_user_prov_attribute_update_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetJitUserProvCreateUserEnabled">reset_jit_user_prov_create_user_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetJitUserProvEnabled">reset_jit_user_prov_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetJitUserProvGroupAssertionAttributeEnabled">reset_jit_user_prov_group_assertion_attribute_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetJitUserProvGroupAssignmentMethod">reset_jit_user_prov_group_assignment_method</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetJitUserProvGroupMappingMode">reset_jit_user_prov_group_mapping_mode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetJitUserProvGroupMappings">reset_jit_user_prov_group_mappings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetJitUserProvGroupSamlAttributeName">reset_jit_user_prov_group_saml_attribute_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetJitUserProvGroupStaticListEnabled">reset_jit_user_prov_group_static_list_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetJitUserProvIgnoreErrorOnAbsentGroups">reset_jit_user_prov_ignore_error_on_absent_groups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetLogoutBinding">reset_logout_binding</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetLogoutEnabled">reset_logout_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetLogoutRequestUrl">reset_logout_request_url</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetLogoutResponseUrl">reset_logout_response_url</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetNameIdFormat">reset_name_id_format</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetOcid">reset_ocid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetPartnerProviderId">reset_partner_provider_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetRequestedAuthenticationContext">reset_requested_authentication_context</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetRequireForceAuthn">reset_require_force_authn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetRequiresEncryptedAssertion">reset_requires_encrypted_assertion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetResourceTypeSchemaVersion">reset_resource_type_schema_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetSamlHoKrequired">reset_saml_ho_krequired</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetServiceInstanceIdentifier">reset_service_instance_identifier</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetShownOnLoginPage">reset_shown_on_login_page</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetSignatureHashAlgorithm">reset_signature_hash_algorithm</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetSigningCertificate">reset_signing_certificate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetSuccinctId">reset_succinct_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider">reset_urnietfparamsscimschemasoracleidcsextensionsocial_identity_provider</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider">reset_urnietfparamsscimschemasoracleidcsextensionx509_identity_provider</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetUserMappingMethod">reset_user_mapping_method</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetUserMappingStoreAttribute">reset_user_mapping_store_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_correlation_policy` <a name="put_correlation_policy" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putCorrelationPolicy"></a>

```python
def put_correlation_policy(
  type: str,
  value: str,
  display: str = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putCorrelationPolicy.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#type IdentityDomainsIdentityProvider#type}.

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putCorrelationPolicy.parameter.value"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#value IdentityDomainsIdentityProvider#value}.

---

###### `display`<sup>Optional</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putCorrelationPolicy.parameter.display"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#display IdentityDomainsIdentityProvider#display}.

---

##### `put_jit_user_prov_assigned_groups` <a name="put_jit_user_prov_assigned_groups" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putJitUserProvAssignedGroups"></a>

```python
def put_jit_user_prov_assigned_groups(
  value: typing.Union[IResolvable, typing.List[IdentityDomainsIdentityProviderJitUserProvAssignedGroups]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putJitUserProvAssignedGroups.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroups">IdentityDomainsIdentityProviderJitUserProvAssignedGroups</a>]]

---

##### `put_jit_user_prov_attributes` <a name="put_jit_user_prov_attributes" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putJitUserProvAttributes"></a>

```python
def put_jit_user_prov_attributes(
  value: str
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putJitUserProvAttributes.parameter.value"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#value IdentityDomainsIdentityProvider#value}.

---

##### `put_jit_user_prov_group_mappings` <a name="put_jit_user_prov_group_mappings" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putJitUserProvGroupMappings"></a>

```python
def put_jit_user_prov_group_mappings(
  value: typing.Union[IResolvable, typing.List[IdentityDomainsIdentityProviderJitUserProvGroupMappings]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putJitUserProvGroupMappings.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappings">IdentityDomainsIdentityProviderJitUserProvGroupMappings</a>]]

---

##### `put_tags` <a name="put_tags" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putTags"></a>

```python
def put_tags(
  value: typing.Union[IResolvable, typing.List[IdentityDomainsIdentityProviderTags]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putTags.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTags">IdentityDomainsIdentityProviderTags</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#create IdentityDomainsIdentityProvider#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#delete IdentityDomainsIdentityProvider#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#update IdentityDomainsIdentityProvider#update}.

---

##### `put_urnietfparamsscimschemasoracleidcsextensionsocial_identity_provider` <a name="put_urnietfparamsscimschemasoracleidcsextensionsocial_identity_provider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider"></a>

```python
def put_urnietfparamsscimschemasoracleidcsextensionsocial_identity_provider(
  account_linking_enabled: typing.Union[bool, IResolvable],
  consumer_key: str,
  consumer_secret: str,
  registration_enabled: typing.Union[bool, IResolvable],
  service_provider_name: str,
  access_token_url: str = None,
  admin_scope: typing.List[str] = None,
  authz_url: str = None,
  auto_redirect_enabled: typing.Union[bool, IResolvable] = None,
  client_credential_in_payload: typing.Union[bool, IResolvable] = None,
  clock_skew_in_seconds: typing.Union[int, float] = None,
  discovery_url: str = None,
  id_attribute: str = None,
  jit_prov_assigned_groups: typing.Union[IResolvable, typing.List[IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups]] = None,
  jit_prov_group_static_list_enabled: typing.Union[bool, IResolvable] = None,
  profile_url: str = None,
  redirect_url: str = None,
  scope: typing.List[str] = None,
  social_jit_provisioning_enabled: typing.Union[bool, IResolvable] = None,
  status: str = None
) -> None
```

###### `account_linking_enabled`<sup>Required</sup> <a name="account_linking_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.parameter.accountLinkingEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#account_linking_enabled IdentityDomainsIdentityProvider#account_linking_enabled}.

---

###### `consumer_key`<sup>Required</sup> <a name="consumer_key" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.parameter.consumerKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#consumer_key IdentityDomainsIdentityProvider#consumer_key}.

---

###### `consumer_secret`<sup>Required</sup> <a name="consumer_secret" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.parameter.consumerSecret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#consumer_secret IdentityDomainsIdentityProvider#consumer_secret}.

---

###### `registration_enabled`<sup>Required</sup> <a name="registration_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.parameter.registrationEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#registration_enabled IdentityDomainsIdentityProvider#registration_enabled}.

---

###### `service_provider_name`<sup>Required</sup> <a name="service_provider_name" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.parameter.serviceProviderName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#service_provider_name IdentityDomainsIdentityProvider#service_provider_name}.

---

###### `access_token_url`<sup>Optional</sup> <a name="access_token_url" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.parameter.accessTokenUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#access_token_url IdentityDomainsIdentityProvider#access_token_url}.

---

###### `admin_scope`<sup>Optional</sup> <a name="admin_scope" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.parameter.adminScope"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#admin_scope IdentityDomainsIdentityProvider#admin_scope}.

---

###### `authz_url`<sup>Optional</sup> <a name="authz_url" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.parameter.authzUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#authz_url IdentityDomainsIdentityProvider#authz_url}.

---

###### `auto_redirect_enabled`<sup>Optional</sup> <a name="auto_redirect_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.parameter.autoRedirectEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#auto_redirect_enabled IdentityDomainsIdentityProvider#auto_redirect_enabled}.

---

###### `client_credential_in_payload`<sup>Optional</sup> <a name="client_credential_in_payload" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.parameter.clientCredentialInPayload"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#client_credential_in_payload IdentityDomainsIdentityProvider#client_credential_in_payload}.

---

###### `clock_skew_in_seconds`<sup>Optional</sup> <a name="clock_skew_in_seconds" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.parameter.clockSkewInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#clock_skew_in_seconds IdentityDomainsIdentityProvider#clock_skew_in_seconds}.

---

###### `discovery_url`<sup>Optional</sup> <a name="discovery_url" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.parameter.discoveryUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#discovery_url IdentityDomainsIdentityProvider#discovery_url}.

---

###### `id_attribute`<sup>Optional</sup> <a name="id_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.parameter.idAttribute"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#id_attribute IdentityDomainsIdentityProvider#id_attribute}.

---

###### `jit_prov_assigned_groups`<sup>Optional</sup> <a name="jit_prov_assigned_groups" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.parameter.jitProvAssignedGroups"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups</a>]]

jit_prov_assigned_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_prov_assigned_groups IdentityDomainsIdentityProvider#jit_prov_assigned_groups}

---

###### `jit_prov_group_static_list_enabled`<sup>Optional</sup> <a name="jit_prov_group_static_list_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.parameter.jitProvGroupStaticListEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_prov_group_static_list_enabled IdentityDomainsIdentityProvider#jit_prov_group_static_list_enabled}.

---

###### `profile_url`<sup>Optional</sup> <a name="profile_url" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.parameter.profileUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#profile_url IdentityDomainsIdentityProvider#profile_url}.

---

###### `redirect_url`<sup>Optional</sup> <a name="redirect_url" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.parameter.redirectUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#redirect_url IdentityDomainsIdentityProvider#redirect_url}.

---

###### `scope`<sup>Optional</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.parameter.scope"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#scope IdentityDomainsIdentityProvider#scope}.

---

###### `social_jit_provisioning_enabled`<sup>Optional</sup> <a name="social_jit_provisioning_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.parameter.socialJitProvisioningEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#social_jit_provisioning_enabled IdentityDomainsIdentityProvider#social_jit_provisioning_enabled}.

---

###### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#status IdentityDomainsIdentityProvider#status}.

---

##### `put_urnietfparamsscimschemasoracleidcsextensionx509_identity_provider` <a name="put_urnietfparamsscimschemasoracleidcsextensionx509_identity_provider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider"></a>

```python
def put_urnietfparamsscimschemasoracleidcsextensionx509_identity_provider(
  cert_match_attribute: str,
  signing_certificate_chain: typing.List[str],
  user_match_attribute: str,
  crl_check_on_ocsp_failure_enabled: typing.Union[bool, IResolvable] = None,
  crl_enabled: typing.Union[bool, IResolvable] = None,
  crl_location: str = None,
  crl_reload_duration: typing.Union[int, float] = None,
  eku_validation_enabled: typing.Union[bool, IResolvable] = None,
  eku_values: typing.List[str] = None,
  ocsp_allow_unknown_response_status: typing.Union[bool, IResolvable] = None,
  ocsp_enabled: typing.Union[bool, IResolvable] = None,
  ocsp_enable_signed_response: typing.Union[bool, IResolvable] = None,
  ocsp_responder_url: str = None,
  ocsp_revalidate_time: typing.Union[int, float] = None,
  ocsp_server_name: str = None,
  ocsp_trust_cert_chain: typing.List[str] = None,
  other_cert_match_attribute: str = None
) -> None
```

###### `cert_match_attribute`<sup>Required</sup> <a name="cert_match_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.parameter.certMatchAttribute"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#cert_match_attribute IdentityDomainsIdentityProvider#cert_match_attribute}.

---

###### `signing_certificate_chain`<sup>Required</sup> <a name="signing_certificate_chain" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.parameter.signingCertificateChain"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#signing_certificate_chain IdentityDomainsIdentityProvider#signing_certificate_chain}.

---

###### `user_match_attribute`<sup>Required</sup> <a name="user_match_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.parameter.userMatchAttribute"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#user_match_attribute IdentityDomainsIdentityProvider#user_match_attribute}.

---

###### `crl_check_on_ocsp_failure_enabled`<sup>Optional</sup> <a name="crl_check_on_ocsp_failure_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.parameter.crlCheckOnOcspFailureEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#crl_check_on_ocsp_failure_enabled IdentityDomainsIdentityProvider#crl_check_on_ocsp_failure_enabled}.

---

###### `crl_enabled`<sup>Optional</sup> <a name="crl_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.parameter.crlEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#crl_enabled IdentityDomainsIdentityProvider#crl_enabled}.

---

###### `crl_location`<sup>Optional</sup> <a name="crl_location" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.parameter.crlLocation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#crl_location IdentityDomainsIdentityProvider#crl_location}.

---

###### `crl_reload_duration`<sup>Optional</sup> <a name="crl_reload_duration" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.parameter.crlReloadDuration"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#crl_reload_duration IdentityDomainsIdentityProvider#crl_reload_duration}.

---

###### `eku_validation_enabled`<sup>Optional</sup> <a name="eku_validation_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.parameter.ekuValidationEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#eku_validation_enabled IdentityDomainsIdentityProvider#eku_validation_enabled}.

---

###### `eku_values`<sup>Optional</sup> <a name="eku_values" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.parameter.ekuValues"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#eku_values IdentityDomainsIdentityProvider#eku_values}.

---

###### `ocsp_allow_unknown_response_status`<sup>Optional</sup> <a name="ocsp_allow_unknown_response_status" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.parameter.ocspAllowUnknownResponseStatus"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#ocsp_allow_unknown_response_status IdentityDomainsIdentityProvider#ocsp_allow_unknown_response_status}.

---

###### `ocsp_enabled`<sup>Optional</sup> <a name="ocsp_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.parameter.ocspEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#ocsp_enabled IdentityDomainsIdentityProvider#ocsp_enabled}.

---

###### `ocsp_enable_signed_response`<sup>Optional</sup> <a name="ocsp_enable_signed_response" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.parameter.ocspEnableSignedResponse"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#ocsp_enable_signed_response IdentityDomainsIdentityProvider#ocsp_enable_signed_response}.

---

###### `ocsp_responder_url`<sup>Optional</sup> <a name="ocsp_responder_url" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.parameter.ocspResponderUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#ocsp_responder_url IdentityDomainsIdentityProvider#ocsp_responder_url}.

---

###### `ocsp_revalidate_time`<sup>Optional</sup> <a name="ocsp_revalidate_time" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.parameter.ocspRevalidateTime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#ocsp_revalidate_time IdentityDomainsIdentityProvider#ocsp_revalidate_time}.

---

###### `ocsp_server_name`<sup>Optional</sup> <a name="ocsp_server_name" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.parameter.ocspServerName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#ocsp_server_name IdentityDomainsIdentityProvider#ocsp_server_name}.

---

###### `ocsp_trust_cert_chain`<sup>Optional</sup> <a name="ocsp_trust_cert_chain" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.parameter.ocspTrustCertChain"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#ocsp_trust_cert_chain IdentityDomainsIdentityProvider#ocsp_trust_cert_chain}.

---

###### `other_cert_match_attribute`<sup>Optional</sup> <a name="other_cert_match_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.parameter.otherCertMatchAttribute"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#other_cert_match_attribute IdentityDomainsIdentityProvider#other_cert_match_attribute}.

---

##### `reset_assertion_attribute` <a name="reset_assertion_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetAssertionAttribute"></a>

```python
def reset_assertion_attribute() -> None
```

##### `reset_attributes` <a name="reset_attributes" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetAttributes"></a>

```python
def reset_attributes() -> None
```

##### `reset_attribute_sets` <a name="reset_attribute_sets" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetAttributeSets"></a>

```python
def reset_attribute_sets() -> None
```

##### `reset_authn_request_binding` <a name="reset_authn_request_binding" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetAuthnRequestBinding"></a>

```python
def reset_authn_request_binding() -> None
```

##### `reset_authorization` <a name="reset_authorization" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetAuthorization"></a>

```python
def reset_authorization() -> None
```

##### `reset_correlation_policy` <a name="reset_correlation_policy" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetCorrelationPolicy"></a>

```python
def reset_correlation_policy() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_encryption_certificate` <a name="reset_encryption_certificate" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetEncryptionCertificate"></a>

```python
def reset_encryption_certificate() -> None
```

##### `reset_external_id` <a name="reset_external_id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetExternalId"></a>

```python
def reset_external_id() -> None
```

##### `reset_icon_url` <a name="reset_icon_url" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetIconUrl"></a>

```python
def reset_icon_url() -> None
```

##### `reset_idp_sso_url` <a name="reset_idp_sso_url" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetIdpSsoUrl"></a>

```python
def reset_idp_sso_url() -> None
```

##### `reset_include_signing_cert_in_signature` <a name="reset_include_signing_cert_in_signature" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetIncludeSigningCertInSignature"></a>

```python
def reset_include_signing_cert_in_signature() -> None
```

##### `reset_jit_user_prov_assigned_groups` <a name="reset_jit_user_prov_assigned_groups" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetJitUserProvAssignedGroups"></a>

```python
def reset_jit_user_prov_assigned_groups() -> None
```

##### `reset_jit_user_prov_attributes` <a name="reset_jit_user_prov_attributes" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetJitUserProvAttributes"></a>

```python
def reset_jit_user_prov_attributes() -> None
```

##### `reset_jit_user_prov_attribute_update_enabled` <a name="reset_jit_user_prov_attribute_update_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetJitUserProvAttributeUpdateEnabled"></a>

```python
def reset_jit_user_prov_attribute_update_enabled() -> None
```

##### `reset_jit_user_prov_create_user_enabled` <a name="reset_jit_user_prov_create_user_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetJitUserProvCreateUserEnabled"></a>

```python
def reset_jit_user_prov_create_user_enabled() -> None
```

##### `reset_jit_user_prov_enabled` <a name="reset_jit_user_prov_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetJitUserProvEnabled"></a>

```python
def reset_jit_user_prov_enabled() -> None
```

##### `reset_jit_user_prov_group_assertion_attribute_enabled` <a name="reset_jit_user_prov_group_assertion_attribute_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetJitUserProvGroupAssertionAttributeEnabled"></a>

```python
def reset_jit_user_prov_group_assertion_attribute_enabled() -> None
```

##### `reset_jit_user_prov_group_assignment_method` <a name="reset_jit_user_prov_group_assignment_method" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetJitUserProvGroupAssignmentMethod"></a>

```python
def reset_jit_user_prov_group_assignment_method() -> None
```

##### `reset_jit_user_prov_group_mapping_mode` <a name="reset_jit_user_prov_group_mapping_mode" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetJitUserProvGroupMappingMode"></a>

```python
def reset_jit_user_prov_group_mapping_mode() -> None
```

##### `reset_jit_user_prov_group_mappings` <a name="reset_jit_user_prov_group_mappings" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetJitUserProvGroupMappings"></a>

```python
def reset_jit_user_prov_group_mappings() -> None
```

##### `reset_jit_user_prov_group_saml_attribute_name` <a name="reset_jit_user_prov_group_saml_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetJitUserProvGroupSamlAttributeName"></a>

```python
def reset_jit_user_prov_group_saml_attribute_name() -> None
```

##### `reset_jit_user_prov_group_static_list_enabled` <a name="reset_jit_user_prov_group_static_list_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetJitUserProvGroupStaticListEnabled"></a>

```python
def reset_jit_user_prov_group_static_list_enabled() -> None
```

##### `reset_jit_user_prov_ignore_error_on_absent_groups` <a name="reset_jit_user_prov_ignore_error_on_absent_groups" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetJitUserProvIgnoreErrorOnAbsentGroups"></a>

```python
def reset_jit_user_prov_ignore_error_on_absent_groups() -> None
```

##### `reset_logout_binding` <a name="reset_logout_binding" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetLogoutBinding"></a>

```python
def reset_logout_binding() -> None
```

##### `reset_logout_enabled` <a name="reset_logout_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetLogoutEnabled"></a>

```python
def reset_logout_enabled() -> None
```

##### `reset_logout_request_url` <a name="reset_logout_request_url" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetLogoutRequestUrl"></a>

```python
def reset_logout_request_url() -> None
```

##### `reset_logout_response_url` <a name="reset_logout_response_url" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetLogoutResponseUrl"></a>

```python
def reset_logout_response_url() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_name_id_format` <a name="reset_name_id_format" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetNameIdFormat"></a>

```python
def reset_name_id_format() -> None
```

##### `reset_ocid` <a name="reset_ocid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetOcid"></a>

```python
def reset_ocid() -> None
```

##### `reset_partner_provider_id` <a name="reset_partner_provider_id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetPartnerProviderId"></a>

```python
def reset_partner_provider_id() -> None
```

##### `reset_requested_authentication_context` <a name="reset_requested_authentication_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetRequestedAuthenticationContext"></a>

```python
def reset_requested_authentication_context() -> None
```

##### `reset_require_force_authn` <a name="reset_require_force_authn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetRequireForceAuthn"></a>

```python
def reset_require_force_authn() -> None
```

##### `reset_requires_encrypted_assertion` <a name="reset_requires_encrypted_assertion" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetRequiresEncryptedAssertion"></a>

```python
def reset_requires_encrypted_assertion() -> None
```

##### `reset_resource_type_schema_version` <a name="reset_resource_type_schema_version" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetResourceTypeSchemaVersion"></a>

```python
def reset_resource_type_schema_version() -> None
```

##### `reset_saml_ho_krequired` <a name="reset_saml_ho_krequired" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetSamlHoKrequired"></a>

```python
def reset_saml_ho_krequired() -> None
```

##### `reset_service_instance_identifier` <a name="reset_service_instance_identifier" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetServiceInstanceIdentifier"></a>

```python
def reset_service_instance_identifier() -> None
```

##### `reset_shown_on_login_page` <a name="reset_shown_on_login_page" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetShownOnLoginPage"></a>

```python
def reset_shown_on_login_page() -> None
```

##### `reset_signature_hash_algorithm` <a name="reset_signature_hash_algorithm" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetSignatureHashAlgorithm"></a>

```python
def reset_signature_hash_algorithm() -> None
```

##### `reset_signing_certificate` <a name="reset_signing_certificate" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetSigningCertificate"></a>

```python
def reset_signing_certificate() -> None
```

##### `reset_succinct_id` <a name="reset_succinct_id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetSuccinctId"></a>

```python
def reset_succinct_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_type` <a name="reset_type" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_urnietfparamsscimschemasoracleidcsextensionsocial_identity_provider` <a name="reset_urnietfparamsscimschemasoracleidcsextensionsocial_identity_provider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider"></a>

```python
def reset_urnietfparamsscimschemasoracleidcsextensionsocial_identity_provider() -> None
```

##### `reset_urnietfparamsscimschemasoracleidcsextensionx509_identity_provider` <a name="reset_urnietfparamsscimschemasoracleidcsextensionx509_identity_provider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider"></a>

```python
def reset_urnietfparamsscimschemasoracleidcsextensionx509_identity_provider() -> None
```

##### `reset_user_mapping_method` <a name="reset_user_mapping_method" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetUserMappingMethod"></a>

```python
def reset_user_mapping_method() -> None
```

##### `reset_user_mapping_store_attribute` <a name="reset_user_mapping_store_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetUserMappingStoreAttribute"></a>

```python
def reset_user_mapping_store_attribute() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IdentityDomainsIdentityProvider resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_identity_provider

identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_identity_provider

identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_identity_provider

identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_identity_provider

identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IdentityDomainsIdentityProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IdentityDomainsIdentityProvider to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IdentityDomainsIdentityProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IdentityDomainsIdentityProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.compartmentOcid">compartment_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.correlationPolicy">correlation_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference">IdentityDomainsIdentityProviderCorrelationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.deleteInProgress">delete_in_progress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.domainOcid">domain_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.idcsCreatedBy">idcs_created_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList">IdentityDomainsIdentityProviderIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.idcsLastModifiedBy">idcs_last_modified_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList">IdentityDomainsIdentityProviderIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.idcsLastUpgradedInRelease">idcs_last_upgraded_in_release</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.idcsPreventedOperations">idcs_prevented_operations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvAssignedGroups">jit_user_prov_assigned_groups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList">IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvAttributes">jit_user_prov_attributes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference">IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvGroupMappings">jit_user_prov_group_mappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList">IdentityDomainsIdentityProviderJitUserProvGroupMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.lastNotificationSentTime">last_notification_sent_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList">IdentityDomainsIdentityProviderMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList">IdentityDomainsIdentityProviderTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.tenancyOcid">tenancy_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.tenantProviderId">tenant_provider_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference">IdentityDomainsIdentityProviderTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.urnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider">urnietfparamsscimschemasoracleidcsextensionsocial_identity_provider</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.urnietfparamsscimschemasoracleidcsextensionx509IdentityProvider">urnietfparamsscimschemasoracleidcsextensionx509_identity_provider</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.assertionAttributeInput">assertion_attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.attributeSetsInput">attribute_sets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.attributesInput">attributes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.authnRequestBindingInput">authn_request_binding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.authorizationInput">authorization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.correlationPolicyInput">correlation_policy_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicy">IdentityDomainsIdentityProviderCorrelationPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.encryptionCertificateInput">encryption_certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.externalIdInput">external_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.iconUrlInput">icon_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.idcsEndpointInput">idcs_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.idpSsoUrlInput">idp_sso_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.includeSigningCertInSignatureInput">include_signing_cert_in_signature_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvAssignedGroupsInput">jit_user_prov_assigned_groups_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroups">IdentityDomainsIdentityProviderJitUserProvAssignedGroups</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvAttributesInput">jit_user_prov_attributes_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributes">IdentityDomainsIdentityProviderJitUserProvAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvAttributeUpdateEnabledInput">jit_user_prov_attribute_update_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvCreateUserEnabledInput">jit_user_prov_create_user_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvEnabledInput">jit_user_prov_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvGroupAssertionAttributeEnabledInput">jit_user_prov_group_assertion_attribute_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvGroupAssignmentMethodInput">jit_user_prov_group_assignment_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvGroupMappingModeInput">jit_user_prov_group_mapping_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvGroupMappingsInput">jit_user_prov_group_mappings_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappings">IdentityDomainsIdentityProviderJitUserProvGroupMappings</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvGroupSamlAttributeNameInput">jit_user_prov_group_saml_attribute_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvGroupStaticListEnabledInput">jit_user_prov_group_static_list_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvIgnoreErrorOnAbsentGroupsInput">jit_user_prov_ignore_error_on_absent_groups_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.logoutBindingInput">logout_binding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.logoutEnabledInput">logout_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.logoutRequestUrlInput">logout_request_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.logoutResponseUrlInput">logout_response_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.metadataInput">metadata_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.nameIdFormatInput">name_id_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.ocidInput">ocid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.partnerNameInput">partner_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.partnerProviderIdInput">partner_provider_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.requestedAuthenticationContextInput">requested_authentication_context_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.requireForceAuthnInput">require_force_authn_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.requiresEncryptedAssertionInput">requires_encrypted_assertion_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.resourceTypeSchemaVersionInput">resource_type_schema_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.samlHoKrequiredInput">saml_ho_krequired_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.schemasInput">schemas_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.serviceInstanceIdentifierInput">service_instance_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.shownOnLoginPageInput">shown_on_login_page_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.signatureHashAlgorithmInput">signature_hash_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.signingCertificateInput">signing_certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.succinctIdInput">succinct_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.tagsInput">tags_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTags">IdentityDomainsIdentityProviderTags</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeouts">IdentityDomainsIdentityProviderTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.urnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderInput">urnietfparamsscimschemasoracleidcsextensionsocial_identity_provider_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.urnietfparamsscimschemasoracleidcsextensionx509IdentityProviderInput">urnietfparamsscimschemasoracleidcsextensionx509_identity_provider_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.userMappingMethodInput">user_mapping_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.userMappingStoreAttributeInput">user_mapping_store_attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.assertionAttribute">assertion_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.attributes">attributes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.authnRequestBinding">authn_request_binding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.encryptionCertificate">encryption_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.iconUrl">icon_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.idpSsoUrl">idp_sso_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.includeSigningCertInSignature">include_signing_cert_in_signature</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvAttributeUpdateEnabled">jit_user_prov_attribute_update_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvCreateUserEnabled">jit_user_prov_create_user_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvEnabled">jit_user_prov_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvGroupAssertionAttributeEnabled">jit_user_prov_group_assertion_attribute_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvGroupAssignmentMethod">jit_user_prov_group_assignment_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvGroupMappingMode">jit_user_prov_group_mapping_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvGroupSamlAttributeName">jit_user_prov_group_saml_attribute_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvGroupStaticListEnabled">jit_user_prov_group_static_list_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvIgnoreErrorOnAbsentGroups">jit_user_prov_ignore_error_on_absent_groups</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.logoutBinding">logout_binding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.logoutEnabled">logout_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.logoutRequestUrl">logout_request_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.logoutResponseUrl">logout_response_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.metadata">metadata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.nameIdFormat">name_id_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.partnerName">partner_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.partnerProviderId">partner_provider_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.requestedAuthenticationContext">requested_authentication_context</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.requireForceAuthn">require_force_authn</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.requiresEncryptedAssertion">requires_encrypted_assertion</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.samlHoKrequired">saml_ho_krequired</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.serviceInstanceIdentifier">service_instance_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.shownOnLoginPage">shown_on_login_page</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.signatureHashAlgorithm">signature_hash_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.signingCertificate">signing_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.succinctId">succinct_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.userMappingMethod">user_mapping_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.userMappingStoreAttribute">user_mapping_store_attribute</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_ocid`<sup>Required</sup> <a name="compartment_ocid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.compartmentOcid"></a>

```python
compartment_ocid: str
```

- *Type:* str

---

##### `correlation_policy`<sup>Required</sup> <a name="correlation_policy" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.correlationPolicy"></a>

```python
correlation_policy: IdentityDomainsIdentityProviderCorrelationPolicyOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference">IdentityDomainsIdentityProviderCorrelationPolicyOutputReference</a>

---

##### `delete_in_progress`<sup>Required</sup> <a name="delete_in_progress" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.deleteInProgress"></a>

```python
delete_in_progress: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `domain_ocid`<sup>Required</sup> <a name="domain_ocid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.domainOcid"></a>

```python
domain_ocid: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_created_by`<sup>Required</sup> <a name="idcs_created_by" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.idcsCreatedBy"></a>

```python
idcs_created_by: IdentityDomainsIdentityProviderIdcsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList">IdentityDomainsIdentityProviderIdcsCreatedByList</a>

---

##### `idcs_last_modified_by`<sup>Required</sup> <a name="idcs_last_modified_by" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.idcsLastModifiedBy"></a>

```python
idcs_last_modified_by: IdentityDomainsIdentityProviderIdcsLastModifiedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList">IdentityDomainsIdentityProviderIdcsLastModifiedByList</a>

---

##### `idcs_last_upgraded_in_release`<sup>Required</sup> <a name="idcs_last_upgraded_in_release" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.idcsLastUpgradedInRelease"></a>

```python
idcs_last_upgraded_in_release: str
```

- *Type:* str

---

##### `idcs_prevented_operations`<sup>Required</sup> <a name="idcs_prevented_operations" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.idcsPreventedOperations"></a>

```python
idcs_prevented_operations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `jit_user_prov_assigned_groups`<sup>Required</sup> <a name="jit_user_prov_assigned_groups" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvAssignedGroups"></a>

```python
jit_user_prov_assigned_groups: IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList">IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList</a>

---

##### `jit_user_prov_attributes`<sup>Required</sup> <a name="jit_user_prov_attributes" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvAttributes"></a>

```python
jit_user_prov_attributes: IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference">IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference</a>

---

##### `jit_user_prov_group_mappings`<sup>Required</sup> <a name="jit_user_prov_group_mappings" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvGroupMappings"></a>

```python
jit_user_prov_group_mappings: IdentityDomainsIdentityProviderJitUserProvGroupMappingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList">IdentityDomainsIdentityProviderJitUserProvGroupMappingsList</a>

---

##### `last_notification_sent_time`<sup>Required</sup> <a name="last_notification_sent_time" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.lastNotificationSentTime"></a>

```python
last_notification_sent_time: str
```

- *Type:* str

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.meta"></a>

```python
meta: IdentityDomainsIdentityProviderMetaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList">IdentityDomainsIdentityProviderMetaList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.tags"></a>

```python
tags: IdentityDomainsIdentityProviderTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList">IdentityDomainsIdentityProviderTagsList</a>

---

##### `tenancy_ocid`<sup>Required</sup> <a name="tenancy_ocid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.tenancyOcid"></a>

```python
tenancy_ocid: str
```

- *Type:* str

---

##### `tenant_provider_id`<sup>Required</sup> <a name="tenant_provider_id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.tenantProviderId"></a>

```python
tenant_provider_id: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.timeouts"></a>

```python
timeouts: IdentityDomainsIdentityProviderTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference">IdentityDomainsIdentityProviderTimeoutsOutputReference</a>

---

##### `urnietfparamsscimschemasoracleidcsextensionsocial_identity_provider`<sup>Required</sup> <a name="urnietfparamsscimschemasoracleidcsextensionsocial_identity_provider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.urnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider"></a>

```python
urnietfparamsscimschemasoracleidcsextensionsocial_identity_provider: IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference</a>

---

##### `urnietfparamsscimschemasoracleidcsextensionx509_identity_provider`<sup>Required</sup> <a name="urnietfparamsscimschemasoracleidcsextensionx509_identity_provider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.urnietfparamsscimschemasoracleidcsextensionx509IdentityProvider"></a>

```python
urnietfparamsscimschemasoracleidcsextensionx509_identity_provider: IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference</a>

---

##### `assertion_attribute_input`<sup>Optional</sup> <a name="assertion_attribute_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.assertionAttributeInput"></a>

```python
assertion_attribute_input: str
```

- *Type:* str

---

##### `attribute_sets_input`<sup>Optional</sup> <a name="attribute_sets_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.attributeSetsInput"></a>

```python
attribute_sets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.attributesInput"></a>

```python
attributes_input: str
```

- *Type:* str

---

##### `authn_request_binding_input`<sup>Optional</sup> <a name="authn_request_binding_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.authnRequestBindingInput"></a>

```python
authn_request_binding_input: str
```

- *Type:* str

---

##### `authorization_input`<sup>Optional</sup> <a name="authorization_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.authorizationInput"></a>

```python
authorization_input: str
```

- *Type:* str

---

##### `correlation_policy_input`<sup>Optional</sup> <a name="correlation_policy_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.correlationPolicyInput"></a>

```python
correlation_policy_input: IdentityDomainsIdentityProviderCorrelationPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicy">IdentityDomainsIdentityProviderCorrelationPolicy</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `encryption_certificate_input`<sup>Optional</sup> <a name="encryption_certificate_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.encryptionCertificateInput"></a>

```python
encryption_certificate_input: str
```

- *Type:* str

---

##### `external_id_input`<sup>Optional</sup> <a name="external_id_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.externalIdInput"></a>

```python
external_id_input: str
```

- *Type:* str

---

##### `icon_url_input`<sup>Optional</sup> <a name="icon_url_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.iconUrlInput"></a>

```python
icon_url_input: str
```

- *Type:* str

---

##### `idcs_endpoint_input`<sup>Optional</sup> <a name="idcs_endpoint_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.idcsEndpointInput"></a>

```python
idcs_endpoint_input: str
```

- *Type:* str

---

##### `idp_sso_url_input`<sup>Optional</sup> <a name="idp_sso_url_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.idpSsoUrlInput"></a>

```python
idp_sso_url_input: str
```

- *Type:* str

---

##### `include_signing_cert_in_signature_input`<sup>Optional</sup> <a name="include_signing_cert_in_signature_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.includeSigningCertInSignatureInput"></a>

```python
include_signing_cert_in_signature_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `jit_user_prov_assigned_groups_input`<sup>Optional</sup> <a name="jit_user_prov_assigned_groups_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvAssignedGroupsInput"></a>

```python
jit_user_prov_assigned_groups_input: typing.Union[IResolvable, typing.List[IdentityDomainsIdentityProviderJitUserProvAssignedGroups]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroups">IdentityDomainsIdentityProviderJitUserProvAssignedGroups</a>]]

---

##### `jit_user_prov_attributes_input`<sup>Optional</sup> <a name="jit_user_prov_attributes_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvAttributesInput"></a>

```python
jit_user_prov_attributes_input: IdentityDomainsIdentityProviderJitUserProvAttributes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributes">IdentityDomainsIdentityProviderJitUserProvAttributes</a>

---

##### `jit_user_prov_attribute_update_enabled_input`<sup>Optional</sup> <a name="jit_user_prov_attribute_update_enabled_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvAttributeUpdateEnabledInput"></a>

```python
jit_user_prov_attribute_update_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `jit_user_prov_create_user_enabled_input`<sup>Optional</sup> <a name="jit_user_prov_create_user_enabled_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvCreateUserEnabledInput"></a>

```python
jit_user_prov_create_user_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `jit_user_prov_enabled_input`<sup>Optional</sup> <a name="jit_user_prov_enabled_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvEnabledInput"></a>

```python
jit_user_prov_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `jit_user_prov_group_assertion_attribute_enabled_input`<sup>Optional</sup> <a name="jit_user_prov_group_assertion_attribute_enabled_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvGroupAssertionAttributeEnabledInput"></a>

```python
jit_user_prov_group_assertion_attribute_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `jit_user_prov_group_assignment_method_input`<sup>Optional</sup> <a name="jit_user_prov_group_assignment_method_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvGroupAssignmentMethodInput"></a>

```python
jit_user_prov_group_assignment_method_input: str
```

- *Type:* str

---

##### `jit_user_prov_group_mapping_mode_input`<sup>Optional</sup> <a name="jit_user_prov_group_mapping_mode_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvGroupMappingModeInput"></a>

```python
jit_user_prov_group_mapping_mode_input: str
```

- *Type:* str

---

##### `jit_user_prov_group_mappings_input`<sup>Optional</sup> <a name="jit_user_prov_group_mappings_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvGroupMappingsInput"></a>

```python
jit_user_prov_group_mappings_input: typing.Union[IResolvable, typing.List[IdentityDomainsIdentityProviderJitUserProvGroupMappings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappings">IdentityDomainsIdentityProviderJitUserProvGroupMappings</a>]]

---

##### `jit_user_prov_group_saml_attribute_name_input`<sup>Optional</sup> <a name="jit_user_prov_group_saml_attribute_name_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvGroupSamlAttributeNameInput"></a>

```python
jit_user_prov_group_saml_attribute_name_input: str
```

- *Type:* str

---

##### `jit_user_prov_group_static_list_enabled_input`<sup>Optional</sup> <a name="jit_user_prov_group_static_list_enabled_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvGroupStaticListEnabledInput"></a>

```python
jit_user_prov_group_static_list_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `jit_user_prov_ignore_error_on_absent_groups_input`<sup>Optional</sup> <a name="jit_user_prov_ignore_error_on_absent_groups_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvIgnoreErrorOnAbsentGroupsInput"></a>

```python
jit_user_prov_ignore_error_on_absent_groups_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `logout_binding_input`<sup>Optional</sup> <a name="logout_binding_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.logoutBindingInput"></a>

```python
logout_binding_input: str
```

- *Type:* str

---

##### `logout_enabled_input`<sup>Optional</sup> <a name="logout_enabled_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.logoutEnabledInput"></a>

```python
logout_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `logout_request_url_input`<sup>Optional</sup> <a name="logout_request_url_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.logoutRequestUrlInput"></a>

```python
logout_request_url_input: str
```

- *Type:* str

---

##### `logout_response_url_input`<sup>Optional</sup> <a name="logout_response_url_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.logoutResponseUrlInput"></a>

```python
logout_response_url_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.metadataInput"></a>

```python
metadata_input: str
```

- *Type:* str

---

##### `name_id_format_input`<sup>Optional</sup> <a name="name_id_format_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.nameIdFormatInput"></a>

```python
name_id_format_input: str
```

- *Type:* str

---

##### `ocid_input`<sup>Optional</sup> <a name="ocid_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.ocidInput"></a>

```python
ocid_input: str
```

- *Type:* str

---

##### `partner_name_input`<sup>Optional</sup> <a name="partner_name_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.partnerNameInput"></a>

```python
partner_name_input: str
```

- *Type:* str

---

##### `partner_provider_id_input`<sup>Optional</sup> <a name="partner_provider_id_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.partnerProviderIdInput"></a>

```python
partner_provider_id_input: str
```

- *Type:* str

---

##### `requested_authentication_context_input`<sup>Optional</sup> <a name="requested_authentication_context_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.requestedAuthenticationContextInput"></a>

```python
requested_authentication_context_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `require_force_authn_input`<sup>Optional</sup> <a name="require_force_authn_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.requireForceAuthnInput"></a>

```python
require_force_authn_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `requires_encrypted_assertion_input`<sup>Optional</sup> <a name="requires_encrypted_assertion_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.requiresEncryptedAssertionInput"></a>

```python
requires_encrypted_assertion_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_type_schema_version_input`<sup>Optional</sup> <a name="resource_type_schema_version_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.resourceTypeSchemaVersionInput"></a>

```python
resource_type_schema_version_input: str
```

- *Type:* str

---

##### `saml_ho_krequired_input`<sup>Optional</sup> <a name="saml_ho_krequired_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.samlHoKrequiredInput"></a>

```python
saml_ho_krequired_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `schemas_input`<sup>Optional</sup> <a name="schemas_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.schemasInput"></a>

```python
schemas_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_instance_identifier_input`<sup>Optional</sup> <a name="service_instance_identifier_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.serviceInstanceIdentifierInput"></a>

```python
service_instance_identifier_input: str
```

- *Type:* str

---

##### `shown_on_login_page_input`<sup>Optional</sup> <a name="shown_on_login_page_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.shownOnLoginPageInput"></a>

```python
shown_on_login_page_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `signature_hash_algorithm_input`<sup>Optional</sup> <a name="signature_hash_algorithm_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.signatureHashAlgorithmInput"></a>

```python
signature_hash_algorithm_input: str
```

- *Type:* str

---

##### `signing_certificate_input`<sup>Optional</sup> <a name="signing_certificate_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.signingCertificateInput"></a>

```python
signing_certificate_input: str
```

- *Type:* str

---

##### `succinct_id_input`<sup>Optional</sup> <a name="succinct_id_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.succinctIdInput"></a>

```python
succinct_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.tagsInput"></a>

```python
tags_input: typing.Union[IResolvable, typing.List[IdentityDomainsIdentityProviderTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTags">IdentityDomainsIdentityProviderTags</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, IdentityDomainsIdentityProviderTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeouts">IdentityDomainsIdentityProviderTimeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `urnietfparamsscimschemasoracleidcsextensionsocial_identity_provider_input`<sup>Optional</sup> <a name="urnietfparamsscimschemasoracleidcsextensionsocial_identity_provider_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.urnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderInput"></a>

```python
urnietfparamsscimschemasoracleidcsextensionsocial_identity_provider_input: IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider</a>

---

##### `urnietfparamsscimschemasoracleidcsextensionx509_identity_provider_input`<sup>Optional</sup> <a name="urnietfparamsscimschemasoracleidcsextensionx509_identity_provider_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.urnietfparamsscimschemasoracleidcsextensionx509IdentityProviderInput"></a>

```python
urnietfparamsscimschemasoracleidcsextensionx509_identity_provider_input: IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider</a>

---

##### `user_mapping_method_input`<sup>Optional</sup> <a name="user_mapping_method_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.userMappingMethodInput"></a>

```python
user_mapping_method_input: str
```

- *Type:* str

---

##### `user_mapping_store_attribute_input`<sup>Optional</sup> <a name="user_mapping_store_attribute_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.userMappingStoreAttributeInput"></a>

```python
user_mapping_store_attribute_input: str
```

- *Type:* str

---

##### `assertion_attribute`<sup>Required</sup> <a name="assertion_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.assertionAttribute"></a>

```python
assertion_attribute: str
```

- *Type:* str

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

---

##### `attribute_sets`<sup>Required</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authn_request_binding`<sup>Required</sup> <a name="authn_request_binding" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.authnRequestBinding"></a>

```python
authn_request_binding: str
```

- *Type:* str

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `encryption_certificate`<sup>Required</sup> <a name="encryption_certificate" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.encryptionCertificate"></a>

```python
encryption_certificate: str
```

- *Type:* str

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `icon_url`<sup>Required</sup> <a name="icon_url" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.iconUrl"></a>

```python
icon_url: str
```

- *Type:* str

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

---

##### `idp_sso_url`<sup>Required</sup> <a name="idp_sso_url" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.idpSsoUrl"></a>

```python
idp_sso_url: str
```

- *Type:* str

---

##### `include_signing_cert_in_signature`<sup>Required</sup> <a name="include_signing_cert_in_signature" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.includeSigningCertInSignature"></a>

```python
include_signing_cert_in_signature: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `jit_user_prov_attribute_update_enabled`<sup>Required</sup> <a name="jit_user_prov_attribute_update_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvAttributeUpdateEnabled"></a>

```python
jit_user_prov_attribute_update_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `jit_user_prov_create_user_enabled`<sup>Required</sup> <a name="jit_user_prov_create_user_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvCreateUserEnabled"></a>

```python
jit_user_prov_create_user_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `jit_user_prov_enabled`<sup>Required</sup> <a name="jit_user_prov_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvEnabled"></a>

```python
jit_user_prov_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `jit_user_prov_group_assertion_attribute_enabled`<sup>Required</sup> <a name="jit_user_prov_group_assertion_attribute_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvGroupAssertionAttributeEnabled"></a>

```python
jit_user_prov_group_assertion_attribute_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `jit_user_prov_group_assignment_method`<sup>Required</sup> <a name="jit_user_prov_group_assignment_method" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvGroupAssignmentMethod"></a>

```python
jit_user_prov_group_assignment_method: str
```

- *Type:* str

---

##### `jit_user_prov_group_mapping_mode`<sup>Required</sup> <a name="jit_user_prov_group_mapping_mode" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvGroupMappingMode"></a>

```python
jit_user_prov_group_mapping_mode: str
```

- *Type:* str

---

##### `jit_user_prov_group_saml_attribute_name`<sup>Required</sup> <a name="jit_user_prov_group_saml_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvGroupSamlAttributeName"></a>

```python
jit_user_prov_group_saml_attribute_name: str
```

- *Type:* str

---

##### `jit_user_prov_group_static_list_enabled`<sup>Required</sup> <a name="jit_user_prov_group_static_list_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvGroupStaticListEnabled"></a>

```python
jit_user_prov_group_static_list_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `jit_user_prov_ignore_error_on_absent_groups`<sup>Required</sup> <a name="jit_user_prov_ignore_error_on_absent_groups" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvIgnoreErrorOnAbsentGroups"></a>

```python
jit_user_prov_ignore_error_on_absent_groups: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `logout_binding`<sup>Required</sup> <a name="logout_binding" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.logoutBinding"></a>

```python
logout_binding: str
```

- *Type:* str

---

##### `logout_enabled`<sup>Required</sup> <a name="logout_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.logoutEnabled"></a>

```python
logout_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `logout_request_url`<sup>Required</sup> <a name="logout_request_url" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.logoutRequestUrl"></a>

```python
logout_request_url: str
```

- *Type:* str

---

##### `logout_response_url`<sup>Required</sup> <a name="logout_response_url" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.logoutResponseUrl"></a>

```python
logout_response_url: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.metadata"></a>

```python
metadata: str
```

- *Type:* str

---

##### `name_id_format`<sup>Required</sup> <a name="name_id_format" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.nameIdFormat"></a>

```python
name_id_format: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `partner_name`<sup>Required</sup> <a name="partner_name" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.partnerName"></a>

```python
partner_name: str
```

- *Type:* str

---

##### `partner_provider_id`<sup>Required</sup> <a name="partner_provider_id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.partnerProviderId"></a>

```python
partner_provider_id: str
```

- *Type:* str

---

##### `requested_authentication_context`<sup>Required</sup> <a name="requested_authentication_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.requestedAuthenticationContext"></a>

```python
requested_authentication_context: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `require_force_authn`<sup>Required</sup> <a name="require_force_authn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.requireForceAuthn"></a>

```python
require_force_authn: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `requires_encrypted_assertion`<sup>Required</sup> <a name="requires_encrypted_assertion" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.requiresEncryptedAssertion"></a>

```python
requires_encrypted_assertion: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_type_schema_version`<sup>Required</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

---

##### `saml_ho_krequired`<sup>Required</sup> <a name="saml_ho_krequired" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.samlHoKrequired"></a>

```python
saml_ho_krequired: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_instance_identifier`<sup>Required</sup> <a name="service_instance_identifier" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.serviceInstanceIdentifier"></a>

```python
service_instance_identifier: str
```

- *Type:* str

---

##### `shown_on_login_page`<sup>Required</sup> <a name="shown_on_login_page" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.shownOnLoginPage"></a>

```python
shown_on_login_page: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `signature_hash_algorithm`<sup>Required</sup> <a name="signature_hash_algorithm" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.signatureHashAlgorithm"></a>

```python
signature_hash_algorithm: str
```

- *Type:* str

---

##### `signing_certificate`<sup>Required</sup> <a name="signing_certificate" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.signingCertificate"></a>

```python
signing_certificate: str
```

- *Type:* str

---

##### `succinct_id`<sup>Required</sup> <a name="succinct_id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.succinctId"></a>

```python
succinct_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `user_mapping_method`<sup>Required</sup> <a name="user_mapping_method" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.userMappingMethod"></a>

```python
user_mapping_method: str
```

- *Type:* str

---

##### `user_mapping_store_attribute`<sup>Required</sup> <a name="user_mapping_store_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.userMappingStoreAttribute"></a>

```python
user_mapping_store_attribute: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityDomainsIdentityProviderConfig <a name="IdentityDomainsIdentityProviderConfig" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_identity_provider

identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  enabled: typing.Union[bool, IResolvable],
  idcs_endpoint: str,
  partner_name: str,
  schemas: typing.List[str],
  assertion_attribute: str = None,
  attributes: str = None,
  attribute_sets: typing.List[str] = None,
  authn_request_binding: str = None,
  authorization: str = None,
  correlation_policy: IdentityDomainsIdentityProviderCorrelationPolicy = None,
  description: str = None,
  encryption_certificate: str = None,
  external_id: str = None,
  icon_url: str = None,
  idp_sso_url: str = None,
  include_signing_cert_in_signature: typing.Union[bool, IResolvable] = None,
  jit_user_prov_assigned_groups: typing.Union[IResolvable, typing.List[IdentityDomainsIdentityProviderJitUserProvAssignedGroups]] = None,
  jit_user_prov_attributes: IdentityDomainsIdentityProviderJitUserProvAttributes = None,
  jit_user_prov_attribute_update_enabled: typing.Union[bool, IResolvable] = None,
  jit_user_prov_create_user_enabled: typing.Union[bool, IResolvable] = None,
  jit_user_prov_enabled: typing.Union[bool, IResolvable] = None,
  jit_user_prov_group_assertion_attribute_enabled: typing.Union[bool, IResolvable] = None,
  jit_user_prov_group_assignment_method: str = None,
  jit_user_prov_group_mapping_mode: str = None,
  jit_user_prov_group_mappings: typing.Union[IResolvable, typing.List[IdentityDomainsIdentityProviderJitUserProvGroupMappings]] = None,
  jit_user_prov_group_saml_attribute_name: str = None,
  jit_user_prov_group_static_list_enabled: typing.Union[bool, IResolvable] = None,
  jit_user_prov_ignore_error_on_absent_groups: typing.Union[bool, IResolvable] = None,
  logout_binding: str = None,
  logout_enabled: typing.Union[bool, IResolvable] = None,
  logout_request_url: str = None,
  logout_response_url: str = None,
  metadata: str = None,
  name_id_format: str = None,
  ocid: str = None,
  partner_provider_id: str = None,
  requested_authentication_context: typing.List[str] = None,
  require_force_authn: typing.Union[bool, IResolvable] = None,
  requires_encrypted_assertion: typing.Union[bool, IResolvable] = None,
  resource_type_schema_version: str = None,
  saml_ho_krequired: typing.Union[bool, IResolvable] = None,
  service_instance_identifier: str = None,
  shown_on_login_page: typing.Union[bool, IResolvable] = None,
  signature_hash_algorithm: str = None,
  signing_certificate: str = None,
  succinct_id: str = None,
  tags: typing.Union[IResolvable, typing.List[IdentityDomainsIdentityProviderTags]] = None,
  timeouts: IdentityDomainsIdentityProviderTimeouts = None,
  type: str = None,
  urnietfparamsscimschemasoracleidcsextensionsocial_identity_provider: IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider = None,
  urnietfparamsscimschemasoracleidcsextensionx509_identity_provider: IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider = None,
  user_mapping_method: str = None,
  user_mapping_store_attribute: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#enabled IdentityDomainsIdentityProvider#enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#idcs_endpoint IdentityDomainsIdentityProvider#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.partnerName">partner_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#partner_name IdentityDomainsIdentityProvider#partner_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#schemas IdentityDomainsIdentityProvider#schemas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.assertionAttribute">assertion_attribute</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#assertion_attribute IdentityDomainsIdentityProvider#assertion_attribute}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.attributes">attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#attributes IdentityDomainsIdentityProvider#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#attribute_sets IdentityDomainsIdentityProvider#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.authnRequestBinding">authn_request_binding</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#authn_request_binding IdentityDomainsIdentityProvider#authn_request_binding}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#authorization IdentityDomainsIdentityProvider#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.correlationPolicy">correlation_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicy">IdentityDomainsIdentityProviderCorrelationPolicy</a></code> | correlation_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#description IdentityDomainsIdentityProvider#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.encryptionCertificate">encryption_certificate</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#encryption_certificate IdentityDomainsIdentityProvider#encryption_certificate}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.externalId">external_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#external_id IdentityDomainsIdentityProvider#external_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.iconUrl">icon_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#icon_url IdentityDomainsIdentityProvider#icon_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.idpSsoUrl">idp_sso_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#idp_sso_url IdentityDomainsIdentityProvider#idp_sso_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.includeSigningCertInSignature">include_signing_cert_in_signature</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#include_signing_cert_in_signature IdentityDomainsIdentityProvider#include_signing_cert_in_signature}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.jitUserProvAssignedGroups">jit_user_prov_assigned_groups</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroups">IdentityDomainsIdentityProviderJitUserProvAssignedGroups</a>]]</code> | jit_user_prov_assigned_groups block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.jitUserProvAttributes">jit_user_prov_attributes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributes">IdentityDomainsIdentityProviderJitUserProvAttributes</a></code> | jit_user_prov_attributes block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.jitUserProvAttributeUpdateEnabled">jit_user_prov_attribute_update_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_attribute_update_enabled IdentityDomainsIdentityProvider#jit_user_prov_attribute_update_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.jitUserProvCreateUserEnabled">jit_user_prov_create_user_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_create_user_enabled IdentityDomainsIdentityProvider#jit_user_prov_create_user_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.jitUserProvEnabled">jit_user_prov_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_enabled IdentityDomainsIdentityProvider#jit_user_prov_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.jitUserProvGroupAssertionAttributeEnabled">jit_user_prov_group_assertion_attribute_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_group_assertion_attribute_enabled IdentityDomainsIdentityProvider#jit_user_prov_group_assertion_attribute_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.jitUserProvGroupAssignmentMethod">jit_user_prov_group_assignment_method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_group_assignment_method IdentityDomainsIdentityProvider#jit_user_prov_group_assignment_method}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.jitUserProvGroupMappingMode">jit_user_prov_group_mapping_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_group_mapping_mode IdentityDomainsIdentityProvider#jit_user_prov_group_mapping_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.jitUserProvGroupMappings">jit_user_prov_group_mappings</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappings">IdentityDomainsIdentityProviderJitUserProvGroupMappings</a>]]</code> | jit_user_prov_group_mappings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.jitUserProvGroupSamlAttributeName">jit_user_prov_group_saml_attribute_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_group_saml_attribute_name IdentityDomainsIdentityProvider#jit_user_prov_group_saml_attribute_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.jitUserProvGroupStaticListEnabled">jit_user_prov_group_static_list_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_group_static_list_enabled IdentityDomainsIdentityProvider#jit_user_prov_group_static_list_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.jitUserProvIgnoreErrorOnAbsentGroups">jit_user_prov_ignore_error_on_absent_groups</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_ignore_error_on_absent_groups IdentityDomainsIdentityProvider#jit_user_prov_ignore_error_on_absent_groups}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.logoutBinding">logout_binding</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#logout_binding IdentityDomainsIdentityProvider#logout_binding}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.logoutEnabled">logout_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#logout_enabled IdentityDomainsIdentityProvider#logout_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.logoutRequestUrl">logout_request_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#logout_request_url IdentityDomainsIdentityProvider#logout_request_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.logoutResponseUrl">logout_response_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#logout_response_url IdentityDomainsIdentityProvider#logout_response_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.metadata">metadata</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#metadata IdentityDomainsIdentityProvider#metadata}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.nameIdFormat">name_id_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#name_id_format IdentityDomainsIdentityProvider#name_id_format}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.ocid">ocid</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#ocid IdentityDomainsIdentityProvider#ocid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.partnerProviderId">partner_provider_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#partner_provider_id IdentityDomainsIdentityProvider#partner_provider_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.requestedAuthenticationContext">requested_authentication_context</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#requested_authentication_context IdentityDomainsIdentityProvider#requested_authentication_context}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.requireForceAuthn">require_force_authn</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#require_force_authn IdentityDomainsIdentityProvider#require_force_authn}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.requiresEncryptedAssertion">requires_encrypted_assertion</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#requires_encrypted_assertion IdentityDomainsIdentityProvider#requires_encrypted_assertion}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#resource_type_schema_version IdentityDomainsIdentityProvider#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.samlHoKrequired">saml_ho_krequired</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#saml_ho_krequired IdentityDomainsIdentityProvider#saml_ho_krequired}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.serviceInstanceIdentifier">service_instance_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#service_instance_identifier IdentityDomainsIdentityProvider#service_instance_identifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.shownOnLoginPage">shown_on_login_page</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#shown_on_login_page IdentityDomainsIdentityProvider#shown_on_login_page}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.signatureHashAlgorithm">signature_hash_algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#signature_hash_algorithm IdentityDomainsIdentityProvider#signature_hash_algorithm}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.signingCertificate">signing_certificate</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#signing_certificate IdentityDomainsIdentityProvider#signing_certificate}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.succinctId">succinct_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#succinct_id IdentityDomainsIdentityProvider#succinct_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.tags">tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTags">IdentityDomainsIdentityProviderTags</a>]]</code> | tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeouts">IdentityDomainsIdentityProviderTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#type IdentityDomainsIdentityProvider#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.urnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider">urnietfparamsscimschemasoracleidcsextensionsocial_identity_provider</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider</a></code> | urnietfparamsscimschemasoracleidcsextensionsocial_identity_provider block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.urnietfparamsscimschemasoracleidcsextensionx509IdentityProvider">urnietfparamsscimschemasoracleidcsextensionx509_identity_provider</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider</a></code> | urnietfparamsscimschemasoracleidcsextensionx509identity_provider block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.userMappingMethod">user_mapping_method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#user_mapping_method IdentityDomainsIdentityProvider#user_mapping_method}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.userMappingStoreAttribute">user_mapping_store_attribute</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#user_mapping_store_attribute IdentityDomainsIdentityProvider#user_mapping_store_attribute}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#enabled IdentityDomainsIdentityProvider#enabled}.

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#idcs_endpoint IdentityDomainsIdentityProvider#idcs_endpoint}.

---

##### `partner_name`<sup>Required</sup> <a name="partner_name" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.partnerName"></a>

```python
partner_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#partner_name IdentityDomainsIdentityProvider#partner_name}.

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#schemas IdentityDomainsIdentityProvider#schemas}.

---

##### `assertion_attribute`<sup>Optional</sup> <a name="assertion_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.assertionAttribute"></a>

```python
assertion_attribute: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#assertion_attribute IdentityDomainsIdentityProvider#assertion_attribute}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#attributes IdentityDomainsIdentityProvider#attributes}.

---

##### `attribute_sets`<sup>Optional</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#attribute_sets IdentityDomainsIdentityProvider#attribute_sets}.

---

##### `authn_request_binding`<sup>Optional</sup> <a name="authn_request_binding" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.authnRequestBinding"></a>

```python
authn_request_binding: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#authn_request_binding IdentityDomainsIdentityProvider#authn_request_binding}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#authorization IdentityDomainsIdentityProvider#authorization}.

---

##### `correlation_policy`<sup>Optional</sup> <a name="correlation_policy" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.correlationPolicy"></a>

```python
correlation_policy: IdentityDomainsIdentityProviderCorrelationPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicy">IdentityDomainsIdentityProviderCorrelationPolicy</a>

correlation_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#correlation_policy IdentityDomainsIdentityProvider#correlation_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#description IdentityDomainsIdentityProvider#description}.

---

##### `encryption_certificate`<sup>Optional</sup> <a name="encryption_certificate" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.encryptionCertificate"></a>

```python
encryption_certificate: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#encryption_certificate IdentityDomainsIdentityProvider#encryption_certificate}.

---

##### `external_id`<sup>Optional</sup> <a name="external_id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#external_id IdentityDomainsIdentityProvider#external_id}.

---

##### `icon_url`<sup>Optional</sup> <a name="icon_url" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.iconUrl"></a>

```python
icon_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#icon_url IdentityDomainsIdentityProvider#icon_url}.

---

##### `idp_sso_url`<sup>Optional</sup> <a name="idp_sso_url" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.idpSsoUrl"></a>

```python
idp_sso_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#idp_sso_url IdentityDomainsIdentityProvider#idp_sso_url}.

---

##### `include_signing_cert_in_signature`<sup>Optional</sup> <a name="include_signing_cert_in_signature" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.includeSigningCertInSignature"></a>

```python
include_signing_cert_in_signature: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#include_signing_cert_in_signature IdentityDomainsIdentityProvider#include_signing_cert_in_signature}.

---

##### `jit_user_prov_assigned_groups`<sup>Optional</sup> <a name="jit_user_prov_assigned_groups" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.jitUserProvAssignedGroups"></a>

```python
jit_user_prov_assigned_groups: typing.Union[IResolvable, typing.List[IdentityDomainsIdentityProviderJitUserProvAssignedGroups]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroups">IdentityDomainsIdentityProviderJitUserProvAssignedGroups</a>]]

jit_user_prov_assigned_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_assigned_groups IdentityDomainsIdentityProvider#jit_user_prov_assigned_groups}

---

##### `jit_user_prov_attributes`<sup>Optional</sup> <a name="jit_user_prov_attributes" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.jitUserProvAttributes"></a>

```python
jit_user_prov_attributes: IdentityDomainsIdentityProviderJitUserProvAttributes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributes">IdentityDomainsIdentityProviderJitUserProvAttributes</a>

jit_user_prov_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_attributes IdentityDomainsIdentityProvider#jit_user_prov_attributes}

---

##### `jit_user_prov_attribute_update_enabled`<sup>Optional</sup> <a name="jit_user_prov_attribute_update_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.jitUserProvAttributeUpdateEnabled"></a>

```python
jit_user_prov_attribute_update_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_attribute_update_enabled IdentityDomainsIdentityProvider#jit_user_prov_attribute_update_enabled}.

---

##### `jit_user_prov_create_user_enabled`<sup>Optional</sup> <a name="jit_user_prov_create_user_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.jitUserProvCreateUserEnabled"></a>

```python
jit_user_prov_create_user_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_create_user_enabled IdentityDomainsIdentityProvider#jit_user_prov_create_user_enabled}.

---

##### `jit_user_prov_enabled`<sup>Optional</sup> <a name="jit_user_prov_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.jitUserProvEnabled"></a>

```python
jit_user_prov_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_enabled IdentityDomainsIdentityProvider#jit_user_prov_enabled}.

---

##### `jit_user_prov_group_assertion_attribute_enabled`<sup>Optional</sup> <a name="jit_user_prov_group_assertion_attribute_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.jitUserProvGroupAssertionAttributeEnabled"></a>

```python
jit_user_prov_group_assertion_attribute_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_group_assertion_attribute_enabled IdentityDomainsIdentityProvider#jit_user_prov_group_assertion_attribute_enabled}.

---

##### `jit_user_prov_group_assignment_method`<sup>Optional</sup> <a name="jit_user_prov_group_assignment_method" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.jitUserProvGroupAssignmentMethod"></a>

```python
jit_user_prov_group_assignment_method: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_group_assignment_method IdentityDomainsIdentityProvider#jit_user_prov_group_assignment_method}.

---

##### `jit_user_prov_group_mapping_mode`<sup>Optional</sup> <a name="jit_user_prov_group_mapping_mode" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.jitUserProvGroupMappingMode"></a>

```python
jit_user_prov_group_mapping_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_group_mapping_mode IdentityDomainsIdentityProvider#jit_user_prov_group_mapping_mode}.

---

##### `jit_user_prov_group_mappings`<sup>Optional</sup> <a name="jit_user_prov_group_mappings" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.jitUserProvGroupMappings"></a>

```python
jit_user_prov_group_mappings: typing.Union[IResolvable, typing.List[IdentityDomainsIdentityProviderJitUserProvGroupMappings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappings">IdentityDomainsIdentityProviderJitUserProvGroupMappings</a>]]

jit_user_prov_group_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_group_mappings IdentityDomainsIdentityProvider#jit_user_prov_group_mappings}

---

##### `jit_user_prov_group_saml_attribute_name`<sup>Optional</sup> <a name="jit_user_prov_group_saml_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.jitUserProvGroupSamlAttributeName"></a>

```python
jit_user_prov_group_saml_attribute_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_group_saml_attribute_name IdentityDomainsIdentityProvider#jit_user_prov_group_saml_attribute_name}.

---

##### `jit_user_prov_group_static_list_enabled`<sup>Optional</sup> <a name="jit_user_prov_group_static_list_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.jitUserProvGroupStaticListEnabled"></a>

```python
jit_user_prov_group_static_list_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_group_static_list_enabled IdentityDomainsIdentityProvider#jit_user_prov_group_static_list_enabled}.

---

##### `jit_user_prov_ignore_error_on_absent_groups`<sup>Optional</sup> <a name="jit_user_prov_ignore_error_on_absent_groups" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.jitUserProvIgnoreErrorOnAbsentGroups"></a>

```python
jit_user_prov_ignore_error_on_absent_groups: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_ignore_error_on_absent_groups IdentityDomainsIdentityProvider#jit_user_prov_ignore_error_on_absent_groups}.

---

##### `logout_binding`<sup>Optional</sup> <a name="logout_binding" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.logoutBinding"></a>

```python
logout_binding: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#logout_binding IdentityDomainsIdentityProvider#logout_binding}.

---

##### `logout_enabled`<sup>Optional</sup> <a name="logout_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.logoutEnabled"></a>

```python
logout_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#logout_enabled IdentityDomainsIdentityProvider#logout_enabled}.

---

##### `logout_request_url`<sup>Optional</sup> <a name="logout_request_url" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.logoutRequestUrl"></a>

```python
logout_request_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#logout_request_url IdentityDomainsIdentityProvider#logout_request_url}.

---

##### `logout_response_url`<sup>Optional</sup> <a name="logout_response_url" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.logoutResponseUrl"></a>

```python
logout_response_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#logout_response_url IdentityDomainsIdentityProvider#logout_response_url}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.metadata"></a>

```python
metadata: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#metadata IdentityDomainsIdentityProvider#metadata}.

---

##### `name_id_format`<sup>Optional</sup> <a name="name_id_format" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.nameIdFormat"></a>

```python
name_id_format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#name_id_format IdentityDomainsIdentityProvider#name_id_format}.

---

##### `ocid`<sup>Optional</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#ocid IdentityDomainsIdentityProvider#ocid}.

---

##### `partner_provider_id`<sup>Optional</sup> <a name="partner_provider_id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.partnerProviderId"></a>

```python
partner_provider_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#partner_provider_id IdentityDomainsIdentityProvider#partner_provider_id}.

---

##### `requested_authentication_context`<sup>Optional</sup> <a name="requested_authentication_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.requestedAuthenticationContext"></a>

```python
requested_authentication_context: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#requested_authentication_context IdentityDomainsIdentityProvider#requested_authentication_context}.

---

##### `require_force_authn`<sup>Optional</sup> <a name="require_force_authn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.requireForceAuthn"></a>

```python
require_force_authn: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#require_force_authn IdentityDomainsIdentityProvider#require_force_authn}.

---

##### `requires_encrypted_assertion`<sup>Optional</sup> <a name="requires_encrypted_assertion" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.requiresEncryptedAssertion"></a>

```python
requires_encrypted_assertion: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#requires_encrypted_assertion IdentityDomainsIdentityProvider#requires_encrypted_assertion}.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#resource_type_schema_version IdentityDomainsIdentityProvider#resource_type_schema_version}.

---

##### `saml_ho_krequired`<sup>Optional</sup> <a name="saml_ho_krequired" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.samlHoKrequired"></a>

```python
saml_ho_krequired: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#saml_ho_krequired IdentityDomainsIdentityProvider#saml_ho_krequired}.

---

##### `service_instance_identifier`<sup>Optional</sup> <a name="service_instance_identifier" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.serviceInstanceIdentifier"></a>

```python
service_instance_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#service_instance_identifier IdentityDomainsIdentityProvider#service_instance_identifier}.

---

##### `shown_on_login_page`<sup>Optional</sup> <a name="shown_on_login_page" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.shownOnLoginPage"></a>

```python
shown_on_login_page: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#shown_on_login_page IdentityDomainsIdentityProvider#shown_on_login_page}.

---

##### `signature_hash_algorithm`<sup>Optional</sup> <a name="signature_hash_algorithm" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.signatureHashAlgorithm"></a>

```python
signature_hash_algorithm: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#signature_hash_algorithm IdentityDomainsIdentityProvider#signature_hash_algorithm}.

---

##### `signing_certificate`<sup>Optional</sup> <a name="signing_certificate" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.signingCertificate"></a>

```python
signing_certificate: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#signing_certificate IdentityDomainsIdentityProvider#signing_certificate}.

---

##### `succinct_id`<sup>Optional</sup> <a name="succinct_id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.succinctId"></a>

```python
succinct_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#succinct_id IdentityDomainsIdentityProvider#succinct_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.tags"></a>

```python
tags: typing.Union[IResolvable, typing.List[IdentityDomainsIdentityProviderTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTags">IdentityDomainsIdentityProviderTags</a>]]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#tags IdentityDomainsIdentityProvider#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.timeouts"></a>

```python
timeouts: IdentityDomainsIdentityProviderTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeouts">IdentityDomainsIdentityProviderTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#timeouts IdentityDomainsIdentityProvider#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#type IdentityDomainsIdentityProvider#type}.

---

##### `urnietfparamsscimschemasoracleidcsextensionsocial_identity_provider`<sup>Optional</sup> <a name="urnietfparamsscimschemasoracleidcsextensionsocial_identity_provider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.urnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider"></a>

```python
urnietfparamsscimschemasoracleidcsextensionsocial_identity_provider: IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider</a>

urnietfparamsscimschemasoracleidcsextensionsocial_identity_provider block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#urnietfparamsscimschemasoracleidcsextensionsocial_identity_provider IdentityDomainsIdentityProvider#urnietfparamsscimschemasoracleidcsextensionsocial_identity_provider}

---

##### `urnietfparamsscimschemasoracleidcsextensionx509_identity_provider`<sup>Optional</sup> <a name="urnietfparamsscimschemasoracleidcsextensionx509_identity_provider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.urnietfparamsscimschemasoracleidcsextensionx509IdentityProvider"></a>

```python
urnietfparamsscimschemasoracleidcsextensionx509_identity_provider: IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider</a>

urnietfparamsscimschemasoracleidcsextensionx509identity_provider block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#urnietfparamsscimschemasoracleidcsextensionx509identity_provider IdentityDomainsIdentityProvider#urnietfparamsscimschemasoracleidcsextensionx509identity_provider}

---

##### `user_mapping_method`<sup>Optional</sup> <a name="user_mapping_method" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.userMappingMethod"></a>

```python
user_mapping_method: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#user_mapping_method IdentityDomainsIdentityProvider#user_mapping_method}.

---

##### `user_mapping_store_attribute`<sup>Optional</sup> <a name="user_mapping_store_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.userMappingStoreAttribute"></a>

```python
user_mapping_store_attribute: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#user_mapping_store_attribute IdentityDomainsIdentityProvider#user_mapping_store_attribute}.

---

### IdentityDomainsIdentityProviderCorrelationPolicy <a name="IdentityDomainsIdentityProviderCorrelationPolicy" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_identity_provider

identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicy(
  type: str,
  value: str,
  display: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicy.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#type IdentityDomainsIdentityProvider#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicy.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#value IdentityDomainsIdentityProvider#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicy.property.display">display</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#display IdentityDomainsIdentityProvider#display}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicy.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#type IdentityDomainsIdentityProvider#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicy.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#value IdentityDomainsIdentityProvider#value}.

---

##### `display`<sup>Optional</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicy.property.display"></a>

```python
display: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#display IdentityDomainsIdentityProvider#display}.

---

### IdentityDomainsIdentityProviderIdcsCreatedBy <a name="IdentityDomainsIdentityProviderIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_identity_provider

identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedBy()
```


### IdentityDomainsIdentityProviderIdcsLastModifiedBy <a name="IdentityDomainsIdentityProviderIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_identity_provider

identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedBy()
```


### IdentityDomainsIdentityProviderJitUserProvAssignedGroups <a name="IdentityDomainsIdentityProviderJitUserProvAssignedGroups" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroups.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_identity_provider

identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroups(
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroups.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#value IdentityDomainsIdentityProvider#value}. |

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroups.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#value IdentityDomainsIdentityProvider#value}.

---

### IdentityDomainsIdentityProviderJitUserProvAttributes <a name="IdentityDomainsIdentityProviderJitUserProvAttributes" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributes.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_identity_provider

identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributes(
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributes.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#value IdentityDomainsIdentityProvider#value}. |

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributes.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#value IdentityDomainsIdentityProvider#value}.

---

### IdentityDomainsIdentityProviderJitUserProvGroupMappings <a name="IdentityDomainsIdentityProviderJitUserProvGroupMappings" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_identity_provider

identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappings(
  idp_group: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappings.property.idpGroup">idp_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#idp_group IdentityDomainsIdentityProvider#idp_group}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappings.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#value IdentityDomainsIdentityProvider#value}. |

---

##### `idp_group`<sup>Required</sup> <a name="idp_group" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappings.property.idpGroup"></a>

```python
idp_group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#idp_group IdentityDomainsIdentityProvider#idp_group}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappings.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#value IdentityDomainsIdentityProvider#value}.

---

### IdentityDomainsIdentityProviderMeta <a name="IdentityDomainsIdentityProviderMeta" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMeta.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_identity_provider

identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMeta()
```


### IdentityDomainsIdentityProviderTags <a name="IdentityDomainsIdentityProviderTags" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTags.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_identity_provider

identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTags(
  key: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#key IdentityDomainsIdentityProvider#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#value IdentityDomainsIdentityProvider#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#key IdentityDomainsIdentityProvider#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#value IdentityDomainsIdentityProvider#value}.

---

### IdentityDomainsIdentityProviderTimeouts <a name="IdentityDomainsIdentityProviderTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_identity_provider

identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#create IdentityDomainsIdentityProvider#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#delete IdentityDomainsIdentityProvider#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#update IdentityDomainsIdentityProvider#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#create IdentityDomainsIdentityProvider#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#delete IdentityDomainsIdentityProvider#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#update IdentityDomainsIdentityProvider#update}.

---

### IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider <a name="IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_identity_provider

identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider(
  account_linking_enabled: typing.Union[bool, IResolvable],
  consumer_key: str,
  consumer_secret: str,
  registration_enabled: typing.Union[bool, IResolvable],
  service_provider_name: str,
  access_token_url: str = None,
  admin_scope: typing.List[str] = None,
  authz_url: str = None,
  auto_redirect_enabled: typing.Union[bool, IResolvable] = None,
  client_credential_in_payload: typing.Union[bool, IResolvable] = None,
  clock_skew_in_seconds: typing.Union[int, float] = None,
  discovery_url: str = None,
  id_attribute: str = None,
  jit_prov_assigned_groups: typing.Union[IResolvable, typing.List[IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups]] = None,
  jit_prov_group_static_list_enabled: typing.Union[bool, IResolvable] = None,
  profile_url: str = None,
  redirect_url: str = None,
  scope: typing.List[str] = None,
  social_jit_provisioning_enabled: typing.Union[bool, IResolvable] = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.accountLinkingEnabled">account_linking_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#account_linking_enabled IdentityDomainsIdentityProvider#account_linking_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.consumerKey">consumer_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#consumer_key IdentityDomainsIdentityProvider#consumer_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.consumerSecret">consumer_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#consumer_secret IdentityDomainsIdentityProvider#consumer_secret}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.registrationEnabled">registration_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#registration_enabled IdentityDomainsIdentityProvider#registration_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.serviceProviderName">service_provider_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#service_provider_name IdentityDomainsIdentityProvider#service_provider_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.accessTokenUrl">access_token_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#access_token_url IdentityDomainsIdentityProvider#access_token_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.adminScope">admin_scope</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#admin_scope IdentityDomainsIdentityProvider#admin_scope}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.authzUrl">authz_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#authz_url IdentityDomainsIdentityProvider#authz_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.autoRedirectEnabled">auto_redirect_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#auto_redirect_enabled IdentityDomainsIdentityProvider#auto_redirect_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.clientCredentialInPayload">client_credential_in_payload</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#client_credential_in_payload IdentityDomainsIdentityProvider#client_credential_in_payload}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.clockSkewInSeconds">clock_skew_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#clock_skew_in_seconds IdentityDomainsIdentityProvider#clock_skew_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.discoveryUrl">discovery_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#discovery_url IdentityDomainsIdentityProvider#discovery_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.idAttribute">id_attribute</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#id_attribute IdentityDomainsIdentityProvider#id_attribute}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.jitProvAssignedGroups">jit_prov_assigned_groups</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups</a>]]</code> | jit_prov_assigned_groups block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.jitProvGroupStaticListEnabled">jit_prov_group_static_list_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_prov_group_static_list_enabled IdentityDomainsIdentityProvider#jit_prov_group_static_list_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.profileUrl">profile_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#profile_url IdentityDomainsIdentityProvider#profile_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.redirectUrl">redirect_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#redirect_url IdentityDomainsIdentityProvider#redirect_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.scope">scope</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#scope IdentityDomainsIdentityProvider#scope}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.socialJitProvisioningEnabled">social_jit_provisioning_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#social_jit_provisioning_enabled IdentityDomainsIdentityProvider#social_jit_provisioning_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#status IdentityDomainsIdentityProvider#status}. |

---

##### `account_linking_enabled`<sup>Required</sup> <a name="account_linking_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.accountLinkingEnabled"></a>

```python
account_linking_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#account_linking_enabled IdentityDomainsIdentityProvider#account_linking_enabled}.

---

##### `consumer_key`<sup>Required</sup> <a name="consumer_key" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.consumerKey"></a>

```python
consumer_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#consumer_key IdentityDomainsIdentityProvider#consumer_key}.

---

##### `consumer_secret`<sup>Required</sup> <a name="consumer_secret" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.consumerSecret"></a>

```python
consumer_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#consumer_secret IdentityDomainsIdentityProvider#consumer_secret}.

---

##### `registration_enabled`<sup>Required</sup> <a name="registration_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.registrationEnabled"></a>

```python
registration_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#registration_enabled IdentityDomainsIdentityProvider#registration_enabled}.

---

##### `service_provider_name`<sup>Required</sup> <a name="service_provider_name" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.serviceProviderName"></a>

```python
service_provider_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#service_provider_name IdentityDomainsIdentityProvider#service_provider_name}.

---

##### `access_token_url`<sup>Optional</sup> <a name="access_token_url" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.accessTokenUrl"></a>

```python
access_token_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#access_token_url IdentityDomainsIdentityProvider#access_token_url}.

---

##### `admin_scope`<sup>Optional</sup> <a name="admin_scope" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.adminScope"></a>

```python
admin_scope: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#admin_scope IdentityDomainsIdentityProvider#admin_scope}.

---

##### `authz_url`<sup>Optional</sup> <a name="authz_url" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.authzUrl"></a>

```python
authz_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#authz_url IdentityDomainsIdentityProvider#authz_url}.

---

##### `auto_redirect_enabled`<sup>Optional</sup> <a name="auto_redirect_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.autoRedirectEnabled"></a>

```python
auto_redirect_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#auto_redirect_enabled IdentityDomainsIdentityProvider#auto_redirect_enabled}.

---

##### `client_credential_in_payload`<sup>Optional</sup> <a name="client_credential_in_payload" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.clientCredentialInPayload"></a>

```python
client_credential_in_payload: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#client_credential_in_payload IdentityDomainsIdentityProvider#client_credential_in_payload}.

---

##### `clock_skew_in_seconds`<sup>Optional</sup> <a name="clock_skew_in_seconds" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.clockSkewInSeconds"></a>

```python
clock_skew_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#clock_skew_in_seconds IdentityDomainsIdentityProvider#clock_skew_in_seconds}.

---

##### `discovery_url`<sup>Optional</sup> <a name="discovery_url" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.discoveryUrl"></a>

```python
discovery_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#discovery_url IdentityDomainsIdentityProvider#discovery_url}.

---

##### `id_attribute`<sup>Optional</sup> <a name="id_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.idAttribute"></a>

```python
id_attribute: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#id_attribute IdentityDomainsIdentityProvider#id_attribute}.

---

##### `jit_prov_assigned_groups`<sup>Optional</sup> <a name="jit_prov_assigned_groups" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.jitProvAssignedGroups"></a>

```python
jit_prov_assigned_groups: typing.Union[IResolvable, typing.List[IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups</a>]]

jit_prov_assigned_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_prov_assigned_groups IdentityDomainsIdentityProvider#jit_prov_assigned_groups}

---

##### `jit_prov_group_static_list_enabled`<sup>Optional</sup> <a name="jit_prov_group_static_list_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.jitProvGroupStaticListEnabled"></a>

```python
jit_prov_group_static_list_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_prov_group_static_list_enabled IdentityDomainsIdentityProvider#jit_prov_group_static_list_enabled}.

---

##### `profile_url`<sup>Optional</sup> <a name="profile_url" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.profileUrl"></a>

```python
profile_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#profile_url IdentityDomainsIdentityProvider#profile_url}.

---

##### `redirect_url`<sup>Optional</sup> <a name="redirect_url" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.redirectUrl"></a>

```python
redirect_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#redirect_url IdentityDomainsIdentityProvider#redirect_url}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.scope"></a>

```python
scope: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#scope IdentityDomainsIdentityProvider#scope}.

---

##### `social_jit_provisioning_enabled`<sup>Optional</sup> <a name="social_jit_provisioning_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.socialJitProvisioningEnabled"></a>

```python
social_jit_provisioning_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#social_jit_provisioning_enabled IdentityDomainsIdentityProvider#social_jit_provisioning_enabled}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#status IdentityDomainsIdentityProvider#status}.

---

### IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups <a name="IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_identity_provider

identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups(
  value: str,
  display: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#value IdentityDomainsIdentityProvider#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups.property.display">display</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#display IdentityDomainsIdentityProvider#display}. |

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#value IdentityDomainsIdentityProvider#value}.

---

##### `display`<sup>Optional</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups.property.display"></a>

```python
display: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#display IdentityDomainsIdentityProvider#display}.

---

### IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider <a name="IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_identity_provider

identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider(
  cert_match_attribute: str,
  signing_certificate_chain: typing.List[str],
  user_match_attribute: str,
  crl_check_on_ocsp_failure_enabled: typing.Union[bool, IResolvable] = None,
  crl_enabled: typing.Union[bool, IResolvable] = None,
  crl_location: str = None,
  crl_reload_duration: typing.Union[int, float] = None,
  eku_validation_enabled: typing.Union[bool, IResolvable] = None,
  eku_values: typing.List[str] = None,
  ocsp_allow_unknown_response_status: typing.Union[bool, IResolvable] = None,
  ocsp_enabled: typing.Union[bool, IResolvable] = None,
  ocsp_enable_signed_response: typing.Union[bool, IResolvable] = None,
  ocsp_responder_url: str = None,
  ocsp_revalidate_time: typing.Union[int, float] = None,
  ocsp_server_name: str = None,
  ocsp_trust_cert_chain: typing.List[str] = None,
  other_cert_match_attribute: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.certMatchAttribute">cert_match_attribute</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#cert_match_attribute IdentityDomainsIdentityProvider#cert_match_attribute}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.signingCertificateChain">signing_certificate_chain</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#signing_certificate_chain IdentityDomainsIdentityProvider#signing_certificate_chain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.userMatchAttribute">user_match_attribute</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#user_match_attribute IdentityDomainsIdentityProvider#user_match_attribute}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.crlCheckOnOcspFailureEnabled">crl_check_on_ocsp_failure_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#crl_check_on_ocsp_failure_enabled IdentityDomainsIdentityProvider#crl_check_on_ocsp_failure_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.crlEnabled">crl_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#crl_enabled IdentityDomainsIdentityProvider#crl_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.crlLocation">crl_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#crl_location IdentityDomainsIdentityProvider#crl_location}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.crlReloadDuration">crl_reload_duration</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#crl_reload_duration IdentityDomainsIdentityProvider#crl_reload_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.ekuValidationEnabled">eku_validation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#eku_validation_enabled IdentityDomainsIdentityProvider#eku_validation_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.ekuValues">eku_values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#eku_values IdentityDomainsIdentityProvider#eku_values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.ocspAllowUnknownResponseStatus">ocsp_allow_unknown_response_status</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#ocsp_allow_unknown_response_status IdentityDomainsIdentityProvider#ocsp_allow_unknown_response_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.ocspEnabled">ocsp_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#ocsp_enabled IdentityDomainsIdentityProvider#ocsp_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.ocspEnableSignedResponse">ocsp_enable_signed_response</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#ocsp_enable_signed_response IdentityDomainsIdentityProvider#ocsp_enable_signed_response}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.ocspResponderUrl">ocsp_responder_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#ocsp_responder_url IdentityDomainsIdentityProvider#ocsp_responder_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.ocspRevalidateTime">ocsp_revalidate_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#ocsp_revalidate_time IdentityDomainsIdentityProvider#ocsp_revalidate_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.ocspServerName">ocsp_server_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#ocsp_server_name IdentityDomainsIdentityProvider#ocsp_server_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.ocspTrustCertChain">ocsp_trust_cert_chain</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#ocsp_trust_cert_chain IdentityDomainsIdentityProvider#ocsp_trust_cert_chain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.otherCertMatchAttribute">other_cert_match_attribute</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#other_cert_match_attribute IdentityDomainsIdentityProvider#other_cert_match_attribute}. |

---

##### `cert_match_attribute`<sup>Required</sup> <a name="cert_match_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.certMatchAttribute"></a>

```python
cert_match_attribute: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#cert_match_attribute IdentityDomainsIdentityProvider#cert_match_attribute}.

---

##### `signing_certificate_chain`<sup>Required</sup> <a name="signing_certificate_chain" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.signingCertificateChain"></a>

```python
signing_certificate_chain: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#signing_certificate_chain IdentityDomainsIdentityProvider#signing_certificate_chain}.

---

##### `user_match_attribute`<sup>Required</sup> <a name="user_match_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.userMatchAttribute"></a>

```python
user_match_attribute: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#user_match_attribute IdentityDomainsIdentityProvider#user_match_attribute}.

---

##### `crl_check_on_ocsp_failure_enabled`<sup>Optional</sup> <a name="crl_check_on_ocsp_failure_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.crlCheckOnOcspFailureEnabled"></a>

```python
crl_check_on_ocsp_failure_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#crl_check_on_ocsp_failure_enabled IdentityDomainsIdentityProvider#crl_check_on_ocsp_failure_enabled}.

---

##### `crl_enabled`<sup>Optional</sup> <a name="crl_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.crlEnabled"></a>

```python
crl_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#crl_enabled IdentityDomainsIdentityProvider#crl_enabled}.

---

##### `crl_location`<sup>Optional</sup> <a name="crl_location" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.crlLocation"></a>

```python
crl_location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#crl_location IdentityDomainsIdentityProvider#crl_location}.

---

##### `crl_reload_duration`<sup>Optional</sup> <a name="crl_reload_duration" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.crlReloadDuration"></a>

```python
crl_reload_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#crl_reload_duration IdentityDomainsIdentityProvider#crl_reload_duration}.

---

##### `eku_validation_enabled`<sup>Optional</sup> <a name="eku_validation_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.ekuValidationEnabled"></a>

```python
eku_validation_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#eku_validation_enabled IdentityDomainsIdentityProvider#eku_validation_enabled}.

---

##### `eku_values`<sup>Optional</sup> <a name="eku_values" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.ekuValues"></a>

```python
eku_values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#eku_values IdentityDomainsIdentityProvider#eku_values}.

---

##### `ocsp_allow_unknown_response_status`<sup>Optional</sup> <a name="ocsp_allow_unknown_response_status" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.ocspAllowUnknownResponseStatus"></a>

```python
ocsp_allow_unknown_response_status: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#ocsp_allow_unknown_response_status IdentityDomainsIdentityProvider#ocsp_allow_unknown_response_status}.

---

##### `ocsp_enabled`<sup>Optional</sup> <a name="ocsp_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.ocspEnabled"></a>

```python
ocsp_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#ocsp_enabled IdentityDomainsIdentityProvider#ocsp_enabled}.

---

##### `ocsp_enable_signed_response`<sup>Optional</sup> <a name="ocsp_enable_signed_response" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.ocspEnableSignedResponse"></a>

```python
ocsp_enable_signed_response: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#ocsp_enable_signed_response IdentityDomainsIdentityProvider#ocsp_enable_signed_response}.

---

##### `ocsp_responder_url`<sup>Optional</sup> <a name="ocsp_responder_url" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.ocspResponderUrl"></a>

```python
ocsp_responder_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#ocsp_responder_url IdentityDomainsIdentityProvider#ocsp_responder_url}.

---

##### `ocsp_revalidate_time`<sup>Optional</sup> <a name="ocsp_revalidate_time" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.ocspRevalidateTime"></a>

```python
ocsp_revalidate_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#ocsp_revalidate_time IdentityDomainsIdentityProvider#ocsp_revalidate_time}.

---

##### `ocsp_server_name`<sup>Optional</sup> <a name="ocsp_server_name" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.ocspServerName"></a>

```python
ocsp_server_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#ocsp_server_name IdentityDomainsIdentityProvider#ocsp_server_name}.

---

##### `ocsp_trust_cert_chain`<sup>Optional</sup> <a name="ocsp_trust_cert_chain" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.ocspTrustCertChain"></a>

```python
ocsp_trust_cert_chain: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#ocsp_trust_cert_chain IdentityDomainsIdentityProvider#ocsp_trust_cert_chain}.

---

##### `other_cert_match_attribute`<sup>Optional</sup> <a name="other_cert_match_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.otherCertMatchAttribute"></a>

```python
other_cert_match_attribute: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#other_cert_match_attribute IdentityDomainsIdentityProvider#other_cert_match_attribute}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityDomainsIdentityProviderCorrelationPolicyOutputReference <a name="IdentityDomainsIdentityProviderCorrelationPolicyOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_identity_provider

identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.resetDisplay">reset_display</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_display` <a name="reset_display" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.resetDisplay"></a>

```python
def reset_display() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.displayInput">display_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicy">IdentityDomainsIdentityProviderCorrelationPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `display_input`<sup>Optional</sup> <a name="display_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.displayInput"></a>

```python
display_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsIdentityProviderCorrelationPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicy">IdentityDomainsIdentityProviderCorrelationPolicy</a>

---


### IdentityDomainsIdentityProviderIdcsCreatedByList <a name="IdentityDomainsIdentityProviderIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_identity_provider

identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsIdentityProviderIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IdentityDomainsIdentityProviderIdcsCreatedByOutputReference <a name="IdentityDomainsIdentityProviderIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_identity_provider

identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedBy">IdentityDomainsIdentityProviderIdcsCreatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsIdentityProviderIdcsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedBy">IdentityDomainsIdentityProviderIdcsCreatedBy</a>

---


### IdentityDomainsIdentityProviderIdcsLastModifiedByList <a name="IdentityDomainsIdentityProviderIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_identity_provider

identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference <a name="IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_identity_provider

identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedBy">IdentityDomainsIdentityProviderIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsIdentityProviderIdcsLastModifiedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedBy">IdentityDomainsIdentityProviderIdcsLastModifiedBy</a>

---


### IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList <a name="IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_identity_provider

identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroups">IdentityDomainsIdentityProviderJitUserProvAssignedGroups</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[IdentityDomainsIdentityProviderJitUserProvAssignedGroups]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroups">IdentityDomainsIdentityProviderJitUserProvAssignedGroups</a>]]

---


### IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference <a name="IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_identity_provider

identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroups">IdentityDomainsIdentityProviderJitUserProvAssignedGroups</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IdentityDomainsIdentityProviderJitUserProvAssignedGroups]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroups">IdentityDomainsIdentityProviderJitUserProvAssignedGroups</a>]

---


### IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference <a name="IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_identity_provider

identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributes">IdentityDomainsIdentityProviderJitUserProvAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsIdentityProviderJitUserProvAttributes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributes">IdentityDomainsIdentityProviderJitUserProvAttributes</a>

---


### IdentityDomainsIdentityProviderJitUserProvGroupMappingsList <a name="IdentityDomainsIdentityProviderJitUserProvGroupMappingsList" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_identity_provider

identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappings">IdentityDomainsIdentityProviderJitUserProvGroupMappings</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[IdentityDomainsIdentityProviderJitUserProvGroupMappings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappings">IdentityDomainsIdentityProviderJitUserProvGroupMappings</a>]]

---


### IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference <a name="IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_identity_provider

identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.property.idpGroupInput">idp_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.property.idpGroup">idp_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappings">IdentityDomainsIdentityProviderJitUserProvGroupMappings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `idp_group_input`<sup>Optional</sup> <a name="idp_group_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.property.idpGroupInput"></a>

```python
idp_group_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `idp_group`<sup>Required</sup> <a name="idp_group" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.property.idpGroup"></a>

```python
idp_group: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IdentityDomainsIdentityProviderJitUserProvGroupMappings]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappings">IdentityDomainsIdentityProviderJitUserProvGroupMappings</a>]

---


### IdentityDomainsIdentityProviderMetaList <a name="IdentityDomainsIdentityProviderMetaList" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_identity_provider

identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsIdentityProviderMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IdentityDomainsIdentityProviderMetaOutputReference <a name="IdentityDomainsIdentityProviderMetaOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_identity_provider

identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.property.lastModified">last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMeta">IdentityDomainsIdentityProviderMeta</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `last_modified`<sup>Required</sup> <a name="last_modified" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.property.lastModified"></a>

```python
last_modified: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsIdentityProviderMeta
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMeta">IdentityDomainsIdentityProviderMeta</a>

---


### IdentityDomainsIdentityProviderTagsList <a name="IdentityDomainsIdentityProviderTagsList" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_identity_provider

identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsIdentityProviderTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTags">IdentityDomainsIdentityProviderTags</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[IdentityDomainsIdentityProviderTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTags">IdentityDomainsIdentityProviderTags</a>]]

---


### IdentityDomainsIdentityProviderTagsOutputReference <a name="IdentityDomainsIdentityProviderTagsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_identity_provider

identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTags">IdentityDomainsIdentityProviderTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IdentityDomainsIdentityProviderTags]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTags">IdentityDomainsIdentityProviderTags</a>]

---


### IdentityDomainsIdentityProviderTimeoutsOutputReference <a name="IdentityDomainsIdentityProviderTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_identity_provider

identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeouts">IdentityDomainsIdentityProviderTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IdentityDomainsIdentityProviderTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeouts">IdentityDomainsIdentityProviderTimeouts</a>]

---


### IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList <a name="IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_identity_provider

identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups</a>]]

---


### IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference <a name="IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_identity_provider

identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.resetDisplay">reset_display</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_display` <a name="reset_display" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.resetDisplay"></a>

```python
def reset_display() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.displayInput">display_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `display_input`<sup>Optional</sup> <a name="display_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.displayInput"></a>

```python
display_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups</a>]

---


### IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference <a name="IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_identity_provider

identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.putJitProvAssignedGroups">put_jit_prov_assigned_groups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetAccessTokenUrl">reset_access_token_url</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetAdminScope">reset_admin_scope</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetAuthzUrl">reset_authz_url</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetAutoRedirectEnabled">reset_auto_redirect_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetClientCredentialInPayload">reset_client_credential_in_payload</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetClockSkewInSeconds">reset_clock_skew_in_seconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetDiscoveryUrl">reset_discovery_url</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetIdAttribute">reset_id_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetJitProvAssignedGroups">reset_jit_prov_assigned_groups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetJitProvGroupStaticListEnabled">reset_jit_prov_group_static_list_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetProfileUrl">reset_profile_url</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetRedirectUrl">reset_redirect_url</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetScope">reset_scope</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetSocialJitProvisioningEnabled">reset_social_jit_provisioning_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetStatus">reset_status</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_jit_prov_assigned_groups` <a name="put_jit_prov_assigned_groups" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.putJitProvAssignedGroups"></a>

```python
def put_jit_prov_assigned_groups(
  value: typing.Union[IResolvable, typing.List[IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.putJitProvAssignedGroups.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups</a>]]

---

##### `reset_access_token_url` <a name="reset_access_token_url" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetAccessTokenUrl"></a>

```python
def reset_access_token_url() -> None
```

##### `reset_admin_scope` <a name="reset_admin_scope" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetAdminScope"></a>

```python
def reset_admin_scope() -> None
```

##### `reset_authz_url` <a name="reset_authz_url" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetAuthzUrl"></a>

```python
def reset_authz_url() -> None
```

##### `reset_auto_redirect_enabled` <a name="reset_auto_redirect_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetAutoRedirectEnabled"></a>

```python
def reset_auto_redirect_enabled() -> None
```

##### `reset_client_credential_in_payload` <a name="reset_client_credential_in_payload" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetClientCredentialInPayload"></a>

```python
def reset_client_credential_in_payload() -> None
```

##### `reset_clock_skew_in_seconds` <a name="reset_clock_skew_in_seconds" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetClockSkewInSeconds"></a>

```python
def reset_clock_skew_in_seconds() -> None
```

##### `reset_discovery_url` <a name="reset_discovery_url" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetDiscoveryUrl"></a>

```python
def reset_discovery_url() -> None
```

##### `reset_id_attribute` <a name="reset_id_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetIdAttribute"></a>

```python
def reset_id_attribute() -> None
```

##### `reset_jit_prov_assigned_groups` <a name="reset_jit_prov_assigned_groups" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetJitProvAssignedGroups"></a>

```python
def reset_jit_prov_assigned_groups() -> None
```

##### `reset_jit_prov_group_static_list_enabled` <a name="reset_jit_prov_group_static_list_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetJitProvGroupStaticListEnabled"></a>

```python
def reset_jit_prov_group_static_list_enabled() -> None
```

##### `reset_profile_url` <a name="reset_profile_url" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetProfileUrl"></a>

```python
def reset_profile_url() -> None
```

##### `reset_redirect_url` <a name="reset_redirect_url" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetRedirectUrl"></a>

```python
def reset_redirect_url() -> None
```

##### `reset_scope` <a name="reset_scope" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetScope"></a>

```python
def reset_scope() -> None
```

##### `reset_social_jit_provisioning_enabled` <a name="reset_social_jit_provisioning_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetSocialJitProvisioningEnabled"></a>

```python
def reset_social_jit_provisioning_enabled() -> None
```

##### `reset_status` <a name="reset_status" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetStatus"></a>

```python
def reset_status() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.jitProvAssignedGroups">jit_prov_assigned_groups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.accessTokenUrlInput">access_token_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.accountLinkingEnabledInput">account_linking_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.adminScopeInput">admin_scope_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.authzUrlInput">authz_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.autoRedirectEnabledInput">auto_redirect_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.clientCredentialInPayloadInput">client_credential_in_payload_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.clockSkewInSecondsInput">clock_skew_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.consumerKeyInput">consumer_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.consumerSecretInput">consumer_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.discoveryUrlInput">discovery_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.idAttributeInput">id_attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.jitProvAssignedGroupsInput">jit_prov_assigned_groups_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.jitProvGroupStaticListEnabledInput">jit_prov_group_static_list_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.profileUrlInput">profile_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.redirectUrlInput">redirect_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.registrationEnabledInput">registration_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.scopeInput">scope_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.serviceProviderNameInput">service_provider_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.socialJitProvisioningEnabledInput">social_jit_provisioning_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.accessTokenUrl">access_token_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.accountLinkingEnabled">account_linking_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.adminScope">admin_scope</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.authzUrl">authz_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.autoRedirectEnabled">auto_redirect_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.clientCredentialInPayload">client_credential_in_payload</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.clockSkewInSeconds">clock_skew_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.consumerKey">consumer_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.consumerSecret">consumer_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.discoveryUrl">discovery_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.idAttribute">id_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.jitProvGroupStaticListEnabled">jit_prov_group_static_list_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.profileUrl">profile_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.redirectUrl">redirect_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.registrationEnabled">registration_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.scope">scope</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.serviceProviderName">service_provider_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.socialJitProvisioningEnabled">social_jit_provisioning_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `jit_prov_assigned_groups`<sup>Required</sup> <a name="jit_prov_assigned_groups" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.jitProvAssignedGroups"></a>

```python
jit_prov_assigned_groups: IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList</a>

---

##### `access_token_url_input`<sup>Optional</sup> <a name="access_token_url_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.accessTokenUrlInput"></a>

```python
access_token_url_input: str
```

- *Type:* str

---

##### `account_linking_enabled_input`<sup>Optional</sup> <a name="account_linking_enabled_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.accountLinkingEnabledInput"></a>

```python
account_linking_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `admin_scope_input`<sup>Optional</sup> <a name="admin_scope_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.adminScopeInput"></a>

```python
admin_scope_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authz_url_input`<sup>Optional</sup> <a name="authz_url_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.authzUrlInput"></a>

```python
authz_url_input: str
```

- *Type:* str

---

##### `auto_redirect_enabled_input`<sup>Optional</sup> <a name="auto_redirect_enabled_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.autoRedirectEnabledInput"></a>

```python
auto_redirect_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `client_credential_in_payload_input`<sup>Optional</sup> <a name="client_credential_in_payload_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.clientCredentialInPayloadInput"></a>

```python
client_credential_in_payload_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `clock_skew_in_seconds_input`<sup>Optional</sup> <a name="clock_skew_in_seconds_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.clockSkewInSecondsInput"></a>

```python
clock_skew_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `consumer_key_input`<sup>Optional</sup> <a name="consumer_key_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.consumerKeyInput"></a>

```python
consumer_key_input: str
```

- *Type:* str

---

##### `consumer_secret_input`<sup>Optional</sup> <a name="consumer_secret_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.consumerSecretInput"></a>

```python
consumer_secret_input: str
```

- *Type:* str

---

##### `discovery_url_input`<sup>Optional</sup> <a name="discovery_url_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.discoveryUrlInput"></a>

```python
discovery_url_input: str
```

- *Type:* str

---

##### `id_attribute_input`<sup>Optional</sup> <a name="id_attribute_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.idAttributeInput"></a>

```python
id_attribute_input: str
```

- *Type:* str

---

##### `jit_prov_assigned_groups_input`<sup>Optional</sup> <a name="jit_prov_assigned_groups_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.jitProvAssignedGroupsInput"></a>

```python
jit_prov_assigned_groups_input: typing.Union[IResolvable, typing.List[IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups</a>]]

---

##### `jit_prov_group_static_list_enabled_input`<sup>Optional</sup> <a name="jit_prov_group_static_list_enabled_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.jitProvGroupStaticListEnabledInput"></a>

```python
jit_prov_group_static_list_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `profile_url_input`<sup>Optional</sup> <a name="profile_url_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.profileUrlInput"></a>

```python
profile_url_input: str
```

- *Type:* str

---

##### `redirect_url_input`<sup>Optional</sup> <a name="redirect_url_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.redirectUrlInput"></a>

```python
redirect_url_input: str
```

- *Type:* str

---

##### `registration_enabled_input`<sup>Optional</sup> <a name="registration_enabled_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.registrationEnabledInput"></a>

```python
registration_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.scopeInput"></a>

```python
scope_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_provider_name_input`<sup>Optional</sup> <a name="service_provider_name_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.serviceProviderNameInput"></a>

```python
service_provider_name_input: str
```

- *Type:* str

---

##### `social_jit_provisioning_enabled_input`<sup>Optional</sup> <a name="social_jit_provisioning_enabled_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.socialJitProvisioningEnabledInput"></a>

```python
social_jit_provisioning_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `access_token_url`<sup>Required</sup> <a name="access_token_url" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.accessTokenUrl"></a>

```python
access_token_url: str
```

- *Type:* str

---

##### `account_linking_enabled`<sup>Required</sup> <a name="account_linking_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.accountLinkingEnabled"></a>

```python
account_linking_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `admin_scope`<sup>Required</sup> <a name="admin_scope" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.adminScope"></a>

```python
admin_scope: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authz_url`<sup>Required</sup> <a name="authz_url" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.authzUrl"></a>

```python
authz_url: str
```

- *Type:* str

---

##### `auto_redirect_enabled`<sup>Required</sup> <a name="auto_redirect_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.autoRedirectEnabled"></a>

```python
auto_redirect_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `client_credential_in_payload`<sup>Required</sup> <a name="client_credential_in_payload" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.clientCredentialInPayload"></a>

```python
client_credential_in_payload: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `clock_skew_in_seconds`<sup>Required</sup> <a name="clock_skew_in_seconds" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.clockSkewInSeconds"></a>

```python
clock_skew_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `consumer_key`<sup>Required</sup> <a name="consumer_key" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.consumerKey"></a>

```python
consumer_key: str
```

- *Type:* str

---

##### `consumer_secret`<sup>Required</sup> <a name="consumer_secret" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.consumerSecret"></a>

```python
consumer_secret: str
```

- *Type:* str

---

##### `discovery_url`<sup>Required</sup> <a name="discovery_url" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.discoveryUrl"></a>

```python
discovery_url: str
```

- *Type:* str

---

##### `id_attribute`<sup>Required</sup> <a name="id_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.idAttribute"></a>

```python
id_attribute: str
```

- *Type:* str

---

##### `jit_prov_group_static_list_enabled`<sup>Required</sup> <a name="jit_prov_group_static_list_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.jitProvGroupStaticListEnabled"></a>

```python
jit_prov_group_static_list_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `profile_url`<sup>Required</sup> <a name="profile_url" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.profileUrl"></a>

```python
profile_url: str
```

- *Type:* str

---

##### `redirect_url`<sup>Required</sup> <a name="redirect_url" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.redirectUrl"></a>

```python
redirect_url: str
```

- *Type:* str

---

##### `registration_enabled`<sup>Required</sup> <a name="registration_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.registrationEnabled"></a>

```python
registration_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.scope"></a>

```python
scope: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_provider_name`<sup>Required</sup> <a name="service_provider_name" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.serviceProviderName"></a>

```python
service_provider_name: str
```

- *Type:* str

---

##### `social_jit_provisioning_enabled`<sup>Required</sup> <a name="social_jit_provisioning_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.socialJitProvisioningEnabled"></a>

```python
social_jit_provisioning_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider</a>

---


### IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference <a name="IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_identity_provider

identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetCrlCheckOnOcspFailureEnabled">reset_crl_check_on_ocsp_failure_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetCrlEnabled">reset_crl_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetCrlLocation">reset_crl_location</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetCrlReloadDuration">reset_crl_reload_duration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetEkuValidationEnabled">reset_eku_validation_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetEkuValues">reset_eku_values</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetOcspAllowUnknownResponseStatus">reset_ocsp_allow_unknown_response_status</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetOcspEnabled">reset_ocsp_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetOcspEnableSignedResponse">reset_ocsp_enable_signed_response</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetOcspResponderUrl">reset_ocsp_responder_url</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetOcspRevalidateTime">reset_ocsp_revalidate_time</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetOcspServerName">reset_ocsp_server_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetOcspTrustCertChain">reset_ocsp_trust_cert_chain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetOtherCertMatchAttribute">reset_other_cert_match_attribute</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_crl_check_on_ocsp_failure_enabled` <a name="reset_crl_check_on_ocsp_failure_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetCrlCheckOnOcspFailureEnabled"></a>

```python
def reset_crl_check_on_ocsp_failure_enabled() -> None
```

##### `reset_crl_enabled` <a name="reset_crl_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetCrlEnabled"></a>

```python
def reset_crl_enabled() -> None
```

##### `reset_crl_location` <a name="reset_crl_location" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetCrlLocation"></a>

```python
def reset_crl_location() -> None
```

##### `reset_crl_reload_duration` <a name="reset_crl_reload_duration" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetCrlReloadDuration"></a>

```python
def reset_crl_reload_duration() -> None
```

##### `reset_eku_validation_enabled` <a name="reset_eku_validation_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetEkuValidationEnabled"></a>

```python
def reset_eku_validation_enabled() -> None
```

##### `reset_eku_values` <a name="reset_eku_values" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetEkuValues"></a>

```python
def reset_eku_values() -> None
```

##### `reset_ocsp_allow_unknown_response_status` <a name="reset_ocsp_allow_unknown_response_status" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetOcspAllowUnknownResponseStatus"></a>

```python
def reset_ocsp_allow_unknown_response_status() -> None
```

##### `reset_ocsp_enabled` <a name="reset_ocsp_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetOcspEnabled"></a>

```python
def reset_ocsp_enabled() -> None
```

##### `reset_ocsp_enable_signed_response` <a name="reset_ocsp_enable_signed_response" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetOcspEnableSignedResponse"></a>

```python
def reset_ocsp_enable_signed_response() -> None
```

##### `reset_ocsp_responder_url` <a name="reset_ocsp_responder_url" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetOcspResponderUrl"></a>

```python
def reset_ocsp_responder_url() -> None
```

##### `reset_ocsp_revalidate_time` <a name="reset_ocsp_revalidate_time" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetOcspRevalidateTime"></a>

```python
def reset_ocsp_revalidate_time() -> None
```

##### `reset_ocsp_server_name` <a name="reset_ocsp_server_name" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetOcspServerName"></a>

```python
def reset_ocsp_server_name() -> None
```

##### `reset_ocsp_trust_cert_chain` <a name="reset_ocsp_trust_cert_chain" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetOcspTrustCertChain"></a>

```python
def reset_ocsp_trust_cert_chain() -> None
```

##### `reset_other_cert_match_attribute` <a name="reset_other_cert_match_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetOtherCertMatchAttribute"></a>

```python
def reset_other_cert_match_attribute() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.certMatchAttributeInput">cert_match_attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlCheckOnOcspFailureEnabledInput">crl_check_on_ocsp_failure_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlEnabledInput">crl_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlLocationInput">crl_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlReloadDurationInput">crl_reload_duration_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ekuValidationEnabledInput">eku_validation_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ekuValuesInput">eku_values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspAllowUnknownResponseStatusInput">ocsp_allow_unknown_response_status_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspEnabledInput">ocsp_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspEnableSignedResponseInput">ocsp_enable_signed_response_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspResponderUrlInput">ocsp_responder_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspRevalidateTimeInput">ocsp_revalidate_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspServerNameInput">ocsp_server_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspTrustCertChainInput">ocsp_trust_cert_chain_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.otherCertMatchAttributeInput">other_cert_match_attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.signingCertificateChainInput">signing_certificate_chain_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.userMatchAttributeInput">user_match_attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.certMatchAttribute">cert_match_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlCheckOnOcspFailureEnabled">crl_check_on_ocsp_failure_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlEnabled">crl_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlLocation">crl_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlReloadDuration">crl_reload_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ekuValidationEnabled">eku_validation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ekuValues">eku_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspAllowUnknownResponseStatus">ocsp_allow_unknown_response_status</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspEnabled">ocsp_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspEnableSignedResponse">ocsp_enable_signed_response</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspResponderUrl">ocsp_responder_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspRevalidateTime">ocsp_revalidate_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspServerName">ocsp_server_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspTrustCertChain">ocsp_trust_cert_chain</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.otherCertMatchAttribute">other_cert_match_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.signingCertificateChain">signing_certificate_chain</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.userMatchAttribute">user_match_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cert_match_attribute_input`<sup>Optional</sup> <a name="cert_match_attribute_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.certMatchAttributeInput"></a>

```python
cert_match_attribute_input: str
```

- *Type:* str

---

##### `crl_check_on_ocsp_failure_enabled_input`<sup>Optional</sup> <a name="crl_check_on_ocsp_failure_enabled_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlCheckOnOcspFailureEnabledInput"></a>

```python
crl_check_on_ocsp_failure_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `crl_enabled_input`<sup>Optional</sup> <a name="crl_enabled_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlEnabledInput"></a>

```python
crl_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `crl_location_input`<sup>Optional</sup> <a name="crl_location_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlLocationInput"></a>

```python
crl_location_input: str
```

- *Type:* str

---

##### `crl_reload_duration_input`<sup>Optional</sup> <a name="crl_reload_duration_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlReloadDurationInput"></a>

```python
crl_reload_duration_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `eku_validation_enabled_input`<sup>Optional</sup> <a name="eku_validation_enabled_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ekuValidationEnabledInput"></a>

```python
eku_validation_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `eku_values_input`<sup>Optional</sup> <a name="eku_values_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ekuValuesInput"></a>

```python
eku_values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ocsp_allow_unknown_response_status_input`<sup>Optional</sup> <a name="ocsp_allow_unknown_response_status_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspAllowUnknownResponseStatusInput"></a>

```python
ocsp_allow_unknown_response_status_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ocsp_enabled_input`<sup>Optional</sup> <a name="ocsp_enabled_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspEnabledInput"></a>

```python
ocsp_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ocsp_enable_signed_response_input`<sup>Optional</sup> <a name="ocsp_enable_signed_response_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspEnableSignedResponseInput"></a>

```python
ocsp_enable_signed_response_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ocsp_responder_url_input`<sup>Optional</sup> <a name="ocsp_responder_url_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspResponderUrlInput"></a>

```python
ocsp_responder_url_input: str
```

- *Type:* str

---

##### `ocsp_revalidate_time_input`<sup>Optional</sup> <a name="ocsp_revalidate_time_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspRevalidateTimeInput"></a>

```python
ocsp_revalidate_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocsp_server_name_input`<sup>Optional</sup> <a name="ocsp_server_name_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspServerNameInput"></a>

```python
ocsp_server_name_input: str
```

- *Type:* str

---

##### `ocsp_trust_cert_chain_input`<sup>Optional</sup> <a name="ocsp_trust_cert_chain_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspTrustCertChainInput"></a>

```python
ocsp_trust_cert_chain_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `other_cert_match_attribute_input`<sup>Optional</sup> <a name="other_cert_match_attribute_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.otherCertMatchAttributeInput"></a>

```python
other_cert_match_attribute_input: str
```

- *Type:* str

---

##### `signing_certificate_chain_input`<sup>Optional</sup> <a name="signing_certificate_chain_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.signingCertificateChainInput"></a>

```python
signing_certificate_chain_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `user_match_attribute_input`<sup>Optional</sup> <a name="user_match_attribute_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.userMatchAttributeInput"></a>

```python
user_match_attribute_input: str
```

- *Type:* str

---

##### `cert_match_attribute`<sup>Required</sup> <a name="cert_match_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.certMatchAttribute"></a>

```python
cert_match_attribute: str
```

- *Type:* str

---

##### `crl_check_on_ocsp_failure_enabled`<sup>Required</sup> <a name="crl_check_on_ocsp_failure_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlCheckOnOcspFailureEnabled"></a>

```python
crl_check_on_ocsp_failure_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `crl_enabled`<sup>Required</sup> <a name="crl_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlEnabled"></a>

```python
crl_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `crl_location`<sup>Required</sup> <a name="crl_location" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlLocation"></a>

```python
crl_location: str
```

- *Type:* str

---

##### `crl_reload_duration`<sup>Required</sup> <a name="crl_reload_duration" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlReloadDuration"></a>

```python
crl_reload_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `eku_validation_enabled`<sup>Required</sup> <a name="eku_validation_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ekuValidationEnabled"></a>

```python
eku_validation_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `eku_values`<sup>Required</sup> <a name="eku_values" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ekuValues"></a>

```python
eku_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ocsp_allow_unknown_response_status`<sup>Required</sup> <a name="ocsp_allow_unknown_response_status" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspAllowUnknownResponseStatus"></a>

```python
ocsp_allow_unknown_response_status: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ocsp_enabled`<sup>Required</sup> <a name="ocsp_enabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspEnabled"></a>

```python
ocsp_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ocsp_enable_signed_response`<sup>Required</sup> <a name="ocsp_enable_signed_response" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspEnableSignedResponse"></a>

```python
ocsp_enable_signed_response: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ocsp_responder_url`<sup>Required</sup> <a name="ocsp_responder_url" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspResponderUrl"></a>

```python
ocsp_responder_url: str
```

- *Type:* str

---

##### `ocsp_revalidate_time`<sup>Required</sup> <a name="ocsp_revalidate_time" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspRevalidateTime"></a>

```python
ocsp_revalidate_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocsp_server_name`<sup>Required</sup> <a name="ocsp_server_name" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspServerName"></a>

```python
ocsp_server_name: str
```

- *Type:* str

---

##### `ocsp_trust_cert_chain`<sup>Required</sup> <a name="ocsp_trust_cert_chain" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspTrustCertChain"></a>

```python
ocsp_trust_cert_chain: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `other_cert_match_attribute`<sup>Required</sup> <a name="other_cert_match_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.otherCertMatchAttribute"></a>

```python
other_cert_match_attribute: str
```

- *Type:* str

---

##### `signing_certificate_chain`<sup>Required</sup> <a name="signing_certificate_chain" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.signingCertificateChain"></a>

```python
signing_certificate_chain: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `user_match_attribute`<sup>Required</sup> <a name="user_match_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.userMatchAttribute"></a>

```python
user_match_attribute: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider</a>

---



