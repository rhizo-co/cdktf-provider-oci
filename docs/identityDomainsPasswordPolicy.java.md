# `identityDomainsPasswordPolicy` Submodule <a name="`identityDomainsPasswordPolicy` Submodule" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityDomainsPasswordPolicy <a name="IdentityDomainsPasswordPolicy" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy oci_identity_domains_password_policy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_password_policy.IdentityDomainsPasswordPolicy;

IdentityDomainsPasswordPolicy.Builder.create(Construct scope, java.lang.String id)
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
    .idcsEndpoint(java.lang.String)
    .name(java.lang.String)
    .schemas(java.util.List<java.lang.String>)
//  .allowedChars(java.lang.String)
//  .attributes(java.lang.String)
//  .attributeSets(java.util.List<java.lang.String>)
//  .authorization(java.lang.String)
//  .description(java.lang.String)
//  .dictionaryDelimiter(java.lang.String)
//  .dictionaryLocation(java.lang.String)
//  .dictionaryWordDisallowed(java.lang.Boolean)
//  .dictionaryWordDisallowed(IResolvable)
//  .disallowedChars(java.lang.String)
//  .disallowedSubstrings(java.util.List<java.lang.String>)
//  .disallowedUserAttributeValues(java.util.List<java.lang.String>)
//  .distinctCharacters(java.lang.Number)
//  .externalId(java.lang.String)
//  .firstNameDisallowed(java.lang.Boolean)
//  .firstNameDisallowed(IResolvable)
//  .forcePasswordReset(java.lang.Boolean)
//  .forcePasswordReset(IResolvable)
//  .groups(IResolvable)
//  .groups(java.util.List<IdentityDomainsPasswordPolicyGroups>)
//  .lastNameDisallowed(java.lang.Boolean)
//  .lastNameDisallowed(IResolvable)
//  .lockoutDuration(java.lang.Number)
//  .maxIncorrectAttempts(java.lang.Number)
//  .maxLength(java.lang.Number)
//  .maxRepeatedChars(java.lang.Number)
//  .maxSpecialChars(java.lang.Number)
//  .minAlphaNumerals(java.lang.Number)
//  .minAlphas(java.lang.Number)
//  .minLength(java.lang.Number)
//  .minLowerCase(java.lang.Number)
//  .minNumerals(java.lang.Number)
//  .minPasswordAge(java.lang.Number)
//  .minSpecialChars(java.lang.Number)
//  .minUniqueChars(java.lang.Number)
//  .minUpperCase(java.lang.Number)
//  .numPasswordsInHistory(java.lang.Number)
//  .ocid(java.lang.String)
//  .passwordExpiresAfter(java.lang.Number)
//  .passwordExpireWarning(java.lang.Number)
//  .passwordStrength(java.lang.String)
//  .priority(java.lang.Number)
//  .requiredChars(java.lang.String)
//  .resourceTypeSchemaVersion(java.lang.String)
//  .startsWithAlphabet(java.lang.Boolean)
//  .startsWithAlphabet(IResolvable)
//  .tags(IResolvable)
//  .tags(java.util.List<IdentityDomainsPasswordPolicyTags>)
//  .timeouts(IdentityDomainsPasswordPolicyTimeouts)
//  .userNameDisallowed(java.lang.Boolean)
//  .userNameDisallowed(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.idcsEndpoint">idcsEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#idcs_endpoint IdentityDomainsPasswordPolicy#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#name IdentityDomainsPasswordPolicy#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.schemas">schemas</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#schemas IdentityDomainsPasswordPolicy#schemas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.allowedChars">allowedChars</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#allowed_chars IdentityDomainsPasswordPolicy#allowed_chars}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.attributes">attributes</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#attributes IdentityDomainsPasswordPolicy#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.attributeSets">attributeSets</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#attribute_sets IdentityDomainsPasswordPolicy#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.authorization">authorization</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#authorization IdentityDomainsPasswordPolicy#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#description IdentityDomainsPasswordPolicy#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.dictionaryDelimiter">dictionaryDelimiter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#dictionary_delimiter IdentityDomainsPasswordPolicy#dictionary_delimiter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.dictionaryLocation">dictionaryLocation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#dictionary_location IdentityDomainsPasswordPolicy#dictionary_location}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.dictionaryWordDisallowed">dictionaryWordDisallowed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#dictionary_word_disallowed IdentityDomainsPasswordPolicy#dictionary_word_disallowed}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.disallowedChars">disallowedChars</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#disallowed_chars IdentityDomainsPasswordPolicy#disallowed_chars}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.disallowedSubstrings">disallowedSubstrings</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#disallowed_substrings IdentityDomainsPasswordPolicy#disallowed_substrings}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.disallowedUserAttributeValues">disallowedUserAttributeValues</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#disallowed_user_attribute_values IdentityDomainsPasswordPolicy#disallowed_user_attribute_values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.distinctCharacters">distinctCharacters</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#distinct_characters IdentityDomainsPasswordPolicy#distinct_characters}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.externalId">externalId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#external_id IdentityDomainsPasswordPolicy#external_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.firstNameDisallowed">firstNameDisallowed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#first_name_disallowed IdentityDomainsPasswordPolicy#first_name_disallowed}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.forcePasswordReset">forcePasswordReset</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#force_password_reset IdentityDomainsPasswordPolicy#force_password_reset}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.groups">groups</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroups">IdentityDomainsPasswordPolicyGroups</a>></code> | groups block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.lastNameDisallowed">lastNameDisallowed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#last_name_disallowed IdentityDomainsPasswordPolicy#last_name_disallowed}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.lockoutDuration">lockoutDuration</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#lockout_duration IdentityDomainsPasswordPolicy#lockout_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.maxIncorrectAttempts">maxIncorrectAttempts</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#max_incorrect_attempts IdentityDomainsPasswordPolicy#max_incorrect_attempts}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.maxLength">maxLength</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#max_length IdentityDomainsPasswordPolicy#max_length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.maxRepeatedChars">maxRepeatedChars</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#max_repeated_chars IdentityDomainsPasswordPolicy#max_repeated_chars}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.maxSpecialChars">maxSpecialChars</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#max_special_chars IdentityDomainsPasswordPolicy#max_special_chars}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.minAlphaNumerals">minAlphaNumerals</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_alpha_numerals IdentityDomainsPasswordPolicy#min_alpha_numerals}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.minAlphas">minAlphas</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_alphas IdentityDomainsPasswordPolicy#min_alphas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.minLength">minLength</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_length IdentityDomainsPasswordPolicy#min_length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.minLowerCase">minLowerCase</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_lower_case IdentityDomainsPasswordPolicy#min_lower_case}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.minNumerals">minNumerals</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_numerals IdentityDomainsPasswordPolicy#min_numerals}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.minPasswordAge">minPasswordAge</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_password_age IdentityDomainsPasswordPolicy#min_password_age}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.minSpecialChars">minSpecialChars</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_special_chars IdentityDomainsPasswordPolicy#min_special_chars}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.minUniqueChars">minUniqueChars</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_unique_chars IdentityDomainsPasswordPolicy#min_unique_chars}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.minUpperCase">minUpperCase</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_upper_case IdentityDomainsPasswordPolicy#min_upper_case}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.numPasswordsInHistory">numPasswordsInHistory</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#num_passwords_in_history IdentityDomainsPasswordPolicy#num_passwords_in_history}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.ocid">ocid</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#ocid IdentityDomainsPasswordPolicy#ocid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.passwordExpiresAfter">passwordExpiresAfter</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#password_expires_after IdentityDomainsPasswordPolicy#password_expires_after}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.passwordExpireWarning">passwordExpireWarning</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#password_expire_warning IdentityDomainsPasswordPolicy#password_expire_warning}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.passwordStrength">passwordStrength</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#password_strength IdentityDomainsPasswordPolicy#password_strength}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#priority IdentityDomainsPasswordPolicy#priority}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.requiredChars">requiredChars</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#required_chars IdentityDomainsPasswordPolicy#required_chars}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#resource_type_schema_version IdentityDomainsPasswordPolicy#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.startsWithAlphabet">startsWithAlphabet</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#starts_with_alphabet IdentityDomainsPasswordPolicy#starts_with_alphabet}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.tags">tags</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTags">IdentityDomainsPasswordPolicyTags</a>></code> | tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeouts">IdentityDomainsPasswordPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.userNameDisallowed">userNameDisallowed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#user_name_disallowed IdentityDomainsPasswordPolicy#user_name_disallowed}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.idcsEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#idcs_endpoint IdentityDomainsPasswordPolicy#idcs_endpoint}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#name IdentityDomainsPasswordPolicy#name}.

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.schemas"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#schemas IdentityDomainsPasswordPolicy#schemas}.

---

##### `allowedChars`<sup>Optional</sup> <a name="allowedChars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.allowedChars"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#allowed_chars IdentityDomainsPasswordPolicy#allowed_chars}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.attributes"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#attributes IdentityDomainsPasswordPolicy#attributes}.

---

##### `attributeSets`<sup>Optional</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.attributeSets"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#attribute_sets IdentityDomainsPasswordPolicy#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.authorization"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#authorization IdentityDomainsPasswordPolicy#authorization}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#description IdentityDomainsPasswordPolicy#description}.

---

##### `dictionaryDelimiter`<sup>Optional</sup> <a name="dictionaryDelimiter" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.dictionaryDelimiter"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#dictionary_delimiter IdentityDomainsPasswordPolicy#dictionary_delimiter}.

---

##### `dictionaryLocation`<sup>Optional</sup> <a name="dictionaryLocation" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.dictionaryLocation"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#dictionary_location IdentityDomainsPasswordPolicy#dictionary_location}.

---

##### `dictionaryWordDisallowed`<sup>Optional</sup> <a name="dictionaryWordDisallowed" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.dictionaryWordDisallowed"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#dictionary_word_disallowed IdentityDomainsPasswordPolicy#dictionary_word_disallowed}.

---

##### `disallowedChars`<sup>Optional</sup> <a name="disallowedChars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.disallowedChars"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#disallowed_chars IdentityDomainsPasswordPolicy#disallowed_chars}.

---

##### `disallowedSubstrings`<sup>Optional</sup> <a name="disallowedSubstrings" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.disallowedSubstrings"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#disallowed_substrings IdentityDomainsPasswordPolicy#disallowed_substrings}.

---

##### `disallowedUserAttributeValues`<sup>Optional</sup> <a name="disallowedUserAttributeValues" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.disallowedUserAttributeValues"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#disallowed_user_attribute_values IdentityDomainsPasswordPolicy#disallowed_user_attribute_values}.

---

##### `distinctCharacters`<sup>Optional</sup> <a name="distinctCharacters" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.distinctCharacters"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#distinct_characters IdentityDomainsPasswordPolicy#distinct_characters}.

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.externalId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#external_id IdentityDomainsPasswordPolicy#external_id}.

---

##### `firstNameDisallowed`<sup>Optional</sup> <a name="firstNameDisallowed" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.firstNameDisallowed"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#first_name_disallowed IdentityDomainsPasswordPolicy#first_name_disallowed}.

---

##### `forcePasswordReset`<sup>Optional</sup> <a name="forcePasswordReset" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.forcePasswordReset"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#force_password_reset IdentityDomainsPasswordPolicy#force_password_reset}.

---

##### `groups`<sup>Optional</sup> <a name="groups" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.groups"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroups">IdentityDomainsPasswordPolicyGroups</a>>

groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#groups IdentityDomainsPasswordPolicy#groups}

---

##### `lastNameDisallowed`<sup>Optional</sup> <a name="lastNameDisallowed" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.lastNameDisallowed"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#last_name_disallowed IdentityDomainsPasswordPolicy#last_name_disallowed}.

---

##### `lockoutDuration`<sup>Optional</sup> <a name="lockoutDuration" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.lockoutDuration"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#lockout_duration IdentityDomainsPasswordPolicy#lockout_duration}.

---

##### `maxIncorrectAttempts`<sup>Optional</sup> <a name="maxIncorrectAttempts" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.maxIncorrectAttempts"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#max_incorrect_attempts IdentityDomainsPasswordPolicy#max_incorrect_attempts}.

---

##### `maxLength`<sup>Optional</sup> <a name="maxLength" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.maxLength"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#max_length IdentityDomainsPasswordPolicy#max_length}.

---

##### `maxRepeatedChars`<sup>Optional</sup> <a name="maxRepeatedChars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.maxRepeatedChars"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#max_repeated_chars IdentityDomainsPasswordPolicy#max_repeated_chars}.

---

##### `maxSpecialChars`<sup>Optional</sup> <a name="maxSpecialChars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.maxSpecialChars"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#max_special_chars IdentityDomainsPasswordPolicy#max_special_chars}.

---

##### `minAlphaNumerals`<sup>Optional</sup> <a name="minAlphaNumerals" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.minAlphaNumerals"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_alpha_numerals IdentityDomainsPasswordPolicy#min_alpha_numerals}.

---

##### `minAlphas`<sup>Optional</sup> <a name="minAlphas" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.minAlphas"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_alphas IdentityDomainsPasswordPolicy#min_alphas}.

---

##### `minLength`<sup>Optional</sup> <a name="minLength" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.minLength"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_length IdentityDomainsPasswordPolicy#min_length}.

---

##### `minLowerCase`<sup>Optional</sup> <a name="minLowerCase" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.minLowerCase"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_lower_case IdentityDomainsPasswordPolicy#min_lower_case}.

---

##### `minNumerals`<sup>Optional</sup> <a name="minNumerals" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.minNumerals"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_numerals IdentityDomainsPasswordPolicy#min_numerals}.

---

##### `minPasswordAge`<sup>Optional</sup> <a name="minPasswordAge" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.minPasswordAge"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_password_age IdentityDomainsPasswordPolicy#min_password_age}.

---

##### `minSpecialChars`<sup>Optional</sup> <a name="minSpecialChars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.minSpecialChars"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_special_chars IdentityDomainsPasswordPolicy#min_special_chars}.

---

##### `minUniqueChars`<sup>Optional</sup> <a name="minUniqueChars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.minUniqueChars"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_unique_chars IdentityDomainsPasswordPolicy#min_unique_chars}.

---

##### `minUpperCase`<sup>Optional</sup> <a name="minUpperCase" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.minUpperCase"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_upper_case IdentityDomainsPasswordPolicy#min_upper_case}.

---

##### `numPasswordsInHistory`<sup>Optional</sup> <a name="numPasswordsInHistory" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.numPasswordsInHistory"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#num_passwords_in_history IdentityDomainsPasswordPolicy#num_passwords_in_history}.

---

##### `ocid`<sup>Optional</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.ocid"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#ocid IdentityDomainsPasswordPolicy#ocid}.

---

##### `passwordExpiresAfter`<sup>Optional</sup> <a name="passwordExpiresAfter" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.passwordExpiresAfter"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#password_expires_after IdentityDomainsPasswordPolicy#password_expires_after}.

---

##### `passwordExpireWarning`<sup>Optional</sup> <a name="passwordExpireWarning" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.passwordExpireWarning"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#password_expire_warning IdentityDomainsPasswordPolicy#password_expire_warning}.

---

##### `passwordStrength`<sup>Optional</sup> <a name="passwordStrength" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.passwordStrength"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#password_strength IdentityDomainsPasswordPolicy#password_strength}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.priority"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#priority IdentityDomainsPasswordPolicy#priority}.

---

##### `requiredChars`<sup>Optional</sup> <a name="requiredChars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.requiredChars"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#required_chars IdentityDomainsPasswordPolicy#required_chars}.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.resourceTypeSchemaVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#resource_type_schema_version IdentityDomainsPasswordPolicy#resource_type_schema_version}.

---

##### `startsWithAlphabet`<sup>Optional</sup> <a name="startsWithAlphabet" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.startsWithAlphabet"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#starts_with_alphabet IdentityDomainsPasswordPolicy#starts_with_alphabet}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.tags"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTags">IdentityDomainsPasswordPolicyTags</a>>

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#tags IdentityDomainsPasswordPolicy#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeouts">IdentityDomainsPasswordPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#timeouts IdentityDomainsPasswordPolicy#timeouts}

---

##### `userNameDisallowed`<sup>Optional</sup> <a name="userNameDisallowed" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.userNameDisallowed"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#user_name_disallowed IdentityDomainsPasswordPolicy#user_name_disallowed}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.putGroups">putGroups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.putTags">putTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetAllowedChars">resetAllowedChars</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetAttributeSets">resetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetDictionaryDelimiter">resetDictionaryDelimiter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetDictionaryLocation">resetDictionaryLocation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetDictionaryWordDisallowed">resetDictionaryWordDisallowed</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetDisallowedChars">resetDisallowedChars</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetDisallowedSubstrings">resetDisallowedSubstrings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetDisallowedUserAttributeValues">resetDisallowedUserAttributeValues</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetDistinctCharacters">resetDistinctCharacters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetExternalId">resetExternalId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetFirstNameDisallowed">resetFirstNameDisallowed</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetForcePasswordReset">resetForcePasswordReset</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetGroups">resetGroups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetLastNameDisallowed">resetLastNameDisallowed</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetLockoutDuration">resetLockoutDuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMaxIncorrectAttempts">resetMaxIncorrectAttempts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMaxLength">resetMaxLength</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMaxRepeatedChars">resetMaxRepeatedChars</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMaxSpecialChars">resetMaxSpecialChars</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMinAlphaNumerals">resetMinAlphaNumerals</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMinAlphas">resetMinAlphas</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMinLength">resetMinLength</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMinLowerCase">resetMinLowerCase</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMinNumerals">resetMinNumerals</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMinPasswordAge">resetMinPasswordAge</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMinSpecialChars">resetMinSpecialChars</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMinUniqueChars">resetMinUniqueChars</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMinUpperCase">resetMinUpperCase</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetNumPasswordsInHistory">resetNumPasswordsInHistory</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetOcid">resetOcid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetPasswordExpiresAfter">resetPasswordExpiresAfter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetPasswordExpireWarning">resetPasswordExpireWarning</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetPasswordStrength">resetPasswordStrength</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetRequiredChars">resetRequiredChars</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetResourceTypeSchemaVersion">resetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetStartsWithAlphabet">resetStartsWithAlphabet</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetUserNameDisallowed">resetUserNameDisallowed</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putGroups` <a name="putGroups" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.putGroups"></a>

```java
public void putGroups(IResolvable OR java.util.List<IdentityDomainsPasswordPolicyGroups> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.putGroups.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroups">IdentityDomainsPasswordPolicyGroups</a>>

---

##### `putTags` <a name="putTags" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.putTags"></a>

```java
public void putTags(IResolvable OR java.util.List<IdentityDomainsPasswordPolicyTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.putTags.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTags">IdentityDomainsPasswordPolicyTags</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.putTimeouts"></a>

```java
public void putTimeouts(IdentityDomainsPasswordPolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeouts">IdentityDomainsPasswordPolicyTimeouts</a>

---

##### `resetAllowedChars` <a name="resetAllowedChars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetAllowedChars"></a>

```java
public void resetAllowedChars()
```

##### `resetAttributes` <a name="resetAttributes" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetAttributes"></a>

```java
public void resetAttributes()
```

##### `resetAttributeSets` <a name="resetAttributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetAttributeSets"></a>

```java
public void resetAttributeSets()
```

##### `resetAuthorization` <a name="resetAuthorization" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetAuthorization"></a>

```java
public void resetAuthorization()
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDictionaryDelimiter` <a name="resetDictionaryDelimiter" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetDictionaryDelimiter"></a>

```java
public void resetDictionaryDelimiter()
```

##### `resetDictionaryLocation` <a name="resetDictionaryLocation" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetDictionaryLocation"></a>

```java
public void resetDictionaryLocation()
```

##### `resetDictionaryWordDisallowed` <a name="resetDictionaryWordDisallowed" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetDictionaryWordDisallowed"></a>

```java
public void resetDictionaryWordDisallowed()
```

##### `resetDisallowedChars` <a name="resetDisallowedChars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetDisallowedChars"></a>

```java
public void resetDisallowedChars()
```

##### `resetDisallowedSubstrings` <a name="resetDisallowedSubstrings" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetDisallowedSubstrings"></a>

```java
public void resetDisallowedSubstrings()
```

##### `resetDisallowedUserAttributeValues` <a name="resetDisallowedUserAttributeValues" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetDisallowedUserAttributeValues"></a>

```java
public void resetDisallowedUserAttributeValues()
```

##### `resetDistinctCharacters` <a name="resetDistinctCharacters" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetDistinctCharacters"></a>

```java
public void resetDistinctCharacters()
```

##### `resetExternalId` <a name="resetExternalId" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetExternalId"></a>

```java
public void resetExternalId()
```

##### `resetFirstNameDisallowed` <a name="resetFirstNameDisallowed" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetFirstNameDisallowed"></a>

```java
public void resetFirstNameDisallowed()
```

##### `resetForcePasswordReset` <a name="resetForcePasswordReset" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetForcePasswordReset"></a>

```java
public void resetForcePasswordReset()
```

##### `resetGroups` <a name="resetGroups" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetGroups"></a>

```java
public void resetGroups()
```

##### `resetLastNameDisallowed` <a name="resetLastNameDisallowed" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetLastNameDisallowed"></a>

```java
public void resetLastNameDisallowed()
```

##### `resetLockoutDuration` <a name="resetLockoutDuration" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetLockoutDuration"></a>

```java
public void resetLockoutDuration()
```

##### `resetMaxIncorrectAttempts` <a name="resetMaxIncorrectAttempts" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMaxIncorrectAttempts"></a>

```java
public void resetMaxIncorrectAttempts()
```

##### `resetMaxLength` <a name="resetMaxLength" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMaxLength"></a>

```java
public void resetMaxLength()
```

##### `resetMaxRepeatedChars` <a name="resetMaxRepeatedChars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMaxRepeatedChars"></a>

```java
public void resetMaxRepeatedChars()
```

##### `resetMaxSpecialChars` <a name="resetMaxSpecialChars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMaxSpecialChars"></a>

```java
public void resetMaxSpecialChars()
```

##### `resetMinAlphaNumerals` <a name="resetMinAlphaNumerals" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMinAlphaNumerals"></a>

```java
public void resetMinAlphaNumerals()
```

##### `resetMinAlphas` <a name="resetMinAlphas" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMinAlphas"></a>

```java
public void resetMinAlphas()
```

##### `resetMinLength` <a name="resetMinLength" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMinLength"></a>

```java
public void resetMinLength()
```

##### `resetMinLowerCase` <a name="resetMinLowerCase" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMinLowerCase"></a>

```java
public void resetMinLowerCase()
```

##### `resetMinNumerals` <a name="resetMinNumerals" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMinNumerals"></a>

```java
public void resetMinNumerals()
```

##### `resetMinPasswordAge` <a name="resetMinPasswordAge" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMinPasswordAge"></a>

```java
public void resetMinPasswordAge()
```

##### `resetMinSpecialChars` <a name="resetMinSpecialChars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMinSpecialChars"></a>

```java
public void resetMinSpecialChars()
```

##### `resetMinUniqueChars` <a name="resetMinUniqueChars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMinUniqueChars"></a>

```java
public void resetMinUniqueChars()
```

##### `resetMinUpperCase` <a name="resetMinUpperCase" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMinUpperCase"></a>

```java
public void resetMinUpperCase()
```

##### `resetNumPasswordsInHistory` <a name="resetNumPasswordsInHistory" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetNumPasswordsInHistory"></a>

```java
public void resetNumPasswordsInHistory()
```

##### `resetOcid` <a name="resetOcid" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetOcid"></a>

```java
public void resetOcid()
```

##### `resetPasswordExpiresAfter` <a name="resetPasswordExpiresAfter" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetPasswordExpiresAfter"></a>

```java
public void resetPasswordExpiresAfter()
```

##### `resetPasswordExpireWarning` <a name="resetPasswordExpireWarning" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetPasswordExpireWarning"></a>

```java
public void resetPasswordExpireWarning()
```

##### `resetPasswordStrength` <a name="resetPasswordStrength" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetPasswordStrength"></a>

```java
public void resetPasswordStrength()
```

##### `resetPriority` <a name="resetPriority" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetRequiredChars` <a name="resetRequiredChars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetRequiredChars"></a>

```java
public void resetRequiredChars()
```

##### `resetResourceTypeSchemaVersion` <a name="resetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetResourceTypeSchemaVersion"></a>

```java
public void resetResourceTypeSchemaVersion()
```

##### `resetStartsWithAlphabet` <a name="resetStartsWithAlphabet" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetStartsWithAlphabet"></a>

```java
public void resetStartsWithAlphabet()
```

##### `resetTags` <a name="resetTags" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUserNameDisallowed` <a name="resetUserNameDisallowed" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetUserNameDisallowed"></a>

```java
public void resetUserNameDisallowed()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityDomainsPasswordPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_password_policy.IdentityDomainsPasswordPolicy;

IdentityDomainsPasswordPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_password_policy.IdentityDomainsPasswordPolicy;

IdentityDomainsPasswordPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_password_policy.IdentityDomainsPasswordPolicy;

IdentityDomainsPasswordPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_password_policy.IdentityDomainsPasswordPolicy;

IdentityDomainsPasswordPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IdentityDomainsPasswordPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a IdentityDomainsPasswordPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IdentityDomainsPasswordPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IdentityDomainsPasswordPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the IdentityDomainsPasswordPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.compartmentOcid">compartmentOcid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.configuredPasswordPolicyRules">configuredPasswordPolicyRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList">IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.deleteInProgress">deleteInProgress</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.domainOcid">domainOcid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.groups">groups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList">IdentityDomainsPasswordPolicyGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.idcsCreatedBy">idcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList">IdentityDomainsPasswordPolicyIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.idcsLastModifiedBy">idcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList">IdentityDomainsPasswordPolicyIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.idcsLastUpgradedInRelease">idcsLastUpgradedInRelease</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.idcsPreventedOperations">idcsPreventedOperations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList">IdentityDomainsPasswordPolicyMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList">IdentityDomainsPasswordPolicyTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.tenancyOcid">tenancyOcid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference">IdentityDomainsPasswordPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.allowedCharsInput">allowedCharsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.attributeSetsInput">attributeSetsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.attributesInput">attributesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.authorizationInput">authorizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.dictionaryDelimiterInput">dictionaryDelimiterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.dictionaryLocationInput">dictionaryLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.dictionaryWordDisallowedInput">dictionaryWordDisallowedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.disallowedCharsInput">disallowedCharsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.disallowedSubstringsInput">disallowedSubstringsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.disallowedUserAttributeValuesInput">disallowedUserAttributeValuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.distinctCharactersInput">distinctCharactersInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.externalIdInput">externalIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.firstNameDisallowedInput">firstNameDisallowedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.forcePasswordResetInput">forcePasswordResetInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.groupsInput">groupsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroups">IdentityDomainsPasswordPolicyGroups</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.idcsEndpointInput">idcsEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.lastNameDisallowedInput">lastNameDisallowedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.lockoutDurationInput">lockoutDurationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.maxIncorrectAttemptsInput">maxIncorrectAttemptsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.maxLengthInput">maxLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.maxRepeatedCharsInput">maxRepeatedCharsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.maxSpecialCharsInput">maxSpecialCharsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minAlphaNumeralsInput">minAlphaNumeralsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minAlphasInput">minAlphasInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minLengthInput">minLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minLowerCaseInput">minLowerCaseInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minNumeralsInput">minNumeralsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minPasswordAgeInput">minPasswordAgeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minSpecialCharsInput">minSpecialCharsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minUniqueCharsInput">minUniqueCharsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minUpperCaseInput">minUpperCaseInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.numPasswordsInHistoryInput">numPasswordsInHistoryInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.ocidInput">ocidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.passwordExpiresAfterInput">passwordExpiresAfterInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.passwordExpireWarningInput">passwordExpireWarningInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.passwordStrengthInput">passwordStrengthInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.requiredCharsInput">requiredCharsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.resourceTypeSchemaVersionInput">resourceTypeSchemaVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.schemasInput">schemasInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.startsWithAlphabetInput">startsWithAlphabetInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.tagsInput">tagsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTags">IdentityDomainsPasswordPolicyTags</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeouts">IdentityDomainsPasswordPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.userNameDisallowedInput">userNameDisallowedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.allowedChars">allowedChars</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.attributes">attributes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.attributeSets">attributeSets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.authorization">authorization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.dictionaryDelimiter">dictionaryDelimiter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.dictionaryLocation">dictionaryLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.dictionaryWordDisallowed">dictionaryWordDisallowed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.disallowedChars">disallowedChars</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.disallowedSubstrings">disallowedSubstrings</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.disallowedUserAttributeValues">disallowedUserAttributeValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.distinctCharacters">distinctCharacters</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.externalId">externalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.firstNameDisallowed">firstNameDisallowed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.forcePasswordReset">forcePasswordReset</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.idcsEndpoint">idcsEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.lastNameDisallowed">lastNameDisallowed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.lockoutDuration">lockoutDuration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.maxIncorrectAttempts">maxIncorrectAttempts</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.maxLength">maxLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.maxRepeatedChars">maxRepeatedChars</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.maxSpecialChars">maxSpecialChars</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minAlphaNumerals">minAlphaNumerals</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minAlphas">minAlphas</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minLength">minLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minLowerCase">minLowerCase</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minNumerals">minNumerals</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minPasswordAge">minPasswordAge</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minSpecialChars">minSpecialChars</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minUniqueChars">minUniqueChars</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minUpperCase">minUpperCase</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.numPasswordsInHistory">numPasswordsInHistory</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.passwordExpiresAfter">passwordExpiresAfter</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.passwordExpireWarning">passwordExpireWarning</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.passwordStrength">passwordStrength</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.requiredChars">requiredChars</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.schemas">schemas</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.startsWithAlphabet">startsWithAlphabet</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.userNameDisallowed">userNameDisallowed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentOcid`<sup>Required</sup> <a name="compartmentOcid" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.compartmentOcid"></a>

```java
public java.lang.String getCompartmentOcid();
```

- *Type:* java.lang.String

---

##### `configuredPasswordPolicyRules`<sup>Required</sup> <a name="configuredPasswordPolicyRules" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.configuredPasswordPolicyRules"></a>

```java
public IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList getConfiguredPasswordPolicyRules();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList">IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList</a>

---

##### `deleteInProgress`<sup>Required</sup> <a name="deleteInProgress" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.deleteInProgress"></a>

```java
public IResolvable getDeleteInProgress();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `domainOcid`<sup>Required</sup> <a name="domainOcid" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.domainOcid"></a>

```java
public java.lang.String getDomainOcid();
```

- *Type:* java.lang.String

---

##### `groups`<sup>Required</sup> <a name="groups" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.groups"></a>

```java
public IdentityDomainsPasswordPolicyGroupsList getGroups();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList">IdentityDomainsPasswordPolicyGroupsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `idcsCreatedBy`<sup>Required</sup> <a name="idcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.idcsCreatedBy"></a>

```java
public IdentityDomainsPasswordPolicyIdcsCreatedByList getIdcsCreatedBy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList">IdentityDomainsPasswordPolicyIdcsCreatedByList</a>

---

##### `idcsLastModifiedBy`<sup>Required</sup> <a name="idcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.idcsLastModifiedBy"></a>

```java
public IdentityDomainsPasswordPolicyIdcsLastModifiedByList getIdcsLastModifiedBy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList">IdentityDomainsPasswordPolicyIdcsLastModifiedByList</a>

---

##### `idcsLastUpgradedInRelease`<sup>Required</sup> <a name="idcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.idcsLastUpgradedInRelease"></a>

```java
public java.lang.String getIdcsLastUpgradedInRelease();
```

- *Type:* java.lang.String

---

##### `idcsPreventedOperations`<sup>Required</sup> <a name="idcsPreventedOperations" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.idcsPreventedOperations"></a>

```java
public java.util.List<java.lang.String> getIdcsPreventedOperations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.meta"></a>

```java
public IdentityDomainsPasswordPolicyMetaList getMeta();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList">IdentityDomainsPasswordPolicyMetaList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.tags"></a>

```java
public IdentityDomainsPasswordPolicyTagsList getTags();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList">IdentityDomainsPasswordPolicyTagsList</a>

---

##### `tenancyOcid`<sup>Required</sup> <a name="tenancyOcid" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.tenancyOcid"></a>

```java
public java.lang.String getTenancyOcid();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.timeouts"></a>

```java
public IdentityDomainsPasswordPolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference">IdentityDomainsPasswordPolicyTimeoutsOutputReference</a>

---

##### `allowedCharsInput`<sup>Optional</sup> <a name="allowedCharsInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.allowedCharsInput"></a>

```java
public java.lang.String getAllowedCharsInput();
```

- *Type:* java.lang.String

---

##### `attributeSetsInput`<sup>Optional</sup> <a name="attributeSetsInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.attributeSetsInput"></a>

```java
public java.util.List<java.lang.String> getAttributeSetsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.attributesInput"></a>

```java
public java.lang.String getAttributesInput();
```

- *Type:* java.lang.String

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.authorizationInput"></a>

```java
public java.lang.String getAuthorizationInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `dictionaryDelimiterInput`<sup>Optional</sup> <a name="dictionaryDelimiterInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.dictionaryDelimiterInput"></a>

```java
public java.lang.String getDictionaryDelimiterInput();
```

- *Type:* java.lang.String

---

##### `dictionaryLocationInput`<sup>Optional</sup> <a name="dictionaryLocationInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.dictionaryLocationInput"></a>

```java
public java.lang.String getDictionaryLocationInput();
```

- *Type:* java.lang.String

---

##### `dictionaryWordDisallowedInput`<sup>Optional</sup> <a name="dictionaryWordDisallowedInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.dictionaryWordDisallowedInput"></a>

```java
public java.lang.Object getDictionaryWordDisallowedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `disallowedCharsInput`<sup>Optional</sup> <a name="disallowedCharsInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.disallowedCharsInput"></a>

```java
public java.lang.String getDisallowedCharsInput();
```

- *Type:* java.lang.String

---

##### `disallowedSubstringsInput`<sup>Optional</sup> <a name="disallowedSubstringsInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.disallowedSubstringsInput"></a>

```java
public java.util.List<java.lang.String> getDisallowedSubstringsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `disallowedUserAttributeValuesInput`<sup>Optional</sup> <a name="disallowedUserAttributeValuesInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.disallowedUserAttributeValuesInput"></a>

```java
public java.util.List<java.lang.String> getDisallowedUserAttributeValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `distinctCharactersInput`<sup>Optional</sup> <a name="distinctCharactersInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.distinctCharactersInput"></a>

```java
public java.lang.Number getDistinctCharactersInput();
```

- *Type:* java.lang.Number

---

##### `externalIdInput`<sup>Optional</sup> <a name="externalIdInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.externalIdInput"></a>

```java
public java.lang.String getExternalIdInput();
```

- *Type:* java.lang.String

---

##### `firstNameDisallowedInput`<sup>Optional</sup> <a name="firstNameDisallowedInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.firstNameDisallowedInput"></a>

```java
public java.lang.Object getFirstNameDisallowedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `forcePasswordResetInput`<sup>Optional</sup> <a name="forcePasswordResetInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.forcePasswordResetInput"></a>

```java
public java.lang.Object getForcePasswordResetInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `groupsInput`<sup>Optional</sup> <a name="groupsInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.groupsInput"></a>

```java
public java.lang.Object getGroupsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroups">IdentityDomainsPasswordPolicyGroups</a>>

---

##### `idcsEndpointInput`<sup>Optional</sup> <a name="idcsEndpointInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.idcsEndpointInput"></a>

```java
public java.lang.String getIdcsEndpointInput();
```

- *Type:* java.lang.String

---

##### `lastNameDisallowedInput`<sup>Optional</sup> <a name="lastNameDisallowedInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.lastNameDisallowedInput"></a>

```java
public java.lang.Object getLastNameDisallowedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `lockoutDurationInput`<sup>Optional</sup> <a name="lockoutDurationInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.lockoutDurationInput"></a>

```java
public java.lang.Number getLockoutDurationInput();
```

- *Type:* java.lang.Number

---

##### `maxIncorrectAttemptsInput`<sup>Optional</sup> <a name="maxIncorrectAttemptsInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.maxIncorrectAttemptsInput"></a>

```java
public java.lang.Number getMaxIncorrectAttemptsInput();
```

- *Type:* java.lang.Number

---

##### `maxLengthInput`<sup>Optional</sup> <a name="maxLengthInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.maxLengthInput"></a>

```java
public java.lang.Number getMaxLengthInput();
```

- *Type:* java.lang.Number

---

##### `maxRepeatedCharsInput`<sup>Optional</sup> <a name="maxRepeatedCharsInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.maxRepeatedCharsInput"></a>

```java
public java.lang.Number getMaxRepeatedCharsInput();
```

- *Type:* java.lang.Number

---

##### `maxSpecialCharsInput`<sup>Optional</sup> <a name="maxSpecialCharsInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.maxSpecialCharsInput"></a>

```java
public java.lang.Number getMaxSpecialCharsInput();
```

- *Type:* java.lang.Number

---

##### `minAlphaNumeralsInput`<sup>Optional</sup> <a name="minAlphaNumeralsInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minAlphaNumeralsInput"></a>

```java
public java.lang.Number getMinAlphaNumeralsInput();
```

- *Type:* java.lang.Number

---

##### `minAlphasInput`<sup>Optional</sup> <a name="minAlphasInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minAlphasInput"></a>

```java
public java.lang.Number getMinAlphasInput();
```

- *Type:* java.lang.Number

---

##### `minLengthInput`<sup>Optional</sup> <a name="minLengthInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minLengthInput"></a>

```java
public java.lang.Number getMinLengthInput();
```

- *Type:* java.lang.Number

---

##### `minLowerCaseInput`<sup>Optional</sup> <a name="minLowerCaseInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minLowerCaseInput"></a>

```java
public java.lang.Number getMinLowerCaseInput();
```

- *Type:* java.lang.Number

---

##### `minNumeralsInput`<sup>Optional</sup> <a name="minNumeralsInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minNumeralsInput"></a>

```java
public java.lang.Number getMinNumeralsInput();
```

- *Type:* java.lang.Number

---

##### `minPasswordAgeInput`<sup>Optional</sup> <a name="minPasswordAgeInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minPasswordAgeInput"></a>

```java
public java.lang.Number getMinPasswordAgeInput();
```

- *Type:* java.lang.Number

---

##### `minSpecialCharsInput`<sup>Optional</sup> <a name="minSpecialCharsInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minSpecialCharsInput"></a>

```java
public java.lang.Number getMinSpecialCharsInput();
```

- *Type:* java.lang.Number

---

##### `minUniqueCharsInput`<sup>Optional</sup> <a name="minUniqueCharsInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minUniqueCharsInput"></a>

```java
public java.lang.Number getMinUniqueCharsInput();
```

- *Type:* java.lang.Number

---

##### `minUpperCaseInput`<sup>Optional</sup> <a name="minUpperCaseInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minUpperCaseInput"></a>

```java
public java.lang.Number getMinUpperCaseInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `numPasswordsInHistoryInput`<sup>Optional</sup> <a name="numPasswordsInHistoryInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.numPasswordsInHistoryInput"></a>

```java
public java.lang.Number getNumPasswordsInHistoryInput();
```

- *Type:* java.lang.Number

---

##### `ocidInput`<sup>Optional</sup> <a name="ocidInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.ocidInput"></a>

```java
public java.lang.String getOcidInput();
```

- *Type:* java.lang.String

---

##### `passwordExpiresAfterInput`<sup>Optional</sup> <a name="passwordExpiresAfterInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.passwordExpiresAfterInput"></a>

```java
public java.lang.Number getPasswordExpiresAfterInput();
```

- *Type:* java.lang.Number

---

##### `passwordExpireWarningInput`<sup>Optional</sup> <a name="passwordExpireWarningInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.passwordExpireWarningInput"></a>

```java
public java.lang.Number getPasswordExpireWarningInput();
```

- *Type:* java.lang.Number

---

##### `passwordStrengthInput`<sup>Optional</sup> <a name="passwordStrengthInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.passwordStrengthInput"></a>

```java
public java.lang.String getPasswordStrengthInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `requiredCharsInput`<sup>Optional</sup> <a name="requiredCharsInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.requiredCharsInput"></a>

```java
public java.lang.String getRequiredCharsInput();
```

- *Type:* java.lang.String

---

##### `resourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="resourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.resourceTypeSchemaVersionInput"></a>

```java
public java.lang.String getResourceTypeSchemaVersionInput();
```

- *Type:* java.lang.String

---

##### `schemasInput`<sup>Optional</sup> <a name="schemasInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.schemasInput"></a>

```java
public java.util.List<java.lang.String> getSchemasInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `startsWithAlphabetInput`<sup>Optional</sup> <a name="startsWithAlphabetInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.startsWithAlphabetInput"></a>

```java
public java.lang.Object getStartsWithAlphabetInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.tagsInput"></a>

```java
public java.lang.Object getTagsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTags">IdentityDomainsPasswordPolicyTags</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeouts">IdentityDomainsPasswordPolicyTimeouts</a>

---

##### `userNameDisallowedInput`<sup>Optional</sup> <a name="userNameDisallowedInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.userNameDisallowedInput"></a>

```java
public java.lang.Object getUserNameDisallowedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowedChars`<sup>Required</sup> <a name="allowedChars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.allowedChars"></a>

```java
public java.lang.String getAllowedChars();
```

- *Type:* java.lang.String

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.attributes"></a>

```java
public java.lang.String getAttributes();
```

- *Type:* java.lang.String

---

##### `attributeSets`<sup>Required</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.attributeSets"></a>

```java
public java.util.List<java.lang.String> getAttributeSets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.authorization"></a>

```java
public java.lang.String getAuthorization();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `dictionaryDelimiter`<sup>Required</sup> <a name="dictionaryDelimiter" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.dictionaryDelimiter"></a>

```java
public java.lang.String getDictionaryDelimiter();
```

- *Type:* java.lang.String

---

##### `dictionaryLocation`<sup>Required</sup> <a name="dictionaryLocation" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.dictionaryLocation"></a>

```java
public java.lang.String getDictionaryLocation();
```

- *Type:* java.lang.String

---

##### `dictionaryWordDisallowed`<sup>Required</sup> <a name="dictionaryWordDisallowed" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.dictionaryWordDisallowed"></a>

```java
public java.lang.Object getDictionaryWordDisallowed();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `disallowedChars`<sup>Required</sup> <a name="disallowedChars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.disallowedChars"></a>

```java
public java.lang.String getDisallowedChars();
```

- *Type:* java.lang.String

---

##### `disallowedSubstrings`<sup>Required</sup> <a name="disallowedSubstrings" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.disallowedSubstrings"></a>

```java
public java.util.List<java.lang.String> getDisallowedSubstrings();
```

- *Type:* java.util.List<java.lang.String>

---

##### `disallowedUserAttributeValues`<sup>Required</sup> <a name="disallowedUserAttributeValues" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.disallowedUserAttributeValues"></a>

```java
public java.util.List<java.lang.String> getDisallowedUserAttributeValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `distinctCharacters`<sup>Required</sup> <a name="distinctCharacters" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.distinctCharacters"></a>

```java
public java.lang.Number getDistinctCharacters();
```

- *Type:* java.lang.Number

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

---

##### `firstNameDisallowed`<sup>Required</sup> <a name="firstNameDisallowed" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.firstNameDisallowed"></a>

```java
public java.lang.Object getFirstNameDisallowed();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `forcePasswordReset`<sup>Required</sup> <a name="forcePasswordReset" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.forcePasswordReset"></a>

```java
public java.lang.Object getForcePasswordReset();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.idcsEndpoint"></a>

```java
public java.lang.String getIdcsEndpoint();
```

- *Type:* java.lang.String

---

##### `lastNameDisallowed`<sup>Required</sup> <a name="lastNameDisallowed" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.lastNameDisallowed"></a>

```java
public java.lang.Object getLastNameDisallowed();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `lockoutDuration`<sup>Required</sup> <a name="lockoutDuration" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.lockoutDuration"></a>

```java
public java.lang.Number getLockoutDuration();
```

- *Type:* java.lang.Number

---

##### `maxIncorrectAttempts`<sup>Required</sup> <a name="maxIncorrectAttempts" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.maxIncorrectAttempts"></a>

```java
public java.lang.Number getMaxIncorrectAttempts();
```

- *Type:* java.lang.Number

---

##### `maxLength`<sup>Required</sup> <a name="maxLength" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.maxLength"></a>

```java
public java.lang.Number getMaxLength();
```

- *Type:* java.lang.Number

---

##### `maxRepeatedChars`<sup>Required</sup> <a name="maxRepeatedChars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.maxRepeatedChars"></a>

```java
public java.lang.Number getMaxRepeatedChars();
```

- *Type:* java.lang.Number

---

##### `maxSpecialChars`<sup>Required</sup> <a name="maxSpecialChars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.maxSpecialChars"></a>

```java
public java.lang.Number getMaxSpecialChars();
```

- *Type:* java.lang.Number

---

##### `minAlphaNumerals`<sup>Required</sup> <a name="minAlphaNumerals" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minAlphaNumerals"></a>

```java
public java.lang.Number getMinAlphaNumerals();
```

- *Type:* java.lang.Number

---

##### `minAlphas`<sup>Required</sup> <a name="minAlphas" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minAlphas"></a>

```java
public java.lang.Number getMinAlphas();
```

- *Type:* java.lang.Number

---

##### `minLength`<sup>Required</sup> <a name="minLength" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minLength"></a>

```java
public java.lang.Number getMinLength();
```

- *Type:* java.lang.Number

---

##### `minLowerCase`<sup>Required</sup> <a name="minLowerCase" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minLowerCase"></a>

```java
public java.lang.Number getMinLowerCase();
```

- *Type:* java.lang.Number

---

##### `minNumerals`<sup>Required</sup> <a name="minNumerals" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minNumerals"></a>

```java
public java.lang.Number getMinNumerals();
```

- *Type:* java.lang.Number

---

##### `minPasswordAge`<sup>Required</sup> <a name="minPasswordAge" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minPasswordAge"></a>

```java
public java.lang.Number getMinPasswordAge();
```

- *Type:* java.lang.Number

---

##### `minSpecialChars`<sup>Required</sup> <a name="minSpecialChars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minSpecialChars"></a>

```java
public java.lang.Number getMinSpecialChars();
```

- *Type:* java.lang.Number

---

##### `minUniqueChars`<sup>Required</sup> <a name="minUniqueChars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minUniqueChars"></a>

```java
public java.lang.Number getMinUniqueChars();
```

- *Type:* java.lang.Number

---

##### `minUpperCase`<sup>Required</sup> <a name="minUpperCase" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minUpperCase"></a>

```java
public java.lang.Number getMinUpperCase();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `numPasswordsInHistory`<sup>Required</sup> <a name="numPasswordsInHistory" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.numPasswordsInHistory"></a>

```java
public java.lang.Number getNumPasswordsInHistory();
```

- *Type:* java.lang.Number

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `passwordExpiresAfter`<sup>Required</sup> <a name="passwordExpiresAfter" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.passwordExpiresAfter"></a>

```java
public java.lang.Number getPasswordExpiresAfter();
```

- *Type:* java.lang.Number

---

##### `passwordExpireWarning`<sup>Required</sup> <a name="passwordExpireWarning" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.passwordExpireWarning"></a>

```java
public java.lang.Number getPasswordExpireWarning();
```

- *Type:* java.lang.Number

---

##### `passwordStrength`<sup>Required</sup> <a name="passwordStrength" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.passwordStrength"></a>

```java
public java.lang.String getPasswordStrength();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `requiredChars`<sup>Required</sup> <a name="requiredChars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.requiredChars"></a>

```java
public java.lang.String getRequiredChars();
```

- *Type:* java.lang.String

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.resourceTypeSchemaVersion"></a>

```java
public java.lang.String getResourceTypeSchemaVersion();
```

- *Type:* java.lang.String

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.schemas"></a>

```java
public java.util.List<java.lang.String> getSchemas();
```

- *Type:* java.util.List<java.lang.String>

---

##### `startsWithAlphabet`<sup>Required</sup> <a name="startsWithAlphabet" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.startsWithAlphabet"></a>

```java
public java.lang.Object getStartsWithAlphabet();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `userNameDisallowed`<sup>Required</sup> <a name="userNameDisallowed" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.userNameDisallowed"></a>

```java
public java.lang.Object getUserNameDisallowed();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityDomainsPasswordPolicyConfig <a name="IdentityDomainsPasswordPolicyConfig" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_password_policy.IdentityDomainsPasswordPolicyConfig;

IdentityDomainsPasswordPolicyConfig.builder()
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
    .idcsEndpoint(java.lang.String)
    .name(java.lang.String)
    .schemas(java.util.List<java.lang.String>)
//  .allowedChars(java.lang.String)
//  .attributes(java.lang.String)
//  .attributeSets(java.util.List<java.lang.String>)
//  .authorization(java.lang.String)
//  .description(java.lang.String)
//  .dictionaryDelimiter(java.lang.String)
//  .dictionaryLocation(java.lang.String)
//  .dictionaryWordDisallowed(java.lang.Boolean)
//  .dictionaryWordDisallowed(IResolvable)
//  .disallowedChars(java.lang.String)
//  .disallowedSubstrings(java.util.List<java.lang.String>)
//  .disallowedUserAttributeValues(java.util.List<java.lang.String>)
//  .distinctCharacters(java.lang.Number)
//  .externalId(java.lang.String)
//  .firstNameDisallowed(java.lang.Boolean)
//  .firstNameDisallowed(IResolvable)
//  .forcePasswordReset(java.lang.Boolean)
//  .forcePasswordReset(IResolvable)
//  .groups(IResolvable)
//  .groups(java.util.List<IdentityDomainsPasswordPolicyGroups>)
//  .lastNameDisallowed(java.lang.Boolean)
//  .lastNameDisallowed(IResolvable)
//  .lockoutDuration(java.lang.Number)
//  .maxIncorrectAttempts(java.lang.Number)
//  .maxLength(java.lang.Number)
//  .maxRepeatedChars(java.lang.Number)
//  .maxSpecialChars(java.lang.Number)
//  .minAlphaNumerals(java.lang.Number)
//  .minAlphas(java.lang.Number)
//  .minLength(java.lang.Number)
//  .minLowerCase(java.lang.Number)
//  .minNumerals(java.lang.Number)
//  .minPasswordAge(java.lang.Number)
//  .minSpecialChars(java.lang.Number)
//  .minUniqueChars(java.lang.Number)
//  .minUpperCase(java.lang.Number)
//  .numPasswordsInHistory(java.lang.Number)
//  .ocid(java.lang.String)
//  .passwordExpiresAfter(java.lang.Number)
//  .passwordExpireWarning(java.lang.Number)
//  .passwordStrength(java.lang.String)
//  .priority(java.lang.Number)
//  .requiredChars(java.lang.String)
//  .resourceTypeSchemaVersion(java.lang.String)
//  .startsWithAlphabet(java.lang.Boolean)
//  .startsWithAlphabet(IResolvable)
//  .tags(IResolvable)
//  .tags(java.util.List<IdentityDomainsPasswordPolicyTags>)
//  .timeouts(IdentityDomainsPasswordPolicyTimeouts)
//  .userNameDisallowed(java.lang.Boolean)
//  .userNameDisallowed(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.idcsEndpoint">idcsEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#idcs_endpoint IdentityDomainsPasswordPolicy#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#name IdentityDomainsPasswordPolicy#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.schemas">schemas</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#schemas IdentityDomainsPasswordPolicy#schemas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.allowedChars">allowedChars</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#allowed_chars IdentityDomainsPasswordPolicy#allowed_chars}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.attributes">attributes</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#attributes IdentityDomainsPasswordPolicy#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.attributeSets">attributeSets</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#attribute_sets IdentityDomainsPasswordPolicy#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.authorization">authorization</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#authorization IdentityDomainsPasswordPolicy#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#description IdentityDomainsPasswordPolicy#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.dictionaryDelimiter">dictionaryDelimiter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#dictionary_delimiter IdentityDomainsPasswordPolicy#dictionary_delimiter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.dictionaryLocation">dictionaryLocation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#dictionary_location IdentityDomainsPasswordPolicy#dictionary_location}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.dictionaryWordDisallowed">dictionaryWordDisallowed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#dictionary_word_disallowed IdentityDomainsPasswordPolicy#dictionary_word_disallowed}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.disallowedChars">disallowedChars</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#disallowed_chars IdentityDomainsPasswordPolicy#disallowed_chars}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.disallowedSubstrings">disallowedSubstrings</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#disallowed_substrings IdentityDomainsPasswordPolicy#disallowed_substrings}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.disallowedUserAttributeValues">disallowedUserAttributeValues</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#disallowed_user_attribute_values IdentityDomainsPasswordPolicy#disallowed_user_attribute_values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.distinctCharacters">distinctCharacters</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#distinct_characters IdentityDomainsPasswordPolicy#distinct_characters}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.externalId">externalId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#external_id IdentityDomainsPasswordPolicy#external_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.firstNameDisallowed">firstNameDisallowed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#first_name_disallowed IdentityDomainsPasswordPolicy#first_name_disallowed}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.forcePasswordReset">forcePasswordReset</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#force_password_reset IdentityDomainsPasswordPolicy#force_password_reset}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.groups">groups</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroups">IdentityDomainsPasswordPolicyGroups</a>></code> | groups block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.lastNameDisallowed">lastNameDisallowed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#last_name_disallowed IdentityDomainsPasswordPolicy#last_name_disallowed}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.lockoutDuration">lockoutDuration</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#lockout_duration IdentityDomainsPasswordPolicy#lockout_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.maxIncorrectAttempts">maxIncorrectAttempts</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#max_incorrect_attempts IdentityDomainsPasswordPolicy#max_incorrect_attempts}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.maxLength">maxLength</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#max_length IdentityDomainsPasswordPolicy#max_length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.maxRepeatedChars">maxRepeatedChars</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#max_repeated_chars IdentityDomainsPasswordPolicy#max_repeated_chars}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.maxSpecialChars">maxSpecialChars</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#max_special_chars IdentityDomainsPasswordPolicy#max_special_chars}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.minAlphaNumerals">minAlphaNumerals</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_alpha_numerals IdentityDomainsPasswordPolicy#min_alpha_numerals}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.minAlphas">minAlphas</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_alphas IdentityDomainsPasswordPolicy#min_alphas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.minLength">minLength</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_length IdentityDomainsPasswordPolicy#min_length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.minLowerCase">minLowerCase</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_lower_case IdentityDomainsPasswordPolicy#min_lower_case}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.minNumerals">minNumerals</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_numerals IdentityDomainsPasswordPolicy#min_numerals}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.minPasswordAge">minPasswordAge</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_password_age IdentityDomainsPasswordPolicy#min_password_age}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.minSpecialChars">minSpecialChars</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_special_chars IdentityDomainsPasswordPolicy#min_special_chars}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.minUniqueChars">minUniqueChars</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_unique_chars IdentityDomainsPasswordPolicy#min_unique_chars}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.minUpperCase">minUpperCase</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_upper_case IdentityDomainsPasswordPolicy#min_upper_case}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.numPasswordsInHistory">numPasswordsInHistory</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#num_passwords_in_history IdentityDomainsPasswordPolicy#num_passwords_in_history}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.ocid">ocid</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#ocid IdentityDomainsPasswordPolicy#ocid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.passwordExpiresAfter">passwordExpiresAfter</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#password_expires_after IdentityDomainsPasswordPolicy#password_expires_after}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.passwordExpireWarning">passwordExpireWarning</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#password_expire_warning IdentityDomainsPasswordPolicy#password_expire_warning}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.passwordStrength">passwordStrength</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#password_strength IdentityDomainsPasswordPolicy#password_strength}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#priority IdentityDomainsPasswordPolicy#priority}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.requiredChars">requiredChars</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#required_chars IdentityDomainsPasswordPolicy#required_chars}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#resource_type_schema_version IdentityDomainsPasswordPolicy#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.startsWithAlphabet">startsWithAlphabet</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#starts_with_alphabet IdentityDomainsPasswordPolicy#starts_with_alphabet}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.tags">tags</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTags">IdentityDomainsPasswordPolicyTags</a>></code> | tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeouts">IdentityDomainsPasswordPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.userNameDisallowed">userNameDisallowed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#user_name_disallowed IdentityDomainsPasswordPolicy#user_name_disallowed}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.idcsEndpoint"></a>

```java
public java.lang.String getIdcsEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#idcs_endpoint IdentityDomainsPasswordPolicy#idcs_endpoint}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#name IdentityDomainsPasswordPolicy#name}.

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.schemas"></a>

```java
public java.util.List<java.lang.String> getSchemas();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#schemas IdentityDomainsPasswordPolicy#schemas}.

---

##### `allowedChars`<sup>Optional</sup> <a name="allowedChars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.allowedChars"></a>

```java
public java.lang.String getAllowedChars();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#allowed_chars IdentityDomainsPasswordPolicy#allowed_chars}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.attributes"></a>

```java
public java.lang.String getAttributes();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#attributes IdentityDomainsPasswordPolicy#attributes}.

---

##### `attributeSets`<sup>Optional</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.attributeSets"></a>

```java
public java.util.List<java.lang.String> getAttributeSets();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#attribute_sets IdentityDomainsPasswordPolicy#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.authorization"></a>

```java
public java.lang.String getAuthorization();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#authorization IdentityDomainsPasswordPolicy#authorization}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#description IdentityDomainsPasswordPolicy#description}.

---

##### `dictionaryDelimiter`<sup>Optional</sup> <a name="dictionaryDelimiter" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.dictionaryDelimiter"></a>

```java
public java.lang.String getDictionaryDelimiter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#dictionary_delimiter IdentityDomainsPasswordPolicy#dictionary_delimiter}.

---

##### `dictionaryLocation`<sup>Optional</sup> <a name="dictionaryLocation" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.dictionaryLocation"></a>

```java
public java.lang.String getDictionaryLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#dictionary_location IdentityDomainsPasswordPolicy#dictionary_location}.

---

##### `dictionaryWordDisallowed`<sup>Optional</sup> <a name="dictionaryWordDisallowed" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.dictionaryWordDisallowed"></a>

```java
public java.lang.Object getDictionaryWordDisallowed();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#dictionary_word_disallowed IdentityDomainsPasswordPolicy#dictionary_word_disallowed}.

---

##### `disallowedChars`<sup>Optional</sup> <a name="disallowedChars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.disallowedChars"></a>

```java
public java.lang.String getDisallowedChars();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#disallowed_chars IdentityDomainsPasswordPolicy#disallowed_chars}.

---

##### `disallowedSubstrings`<sup>Optional</sup> <a name="disallowedSubstrings" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.disallowedSubstrings"></a>

```java
public java.util.List<java.lang.String> getDisallowedSubstrings();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#disallowed_substrings IdentityDomainsPasswordPolicy#disallowed_substrings}.

---

##### `disallowedUserAttributeValues`<sup>Optional</sup> <a name="disallowedUserAttributeValues" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.disallowedUserAttributeValues"></a>

```java
public java.util.List<java.lang.String> getDisallowedUserAttributeValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#disallowed_user_attribute_values IdentityDomainsPasswordPolicy#disallowed_user_attribute_values}.

---

##### `distinctCharacters`<sup>Optional</sup> <a name="distinctCharacters" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.distinctCharacters"></a>

```java
public java.lang.Number getDistinctCharacters();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#distinct_characters IdentityDomainsPasswordPolicy#distinct_characters}.

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#external_id IdentityDomainsPasswordPolicy#external_id}.

---

##### `firstNameDisallowed`<sup>Optional</sup> <a name="firstNameDisallowed" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.firstNameDisallowed"></a>

```java
public java.lang.Object getFirstNameDisallowed();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#first_name_disallowed IdentityDomainsPasswordPolicy#first_name_disallowed}.

---

##### `forcePasswordReset`<sup>Optional</sup> <a name="forcePasswordReset" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.forcePasswordReset"></a>

```java
public java.lang.Object getForcePasswordReset();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#force_password_reset IdentityDomainsPasswordPolicy#force_password_reset}.

---

##### `groups`<sup>Optional</sup> <a name="groups" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.groups"></a>

```java
public java.lang.Object getGroups();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroups">IdentityDomainsPasswordPolicyGroups</a>>

groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#groups IdentityDomainsPasswordPolicy#groups}

---

##### `lastNameDisallowed`<sup>Optional</sup> <a name="lastNameDisallowed" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.lastNameDisallowed"></a>

```java
public java.lang.Object getLastNameDisallowed();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#last_name_disallowed IdentityDomainsPasswordPolicy#last_name_disallowed}.

---

##### `lockoutDuration`<sup>Optional</sup> <a name="lockoutDuration" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.lockoutDuration"></a>

```java
public java.lang.Number getLockoutDuration();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#lockout_duration IdentityDomainsPasswordPolicy#lockout_duration}.

---

##### `maxIncorrectAttempts`<sup>Optional</sup> <a name="maxIncorrectAttempts" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.maxIncorrectAttempts"></a>

```java
public java.lang.Number getMaxIncorrectAttempts();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#max_incorrect_attempts IdentityDomainsPasswordPolicy#max_incorrect_attempts}.

---

##### `maxLength`<sup>Optional</sup> <a name="maxLength" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.maxLength"></a>

```java
public java.lang.Number getMaxLength();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#max_length IdentityDomainsPasswordPolicy#max_length}.

---

##### `maxRepeatedChars`<sup>Optional</sup> <a name="maxRepeatedChars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.maxRepeatedChars"></a>

```java
public java.lang.Number getMaxRepeatedChars();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#max_repeated_chars IdentityDomainsPasswordPolicy#max_repeated_chars}.

---

##### `maxSpecialChars`<sup>Optional</sup> <a name="maxSpecialChars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.maxSpecialChars"></a>

```java
public java.lang.Number getMaxSpecialChars();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#max_special_chars IdentityDomainsPasswordPolicy#max_special_chars}.

---

##### `minAlphaNumerals`<sup>Optional</sup> <a name="minAlphaNumerals" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.minAlphaNumerals"></a>

```java
public java.lang.Number getMinAlphaNumerals();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_alpha_numerals IdentityDomainsPasswordPolicy#min_alpha_numerals}.

---

##### `minAlphas`<sup>Optional</sup> <a name="minAlphas" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.minAlphas"></a>

```java
public java.lang.Number getMinAlphas();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_alphas IdentityDomainsPasswordPolicy#min_alphas}.

---

##### `minLength`<sup>Optional</sup> <a name="minLength" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.minLength"></a>

```java
public java.lang.Number getMinLength();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_length IdentityDomainsPasswordPolicy#min_length}.

---

##### `minLowerCase`<sup>Optional</sup> <a name="minLowerCase" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.minLowerCase"></a>

```java
public java.lang.Number getMinLowerCase();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_lower_case IdentityDomainsPasswordPolicy#min_lower_case}.

---

##### `minNumerals`<sup>Optional</sup> <a name="minNumerals" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.minNumerals"></a>

```java
public java.lang.Number getMinNumerals();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_numerals IdentityDomainsPasswordPolicy#min_numerals}.

---

##### `minPasswordAge`<sup>Optional</sup> <a name="minPasswordAge" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.minPasswordAge"></a>

```java
public java.lang.Number getMinPasswordAge();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_password_age IdentityDomainsPasswordPolicy#min_password_age}.

---

##### `minSpecialChars`<sup>Optional</sup> <a name="minSpecialChars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.minSpecialChars"></a>

```java
public java.lang.Number getMinSpecialChars();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_special_chars IdentityDomainsPasswordPolicy#min_special_chars}.

---

##### `minUniqueChars`<sup>Optional</sup> <a name="minUniqueChars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.minUniqueChars"></a>

```java
public java.lang.Number getMinUniqueChars();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_unique_chars IdentityDomainsPasswordPolicy#min_unique_chars}.

---

##### `minUpperCase`<sup>Optional</sup> <a name="minUpperCase" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.minUpperCase"></a>

```java
public java.lang.Number getMinUpperCase();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_upper_case IdentityDomainsPasswordPolicy#min_upper_case}.

---

##### `numPasswordsInHistory`<sup>Optional</sup> <a name="numPasswordsInHistory" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.numPasswordsInHistory"></a>

```java
public java.lang.Number getNumPasswordsInHistory();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#num_passwords_in_history IdentityDomainsPasswordPolicy#num_passwords_in_history}.

---

##### `ocid`<sup>Optional</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#ocid IdentityDomainsPasswordPolicy#ocid}.

---

##### `passwordExpiresAfter`<sup>Optional</sup> <a name="passwordExpiresAfter" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.passwordExpiresAfter"></a>

```java
public java.lang.Number getPasswordExpiresAfter();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#password_expires_after IdentityDomainsPasswordPolicy#password_expires_after}.

---

##### `passwordExpireWarning`<sup>Optional</sup> <a name="passwordExpireWarning" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.passwordExpireWarning"></a>

```java
public java.lang.Number getPasswordExpireWarning();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#password_expire_warning IdentityDomainsPasswordPolicy#password_expire_warning}.

---

##### `passwordStrength`<sup>Optional</sup> <a name="passwordStrength" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.passwordStrength"></a>

```java
public java.lang.String getPasswordStrength();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#password_strength IdentityDomainsPasswordPolicy#password_strength}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#priority IdentityDomainsPasswordPolicy#priority}.

---

##### `requiredChars`<sup>Optional</sup> <a name="requiredChars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.requiredChars"></a>

```java
public java.lang.String getRequiredChars();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#required_chars IdentityDomainsPasswordPolicy#required_chars}.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.resourceTypeSchemaVersion"></a>

```java
public java.lang.String getResourceTypeSchemaVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#resource_type_schema_version IdentityDomainsPasswordPolicy#resource_type_schema_version}.

---

##### `startsWithAlphabet`<sup>Optional</sup> <a name="startsWithAlphabet" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.startsWithAlphabet"></a>

```java
public java.lang.Object getStartsWithAlphabet();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#starts_with_alphabet IdentityDomainsPasswordPolicy#starts_with_alphabet}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.tags"></a>

```java
public java.lang.Object getTags();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTags">IdentityDomainsPasswordPolicyTags</a>>

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#tags IdentityDomainsPasswordPolicy#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.timeouts"></a>

```java
public IdentityDomainsPasswordPolicyTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeouts">IdentityDomainsPasswordPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#timeouts IdentityDomainsPasswordPolicy#timeouts}

---

##### `userNameDisallowed`<sup>Optional</sup> <a name="userNameDisallowed" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.userNameDisallowed"></a>

```java
public java.lang.Object getUserNameDisallowed();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#user_name_disallowed IdentityDomainsPasswordPolicy#user_name_disallowed}.

---

### IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRules <a name="IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRules" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_password_policy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRules;

IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRules.builder()
    .build();
```


### IdentityDomainsPasswordPolicyGroups <a name="IdentityDomainsPasswordPolicyGroups" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroups.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_password_policy.IdentityDomainsPasswordPolicyGroups;

IdentityDomainsPasswordPolicyGroups.builder()
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroups.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#value IdentityDomainsPasswordPolicy#value}. |

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroups.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#value IdentityDomainsPasswordPolicy#value}.

---

### IdentityDomainsPasswordPolicyIdcsCreatedBy <a name="IdentityDomainsPasswordPolicyIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedBy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_password_policy.IdentityDomainsPasswordPolicyIdcsCreatedBy;

IdentityDomainsPasswordPolicyIdcsCreatedBy.builder()
    .build();
```


### IdentityDomainsPasswordPolicyIdcsLastModifiedBy <a name="IdentityDomainsPasswordPolicyIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedBy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_password_policy.IdentityDomainsPasswordPolicyIdcsLastModifiedBy;

IdentityDomainsPasswordPolicyIdcsLastModifiedBy.builder()
    .build();
```


### IdentityDomainsPasswordPolicyMeta <a name="IdentityDomainsPasswordPolicyMeta" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMeta.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_password_policy.IdentityDomainsPasswordPolicyMeta;

IdentityDomainsPasswordPolicyMeta.builder()
    .build();
```


### IdentityDomainsPasswordPolicyTags <a name="IdentityDomainsPasswordPolicyTags" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_password_policy.IdentityDomainsPasswordPolicyTags;

IdentityDomainsPasswordPolicyTags.builder()
    .key(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#key IdentityDomainsPasswordPolicy#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#value IdentityDomainsPasswordPolicy#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#key IdentityDomainsPasswordPolicy#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#value IdentityDomainsPasswordPolicy#value}.

---

### IdentityDomainsPasswordPolicyTimeouts <a name="IdentityDomainsPasswordPolicyTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_password_policy.IdentityDomainsPasswordPolicyTimeouts;

IdentityDomainsPasswordPolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#create IdentityDomainsPasswordPolicy#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#delete IdentityDomainsPasswordPolicy#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#update IdentityDomainsPasswordPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#create IdentityDomainsPasswordPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#delete IdentityDomainsPasswordPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#update IdentityDomainsPasswordPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList <a name="IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_password_policy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList;

new IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.get"></a>

```java
public IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference <a name="IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_password_policy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference;

new IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRules">IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.property.internalValue"></a>

```java
public IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRules getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRules">IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRules</a>

---


### IdentityDomainsPasswordPolicyGroupsList <a name="IdentityDomainsPasswordPolicyGroupsList" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_password_policy.IdentityDomainsPasswordPolicyGroupsList;

new IdentityDomainsPasswordPolicyGroupsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.get"></a>

```java
public IdentityDomainsPasswordPolicyGroupsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroups">IdentityDomainsPasswordPolicyGroups</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroups">IdentityDomainsPasswordPolicyGroups</a>>

---


### IdentityDomainsPasswordPolicyGroupsOutputReference <a name="IdentityDomainsPasswordPolicyGroupsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_password_policy.IdentityDomainsPasswordPolicyGroupsOutputReference;

new IdentityDomainsPasswordPolicyGroupsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.property.display">display</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroups">IdentityDomainsPasswordPolicyGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.property.display"></a>

```java
public java.lang.String getDisplay();
```

- *Type:* java.lang.String

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroups">IdentityDomainsPasswordPolicyGroups</a>

---


### IdentityDomainsPasswordPolicyIdcsCreatedByList <a name="IdentityDomainsPasswordPolicyIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_password_policy.IdentityDomainsPasswordPolicyIdcsCreatedByList;

new IdentityDomainsPasswordPolicyIdcsCreatedByList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.get"></a>

```java
public IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference <a name="IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_password_policy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference;

new IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.display">display</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedBy">IdentityDomainsPasswordPolicyIdcsCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.display"></a>

```java
public java.lang.String getDisplay();
```

- *Type:* java.lang.String

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.internalValue"></a>

```java
public IdentityDomainsPasswordPolicyIdcsCreatedBy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedBy">IdentityDomainsPasswordPolicyIdcsCreatedBy</a>

---


### IdentityDomainsPasswordPolicyIdcsLastModifiedByList <a name="IdentityDomainsPasswordPolicyIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_password_policy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList;

new IdentityDomainsPasswordPolicyIdcsLastModifiedByList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.get"></a>

```java
public IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference <a name="IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_password_policy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference;

new IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedBy">IdentityDomainsPasswordPolicyIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.display"></a>

```java
public java.lang.String getDisplay();
```

- *Type:* java.lang.String

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.internalValue"></a>

```java
public IdentityDomainsPasswordPolicyIdcsLastModifiedBy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedBy">IdentityDomainsPasswordPolicyIdcsLastModifiedBy</a>

---


### IdentityDomainsPasswordPolicyMetaList <a name="IdentityDomainsPasswordPolicyMetaList" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_password_policy.IdentityDomainsPasswordPolicyMetaList;

new IdentityDomainsPasswordPolicyMetaList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.get"></a>

```java
public IdentityDomainsPasswordPolicyMetaOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### IdentityDomainsPasswordPolicyMetaOutputReference <a name="IdentityDomainsPasswordPolicyMetaOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_password_policy.IdentityDomainsPasswordPolicyMetaOutputReference;

new IdentityDomainsPasswordPolicyMetaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.property.created">created</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.property.lastModified">lastModified</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMeta">IdentityDomainsPasswordPolicyMeta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.property.created"></a>

```java
public java.lang.String getCreated();
```

- *Type:* java.lang.String

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.property.lastModified"></a>

```java
public java.lang.String getLastModified();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.property.internalValue"></a>

```java
public IdentityDomainsPasswordPolicyMeta getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMeta">IdentityDomainsPasswordPolicyMeta</a>

---


### IdentityDomainsPasswordPolicyTagsList <a name="IdentityDomainsPasswordPolicyTagsList" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_password_policy.IdentityDomainsPasswordPolicyTagsList;

new IdentityDomainsPasswordPolicyTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.get"></a>

```java
public IdentityDomainsPasswordPolicyTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTags">IdentityDomainsPasswordPolicyTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTags">IdentityDomainsPasswordPolicyTags</a>>

---


### IdentityDomainsPasswordPolicyTagsOutputReference <a name="IdentityDomainsPasswordPolicyTagsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_password_policy.IdentityDomainsPasswordPolicyTagsOutputReference;

new IdentityDomainsPasswordPolicyTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTags">IdentityDomainsPasswordPolicyTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTags">IdentityDomainsPasswordPolicyTags</a>

---


### IdentityDomainsPasswordPolicyTimeoutsOutputReference <a name="IdentityDomainsPasswordPolicyTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_password_policy.IdentityDomainsPasswordPolicyTimeoutsOutputReference;

new IdentityDomainsPasswordPolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeouts">IdentityDomainsPasswordPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeouts">IdentityDomainsPasswordPolicyTimeouts</a>

---



