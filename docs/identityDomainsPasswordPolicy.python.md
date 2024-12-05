# `identityDomainsPasswordPolicy` Submodule <a name="`identityDomainsPasswordPolicy` Submodule" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityDomainsPasswordPolicy <a name="IdentityDomainsPasswordPolicy" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy oci_identity_domains_password_policy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_password_policy

identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  idcs_endpoint: str,
  name: str,
  schemas: typing.List[str],
  allowed_chars: str = None,
  attributes: str = None,
  attribute_sets: typing.List[str] = None,
  authorization: str = None,
  description: str = None,
  dictionary_delimiter: str = None,
  dictionary_location: str = None,
  dictionary_word_disallowed: typing.Union[bool, IResolvable] = None,
  disallowed_chars: str = None,
  disallowed_substrings: typing.List[str] = None,
  disallowed_user_attribute_values: typing.List[str] = None,
  distinct_characters: typing.Union[int, float] = None,
  external_id: str = None,
  first_name_disallowed: typing.Union[bool, IResolvable] = None,
  force_password_reset: typing.Union[bool, IResolvable] = None,
  groups: typing.Union[IResolvable, typing.List[IdentityDomainsPasswordPolicyGroups]] = None,
  last_name_disallowed: typing.Union[bool, IResolvable] = None,
  lockout_duration: typing.Union[int, float] = None,
  max_incorrect_attempts: typing.Union[int, float] = None,
  max_length: typing.Union[int, float] = None,
  max_repeated_chars: typing.Union[int, float] = None,
  max_special_chars: typing.Union[int, float] = None,
  min_alpha_numerals: typing.Union[int, float] = None,
  min_alphas: typing.Union[int, float] = None,
  min_length: typing.Union[int, float] = None,
  min_lower_case: typing.Union[int, float] = None,
  min_numerals: typing.Union[int, float] = None,
  min_password_age: typing.Union[int, float] = None,
  min_special_chars: typing.Union[int, float] = None,
  min_unique_chars: typing.Union[int, float] = None,
  min_upper_case: typing.Union[int, float] = None,
  num_passwords_in_history: typing.Union[int, float] = None,
  ocid: str = None,
  password_expires_after: typing.Union[int, float] = None,
  password_expire_warning: typing.Union[int, float] = None,
  password_strength: str = None,
  priority: typing.Union[int, float] = None,
  required_chars: str = None,
  resource_type_schema_version: str = None,
  starts_with_alphabet: typing.Union[bool, IResolvable] = None,
  tags: typing.Union[IResolvable, typing.List[IdentityDomainsPasswordPolicyTags]] = None,
  timeouts: IdentityDomainsPasswordPolicyTimeouts = None,
  user_name_disallowed: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#idcs_endpoint IdentityDomainsPasswordPolicy#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#name IdentityDomainsPasswordPolicy#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.schemas">schemas</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#schemas IdentityDomainsPasswordPolicy#schemas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.allowedChars">allowed_chars</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#allowed_chars IdentityDomainsPasswordPolicy#allowed_chars}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.attributes">attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#attributes IdentityDomainsPasswordPolicy#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#attribute_sets IdentityDomainsPasswordPolicy#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#authorization IdentityDomainsPasswordPolicy#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#description IdentityDomainsPasswordPolicy#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.dictionaryDelimiter">dictionary_delimiter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#dictionary_delimiter IdentityDomainsPasswordPolicy#dictionary_delimiter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.dictionaryLocation">dictionary_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#dictionary_location IdentityDomainsPasswordPolicy#dictionary_location}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.dictionaryWordDisallowed">dictionary_word_disallowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#dictionary_word_disallowed IdentityDomainsPasswordPolicy#dictionary_word_disallowed}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.disallowedChars">disallowed_chars</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#disallowed_chars IdentityDomainsPasswordPolicy#disallowed_chars}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.disallowedSubstrings">disallowed_substrings</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#disallowed_substrings IdentityDomainsPasswordPolicy#disallowed_substrings}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.disallowedUserAttributeValues">disallowed_user_attribute_values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#disallowed_user_attribute_values IdentityDomainsPasswordPolicy#disallowed_user_attribute_values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.distinctCharacters">distinct_characters</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#distinct_characters IdentityDomainsPasswordPolicy#distinct_characters}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.externalId">external_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#external_id IdentityDomainsPasswordPolicy#external_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.firstNameDisallowed">first_name_disallowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#first_name_disallowed IdentityDomainsPasswordPolicy#first_name_disallowed}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.forcePasswordReset">force_password_reset</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#force_password_reset IdentityDomainsPasswordPolicy#force_password_reset}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.groups">groups</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroups">IdentityDomainsPasswordPolicyGroups</a>]]</code> | groups block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.lastNameDisallowed">last_name_disallowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#last_name_disallowed IdentityDomainsPasswordPolicy#last_name_disallowed}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.lockoutDuration">lockout_duration</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#lockout_duration IdentityDomainsPasswordPolicy#lockout_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.maxIncorrectAttempts">max_incorrect_attempts</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#max_incorrect_attempts IdentityDomainsPasswordPolicy#max_incorrect_attempts}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.maxLength">max_length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#max_length IdentityDomainsPasswordPolicy#max_length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.maxRepeatedChars">max_repeated_chars</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#max_repeated_chars IdentityDomainsPasswordPolicy#max_repeated_chars}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.maxSpecialChars">max_special_chars</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#max_special_chars IdentityDomainsPasswordPolicy#max_special_chars}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.minAlphaNumerals">min_alpha_numerals</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_alpha_numerals IdentityDomainsPasswordPolicy#min_alpha_numerals}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.minAlphas">min_alphas</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_alphas IdentityDomainsPasswordPolicy#min_alphas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.minLength">min_length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_length IdentityDomainsPasswordPolicy#min_length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.minLowerCase">min_lower_case</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_lower_case IdentityDomainsPasswordPolicy#min_lower_case}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.minNumerals">min_numerals</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_numerals IdentityDomainsPasswordPolicy#min_numerals}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.minPasswordAge">min_password_age</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_password_age IdentityDomainsPasswordPolicy#min_password_age}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.minSpecialChars">min_special_chars</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_special_chars IdentityDomainsPasswordPolicy#min_special_chars}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.minUniqueChars">min_unique_chars</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_unique_chars IdentityDomainsPasswordPolicy#min_unique_chars}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.minUpperCase">min_upper_case</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_upper_case IdentityDomainsPasswordPolicy#min_upper_case}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.numPasswordsInHistory">num_passwords_in_history</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#num_passwords_in_history IdentityDomainsPasswordPolicy#num_passwords_in_history}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.ocid">ocid</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#ocid IdentityDomainsPasswordPolicy#ocid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.passwordExpiresAfter">password_expires_after</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#password_expires_after IdentityDomainsPasswordPolicy#password_expires_after}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.passwordExpireWarning">password_expire_warning</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#password_expire_warning IdentityDomainsPasswordPolicy#password_expire_warning}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.passwordStrength">password_strength</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#password_strength IdentityDomainsPasswordPolicy#password_strength}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#priority IdentityDomainsPasswordPolicy#priority}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.requiredChars">required_chars</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#required_chars IdentityDomainsPasswordPolicy#required_chars}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#resource_type_schema_version IdentityDomainsPasswordPolicy#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.startsWithAlphabet">starts_with_alphabet</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#starts_with_alphabet IdentityDomainsPasswordPolicy#starts_with_alphabet}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.tags">tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTags">IdentityDomainsPasswordPolicyTags</a>]]</code> | tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeouts">IdentityDomainsPasswordPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.userNameDisallowed">user_name_disallowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#user_name_disallowed IdentityDomainsPasswordPolicy#user_name_disallowed}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.idcsEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#idcs_endpoint IdentityDomainsPasswordPolicy#idcs_endpoint}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#name IdentityDomainsPasswordPolicy#name}.

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.schemas"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#schemas IdentityDomainsPasswordPolicy#schemas}.

---

##### `allowed_chars`<sup>Optional</sup> <a name="allowed_chars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.allowedChars"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#allowed_chars IdentityDomainsPasswordPolicy#allowed_chars}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.attributes"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#attributes IdentityDomainsPasswordPolicy#attributes}.

---

##### `attribute_sets`<sup>Optional</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.attributeSets"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#attribute_sets IdentityDomainsPasswordPolicy#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.authorization"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#authorization IdentityDomainsPasswordPolicy#authorization}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#description IdentityDomainsPasswordPolicy#description}.

---

##### `dictionary_delimiter`<sup>Optional</sup> <a name="dictionary_delimiter" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.dictionaryDelimiter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#dictionary_delimiter IdentityDomainsPasswordPolicy#dictionary_delimiter}.

---

##### `dictionary_location`<sup>Optional</sup> <a name="dictionary_location" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.dictionaryLocation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#dictionary_location IdentityDomainsPasswordPolicy#dictionary_location}.

---

##### `dictionary_word_disallowed`<sup>Optional</sup> <a name="dictionary_word_disallowed" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.dictionaryWordDisallowed"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#dictionary_word_disallowed IdentityDomainsPasswordPolicy#dictionary_word_disallowed}.

---

##### `disallowed_chars`<sup>Optional</sup> <a name="disallowed_chars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.disallowedChars"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#disallowed_chars IdentityDomainsPasswordPolicy#disallowed_chars}.

---

##### `disallowed_substrings`<sup>Optional</sup> <a name="disallowed_substrings" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.disallowedSubstrings"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#disallowed_substrings IdentityDomainsPasswordPolicy#disallowed_substrings}.

---

##### `disallowed_user_attribute_values`<sup>Optional</sup> <a name="disallowed_user_attribute_values" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.disallowedUserAttributeValues"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#disallowed_user_attribute_values IdentityDomainsPasswordPolicy#disallowed_user_attribute_values}.

---

##### `distinct_characters`<sup>Optional</sup> <a name="distinct_characters" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.distinctCharacters"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#distinct_characters IdentityDomainsPasswordPolicy#distinct_characters}.

---

##### `external_id`<sup>Optional</sup> <a name="external_id" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.externalId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#external_id IdentityDomainsPasswordPolicy#external_id}.

---

##### `first_name_disallowed`<sup>Optional</sup> <a name="first_name_disallowed" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.firstNameDisallowed"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#first_name_disallowed IdentityDomainsPasswordPolicy#first_name_disallowed}.

---

##### `force_password_reset`<sup>Optional</sup> <a name="force_password_reset" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.forcePasswordReset"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#force_password_reset IdentityDomainsPasswordPolicy#force_password_reset}.

---

##### `groups`<sup>Optional</sup> <a name="groups" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.groups"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroups">IdentityDomainsPasswordPolicyGroups</a>]]

groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#groups IdentityDomainsPasswordPolicy#groups}

---

##### `last_name_disallowed`<sup>Optional</sup> <a name="last_name_disallowed" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.lastNameDisallowed"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#last_name_disallowed IdentityDomainsPasswordPolicy#last_name_disallowed}.

---

##### `lockout_duration`<sup>Optional</sup> <a name="lockout_duration" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.lockoutDuration"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#lockout_duration IdentityDomainsPasswordPolicy#lockout_duration}.

---

##### `max_incorrect_attempts`<sup>Optional</sup> <a name="max_incorrect_attempts" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.maxIncorrectAttempts"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#max_incorrect_attempts IdentityDomainsPasswordPolicy#max_incorrect_attempts}.

---

##### `max_length`<sup>Optional</sup> <a name="max_length" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.maxLength"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#max_length IdentityDomainsPasswordPolicy#max_length}.

---

##### `max_repeated_chars`<sup>Optional</sup> <a name="max_repeated_chars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.maxRepeatedChars"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#max_repeated_chars IdentityDomainsPasswordPolicy#max_repeated_chars}.

---

##### `max_special_chars`<sup>Optional</sup> <a name="max_special_chars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.maxSpecialChars"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#max_special_chars IdentityDomainsPasswordPolicy#max_special_chars}.

---

##### `min_alpha_numerals`<sup>Optional</sup> <a name="min_alpha_numerals" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.minAlphaNumerals"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_alpha_numerals IdentityDomainsPasswordPolicy#min_alpha_numerals}.

---

##### `min_alphas`<sup>Optional</sup> <a name="min_alphas" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.minAlphas"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_alphas IdentityDomainsPasswordPolicy#min_alphas}.

---

##### `min_length`<sup>Optional</sup> <a name="min_length" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.minLength"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_length IdentityDomainsPasswordPolicy#min_length}.

---

##### `min_lower_case`<sup>Optional</sup> <a name="min_lower_case" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.minLowerCase"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_lower_case IdentityDomainsPasswordPolicy#min_lower_case}.

---

##### `min_numerals`<sup>Optional</sup> <a name="min_numerals" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.minNumerals"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_numerals IdentityDomainsPasswordPolicy#min_numerals}.

---

##### `min_password_age`<sup>Optional</sup> <a name="min_password_age" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.minPasswordAge"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_password_age IdentityDomainsPasswordPolicy#min_password_age}.

---

##### `min_special_chars`<sup>Optional</sup> <a name="min_special_chars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.minSpecialChars"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_special_chars IdentityDomainsPasswordPolicy#min_special_chars}.

---

##### `min_unique_chars`<sup>Optional</sup> <a name="min_unique_chars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.minUniqueChars"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_unique_chars IdentityDomainsPasswordPolicy#min_unique_chars}.

---

##### `min_upper_case`<sup>Optional</sup> <a name="min_upper_case" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.minUpperCase"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_upper_case IdentityDomainsPasswordPolicy#min_upper_case}.

---

##### `num_passwords_in_history`<sup>Optional</sup> <a name="num_passwords_in_history" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.numPasswordsInHistory"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#num_passwords_in_history IdentityDomainsPasswordPolicy#num_passwords_in_history}.

---

##### `ocid`<sup>Optional</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.ocid"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#ocid IdentityDomainsPasswordPolicy#ocid}.

---

##### `password_expires_after`<sup>Optional</sup> <a name="password_expires_after" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.passwordExpiresAfter"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#password_expires_after IdentityDomainsPasswordPolicy#password_expires_after}.

---

##### `password_expire_warning`<sup>Optional</sup> <a name="password_expire_warning" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.passwordExpireWarning"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#password_expire_warning IdentityDomainsPasswordPolicy#password_expire_warning}.

---

##### `password_strength`<sup>Optional</sup> <a name="password_strength" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.passwordStrength"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#password_strength IdentityDomainsPasswordPolicy#password_strength}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.priority"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#priority IdentityDomainsPasswordPolicy#priority}.

---

##### `required_chars`<sup>Optional</sup> <a name="required_chars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.requiredChars"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#required_chars IdentityDomainsPasswordPolicy#required_chars}.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.resourceTypeSchemaVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#resource_type_schema_version IdentityDomainsPasswordPolicy#resource_type_schema_version}.

---

##### `starts_with_alphabet`<sup>Optional</sup> <a name="starts_with_alphabet" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.startsWithAlphabet"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#starts_with_alphabet IdentityDomainsPasswordPolicy#starts_with_alphabet}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.tags"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTags">IdentityDomainsPasswordPolicyTags</a>]]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#tags IdentityDomainsPasswordPolicy#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeouts">IdentityDomainsPasswordPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#timeouts IdentityDomainsPasswordPolicy#timeouts}

---

##### `user_name_disallowed`<sup>Optional</sup> <a name="user_name_disallowed" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.userNameDisallowed"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#user_name_disallowed IdentityDomainsPasswordPolicy#user_name_disallowed}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.putGroups">put_groups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetAllowedChars">reset_allowed_chars</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetAttributes">reset_attributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetAttributeSets">reset_attribute_sets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetAuthorization">reset_authorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetDictionaryDelimiter">reset_dictionary_delimiter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetDictionaryLocation">reset_dictionary_location</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetDictionaryWordDisallowed">reset_dictionary_word_disallowed</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetDisallowedChars">reset_disallowed_chars</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetDisallowedSubstrings">reset_disallowed_substrings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetDisallowedUserAttributeValues">reset_disallowed_user_attribute_values</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetDistinctCharacters">reset_distinct_characters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetExternalId">reset_external_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetFirstNameDisallowed">reset_first_name_disallowed</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetForcePasswordReset">reset_force_password_reset</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetGroups">reset_groups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetLastNameDisallowed">reset_last_name_disallowed</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetLockoutDuration">reset_lockout_duration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMaxIncorrectAttempts">reset_max_incorrect_attempts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMaxLength">reset_max_length</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMaxRepeatedChars">reset_max_repeated_chars</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMaxSpecialChars">reset_max_special_chars</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMinAlphaNumerals">reset_min_alpha_numerals</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMinAlphas">reset_min_alphas</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMinLength">reset_min_length</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMinLowerCase">reset_min_lower_case</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMinNumerals">reset_min_numerals</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMinPasswordAge">reset_min_password_age</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMinSpecialChars">reset_min_special_chars</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMinUniqueChars">reset_min_unique_chars</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMinUpperCase">reset_min_upper_case</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetNumPasswordsInHistory">reset_num_passwords_in_history</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetOcid">reset_ocid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetPasswordExpiresAfter">reset_password_expires_after</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetPasswordExpireWarning">reset_password_expire_warning</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetPasswordStrength">reset_password_strength</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetRequiredChars">reset_required_chars</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetResourceTypeSchemaVersion">reset_resource_type_schema_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetStartsWithAlphabet">reset_starts_with_alphabet</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetUserNameDisallowed">reset_user_name_disallowed</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_groups` <a name="put_groups" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.putGroups"></a>

```python
def put_groups(
  value: typing.Union[IResolvable, typing.List[IdentityDomainsPasswordPolicyGroups]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.putGroups.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroups">IdentityDomainsPasswordPolicyGroups</a>]]

---

##### `put_tags` <a name="put_tags" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.putTags"></a>

```python
def put_tags(
  value: typing.Union[IResolvable, typing.List[IdentityDomainsPasswordPolicyTags]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.putTags.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTags">IdentityDomainsPasswordPolicyTags</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#create IdentityDomainsPasswordPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#delete IdentityDomainsPasswordPolicy#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#update IdentityDomainsPasswordPolicy#update}.

---

##### `reset_allowed_chars` <a name="reset_allowed_chars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetAllowedChars"></a>

```python
def reset_allowed_chars() -> None
```

##### `reset_attributes` <a name="reset_attributes" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetAttributes"></a>

```python
def reset_attributes() -> None
```

##### `reset_attribute_sets` <a name="reset_attribute_sets" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetAttributeSets"></a>

```python
def reset_attribute_sets() -> None
```

##### `reset_authorization` <a name="reset_authorization" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetAuthorization"></a>

```python
def reset_authorization() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_dictionary_delimiter` <a name="reset_dictionary_delimiter" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetDictionaryDelimiter"></a>

```python
def reset_dictionary_delimiter() -> None
```

##### `reset_dictionary_location` <a name="reset_dictionary_location" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetDictionaryLocation"></a>

```python
def reset_dictionary_location() -> None
```

##### `reset_dictionary_word_disallowed` <a name="reset_dictionary_word_disallowed" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetDictionaryWordDisallowed"></a>

```python
def reset_dictionary_word_disallowed() -> None
```

##### `reset_disallowed_chars` <a name="reset_disallowed_chars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetDisallowedChars"></a>

```python
def reset_disallowed_chars() -> None
```

##### `reset_disallowed_substrings` <a name="reset_disallowed_substrings" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetDisallowedSubstrings"></a>

```python
def reset_disallowed_substrings() -> None
```

##### `reset_disallowed_user_attribute_values` <a name="reset_disallowed_user_attribute_values" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetDisallowedUserAttributeValues"></a>

```python
def reset_disallowed_user_attribute_values() -> None
```

##### `reset_distinct_characters` <a name="reset_distinct_characters" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetDistinctCharacters"></a>

```python
def reset_distinct_characters() -> None
```

##### `reset_external_id` <a name="reset_external_id" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetExternalId"></a>

```python
def reset_external_id() -> None
```

##### `reset_first_name_disallowed` <a name="reset_first_name_disallowed" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetFirstNameDisallowed"></a>

```python
def reset_first_name_disallowed() -> None
```

##### `reset_force_password_reset` <a name="reset_force_password_reset" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetForcePasswordReset"></a>

```python
def reset_force_password_reset() -> None
```

##### `reset_groups` <a name="reset_groups" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetGroups"></a>

```python
def reset_groups() -> None
```

##### `reset_last_name_disallowed` <a name="reset_last_name_disallowed" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetLastNameDisallowed"></a>

```python
def reset_last_name_disallowed() -> None
```

##### `reset_lockout_duration` <a name="reset_lockout_duration" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetLockoutDuration"></a>

```python
def reset_lockout_duration() -> None
```

##### `reset_max_incorrect_attempts` <a name="reset_max_incorrect_attempts" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMaxIncorrectAttempts"></a>

```python
def reset_max_incorrect_attempts() -> None
```

##### `reset_max_length` <a name="reset_max_length" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMaxLength"></a>

```python
def reset_max_length() -> None
```

##### `reset_max_repeated_chars` <a name="reset_max_repeated_chars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMaxRepeatedChars"></a>

```python
def reset_max_repeated_chars() -> None
```

##### `reset_max_special_chars` <a name="reset_max_special_chars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMaxSpecialChars"></a>

```python
def reset_max_special_chars() -> None
```

##### `reset_min_alpha_numerals` <a name="reset_min_alpha_numerals" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMinAlphaNumerals"></a>

```python
def reset_min_alpha_numerals() -> None
```

##### `reset_min_alphas` <a name="reset_min_alphas" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMinAlphas"></a>

```python
def reset_min_alphas() -> None
```

##### `reset_min_length` <a name="reset_min_length" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMinLength"></a>

```python
def reset_min_length() -> None
```

##### `reset_min_lower_case` <a name="reset_min_lower_case" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMinLowerCase"></a>

```python
def reset_min_lower_case() -> None
```

##### `reset_min_numerals` <a name="reset_min_numerals" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMinNumerals"></a>

```python
def reset_min_numerals() -> None
```

##### `reset_min_password_age` <a name="reset_min_password_age" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMinPasswordAge"></a>

```python
def reset_min_password_age() -> None
```

##### `reset_min_special_chars` <a name="reset_min_special_chars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMinSpecialChars"></a>

```python
def reset_min_special_chars() -> None
```

##### `reset_min_unique_chars` <a name="reset_min_unique_chars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMinUniqueChars"></a>

```python
def reset_min_unique_chars() -> None
```

##### `reset_min_upper_case` <a name="reset_min_upper_case" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMinUpperCase"></a>

```python
def reset_min_upper_case() -> None
```

##### `reset_num_passwords_in_history` <a name="reset_num_passwords_in_history" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetNumPasswordsInHistory"></a>

```python
def reset_num_passwords_in_history() -> None
```

##### `reset_ocid` <a name="reset_ocid" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetOcid"></a>

```python
def reset_ocid() -> None
```

##### `reset_password_expires_after` <a name="reset_password_expires_after" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetPasswordExpiresAfter"></a>

```python
def reset_password_expires_after() -> None
```

##### `reset_password_expire_warning` <a name="reset_password_expire_warning" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetPasswordExpireWarning"></a>

```python
def reset_password_expire_warning() -> None
```

##### `reset_password_strength` <a name="reset_password_strength" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetPasswordStrength"></a>

```python
def reset_password_strength() -> None
```

##### `reset_priority` <a name="reset_priority" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_required_chars` <a name="reset_required_chars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetRequiredChars"></a>

```python
def reset_required_chars() -> None
```

##### `reset_resource_type_schema_version` <a name="reset_resource_type_schema_version" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetResourceTypeSchemaVersion"></a>

```python
def reset_resource_type_schema_version() -> None
```

##### `reset_starts_with_alphabet` <a name="reset_starts_with_alphabet" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetStartsWithAlphabet"></a>

```python
def reset_starts_with_alphabet() -> None
```

##### `reset_tags` <a name="reset_tags" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_user_name_disallowed` <a name="reset_user_name_disallowed" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetUserNameDisallowed"></a>

```python
def reset_user_name_disallowed() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IdentityDomainsPasswordPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_password_policy

identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_password_policy

identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_password_policy

identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_password_policy

identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IdentityDomainsPasswordPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IdentityDomainsPasswordPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IdentityDomainsPasswordPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IdentityDomainsPasswordPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.compartmentOcid">compartment_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.configuredPasswordPolicyRules">configured_password_policy_rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList">IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.deleteInProgress">delete_in_progress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.domainOcid">domain_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.groups">groups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList">IdentityDomainsPasswordPolicyGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.idcsCreatedBy">idcs_created_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList">IdentityDomainsPasswordPolicyIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.idcsLastModifiedBy">idcs_last_modified_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList">IdentityDomainsPasswordPolicyIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.idcsLastUpgradedInRelease">idcs_last_upgraded_in_release</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.idcsPreventedOperations">idcs_prevented_operations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList">IdentityDomainsPasswordPolicyMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList">IdentityDomainsPasswordPolicyTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.tenancyOcid">tenancy_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference">IdentityDomainsPasswordPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.allowedCharsInput">allowed_chars_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.attributeSetsInput">attribute_sets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.attributesInput">attributes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.authorizationInput">authorization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.dictionaryDelimiterInput">dictionary_delimiter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.dictionaryLocationInput">dictionary_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.dictionaryWordDisallowedInput">dictionary_word_disallowed_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.disallowedCharsInput">disallowed_chars_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.disallowedSubstringsInput">disallowed_substrings_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.disallowedUserAttributeValuesInput">disallowed_user_attribute_values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.distinctCharactersInput">distinct_characters_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.externalIdInput">external_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.firstNameDisallowedInput">first_name_disallowed_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.forcePasswordResetInput">force_password_reset_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.groupsInput">groups_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroups">IdentityDomainsPasswordPolicyGroups</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.idcsEndpointInput">idcs_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.lastNameDisallowedInput">last_name_disallowed_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.lockoutDurationInput">lockout_duration_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.maxIncorrectAttemptsInput">max_incorrect_attempts_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.maxLengthInput">max_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.maxRepeatedCharsInput">max_repeated_chars_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.maxSpecialCharsInput">max_special_chars_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minAlphaNumeralsInput">min_alpha_numerals_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minAlphasInput">min_alphas_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minLengthInput">min_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minLowerCaseInput">min_lower_case_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minNumeralsInput">min_numerals_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minPasswordAgeInput">min_password_age_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minSpecialCharsInput">min_special_chars_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minUniqueCharsInput">min_unique_chars_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minUpperCaseInput">min_upper_case_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.numPasswordsInHistoryInput">num_passwords_in_history_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.ocidInput">ocid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.passwordExpiresAfterInput">password_expires_after_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.passwordExpireWarningInput">password_expire_warning_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.passwordStrengthInput">password_strength_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.requiredCharsInput">required_chars_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.resourceTypeSchemaVersionInput">resource_type_schema_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.schemasInput">schemas_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.startsWithAlphabetInput">starts_with_alphabet_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.tagsInput">tags_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTags">IdentityDomainsPasswordPolicyTags</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeouts">IdentityDomainsPasswordPolicyTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.userNameDisallowedInput">user_name_disallowed_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.allowedChars">allowed_chars</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.attributes">attributes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.dictionaryDelimiter">dictionary_delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.dictionaryLocation">dictionary_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.dictionaryWordDisallowed">dictionary_word_disallowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.disallowedChars">disallowed_chars</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.disallowedSubstrings">disallowed_substrings</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.disallowedUserAttributeValues">disallowed_user_attribute_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.distinctCharacters">distinct_characters</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.firstNameDisallowed">first_name_disallowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.forcePasswordReset">force_password_reset</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.lastNameDisallowed">last_name_disallowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.lockoutDuration">lockout_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.maxIncorrectAttempts">max_incorrect_attempts</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.maxLength">max_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.maxRepeatedChars">max_repeated_chars</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.maxSpecialChars">max_special_chars</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minAlphaNumerals">min_alpha_numerals</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minAlphas">min_alphas</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minLength">min_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minLowerCase">min_lower_case</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minNumerals">min_numerals</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minPasswordAge">min_password_age</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minSpecialChars">min_special_chars</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minUniqueChars">min_unique_chars</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minUpperCase">min_upper_case</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.numPasswordsInHistory">num_passwords_in_history</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.passwordExpiresAfter">password_expires_after</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.passwordExpireWarning">password_expire_warning</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.passwordStrength">password_strength</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.requiredChars">required_chars</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.startsWithAlphabet">starts_with_alphabet</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.userNameDisallowed">user_name_disallowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_ocid`<sup>Required</sup> <a name="compartment_ocid" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.compartmentOcid"></a>

```python
compartment_ocid: str
```

- *Type:* str

---

##### `configured_password_policy_rules`<sup>Required</sup> <a name="configured_password_policy_rules" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.configuredPasswordPolicyRules"></a>

```python
configured_password_policy_rules: IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList">IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList</a>

---

##### `delete_in_progress`<sup>Required</sup> <a name="delete_in_progress" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.deleteInProgress"></a>

```python
delete_in_progress: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `domain_ocid`<sup>Required</sup> <a name="domain_ocid" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.domainOcid"></a>

```python
domain_ocid: str
```

- *Type:* str

---

##### `groups`<sup>Required</sup> <a name="groups" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.groups"></a>

```python
groups: IdentityDomainsPasswordPolicyGroupsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList">IdentityDomainsPasswordPolicyGroupsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_created_by`<sup>Required</sup> <a name="idcs_created_by" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.idcsCreatedBy"></a>

```python
idcs_created_by: IdentityDomainsPasswordPolicyIdcsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList">IdentityDomainsPasswordPolicyIdcsCreatedByList</a>

---

##### `idcs_last_modified_by`<sup>Required</sup> <a name="idcs_last_modified_by" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.idcsLastModifiedBy"></a>

```python
idcs_last_modified_by: IdentityDomainsPasswordPolicyIdcsLastModifiedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList">IdentityDomainsPasswordPolicyIdcsLastModifiedByList</a>

---

##### `idcs_last_upgraded_in_release`<sup>Required</sup> <a name="idcs_last_upgraded_in_release" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.idcsLastUpgradedInRelease"></a>

```python
idcs_last_upgraded_in_release: str
```

- *Type:* str

---

##### `idcs_prevented_operations`<sup>Required</sup> <a name="idcs_prevented_operations" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.idcsPreventedOperations"></a>

```python
idcs_prevented_operations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.meta"></a>

```python
meta: IdentityDomainsPasswordPolicyMetaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList">IdentityDomainsPasswordPolicyMetaList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.tags"></a>

```python
tags: IdentityDomainsPasswordPolicyTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList">IdentityDomainsPasswordPolicyTagsList</a>

---

##### `tenancy_ocid`<sup>Required</sup> <a name="tenancy_ocid" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.tenancyOcid"></a>

```python
tenancy_ocid: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.timeouts"></a>

```python
timeouts: IdentityDomainsPasswordPolicyTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference">IdentityDomainsPasswordPolicyTimeoutsOutputReference</a>

---

##### `allowed_chars_input`<sup>Optional</sup> <a name="allowed_chars_input" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.allowedCharsInput"></a>

```python
allowed_chars_input: str
```

- *Type:* str

---

##### `attribute_sets_input`<sup>Optional</sup> <a name="attribute_sets_input" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.attributeSetsInput"></a>

```python
attribute_sets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.attributesInput"></a>

```python
attributes_input: str
```

- *Type:* str

---

##### `authorization_input`<sup>Optional</sup> <a name="authorization_input" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.authorizationInput"></a>

```python
authorization_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `dictionary_delimiter_input`<sup>Optional</sup> <a name="dictionary_delimiter_input" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.dictionaryDelimiterInput"></a>

```python
dictionary_delimiter_input: str
```

- *Type:* str

---

##### `dictionary_location_input`<sup>Optional</sup> <a name="dictionary_location_input" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.dictionaryLocationInput"></a>

```python
dictionary_location_input: str
```

- *Type:* str

---

##### `dictionary_word_disallowed_input`<sup>Optional</sup> <a name="dictionary_word_disallowed_input" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.dictionaryWordDisallowedInput"></a>

```python
dictionary_word_disallowed_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disallowed_chars_input`<sup>Optional</sup> <a name="disallowed_chars_input" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.disallowedCharsInput"></a>

```python
disallowed_chars_input: str
```

- *Type:* str

---

##### `disallowed_substrings_input`<sup>Optional</sup> <a name="disallowed_substrings_input" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.disallowedSubstringsInput"></a>

```python
disallowed_substrings_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `disallowed_user_attribute_values_input`<sup>Optional</sup> <a name="disallowed_user_attribute_values_input" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.disallowedUserAttributeValuesInput"></a>

```python
disallowed_user_attribute_values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `distinct_characters_input`<sup>Optional</sup> <a name="distinct_characters_input" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.distinctCharactersInput"></a>

```python
distinct_characters_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `external_id_input`<sup>Optional</sup> <a name="external_id_input" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.externalIdInput"></a>

```python
external_id_input: str
```

- *Type:* str

---

##### `first_name_disallowed_input`<sup>Optional</sup> <a name="first_name_disallowed_input" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.firstNameDisallowedInput"></a>

```python
first_name_disallowed_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `force_password_reset_input`<sup>Optional</sup> <a name="force_password_reset_input" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.forcePasswordResetInput"></a>

```python
force_password_reset_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `groups_input`<sup>Optional</sup> <a name="groups_input" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.groupsInput"></a>

```python
groups_input: typing.Union[IResolvable, typing.List[IdentityDomainsPasswordPolicyGroups]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroups">IdentityDomainsPasswordPolicyGroups</a>]]

---

##### `idcs_endpoint_input`<sup>Optional</sup> <a name="idcs_endpoint_input" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.idcsEndpointInput"></a>

```python
idcs_endpoint_input: str
```

- *Type:* str

---

##### `last_name_disallowed_input`<sup>Optional</sup> <a name="last_name_disallowed_input" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.lastNameDisallowedInput"></a>

```python
last_name_disallowed_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `lockout_duration_input`<sup>Optional</sup> <a name="lockout_duration_input" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.lockoutDurationInput"></a>

```python
lockout_duration_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_incorrect_attempts_input`<sup>Optional</sup> <a name="max_incorrect_attempts_input" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.maxIncorrectAttemptsInput"></a>

```python
max_incorrect_attempts_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_length_input`<sup>Optional</sup> <a name="max_length_input" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.maxLengthInput"></a>

```python
max_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_repeated_chars_input`<sup>Optional</sup> <a name="max_repeated_chars_input" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.maxRepeatedCharsInput"></a>

```python
max_repeated_chars_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_special_chars_input`<sup>Optional</sup> <a name="max_special_chars_input" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.maxSpecialCharsInput"></a>

```python
max_special_chars_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_alpha_numerals_input`<sup>Optional</sup> <a name="min_alpha_numerals_input" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minAlphaNumeralsInput"></a>

```python
min_alpha_numerals_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_alphas_input`<sup>Optional</sup> <a name="min_alphas_input" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minAlphasInput"></a>

```python
min_alphas_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_length_input`<sup>Optional</sup> <a name="min_length_input" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minLengthInput"></a>

```python
min_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_lower_case_input`<sup>Optional</sup> <a name="min_lower_case_input" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minLowerCaseInput"></a>

```python
min_lower_case_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_numerals_input`<sup>Optional</sup> <a name="min_numerals_input" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minNumeralsInput"></a>

```python
min_numerals_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_password_age_input`<sup>Optional</sup> <a name="min_password_age_input" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minPasswordAgeInput"></a>

```python
min_password_age_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_special_chars_input`<sup>Optional</sup> <a name="min_special_chars_input" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minSpecialCharsInput"></a>

```python
min_special_chars_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_unique_chars_input`<sup>Optional</sup> <a name="min_unique_chars_input" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minUniqueCharsInput"></a>

```python
min_unique_chars_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_upper_case_input`<sup>Optional</sup> <a name="min_upper_case_input" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minUpperCaseInput"></a>

```python
min_upper_case_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `num_passwords_in_history_input`<sup>Optional</sup> <a name="num_passwords_in_history_input" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.numPasswordsInHistoryInput"></a>

```python
num_passwords_in_history_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocid_input`<sup>Optional</sup> <a name="ocid_input" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.ocidInput"></a>

```python
ocid_input: str
```

- *Type:* str

---

##### `password_expires_after_input`<sup>Optional</sup> <a name="password_expires_after_input" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.passwordExpiresAfterInput"></a>

```python
password_expires_after_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_expire_warning_input`<sup>Optional</sup> <a name="password_expire_warning_input" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.passwordExpireWarningInput"></a>

```python
password_expire_warning_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_strength_input`<sup>Optional</sup> <a name="password_strength_input" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.passwordStrengthInput"></a>

```python
password_strength_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `required_chars_input`<sup>Optional</sup> <a name="required_chars_input" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.requiredCharsInput"></a>

```python
required_chars_input: str
```

- *Type:* str

---

##### `resource_type_schema_version_input`<sup>Optional</sup> <a name="resource_type_schema_version_input" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.resourceTypeSchemaVersionInput"></a>

```python
resource_type_schema_version_input: str
```

- *Type:* str

---

##### `schemas_input`<sup>Optional</sup> <a name="schemas_input" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.schemasInput"></a>

```python
schemas_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `starts_with_alphabet_input`<sup>Optional</sup> <a name="starts_with_alphabet_input" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.startsWithAlphabetInput"></a>

```python
starts_with_alphabet_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.tagsInput"></a>

```python
tags_input: typing.Union[IResolvable, typing.List[IdentityDomainsPasswordPolicyTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTags">IdentityDomainsPasswordPolicyTags</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, IdentityDomainsPasswordPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeouts">IdentityDomainsPasswordPolicyTimeouts</a>]

---

##### `user_name_disallowed_input`<sup>Optional</sup> <a name="user_name_disallowed_input" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.userNameDisallowedInput"></a>

```python
user_name_disallowed_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allowed_chars`<sup>Required</sup> <a name="allowed_chars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.allowedChars"></a>

```python
allowed_chars: str
```

- *Type:* str

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

---

##### `attribute_sets`<sup>Required</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `dictionary_delimiter`<sup>Required</sup> <a name="dictionary_delimiter" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.dictionaryDelimiter"></a>

```python
dictionary_delimiter: str
```

- *Type:* str

---

##### `dictionary_location`<sup>Required</sup> <a name="dictionary_location" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.dictionaryLocation"></a>

```python
dictionary_location: str
```

- *Type:* str

---

##### `dictionary_word_disallowed`<sup>Required</sup> <a name="dictionary_word_disallowed" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.dictionaryWordDisallowed"></a>

```python
dictionary_word_disallowed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disallowed_chars`<sup>Required</sup> <a name="disallowed_chars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.disallowedChars"></a>

```python
disallowed_chars: str
```

- *Type:* str

---

##### `disallowed_substrings`<sup>Required</sup> <a name="disallowed_substrings" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.disallowedSubstrings"></a>

```python
disallowed_substrings: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `disallowed_user_attribute_values`<sup>Required</sup> <a name="disallowed_user_attribute_values" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.disallowedUserAttributeValues"></a>

```python
disallowed_user_attribute_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `distinct_characters`<sup>Required</sup> <a name="distinct_characters" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.distinctCharacters"></a>

```python
distinct_characters: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `first_name_disallowed`<sup>Required</sup> <a name="first_name_disallowed" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.firstNameDisallowed"></a>

```python
first_name_disallowed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `force_password_reset`<sup>Required</sup> <a name="force_password_reset" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.forcePasswordReset"></a>

```python
force_password_reset: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

---

##### `last_name_disallowed`<sup>Required</sup> <a name="last_name_disallowed" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.lastNameDisallowed"></a>

```python
last_name_disallowed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `lockout_duration`<sup>Required</sup> <a name="lockout_duration" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.lockoutDuration"></a>

```python
lockout_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_incorrect_attempts`<sup>Required</sup> <a name="max_incorrect_attempts" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.maxIncorrectAttempts"></a>

```python
max_incorrect_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_length`<sup>Required</sup> <a name="max_length" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.maxLength"></a>

```python
max_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_repeated_chars`<sup>Required</sup> <a name="max_repeated_chars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.maxRepeatedChars"></a>

```python
max_repeated_chars: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_special_chars`<sup>Required</sup> <a name="max_special_chars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.maxSpecialChars"></a>

```python
max_special_chars: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_alpha_numerals`<sup>Required</sup> <a name="min_alpha_numerals" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minAlphaNumerals"></a>

```python
min_alpha_numerals: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_alphas`<sup>Required</sup> <a name="min_alphas" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minAlphas"></a>

```python
min_alphas: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_length`<sup>Required</sup> <a name="min_length" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minLength"></a>

```python
min_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_lower_case`<sup>Required</sup> <a name="min_lower_case" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minLowerCase"></a>

```python
min_lower_case: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_numerals`<sup>Required</sup> <a name="min_numerals" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minNumerals"></a>

```python
min_numerals: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_password_age`<sup>Required</sup> <a name="min_password_age" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minPasswordAge"></a>

```python
min_password_age: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_special_chars`<sup>Required</sup> <a name="min_special_chars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minSpecialChars"></a>

```python
min_special_chars: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_unique_chars`<sup>Required</sup> <a name="min_unique_chars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minUniqueChars"></a>

```python
min_unique_chars: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_upper_case`<sup>Required</sup> <a name="min_upper_case" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minUpperCase"></a>

```python
min_upper_case: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `num_passwords_in_history`<sup>Required</sup> <a name="num_passwords_in_history" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.numPasswordsInHistory"></a>

```python
num_passwords_in_history: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `password_expires_after`<sup>Required</sup> <a name="password_expires_after" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.passwordExpiresAfter"></a>

```python
password_expires_after: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_expire_warning`<sup>Required</sup> <a name="password_expire_warning" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.passwordExpireWarning"></a>

```python
password_expire_warning: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_strength`<sup>Required</sup> <a name="password_strength" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.passwordStrength"></a>

```python
password_strength: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `required_chars`<sup>Required</sup> <a name="required_chars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.requiredChars"></a>

```python
required_chars: str
```

- *Type:* str

---

##### `resource_type_schema_version`<sup>Required</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `starts_with_alphabet`<sup>Required</sup> <a name="starts_with_alphabet" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.startsWithAlphabet"></a>

```python
starts_with_alphabet: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `user_name_disallowed`<sup>Required</sup> <a name="user_name_disallowed" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.userNameDisallowed"></a>

```python
user_name_disallowed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityDomainsPasswordPolicyConfig <a name="IdentityDomainsPasswordPolicyConfig" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_password_policy

identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  idcs_endpoint: str,
  name: str,
  schemas: typing.List[str],
  allowed_chars: str = None,
  attributes: str = None,
  attribute_sets: typing.List[str] = None,
  authorization: str = None,
  description: str = None,
  dictionary_delimiter: str = None,
  dictionary_location: str = None,
  dictionary_word_disallowed: typing.Union[bool, IResolvable] = None,
  disallowed_chars: str = None,
  disallowed_substrings: typing.List[str] = None,
  disallowed_user_attribute_values: typing.List[str] = None,
  distinct_characters: typing.Union[int, float] = None,
  external_id: str = None,
  first_name_disallowed: typing.Union[bool, IResolvable] = None,
  force_password_reset: typing.Union[bool, IResolvable] = None,
  groups: typing.Union[IResolvable, typing.List[IdentityDomainsPasswordPolicyGroups]] = None,
  last_name_disallowed: typing.Union[bool, IResolvable] = None,
  lockout_duration: typing.Union[int, float] = None,
  max_incorrect_attempts: typing.Union[int, float] = None,
  max_length: typing.Union[int, float] = None,
  max_repeated_chars: typing.Union[int, float] = None,
  max_special_chars: typing.Union[int, float] = None,
  min_alpha_numerals: typing.Union[int, float] = None,
  min_alphas: typing.Union[int, float] = None,
  min_length: typing.Union[int, float] = None,
  min_lower_case: typing.Union[int, float] = None,
  min_numerals: typing.Union[int, float] = None,
  min_password_age: typing.Union[int, float] = None,
  min_special_chars: typing.Union[int, float] = None,
  min_unique_chars: typing.Union[int, float] = None,
  min_upper_case: typing.Union[int, float] = None,
  num_passwords_in_history: typing.Union[int, float] = None,
  ocid: str = None,
  password_expires_after: typing.Union[int, float] = None,
  password_expire_warning: typing.Union[int, float] = None,
  password_strength: str = None,
  priority: typing.Union[int, float] = None,
  required_chars: str = None,
  resource_type_schema_version: str = None,
  starts_with_alphabet: typing.Union[bool, IResolvable] = None,
  tags: typing.Union[IResolvable, typing.List[IdentityDomainsPasswordPolicyTags]] = None,
  timeouts: IdentityDomainsPasswordPolicyTimeouts = None,
  user_name_disallowed: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#idcs_endpoint IdentityDomainsPasswordPolicy#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#name IdentityDomainsPasswordPolicy#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#schemas IdentityDomainsPasswordPolicy#schemas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.allowedChars">allowed_chars</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#allowed_chars IdentityDomainsPasswordPolicy#allowed_chars}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.attributes">attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#attributes IdentityDomainsPasswordPolicy#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#attribute_sets IdentityDomainsPasswordPolicy#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#authorization IdentityDomainsPasswordPolicy#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#description IdentityDomainsPasswordPolicy#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.dictionaryDelimiter">dictionary_delimiter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#dictionary_delimiter IdentityDomainsPasswordPolicy#dictionary_delimiter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.dictionaryLocation">dictionary_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#dictionary_location IdentityDomainsPasswordPolicy#dictionary_location}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.dictionaryWordDisallowed">dictionary_word_disallowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#dictionary_word_disallowed IdentityDomainsPasswordPolicy#dictionary_word_disallowed}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.disallowedChars">disallowed_chars</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#disallowed_chars IdentityDomainsPasswordPolicy#disallowed_chars}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.disallowedSubstrings">disallowed_substrings</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#disallowed_substrings IdentityDomainsPasswordPolicy#disallowed_substrings}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.disallowedUserAttributeValues">disallowed_user_attribute_values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#disallowed_user_attribute_values IdentityDomainsPasswordPolicy#disallowed_user_attribute_values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.distinctCharacters">distinct_characters</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#distinct_characters IdentityDomainsPasswordPolicy#distinct_characters}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.externalId">external_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#external_id IdentityDomainsPasswordPolicy#external_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.firstNameDisallowed">first_name_disallowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#first_name_disallowed IdentityDomainsPasswordPolicy#first_name_disallowed}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.forcePasswordReset">force_password_reset</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#force_password_reset IdentityDomainsPasswordPolicy#force_password_reset}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.groups">groups</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroups">IdentityDomainsPasswordPolicyGroups</a>]]</code> | groups block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.lastNameDisallowed">last_name_disallowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#last_name_disallowed IdentityDomainsPasswordPolicy#last_name_disallowed}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.lockoutDuration">lockout_duration</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#lockout_duration IdentityDomainsPasswordPolicy#lockout_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.maxIncorrectAttempts">max_incorrect_attempts</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#max_incorrect_attempts IdentityDomainsPasswordPolicy#max_incorrect_attempts}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.maxLength">max_length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#max_length IdentityDomainsPasswordPolicy#max_length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.maxRepeatedChars">max_repeated_chars</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#max_repeated_chars IdentityDomainsPasswordPolicy#max_repeated_chars}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.maxSpecialChars">max_special_chars</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#max_special_chars IdentityDomainsPasswordPolicy#max_special_chars}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.minAlphaNumerals">min_alpha_numerals</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_alpha_numerals IdentityDomainsPasswordPolicy#min_alpha_numerals}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.minAlphas">min_alphas</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_alphas IdentityDomainsPasswordPolicy#min_alphas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.minLength">min_length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_length IdentityDomainsPasswordPolicy#min_length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.minLowerCase">min_lower_case</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_lower_case IdentityDomainsPasswordPolicy#min_lower_case}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.minNumerals">min_numerals</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_numerals IdentityDomainsPasswordPolicy#min_numerals}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.minPasswordAge">min_password_age</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_password_age IdentityDomainsPasswordPolicy#min_password_age}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.minSpecialChars">min_special_chars</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_special_chars IdentityDomainsPasswordPolicy#min_special_chars}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.minUniqueChars">min_unique_chars</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_unique_chars IdentityDomainsPasswordPolicy#min_unique_chars}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.minUpperCase">min_upper_case</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_upper_case IdentityDomainsPasswordPolicy#min_upper_case}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.numPasswordsInHistory">num_passwords_in_history</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#num_passwords_in_history IdentityDomainsPasswordPolicy#num_passwords_in_history}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.ocid">ocid</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#ocid IdentityDomainsPasswordPolicy#ocid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.passwordExpiresAfter">password_expires_after</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#password_expires_after IdentityDomainsPasswordPolicy#password_expires_after}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.passwordExpireWarning">password_expire_warning</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#password_expire_warning IdentityDomainsPasswordPolicy#password_expire_warning}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.passwordStrength">password_strength</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#password_strength IdentityDomainsPasswordPolicy#password_strength}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#priority IdentityDomainsPasswordPolicy#priority}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.requiredChars">required_chars</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#required_chars IdentityDomainsPasswordPolicy#required_chars}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#resource_type_schema_version IdentityDomainsPasswordPolicy#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.startsWithAlphabet">starts_with_alphabet</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#starts_with_alphabet IdentityDomainsPasswordPolicy#starts_with_alphabet}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.tags">tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTags">IdentityDomainsPasswordPolicyTags</a>]]</code> | tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeouts">IdentityDomainsPasswordPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.userNameDisallowed">user_name_disallowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#user_name_disallowed IdentityDomainsPasswordPolicy#user_name_disallowed}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#idcs_endpoint IdentityDomainsPasswordPolicy#idcs_endpoint}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#name IdentityDomainsPasswordPolicy#name}.

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#schemas IdentityDomainsPasswordPolicy#schemas}.

---

##### `allowed_chars`<sup>Optional</sup> <a name="allowed_chars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.allowedChars"></a>

```python
allowed_chars: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#allowed_chars IdentityDomainsPasswordPolicy#allowed_chars}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#attributes IdentityDomainsPasswordPolicy#attributes}.

---

##### `attribute_sets`<sup>Optional</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#attribute_sets IdentityDomainsPasswordPolicy#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#authorization IdentityDomainsPasswordPolicy#authorization}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#description IdentityDomainsPasswordPolicy#description}.

---

##### `dictionary_delimiter`<sup>Optional</sup> <a name="dictionary_delimiter" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.dictionaryDelimiter"></a>

```python
dictionary_delimiter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#dictionary_delimiter IdentityDomainsPasswordPolicy#dictionary_delimiter}.

---

##### `dictionary_location`<sup>Optional</sup> <a name="dictionary_location" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.dictionaryLocation"></a>

```python
dictionary_location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#dictionary_location IdentityDomainsPasswordPolicy#dictionary_location}.

---

##### `dictionary_word_disallowed`<sup>Optional</sup> <a name="dictionary_word_disallowed" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.dictionaryWordDisallowed"></a>

```python
dictionary_word_disallowed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#dictionary_word_disallowed IdentityDomainsPasswordPolicy#dictionary_word_disallowed}.

---

##### `disallowed_chars`<sup>Optional</sup> <a name="disallowed_chars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.disallowedChars"></a>

```python
disallowed_chars: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#disallowed_chars IdentityDomainsPasswordPolicy#disallowed_chars}.

---

##### `disallowed_substrings`<sup>Optional</sup> <a name="disallowed_substrings" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.disallowedSubstrings"></a>

```python
disallowed_substrings: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#disallowed_substrings IdentityDomainsPasswordPolicy#disallowed_substrings}.

---

##### `disallowed_user_attribute_values`<sup>Optional</sup> <a name="disallowed_user_attribute_values" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.disallowedUserAttributeValues"></a>

```python
disallowed_user_attribute_values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#disallowed_user_attribute_values IdentityDomainsPasswordPolicy#disallowed_user_attribute_values}.

---

##### `distinct_characters`<sup>Optional</sup> <a name="distinct_characters" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.distinctCharacters"></a>

```python
distinct_characters: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#distinct_characters IdentityDomainsPasswordPolicy#distinct_characters}.

---

##### `external_id`<sup>Optional</sup> <a name="external_id" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#external_id IdentityDomainsPasswordPolicy#external_id}.

---

##### `first_name_disallowed`<sup>Optional</sup> <a name="first_name_disallowed" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.firstNameDisallowed"></a>

```python
first_name_disallowed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#first_name_disallowed IdentityDomainsPasswordPolicy#first_name_disallowed}.

---

##### `force_password_reset`<sup>Optional</sup> <a name="force_password_reset" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.forcePasswordReset"></a>

```python
force_password_reset: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#force_password_reset IdentityDomainsPasswordPolicy#force_password_reset}.

---

##### `groups`<sup>Optional</sup> <a name="groups" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.groups"></a>

```python
groups: typing.Union[IResolvable, typing.List[IdentityDomainsPasswordPolicyGroups]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroups">IdentityDomainsPasswordPolicyGroups</a>]]

groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#groups IdentityDomainsPasswordPolicy#groups}

---

##### `last_name_disallowed`<sup>Optional</sup> <a name="last_name_disallowed" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.lastNameDisallowed"></a>

```python
last_name_disallowed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#last_name_disallowed IdentityDomainsPasswordPolicy#last_name_disallowed}.

---

##### `lockout_duration`<sup>Optional</sup> <a name="lockout_duration" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.lockoutDuration"></a>

```python
lockout_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#lockout_duration IdentityDomainsPasswordPolicy#lockout_duration}.

---

##### `max_incorrect_attempts`<sup>Optional</sup> <a name="max_incorrect_attempts" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.maxIncorrectAttempts"></a>

```python
max_incorrect_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#max_incorrect_attempts IdentityDomainsPasswordPolicy#max_incorrect_attempts}.

---

##### `max_length`<sup>Optional</sup> <a name="max_length" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.maxLength"></a>

```python
max_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#max_length IdentityDomainsPasswordPolicy#max_length}.

---

##### `max_repeated_chars`<sup>Optional</sup> <a name="max_repeated_chars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.maxRepeatedChars"></a>

```python
max_repeated_chars: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#max_repeated_chars IdentityDomainsPasswordPolicy#max_repeated_chars}.

---

##### `max_special_chars`<sup>Optional</sup> <a name="max_special_chars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.maxSpecialChars"></a>

```python
max_special_chars: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#max_special_chars IdentityDomainsPasswordPolicy#max_special_chars}.

---

##### `min_alpha_numerals`<sup>Optional</sup> <a name="min_alpha_numerals" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.minAlphaNumerals"></a>

```python
min_alpha_numerals: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_alpha_numerals IdentityDomainsPasswordPolicy#min_alpha_numerals}.

---

##### `min_alphas`<sup>Optional</sup> <a name="min_alphas" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.minAlphas"></a>

```python
min_alphas: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_alphas IdentityDomainsPasswordPolicy#min_alphas}.

---

##### `min_length`<sup>Optional</sup> <a name="min_length" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.minLength"></a>

```python
min_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_length IdentityDomainsPasswordPolicy#min_length}.

---

##### `min_lower_case`<sup>Optional</sup> <a name="min_lower_case" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.minLowerCase"></a>

```python
min_lower_case: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_lower_case IdentityDomainsPasswordPolicy#min_lower_case}.

---

##### `min_numerals`<sup>Optional</sup> <a name="min_numerals" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.minNumerals"></a>

```python
min_numerals: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_numerals IdentityDomainsPasswordPolicy#min_numerals}.

---

##### `min_password_age`<sup>Optional</sup> <a name="min_password_age" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.minPasswordAge"></a>

```python
min_password_age: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_password_age IdentityDomainsPasswordPolicy#min_password_age}.

---

##### `min_special_chars`<sup>Optional</sup> <a name="min_special_chars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.minSpecialChars"></a>

```python
min_special_chars: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_special_chars IdentityDomainsPasswordPolicy#min_special_chars}.

---

##### `min_unique_chars`<sup>Optional</sup> <a name="min_unique_chars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.minUniqueChars"></a>

```python
min_unique_chars: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_unique_chars IdentityDomainsPasswordPolicy#min_unique_chars}.

---

##### `min_upper_case`<sup>Optional</sup> <a name="min_upper_case" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.minUpperCase"></a>

```python
min_upper_case: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_upper_case IdentityDomainsPasswordPolicy#min_upper_case}.

---

##### `num_passwords_in_history`<sup>Optional</sup> <a name="num_passwords_in_history" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.numPasswordsInHistory"></a>

```python
num_passwords_in_history: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#num_passwords_in_history IdentityDomainsPasswordPolicy#num_passwords_in_history}.

---

##### `ocid`<sup>Optional</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#ocid IdentityDomainsPasswordPolicy#ocid}.

---

##### `password_expires_after`<sup>Optional</sup> <a name="password_expires_after" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.passwordExpiresAfter"></a>

```python
password_expires_after: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#password_expires_after IdentityDomainsPasswordPolicy#password_expires_after}.

---

##### `password_expire_warning`<sup>Optional</sup> <a name="password_expire_warning" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.passwordExpireWarning"></a>

```python
password_expire_warning: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#password_expire_warning IdentityDomainsPasswordPolicy#password_expire_warning}.

---

##### `password_strength`<sup>Optional</sup> <a name="password_strength" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.passwordStrength"></a>

```python
password_strength: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#password_strength IdentityDomainsPasswordPolicy#password_strength}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#priority IdentityDomainsPasswordPolicy#priority}.

---

##### `required_chars`<sup>Optional</sup> <a name="required_chars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.requiredChars"></a>

```python
required_chars: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#required_chars IdentityDomainsPasswordPolicy#required_chars}.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#resource_type_schema_version IdentityDomainsPasswordPolicy#resource_type_schema_version}.

---

##### `starts_with_alphabet`<sup>Optional</sup> <a name="starts_with_alphabet" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.startsWithAlphabet"></a>

```python
starts_with_alphabet: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#starts_with_alphabet IdentityDomainsPasswordPolicy#starts_with_alphabet}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.tags"></a>

```python
tags: typing.Union[IResolvable, typing.List[IdentityDomainsPasswordPolicyTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTags">IdentityDomainsPasswordPolicyTags</a>]]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#tags IdentityDomainsPasswordPolicy#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.timeouts"></a>

```python
timeouts: IdentityDomainsPasswordPolicyTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeouts">IdentityDomainsPasswordPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#timeouts IdentityDomainsPasswordPolicy#timeouts}

---

##### `user_name_disallowed`<sup>Optional</sup> <a name="user_name_disallowed" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.userNameDisallowed"></a>

```python
user_name_disallowed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#user_name_disallowed IdentityDomainsPasswordPolicy#user_name_disallowed}.

---

### IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRules <a name="IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRules" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_password_policy

identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRules()
```


### IdentityDomainsPasswordPolicyGroups <a name="IdentityDomainsPasswordPolicyGroups" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroups.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_password_policy

identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroups(
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroups.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#value IdentityDomainsPasswordPolicy#value}. |

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroups.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#value IdentityDomainsPasswordPolicy#value}.

---

### IdentityDomainsPasswordPolicyIdcsCreatedBy <a name="IdentityDomainsPasswordPolicyIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_password_policy

identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedBy()
```


### IdentityDomainsPasswordPolicyIdcsLastModifiedBy <a name="IdentityDomainsPasswordPolicyIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_password_policy

identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedBy()
```


### IdentityDomainsPasswordPolicyMeta <a name="IdentityDomainsPasswordPolicyMeta" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMeta.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_password_policy

identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMeta()
```


### IdentityDomainsPasswordPolicyTags <a name="IdentityDomainsPasswordPolicyTags" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTags.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_password_policy

identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTags(
  key: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#key IdentityDomainsPasswordPolicy#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#value IdentityDomainsPasswordPolicy#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#key IdentityDomainsPasswordPolicy#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#value IdentityDomainsPasswordPolicy#value}.

---

### IdentityDomainsPasswordPolicyTimeouts <a name="IdentityDomainsPasswordPolicyTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_password_policy

identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#create IdentityDomainsPasswordPolicy#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#delete IdentityDomainsPasswordPolicy#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#update IdentityDomainsPasswordPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#create IdentityDomainsPasswordPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#delete IdentityDomainsPasswordPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#update IdentityDomainsPasswordPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList <a name="IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_password_policy

identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference <a name="IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_password_policy

identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRules">IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRules">IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRules</a>

---


### IdentityDomainsPasswordPolicyGroupsList <a name="IdentityDomainsPasswordPolicyGroupsList" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_password_policy

identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsPasswordPolicyGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroups">IdentityDomainsPasswordPolicyGroups</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[IdentityDomainsPasswordPolicyGroups]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroups">IdentityDomainsPasswordPolicyGroups</a>]]

---


### IdentityDomainsPasswordPolicyGroupsOutputReference <a name="IdentityDomainsPasswordPolicyGroupsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_password_policy

identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroups">IdentityDomainsPasswordPolicyGroups</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IdentityDomainsPasswordPolicyGroups]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroups">IdentityDomainsPasswordPolicyGroups</a>]

---


### IdentityDomainsPasswordPolicyIdcsCreatedByList <a name="IdentityDomainsPasswordPolicyIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_password_policy

identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference <a name="IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_password_policy

identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedBy">IdentityDomainsPasswordPolicyIdcsCreatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsPasswordPolicyIdcsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedBy">IdentityDomainsPasswordPolicyIdcsCreatedBy</a>

---


### IdentityDomainsPasswordPolicyIdcsLastModifiedByList <a name="IdentityDomainsPasswordPolicyIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_password_policy

identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference <a name="IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_password_policy

identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedBy">IdentityDomainsPasswordPolicyIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsPasswordPolicyIdcsLastModifiedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedBy">IdentityDomainsPasswordPolicyIdcsLastModifiedBy</a>

---


### IdentityDomainsPasswordPolicyMetaList <a name="IdentityDomainsPasswordPolicyMetaList" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_password_policy

identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsPasswordPolicyMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IdentityDomainsPasswordPolicyMetaOutputReference <a name="IdentityDomainsPasswordPolicyMetaOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_password_policy

identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.property.lastModified">last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMeta">IdentityDomainsPasswordPolicyMeta</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `last_modified`<sup>Required</sup> <a name="last_modified" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.property.lastModified"></a>

```python
last_modified: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsPasswordPolicyMeta
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMeta">IdentityDomainsPasswordPolicyMeta</a>

---


### IdentityDomainsPasswordPolicyTagsList <a name="IdentityDomainsPasswordPolicyTagsList" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_password_policy

identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsPasswordPolicyTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTags">IdentityDomainsPasswordPolicyTags</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[IdentityDomainsPasswordPolicyTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTags">IdentityDomainsPasswordPolicyTags</a>]]

---


### IdentityDomainsPasswordPolicyTagsOutputReference <a name="IdentityDomainsPasswordPolicyTagsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_password_policy

identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTags">IdentityDomainsPasswordPolicyTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IdentityDomainsPasswordPolicyTags]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTags">IdentityDomainsPasswordPolicyTags</a>]

---


### IdentityDomainsPasswordPolicyTimeoutsOutputReference <a name="IdentityDomainsPasswordPolicyTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_password_policy

identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeouts">IdentityDomainsPasswordPolicyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IdentityDomainsPasswordPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeouts">IdentityDomainsPasswordPolicyTimeouts</a>]

---



