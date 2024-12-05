# `identityDomainsIdentitySetting` Submodule <a name="`identityDomainsIdentitySetting` Submodule" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityDomainsIdentitySetting <a name="IdentityDomainsIdentitySetting" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting oci_identity_domains_identity_setting}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_identity_setting

identityDomainsIdentitySetting.IdentityDomainsIdentitySetting(
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
  identity_setting_id: str,
  schemas: typing.List[str],
  attributes: str = None,
  attribute_sets: typing.List[str] = None,
  authorization: str = None,
  emit_locked_message_when_user_is_locked: typing.Union[bool, IResolvable] = None,
  external_id: str = None,
  my_profile: IdentityDomainsIdentitySettingMyProfile = None,
  ocid: str = None,
  posix_gid: IdentityDomainsIdentitySettingPosixGid = None,
  posix_uid: IdentityDomainsIdentitySettingPosixUid = None,
  primary_email_required: typing.Union[bool, IResolvable] = None,
  resource_type_schema_version: str = None,
  return_inactive_over_locked_message: typing.Union[bool, IResolvable] = None,
  tags: typing.Union[IResolvable, typing.List[IdentityDomainsIdentitySettingTags]] = None,
  timeouts: IdentityDomainsIdentitySettingTimeouts = None,
  tokens: typing.Union[IResolvable, typing.List[IdentityDomainsIdentitySettingTokens]] = None,
  user_allowed_to_set_recovery_email: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#idcs_endpoint IdentityDomainsIdentitySetting#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.identitySettingId">identity_setting_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#identity_setting_id IdentityDomainsIdentitySetting#identity_setting_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.schemas">schemas</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#schemas IdentityDomainsIdentitySetting#schemas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.attributes">attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#attributes IdentityDomainsIdentitySetting#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#attribute_sets IdentityDomainsIdentitySetting#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#authorization IdentityDomainsIdentitySetting#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.emitLockedMessageWhenUserIsLocked">emit_locked_message_when_user_is_locked</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#emit_locked_message_when_user_is_locked IdentityDomainsIdentitySetting#emit_locked_message_when_user_is_locked}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.externalId">external_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#external_id IdentityDomainsIdentitySetting#external_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.myProfile">my_profile</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfile">IdentityDomainsIdentitySettingMyProfile</a></code> | my_profile block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.ocid">ocid</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#ocid IdentityDomainsIdentitySetting#ocid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.posixGid">posix_gid</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGid">IdentityDomainsIdentitySettingPosixGid</a></code> | posix_gid block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.posixUid">posix_uid</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUid">IdentityDomainsIdentitySettingPosixUid</a></code> | posix_uid block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.primaryEmailRequired">primary_email_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#primary_email_required IdentityDomainsIdentitySetting#primary_email_required}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#resource_type_schema_version IdentityDomainsIdentitySetting#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.returnInactiveOverLockedMessage">return_inactive_over_locked_message</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#return_inactive_over_locked_message IdentityDomainsIdentitySetting#return_inactive_over_locked_message}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.tags">tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTags">IdentityDomainsIdentitySettingTags</a>]]</code> | tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeouts">IdentityDomainsIdentitySettingTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.tokens">tokens</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokens">IdentityDomainsIdentitySettingTokens</a>]]</code> | tokens block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.userAllowedToSetRecoveryEmail">user_allowed_to_set_recovery_email</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#user_allowed_to_set_recovery_email IdentityDomainsIdentitySetting#user_allowed_to_set_recovery_email}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.idcsEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#idcs_endpoint IdentityDomainsIdentitySetting#idcs_endpoint}.

---

##### `identity_setting_id`<sup>Required</sup> <a name="identity_setting_id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.identitySettingId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#identity_setting_id IdentityDomainsIdentitySetting#identity_setting_id}.

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.schemas"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#schemas IdentityDomainsIdentitySetting#schemas}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.attributes"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#attributes IdentityDomainsIdentitySetting#attributes}.

---

##### `attribute_sets`<sup>Optional</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.attributeSets"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#attribute_sets IdentityDomainsIdentitySetting#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.authorization"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#authorization IdentityDomainsIdentitySetting#authorization}.

---

##### `emit_locked_message_when_user_is_locked`<sup>Optional</sup> <a name="emit_locked_message_when_user_is_locked" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.emitLockedMessageWhenUserIsLocked"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#emit_locked_message_when_user_is_locked IdentityDomainsIdentitySetting#emit_locked_message_when_user_is_locked}.

---

##### `external_id`<sup>Optional</sup> <a name="external_id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.externalId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#external_id IdentityDomainsIdentitySetting#external_id}.

---

##### `my_profile`<sup>Optional</sup> <a name="my_profile" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.myProfile"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfile">IdentityDomainsIdentitySettingMyProfile</a>

my_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#my_profile IdentityDomainsIdentitySetting#my_profile}

---

##### `ocid`<sup>Optional</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.ocid"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#ocid IdentityDomainsIdentitySetting#ocid}.

---

##### `posix_gid`<sup>Optional</sup> <a name="posix_gid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.posixGid"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGid">IdentityDomainsIdentitySettingPosixGid</a>

posix_gid block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#posix_gid IdentityDomainsIdentitySetting#posix_gid}

---

##### `posix_uid`<sup>Optional</sup> <a name="posix_uid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.posixUid"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUid">IdentityDomainsIdentitySettingPosixUid</a>

posix_uid block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#posix_uid IdentityDomainsIdentitySetting#posix_uid}

---

##### `primary_email_required`<sup>Optional</sup> <a name="primary_email_required" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.primaryEmailRequired"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#primary_email_required IdentityDomainsIdentitySetting#primary_email_required}.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.resourceTypeSchemaVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#resource_type_schema_version IdentityDomainsIdentitySetting#resource_type_schema_version}.

---

##### `return_inactive_over_locked_message`<sup>Optional</sup> <a name="return_inactive_over_locked_message" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.returnInactiveOverLockedMessage"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#return_inactive_over_locked_message IdentityDomainsIdentitySetting#return_inactive_over_locked_message}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.tags"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTags">IdentityDomainsIdentitySettingTags</a>]]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#tags IdentityDomainsIdentitySetting#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeouts">IdentityDomainsIdentitySettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#timeouts IdentityDomainsIdentitySetting#timeouts}

---

##### `tokens`<sup>Optional</sup> <a name="tokens" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.tokens"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokens">IdentityDomainsIdentitySettingTokens</a>]]

tokens block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#tokens IdentityDomainsIdentitySetting#tokens}

---

##### `user_allowed_to_set_recovery_email`<sup>Optional</sup> <a name="user_allowed_to_set_recovery_email" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.userAllowedToSetRecoveryEmail"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#user_allowed_to_set_recovery_email IdentityDomainsIdentitySetting#user_allowed_to_set_recovery_email}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putMyProfile">put_my_profile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putPosixGid">put_posix_gid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putPosixUid">put_posix_uid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putTokens">put_tokens</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetAttributes">reset_attributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetAttributeSets">reset_attribute_sets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetAuthorization">reset_authorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetEmitLockedMessageWhenUserIsLocked">reset_emit_locked_message_when_user_is_locked</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetExternalId">reset_external_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetMyProfile">reset_my_profile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetOcid">reset_ocid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetPosixGid">reset_posix_gid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetPosixUid">reset_posix_uid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetPrimaryEmailRequired">reset_primary_email_required</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetResourceTypeSchemaVersion">reset_resource_type_schema_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetReturnInactiveOverLockedMessage">reset_return_inactive_over_locked_message</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetTokens">reset_tokens</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetUserAllowedToSetRecoveryEmail">reset_user_allowed_to_set_recovery_email</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_my_profile` <a name="put_my_profile" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putMyProfile"></a>

```python
def put_my_profile(
  allow_end_users_to_change_their_password: typing.Union[bool, IResolvable] = None,
  allow_end_users_to_link_their_support_account: typing.Union[bool, IResolvable] = None,
  allow_end_users_to_manage_their_capabilities: typing.Union[bool, IResolvable] = None,
  allow_end_users_to_update_their_security_settings: typing.Union[bool, IResolvable] = None
) -> None
```

###### `allow_end_users_to_change_their_password`<sup>Optional</sup> <a name="allow_end_users_to_change_their_password" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putMyProfile.parameter.allowEndUsersToChangeTheirPassword"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#allow_end_users_to_change_their_password IdentityDomainsIdentitySetting#allow_end_users_to_change_their_password}.

---

###### `allow_end_users_to_link_their_support_account`<sup>Optional</sup> <a name="allow_end_users_to_link_their_support_account" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putMyProfile.parameter.allowEndUsersToLinkTheirSupportAccount"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#allow_end_users_to_link_their_support_account IdentityDomainsIdentitySetting#allow_end_users_to_link_their_support_account}.

---

###### `allow_end_users_to_manage_their_capabilities`<sup>Optional</sup> <a name="allow_end_users_to_manage_their_capabilities" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putMyProfile.parameter.allowEndUsersToManageTheirCapabilities"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#allow_end_users_to_manage_their_capabilities IdentityDomainsIdentitySetting#allow_end_users_to_manage_their_capabilities}.

---

###### `allow_end_users_to_update_their_security_settings`<sup>Optional</sup> <a name="allow_end_users_to_update_their_security_settings" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putMyProfile.parameter.allowEndUsersToUpdateTheirSecuritySettings"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#allow_end_users_to_update_their_security_settings IdentityDomainsIdentitySetting#allow_end_users_to_update_their_security_settings}.

---

##### `put_posix_gid` <a name="put_posix_gid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putPosixGid"></a>

```python
def put_posix_gid(
  manual_assignment_ends_at: typing.Union[int, float] = None,
  manual_assignment_starts_from: typing.Union[int, float] = None
) -> None
```

###### `manual_assignment_ends_at`<sup>Optional</sup> <a name="manual_assignment_ends_at" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putPosixGid.parameter.manualAssignmentEndsAt"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#manual_assignment_ends_at IdentityDomainsIdentitySetting#manual_assignment_ends_at}.

---

###### `manual_assignment_starts_from`<sup>Optional</sup> <a name="manual_assignment_starts_from" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putPosixGid.parameter.manualAssignmentStartsFrom"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#manual_assignment_starts_from IdentityDomainsIdentitySetting#manual_assignment_starts_from}.

---

##### `put_posix_uid` <a name="put_posix_uid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putPosixUid"></a>

```python
def put_posix_uid(
  manual_assignment_ends_at: typing.Union[int, float] = None,
  manual_assignment_starts_from: typing.Union[int, float] = None
) -> None
```

###### `manual_assignment_ends_at`<sup>Optional</sup> <a name="manual_assignment_ends_at" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putPosixUid.parameter.manualAssignmentEndsAt"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#manual_assignment_ends_at IdentityDomainsIdentitySetting#manual_assignment_ends_at}.

---

###### `manual_assignment_starts_from`<sup>Optional</sup> <a name="manual_assignment_starts_from" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putPosixUid.parameter.manualAssignmentStartsFrom"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#manual_assignment_starts_from IdentityDomainsIdentitySetting#manual_assignment_starts_from}.

---

##### `put_tags` <a name="put_tags" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putTags"></a>

```python
def put_tags(
  value: typing.Union[IResolvable, typing.List[IdentityDomainsIdentitySettingTags]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putTags.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTags">IdentityDomainsIdentitySettingTags</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#create IdentityDomainsIdentitySetting#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#delete IdentityDomainsIdentitySetting#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#update IdentityDomainsIdentitySetting#update}.

---

##### `put_tokens` <a name="put_tokens" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putTokens"></a>

```python
def put_tokens(
  value: typing.Union[IResolvable, typing.List[IdentityDomainsIdentitySettingTokens]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putTokens.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokens">IdentityDomainsIdentitySettingTokens</a>]]

---

##### `reset_attributes` <a name="reset_attributes" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetAttributes"></a>

```python
def reset_attributes() -> None
```

##### `reset_attribute_sets` <a name="reset_attribute_sets" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetAttributeSets"></a>

```python
def reset_attribute_sets() -> None
```

##### `reset_authorization` <a name="reset_authorization" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetAuthorization"></a>

```python
def reset_authorization() -> None
```

##### `reset_emit_locked_message_when_user_is_locked` <a name="reset_emit_locked_message_when_user_is_locked" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetEmitLockedMessageWhenUserIsLocked"></a>

```python
def reset_emit_locked_message_when_user_is_locked() -> None
```

##### `reset_external_id` <a name="reset_external_id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetExternalId"></a>

```python
def reset_external_id() -> None
```

##### `reset_my_profile` <a name="reset_my_profile" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetMyProfile"></a>

```python
def reset_my_profile() -> None
```

##### `reset_ocid` <a name="reset_ocid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetOcid"></a>

```python
def reset_ocid() -> None
```

##### `reset_posix_gid` <a name="reset_posix_gid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetPosixGid"></a>

```python
def reset_posix_gid() -> None
```

##### `reset_posix_uid` <a name="reset_posix_uid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetPosixUid"></a>

```python
def reset_posix_uid() -> None
```

##### `reset_primary_email_required` <a name="reset_primary_email_required" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetPrimaryEmailRequired"></a>

```python
def reset_primary_email_required() -> None
```

##### `reset_resource_type_schema_version` <a name="reset_resource_type_schema_version" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetResourceTypeSchemaVersion"></a>

```python
def reset_resource_type_schema_version() -> None
```

##### `reset_return_inactive_over_locked_message` <a name="reset_return_inactive_over_locked_message" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetReturnInactiveOverLockedMessage"></a>

```python
def reset_return_inactive_over_locked_message() -> None
```

##### `reset_tags` <a name="reset_tags" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_tokens` <a name="reset_tokens" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetTokens"></a>

```python
def reset_tokens() -> None
```

##### `reset_user_allowed_to_set_recovery_email` <a name="reset_user_allowed_to_set_recovery_email" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetUserAllowedToSetRecoveryEmail"></a>

```python
def reset_user_allowed_to_set_recovery_email() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IdentityDomainsIdentitySetting resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_identity_setting

identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_identity_setting

identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_identity_setting

identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_identity_setting

identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IdentityDomainsIdentitySetting resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IdentityDomainsIdentitySetting to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IdentityDomainsIdentitySetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IdentityDomainsIdentitySetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.compartmentOcid">compartment_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.deleteInProgress">delete_in_progress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.domainOcid">domain_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.idcsCreatedBy">idcs_created_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList">IdentityDomainsIdentitySettingIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.idcsLastModifiedBy">idcs_last_modified_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList">IdentityDomainsIdentitySettingIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.idcsLastUpgradedInRelease">idcs_last_upgraded_in_release</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.idcsPreventedOperations">idcs_prevented_operations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList">IdentityDomainsIdentitySettingMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.myProfile">my_profile</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference">IdentityDomainsIdentitySettingMyProfileOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.posixGid">posix_gid</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference">IdentityDomainsIdentitySettingPosixGidOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.posixUid">posix_uid</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference">IdentityDomainsIdentitySettingPosixUidOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.removeInvalidEmails">remove_invalid_emails</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList">IdentityDomainsIdentitySettingTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.tenancyOcid">tenancy_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference">IdentityDomainsIdentitySettingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.tokens">tokens</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList">IdentityDomainsIdentitySettingTokensList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.attributeSetsInput">attribute_sets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.attributesInput">attributes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.authorizationInput">authorization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.emitLockedMessageWhenUserIsLockedInput">emit_locked_message_when_user_is_locked_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.externalIdInput">external_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.idcsEndpointInput">idcs_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.identitySettingIdInput">identity_setting_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.myProfileInput">my_profile_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfile">IdentityDomainsIdentitySettingMyProfile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.ocidInput">ocid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.posixGidInput">posix_gid_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGid">IdentityDomainsIdentitySettingPosixGid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.posixUidInput">posix_uid_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUid">IdentityDomainsIdentitySettingPosixUid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.primaryEmailRequiredInput">primary_email_required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.resourceTypeSchemaVersionInput">resource_type_schema_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.returnInactiveOverLockedMessageInput">return_inactive_over_locked_message_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.schemasInput">schemas_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.tagsInput">tags_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTags">IdentityDomainsIdentitySettingTags</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeouts">IdentityDomainsIdentitySettingTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.tokensInput">tokens_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokens">IdentityDomainsIdentitySettingTokens</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.userAllowedToSetRecoveryEmailInput">user_allowed_to_set_recovery_email_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.attributes">attributes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.emitLockedMessageWhenUserIsLocked">emit_locked_message_when_user_is_locked</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.identitySettingId">identity_setting_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.primaryEmailRequired">primary_email_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.returnInactiveOverLockedMessage">return_inactive_over_locked_message</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.userAllowedToSetRecoveryEmail">user_allowed_to_set_recovery_email</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_ocid`<sup>Required</sup> <a name="compartment_ocid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.compartmentOcid"></a>

```python
compartment_ocid: str
```

- *Type:* str

---

##### `delete_in_progress`<sup>Required</sup> <a name="delete_in_progress" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.deleteInProgress"></a>

```python
delete_in_progress: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `domain_ocid`<sup>Required</sup> <a name="domain_ocid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.domainOcid"></a>

```python
domain_ocid: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_created_by`<sup>Required</sup> <a name="idcs_created_by" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.idcsCreatedBy"></a>

```python
idcs_created_by: IdentityDomainsIdentitySettingIdcsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList">IdentityDomainsIdentitySettingIdcsCreatedByList</a>

---

##### `idcs_last_modified_by`<sup>Required</sup> <a name="idcs_last_modified_by" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.idcsLastModifiedBy"></a>

```python
idcs_last_modified_by: IdentityDomainsIdentitySettingIdcsLastModifiedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList">IdentityDomainsIdentitySettingIdcsLastModifiedByList</a>

---

##### `idcs_last_upgraded_in_release`<sup>Required</sup> <a name="idcs_last_upgraded_in_release" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.idcsLastUpgradedInRelease"></a>

```python
idcs_last_upgraded_in_release: str
```

- *Type:* str

---

##### `idcs_prevented_operations`<sup>Required</sup> <a name="idcs_prevented_operations" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.idcsPreventedOperations"></a>

```python
idcs_prevented_operations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.meta"></a>

```python
meta: IdentityDomainsIdentitySettingMetaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList">IdentityDomainsIdentitySettingMetaList</a>

---

##### `my_profile`<sup>Required</sup> <a name="my_profile" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.myProfile"></a>

```python
my_profile: IdentityDomainsIdentitySettingMyProfileOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference">IdentityDomainsIdentitySettingMyProfileOutputReference</a>

---

##### `posix_gid`<sup>Required</sup> <a name="posix_gid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.posixGid"></a>

```python
posix_gid: IdentityDomainsIdentitySettingPosixGidOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference">IdentityDomainsIdentitySettingPosixGidOutputReference</a>

---

##### `posix_uid`<sup>Required</sup> <a name="posix_uid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.posixUid"></a>

```python
posix_uid: IdentityDomainsIdentitySettingPosixUidOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference">IdentityDomainsIdentitySettingPosixUidOutputReference</a>

---

##### `remove_invalid_emails`<sup>Required</sup> <a name="remove_invalid_emails" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.removeInvalidEmails"></a>

```python
remove_invalid_emails: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.tags"></a>

```python
tags: IdentityDomainsIdentitySettingTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList">IdentityDomainsIdentitySettingTagsList</a>

---

##### `tenancy_ocid`<sup>Required</sup> <a name="tenancy_ocid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.tenancyOcid"></a>

```python
tenancy_ocid: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.timeouts"></a>

```python
timeouts: IdentityDomainsIdentitySettingTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference">IdentityDomainsIdentitySettingTimeoutsOutputReference</a>

---

##### `tokens`<sup>Required</sup> <a name="tokens" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.tokens"></a>

```python
tokens: IdentityDomainsIdentitySettingTokensList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList">IdentityDomainsIdentitySettingTokensList</a>

---

##### `attribute_sets_input`<sup>Optional</sup> <a name="attribute_sets_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.attributeSetsInput"></a>

```python
attribute_sets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.attributesInput"></a>

```python
attributes_input: str
```

- *Type:* str

---

##### `authorization_input`<sup>Optional</sup> <a name="authorization_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.authorizationInput"></a>

```python
authorization_input: str
```

- *Type:* str

---

##### `emit_locked_message_when_user_is_locked_input`<sup>Optional</sup> <a name="emit_locked_message_when_user_is_locked_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.emitLockedMessageWhenUserIsLockedInput"></a>

```python
emit_locked_message_when_user_is_locked_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `external_id_input`<sup>Optional</sup> <a name="external_id_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.externalIdInput"></a>

```python
external_id_input: str
```

- *Type:* str

---

##### `idcs_endpoint_input`<sup>Optional</sup> <a name="idcs_endpoint_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.idcsEndpointInput"></a>

```python
idcs_endpoint_input: str
```

- *Type:* str

---

##### `identity_setting_id_input`<sup>Optional</sup> <a name="identity_setting_id_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.identitySettingIdInput"></a>

```python
identity_setting_id_input: str
```

- *Type:* str

---

##### `my_profile_input`<sup>Optional</sup> <a name="my_profile_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.myProfileInput"></a>

```python
my_profile_input: IdentityDomainsIdentitySettingMyProfile
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfile">IdentityDomainsIdentitySettingMyProfile</a>

---

##### `ocid_input`<sup>Optional</sup> <a name="ocid_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.ocidInput"></a>

```python
ocid_input: str
```

- *Type:* str

---

##### `posix_gid_input`<sup>Optional</sup> <a name="posix_gid_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.posixGidInput"></a>

```python
posix_gid_input: IdentityDomainsIdentitySettingPosixGid
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGid">IdentityDomainsIdentitySettingPosixGid</a>

---

##### `posix_uid_input`<sup>Optional</sup> <a name="posix_uid_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.posixUidInput"></a>

```python
posix_uid_input: IdentityDomainsIdentitySettingPosixUid
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUid">IdentityDomainsIdentitySettingPosixUid</a>

---

##### `primary_email_required_input`<sup>Optional</sup> <a name="primary_email_required_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.primaryEmailRequiredInput"></a>

```python
primary_email_required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_type_schema_version_input`<sup>Optional</sup> <a name="resource_type_schema_version_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.resourceTypeSchemaVersionInput"></a>

```python
resource_type_schema_version_input: str
```

- *Type:* str

---

##### `return_inactive_over_locked_message_input`<sup>Optional</sup> <a name="return_inactive_over_locked_message_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.returnInactiveOverLockedMessageInput"></a>

```python
return_inactive_over_locked_message_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `schemas_input`<sup>Optional</sup> <a name="schemas_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.schemasInput"></a>

```python
schemas_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.tagsInput"></a>

```python
tags_input: typing.Union[IResolvable, typing.List[IdentityDomainsIdentitySettingTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTags">IdentityDomainsIdentitySettingTags</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, IdentityDomainsIdentitySettingTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeouts">IdentityDomainsIdentitySettingTimeouts</a>]

---

##### `tokens_input`<sup>Optional</sup> <a name="tokens_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.tokensInput"></a>

```python
tokens_input: typing.Union[IResolvable, typing.List[IdentityDomainsIdentitySettingTokens]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokens">IdentityDomainsIdentitySettingTokens</a>]]

---

##### `user_allowed_to_set_recovery_email_input`<sup>Optional</sup> <a name="user_allowed_to_set_recovery_email_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.userAllowedToSetRecoveryEmailInput"></a>

```python
user_allowed_to_set_recovery_email_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

---

##### `attribute_sets`<sup>Required</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `emit_locked_message_when_user_is_locked`<sup>Required</sup> <a name="emit_locked_message_when_user_is_locked" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.emitLockedMessageWhenUserIsLocked"></a>

```python
emit_locked_message_when_user_is_locked: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

---

##### `identity_setting_id`<sup>Required</sup> <a name="identity_setting_id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.identitySettingId"></a>

```python
identity_setting_id: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `primary_email_required`<sup>Required</sup> <a name="primary_email_required" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.primaryEmailRequired"></a>

```python
primary_email_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_type_schema_version`<sup>Required</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

---

##### `return_inactive_over_locked_message`<sup>Required</sup> <a name="return_inactive_over_locked_message" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.returnInactiveOverLockedMessage"></a>

```python
return_inactive_over_locked_message: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `user_allowed_to_set_recovery_email`<sup>Required</sup> <a name="user_allowed_to_set_recovery_email" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.userAllowedToSetRecoveryEmail"></a>

```python
user_allowed_to_set_recovery_email: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityDomainsIdentitySettingConfig <a name="IdentityDomainsIdentitySettingConfig" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_identity_setting

identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  idcs_endpoint: str,
  identity_setting_id: str,
  schemas: typing.List[str],
  attributes: str = None,
  attribute_sets: typing.List[str] = None,
  authorization: str = None,
  emit_locked_message_when_user_is_locked: typing.Union[bool, IResolvable] = None,
  external_id: str = None,
  my_profile: IdentityDomainsIdentitySettingMyProfile = None,
  ocid: str = None,
  posix_gid: IdentityDomainsIdentitySettingPosixGid = None,
  posix_uid: IdentityDomainsIdentitySettingPosixUid = None,
  primary_email_required: typing.Union[bool, IResolvable] = None,
  resource_type_schema_version: str = None,
  return_inactive_over_locked_message: typing.Union[bool, IResolvable] = None,
  tags: typing.Union[IResolvable, typing.List[IdentityDomainsIdentitySettingTags]] = None,
  timeouts: IdentityDomainsIdentitySettingTimeouts = None,
  tokens: typing.Union[IResolvable, typing.List[IdentityDomainsIdentitySettingTokens]] = None,
  user_allowed_to_set_recovery_email: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#idcs_endpoint IdentityDomainsIdentitySetting#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.identitySettingId">identity_setting_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#identity_setting_id IdentityDomainsIdentitySetting#identity_setting_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#schemas IdentityDomainsIdentitySetting#schemas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.attributes">attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#attributes IdentityDomainsIdentitySetting#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#attribute_sets IdentityDomainsIdentitySetting#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#authorization IdentityDomainsIdentitySetting#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.emitLockedMessageWhenUserIsLocked">emit_locked_message_when_user_is_locked</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#emit_locked_message_when_user_is_locked IdentityDomainsIdentitySetting#emit_locked_message_when_user_is_locked}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.externalId">external_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#external_id IdentityDomainsIdentitySetting#external_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.myProfile">my_profile</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfile">IdentityDomainsIdentitySettingMyProfile</a></code> | my_profile block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.ocid">ocid</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#ocid IdentityDomainsIdentitySetting#ocid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.posixGid">posix_gid</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGid">IdentityDomainsIdentitySettingPosixGid</a></code> | posix_gid block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.posixUid">posix_uid</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUid">IdentityDomainsIdentitySettingPosixUid</a></code> | posix_uid block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.primaryEmailRequired">primary_email_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#primary_email_required IdentityDomainsIdentitySetting#primary_email_required}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#resource_type_schema_version IdentityDomainsIdentitySetting#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.returnInactiveOverLockedMessage">return_inactive_over_locked_message</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#return_inactive_over_locked_message IdentityDomainsIdentitySetting#return_inactive_over_locked_message}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.tags">tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTags">IdentityDomainsIdentitySettingTags</a>]]</code> | tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeouts">IdentityDomainsIdentitySettingTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.tokens">tokens</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokens">IdentityDomainsIdentitySettingTokens</a>]]</code> | tokens block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.userAllowedToSetRecoveryEmail">user_allowed_to_set_recovery_email</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#user_allowed_to_set_recovery_email IdentityDomainsIdentitySetting#user_allowed_to_set_recovery_email}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#idcs_endpoint IdentityDomainsIdentitySetting#idcs_endpoint}.

---

##### `identity_setting_id`<sup>Required</sup> <a name="identity_setting_id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.identitySettingId"></a>

```python
identity_setting_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#identity_setting_id IdentityDomainsIdentitySetting#identity_setting_id}.

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#schemas IdentityDomainsIdentitySetting#schemas}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#attributes IdentityDomainsIdentitySetting#attributes}.

---

##### `attribute_sets`<sup>Optional</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#attribute_sets IdentityDomainsIdentitySetting#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#authorization IdentityDomainsIdentitySetting#authorization}.

---

##### `emit_locked_message_when_user_is_locked`<sup>Optional</sup> <a name="emit_locked_message_when_user_is_locked" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.emitLockedMessageWhenUserIsLocked"></a>

```python
emit_locked_message_when_user_is_locked: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#emit_locked_message_when_user_is_locked IdentityDomainsIdentitySetting#emit_locked_message_when_user_is_locked}.

---

##### `external_id`<sup>Optional</sup> <a name="external_id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#external_id IdentityDomainsIdentitySetting#external_id}.

---

##### `my_profile`<sup>Optional</sup> <a name="my_profile" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.myProfile"></a>

```python
my_profile: IdentityDomainsIdentitySettingMyProfile
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfile">IdentityDomainsIdentitySettingMyProfile</a>

my_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#my_profile IdentityDomainsIdentitySetting#my_profile}

---

##### `ocid`<sup>Optional</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#ocid IdentityDomainsIdentitySetting#ocid}.

---

##### `posix_gid`<sup>Optional</sup> <a name="posix_gid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.posixGid"></a>

```python
posix_gid: IdentityDomainsIdentitySettingPosixGid
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGid">IdentityDomainsIdentitySettingPosixGid</a>

posix_gid block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#posix_gid IdentityDomainsIdentitySetting#posix_gid}

---

##### `posix_uid`<sup>Optional</sup> <a name="posix_uid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.posixUid"></a>

```python
posix_uid: IdentityDomainsIdentitySettingPosixUid
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUid">IdentityDomainsIdentitySettingPosixUid</a>

posix_uid block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#posix_uid IdentityDomainsIdentitySetting#posix_uid}

---

##### `primary_email_required`<sup>Optional</sup> <a name="primary_email_required" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.primaryEmailRequired"></a>

```python
primary_email_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#primary_email_required IdentityDomainsIdentitySetting#primary_email_required}.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#resource_type_schema_version IdentityDomainsIdentitySetting#resource_type_schema_version}.

---

##### `return_inactive_over_locked_message`<sup>Optional</sup> <a name="return_inactive_over_locked_message" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.returnInactiveOverLockedMessage"></a>

```python
return_inactive_over_locked_message: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#return_inactive_over_locked_message IdentityDomainsIdentitySetting#return_inactive_over_locked_message}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.tags"></a>

```python
tags: typing.Union[IResolvable, typing.List[IdentityDomainsIdentitySettingTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTags">IdentityDomainsIdentitySettingTags</a>]]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#tags IdentityDomainsIdentitySetting#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.timeouts"></a>

```python
timeouts: IdentityDomainsIdentitySettingTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeouts">IdentityDomainsIdentitySettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#timeouts IdentityDomainsIdentitySetting#timeouts}

---

##### `tokens`<sup>Optional</sup> <a name="tokens" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.tokens"></a>

```python
tokens: typing.Union[IResolvable, typing.List[IdentityDomainsIdentitySettingTokens]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokens">IdentityDomainsIdentitySettingTokens</a>]]

tokens block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#tokens IdentityDomainsIdentitySetting#tokens}

---

##### `user_allowed_to_set_recovery_email`<sup>Optional</sup> <a name="user_allowed_to_set_recovery_email" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.userAllowedToSetRecoveryEmail"></a>

```python
user_allowed_to_set_recovery_email: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#user_allowed_to_set_recovery_email IdentityDomainsIdentitySetting#user_allowed_to_set_recovery_email}.

---

### IdentityDomainsIdentitySettingIdcsCreatedBy <a name="IdentityDomainsIdentitySettingIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_identity_setting

identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedBy()
```


### IdentityDomainsIdentitySettingIdcsLastModifiedBy <a name="IdentityDomainsIdentitySettingIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_identity_setting

identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedBy()
```


### IdentityDomainsIdentitySettingMeta <a name="IdentityDomainsIdentitySettingMeta" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMeta.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_identity_setting

identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMeta()
```


### IdentityDomainsIdentitySettingMyProfile <a name="IdentityDomainsIdentitySettingMyProfile" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfile"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfile.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_identity_setting

identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfile(
  allow_end_users_to_change_their_password: typing.Union[bool, IResolvable] = None,
  allow_end_users_to_link_their_support_account: typing.Union[bool, IResolvable] = None,
  allow_end_users_to_manage_their_capabilities: typing.Union[bool, IResolvable] = None,
  allow_end_users_to_update_their_security_settings: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfile.property.allowEndUsersToChangeTheirPassword">allow_end_users_to_change_their_password</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#allow_end_users_to_change_their_password IdentityDomainsIdentitySetting#allow_end_users_to_change_their_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfile.property.allowEndUsersToLinkTheirSupportAccount">allow_end_users_to_link_their_support_account</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#allow_end_users_to_link_their_support_account IdentityDomainsIdentitySetting#allow_end_users_to_link_their_support_account}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfile.property.allowEndUsersToManageTheirCapabilities">allow_end_users_to_manage_their_capabilities</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#allow_end_users_to_manage_their_capabilities IdentityDomainsIdentitySetting#allow_end_users_to_manage_their_capabilities}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfile.property.allowEndUsersToUpdateTheirSecuritySettings">allow_end_users_to_update_their_security_settings</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#allow_end_users_to_update_their_security_settings IdentityDomainsIdentitySetting#allow_end_users_to_update_their_security_settings}. |

---

##### `allow_end_users_to_change_their_password`<sup>Optional</sup> <a name="allow_end_users_to_change_their_password" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfile.property.allowEndUsersToChangeTheirPassword"></a>

```python
allow_end_users_to_change_their_password: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#allow_end_users_to_change_their_password IdentityDomainsIdentitySetting#allow_end_users_to_change_their_password}.

---

##### `allow_end_users_to_link_their_support_account`<sup>Optional</sup> <a name="allow_end_users_to_link_their_support_account" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfile.property.allowEndUsersToLinkTheirSupportAccount"></a>

```python
allow_end_users_to_link_their_support_account: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#allow_end_users_to_link_their_support_account IdentityDomainsIdentitySetting#allow_end_users_to_link_their_support_account}.

---

##### `allow_end_users_to_manage_their_capabilities`<sup>Optional</sup> <a name="allow_end_users_to_manage_their_capabilities" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfile.property.allowEndUsersToManageTheirCapabilities"></a>

```python
allow_end_users_to_manage_their_capabilities: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#allow_end_users_to_manage_their_capabilities IdentityDomainsIdentitySetting#allow_end_users_to_manage_their_capabilities}.

---

##### `allow_end_users_to_update_their_security_settings`<sup>Optional</sup> <a name="allow_end_users_to_update_their_security_settings" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfile.property.allowEndUsersToUpdateTheirSecuritySettings"></a>

```python
allow_end_users_to_update_their_security_settings: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#allow_end_users_to_update_their_security_settings IdentityDomainsIdentitySetting#allow_end_users_to_update_their_security_settings}.

---

### IdentityDomainsIdentitySettingPosixGid <a name="IdentityDomainsIdentitySettingPosixGid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGid"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGid.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_identity_setting

identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGid(
  manual_assignment_ends_at: typing.Union[int, float] = None,
  manual_assignment_starts_from: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGid.property.manualAssignmentEndsAt">manual_assignment_ends_at</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#manual_assignment_ends_at IdentityDomainsIdentitySetting#manual_assignment_ends_at}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGid.property.manualAssignmentStartsFrom">manual_assignment_starts_from</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#manual_assignment_starts_from IdentityDomainsIdentitySetting#manual_assignment_starts_from}. |

---

##### `manual_assignment_ends_at`<sup>Optional</sup> <a name="manual_assignment_ends_at" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGid.property.manualAssignmentEndsAt"></a>

```python
manual_assignment_ends_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#manual_assignment_ends_at IdentityDomainsIdentitySetting#manual_assignment_ends_at}.

---

##### `manual_assignment_starts_from`<sup>Optional</sup> <a name="manual_assignment_starts_from" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGid.property.manualAssignmentStartsFrom"></a>

```python
manual_assignment_starts_from: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#manual_assignment_starts_from IdentityDomainsIdentitySetting#manual_assignment_starts_from}.

---

### IdentityDomainsIdentitySettingPosixUid <a name="IdentityDomainsIdentitySettingPosixUid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUid"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUid.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_identity_setting

identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUid(
  manual_assignment_ends_at: typing.Union[int, float] = None,
  manual_assignment_starts_from: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUid.property.manualAssignmentEndsAt">manual_assignment_ends_at</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#manual_assignment_ends_at IdentityDomainsIdentitySetting#manual_assignment_ends_at}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUid.property.manualAssignmentStartsFrom">manual_assignment_starts_from</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#manual_assignment_starts_from IdentityDomainsIdentitySetting#manual_assignment_starts_from}. |

---

##### `manual_assignment_ends_at`<sup>Optional</sup> <a name="manual_assignment_ends_at" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUid.property.manualAssignmentEndsAt"></a>

```python
manual_assignment_ends_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#manual_assignment_ends_at IdentityDomainsIdentitySetting#manual_assignment_ends_at}.

---

##### `manual_assignment_starts_from`<sup>Optional</sup> <a name="manual_assignment_starts_from" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUid.property.manualAssignmentStartsFrom"></a>

```python
manual_assignment_starts_from: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#manual_assignment_starts_from IdentityDomainsIdentitySetting#manual_assignment_starts_from}.

---

### IdentityDomainsIdentitySettingTags <a name="IdentityDomainsIdentitySettingTags" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTags.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_identity_setting

identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTags(
  key: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#key IdentityDomainsIdentitySetting#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#value IdentityDomainsIdentitySetting#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#key IdentityDomainsIdentitySetting#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#value IdentityDomainsIdentitySetting#value}.

---

### IdentityDomainsIdentitySettingTimeouts <a name="IdentityDomainsIdentitySettingTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_identity_setting

identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#create IdentityDomainsIdentitySetting#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#delete IdentityDomainsIdentitySetting#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#update IdentityDomainsIdentitySetting#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#create IdentityDomainsIdentitySetting#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#delete IdentityDomainsIdentitySetting#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#update IdentityDomainsIdentitySetting#update}.

---

### IdentityDomainsIdentitySettingTokens <a name="IdentityDomainsIdentitySettingTokens" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokens"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokens.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_identity_setting

identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokens(
  type: str,
  expires_after: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokens.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#type IdentityDomainsIdentitySetting#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokens.property.expiresAfter">expires_after</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#expires_after IdentityDomainsIdentitySetting#expires_after}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokens.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#type IdentityDomainsIdentitySetting#type}.

---

##### `expires_after`<sup>Optional</sup> <a name="expires_after" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokens.property.expiresAfter"></a>

```python
expires_after: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#expires_after IdentityDomainsIdentitySetting#expires_after}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityDomainsIdentitySettingIdcsCreatedByList <a name="IdentityDomainsIdentitySettingIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_identity_setting

identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsIdentitySettingIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IdentityDomainsIdentitySettingIdcsCreatedByOutputReference <a name="IdentityDomainsIdentitySettingIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_identity_setting

identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedBy">IdentityDomainsIdentitySettingIdcsCreatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsIdentitySettingIdcsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedBy">IdentityDomainsIdentitySettingIdcsCreatedBy</a>

---


### IdentityDomainsIdentitySettingIdcsLastModifiedByList <a name="IdentityDomainsIdentitySettingIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_identity_setting

identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference <a name="IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_identity_setting

identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedBy">IdentityDomainsIdentitySettingIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsIdentitySettingIdcsLastModifiedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedBy">IdentityDomainsIdentitySettingIdcsLastModifiedBy</a>

---


### IdentityDomainsIdentitySettingMetaList <a name="IdentityDomainsIdentitySettingMetaList" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_identity_setting

identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsIdentitySettingMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IdentityDomainsIdentitySettingMetaOutputReference <a name="IdentityDomainsIdentitySettingMetaOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_identity_setting

identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.property.lastModified">last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMeta">IdentityDomainsIdentitySettingMeta</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `last_modified`<sup>Required</sup> <a name="last_modified" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.property.lastModified"></a>

```python
last_modified: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsIdentitySettingMeta
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMeta">IdentityDomainsIdentitySettingMeta</a>

---


### IdentityDomainsIdentitySettingMyProfileOutputReference <a name="IdentityDomainsIdentitySettingMyProfileOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_identity_setting

identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.resetAllowEndUsersToChangeTheirPassword">reset_allow_end_users_to_change_their_password</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.resetAllowEndUsersToLinkTheirSupportAccount">reset_allow_end_users_to_link_their_support_account</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.resetAllowEndUsersToManageTheirCapabilities">reset_allow_end_users_to_manage_their_capabilities</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.resetAllowEndUsersToUpdateTheirSecuritySettings">reset_allow_end_users_to_update_their_security_settings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allow_end_users_to_change_their_password` <a name="reset_allow_end_users_to_change_their_password" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.resetAllowEndUsersToChangeTheirPassword"></a>

```python
def reset_allow_end_users_to_change_their_password() -> None
```

##### `reset_allow_end_users_to_link_their_support_account` <a name="reset_allow_end_users_to_link_their_support_account" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.resetAllowEndUsersToLinkTheirSupportAccount"></a>

```python
def reset_allow_end_users_to_link_their_support_account() -> None
```

##### `reset_allow_end_users_to_manage_their_capabilities` <a name="reset_allow_end_users_to_manage_their_capabilities" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.resetAllowEndUsersToManageTheirCapabilities"></a>

```python
def reset_allow_end_users_to_manage_their_capabilities() -> None
```

##### `reset_allow_end_users_to_update_their_security_settings` <a name="reset_allow_end_users_to_update_their_security_settings" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.resetAllowEndUsersToUpdateTheirSecuritySettings"></a>

```python
def reset_allow_end_users_to_update_their_security_settings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.allowEndUsersToChangeTheirPasswordInput">allow_end_users_to_change_their_password_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.allowEndUsersToLinkTheirSupportAccountInput">allow_end_users_to_link_their_support_account_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.allowEndUsersToManageTheirCapabilitiesInput">allow_end_users_to_manage_their_capabilities_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.allowEndUsersToUpdateTheirSecuritySettingsInput">allow_end_users_to_update_their_security_settings_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.allowEndUsersToChangeTheirPassword">allow_end_users_to_change_their_password</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.allowEndUsersToLinkTheirSupportAccount">allow_end_users_to_link_their_support_account</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.allowEndUsersToManageTheirCapabilities">allow_end_users_to_manage_their_capabilities</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.allowEndUsersToUpdateTheirSecuritySettings">allow_end_users_to_update_their_security_settings</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfile">IdentityDomainsIdentitySettingMyProfile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_end_users_to_change_their_password_input`<sup>Optional</sup> <a name="allow_end_users_to_change_their_password_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.allowEndUsersToChangeTheirPasswordInput"></a>

```python
allow_end_users_to_change_their_password_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_end_users_to_link_their_support_account_input`<sup>Optional</sup> <a name="allow_end_users_to_link_their_support_account_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.allowEndUsersToLinkTheirSupportAccountInput"></a>

```python
allow_end_users_to_link_their_support_account_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_end_users_to_manage_their_capabilities_input`<sup>Optional</sup> <a name="allow_end_users_to_manage_their_capabilities_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.allowEndUsersToManageTheirCapabilitiesInput"></a>

```python
allow_end_users_to_manage_their_capabilities_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_end_users_to_update_their_security_settings_input`<sup>Optional</sup> <a name="allow_end_users_to_update_their_security_settings_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.allowEndUsersToUpdateTheirSecuritySettingsInput"></a>

```python
allow_end_users_to_update_their_security_settings_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_end_users_to_change_their_password`<sup>Required</sup> <a name="allow_end_users_to_change_their_password" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.allowEndUsersToChangeTheirPassword"></a>

```python
allow_end_users_to_change_their_password: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_end_users_to_link_their_support_account`<sup>Required</sup> <a name="allow_end_users_to_link_their_support_account" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.allowEndUsersToLinkTheirSupportAccount"></a>

```python
allow_end_users_to_link_their_support_account: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_end_users_to_manage_their_capabilities`<sup>Required</sup> <a name="allow_end_users_to_manage_their_capabilities" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.allowEndUsersToManageTheirCapabilities"></a>

```python
allow_end_users_to_manage_their_capabilities: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_end_users_to_update_their_security_settings`<sup>Required</sup> <a name="allow_end_users_to_update_their_security_settings" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.allowEndUsersToUpdateTheirSecuritySettings"></a>

```python
allow_end_users_to_update_their_security_settings: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsIdentitySettingMyProfile
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfile">IdentityDomainsIdentitySettingMyProfile</a>

---


### IdentityDomainsIdentitySettingPosixGidOutputReference <a name="IdentityDomainsIdentitySettingPosixGidOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_identity_setting

identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.resetManualAssignmentEndsAt">reset_manual_assignment_ends_at</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.resetManualAssignmentStartsFrom">reset_manual_assignment_starts_from</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_manual_assignment_ends_at` <a name="reset_manual_assignment_ends_at" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.resetManualAssignmentEndsAt"></a>

```python
def reset_manual_assignment_ends_at() -> None
```

##### `reset_manual_assignment_starts_from` <a name="reset_manual_assignment_starts_from" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.resetManualAssignmentStartsFrom"></a>

```python
def reset_manual_assignment_starts_from() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.property.manualAssignmentEndsAtInput">manual_assignment_ends_at_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.property.manualAssignmentStartsFromInput">manual_assignment_starts_from_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.property.manualAssignmentEndsAt">manual_assignment_ends_at</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.property.manualAssignmentStartsFrom">manual_assignment_starts_from</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGid">IdentityDomainsIdentitySettingPosixGid</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `manual_assignment_ends_at_input`<sup>Optional</sup> <a name="manual_assignment_ends_at_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.property.manualAssignmentEndsAtInput"></a>

```python
manual_assignment_ends_at_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `manual_assignment_starts_from_input`<sup>Optional</sup> <a name="manual_assignment_starts_from_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.property.manualAssignmentStartsFromInput"></a>

```python
manual_assignment_starts_from_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `manual_assignment_ends_at`<sup>Required</sup> <a name="manual_assignment_ends_at" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.property.manualAssignmentEndsAt"></a>

```python
manual_assignment_ends_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `manual_assignment_starts_from`<sup>Required</sup> <a name="manual_assignment_starts_from" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.property.manualAssignmentStartsFrom"></a>

```python
manual_assignment_starts_from: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsIdentitySettingPosixGid
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGid">IdentityDomainsIdentitySettingPosixGid</a>

---


### IdentityDomainsIdentitySettingPosixUidOutputReference <a name="IdentityDomainsIdentitySettingPosixUidOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_identity_setting

identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.resetManualAssignmentEndsAt">reset_manual_assignment_ends_at</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.resetManualAssignmentStartsFrom">reset_manual_assignment_starts_from</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_manual_assignment_ends_at` <a name="reset_manual_assignment_ends_at" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.resetManualAssignmentEndsAt"></a>

```python
def reset_manual_assignment_ends_at() -> None
```

##### `reset_manual_assignment_starts_from` <a name="reset_manual_assignment_starts_from" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.resetManualAssignmentStartsFrom"></a>

```python
def reset_manual_assignment_starts_from() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.property.manualAssignmentEndsAtInput">manual_assignment_ends_at_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.property.manualAssignmentStartsFromInput">manual_assignment_starts_from_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.property.manualAssignmentEndsAt">manual_assignment_ends_at</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.property.manualAssignmentStartsFrom">manual_assignment_starts_from</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUid">IdentityDomainsIdentitySettingPosixUid</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `manual_assignment_ends_at_input`<sup>Optional</sup> <a name="manual_assignment_ends_at_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.property.manualAssignmentEndsAtInput"></a>

```python
manual_assignment_ends_at_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `manual_assignment_starts_from_input`<sup>Optional</sup> <a name="manual_assignment_starts_from_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.property.manualAssignmentStartsFromInput"></a>

```python
manual_assignment_starts_from_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `manual_assignment_ends_at`<sup>Required</sup> <a name="manual_assignment_ends_at" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.property.manualAssignmentEndsAt"></a>

```python
manual_assignment_ends_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `manual_assignment_starts_from`<sup>Required</sup> <a name="manual_assignment_starts_from" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.property.manualAssignmentStartsFrom"></a>

```python
manual_assignment_starts_from: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsIdentitySettingPosixUid
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUid">IdentityDomainsIdentitySettingPosixUid</a>

---


### IdentityDomainsIdentitySettingTagsList <a name="IdentityDomainsIdentitySettingTagsList" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_identity_setting

identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsIdentitySettingTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTags">IdentityDomainsIdentitySettingTags</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[IdentityDomainsIdentitySettingTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTags">IdentityDomainsIdentitySettingTags</a>]]

---


### IdentityDomainsIdentitySettingTagsOutputReference <a name="IdentityDomainsIdentitySettingTagsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_identity_setting

identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTags">IdentityDomainsIdentitySettingTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IdentityDomainsIdentitySettingTags]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTags">IdentityDomainsIdentitySettingTags</a>]

---


### IdentityDomainsIdentitySettingTimeoutsOutputReference <a name="IdentityDomainsIdentitySettingTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_identity_setting

identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeouts">IdentityDomainsIdentitySettingTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IdentityDomainsIdentitySettingTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeouts">IdentityDomainsIdentitySettingTimeouts</a>]

---


### IdentityDomainsIdentitySettingTokensList <a name="IdentityDomainsIdentitySettingTokensList" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_identity_setting

identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsIdentitySettingTokensOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokens">IdentityDomainsIdentitySettingTokens</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[IdentityDomainsIdentitySettingTokens]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokens">IdentityDomainsIdentitySettingTokens</a>]]

---


### IdentityDomainsIdentitySettingTokensOutputReference <a name="IdentityDomainsIdentitySettingTokensOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_identity_setting

identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.resetExpiresAfter">reset_expires_after</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_expires_after` <a name="reset_expires_after" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.resetExpiresAfter"></a>

```python
def reset_expires_after() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.property.expiresAfterInput">expires_after_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.property.expiresAfter">expires_after</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokens">IdentityDomainsIdentitySettingTokens</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expires_after_input`<sup>Optional</sup> <a name="expires_after_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.property.expiresAfterInput"></a>

```python
expires_after_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `expires_after`<sup>Required</sup> <a name="expires_after" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.property.expiresAfter"></a>

```python
expires_after: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IdentityDomainsIdentitySettingTokens]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokens">IdentityDomainsIdentitySettingTokens</a>]

---



