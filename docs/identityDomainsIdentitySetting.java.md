# `identityDomainsIdentitySetting` Submodule <a name="`identityDomainsIdentitySetting` Submodule" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityDomainsIdentitySetting <a name="IdentityDomainsIdentitySetting" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting oci_identity_domains_identity_setting}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_identity_setting.IdentityDomainsIdentitySetting;

IdentityDomainsIdentitySetting.Builder.create(Construct scope, java.lang.String id)
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
    .identitySettingId(java.lang.String)
    .schemas(java.util.List<java.lang.String>)
//  .attributes(java.lang.String)
//  .attributeSets(java.util.List<java.lang.String>)
//  .authorization(java.lang.String)
//  .emitLockedMessageWhenUserIsLocked(java.lang.Boolean)
//  .emitLockedMessageWhenUserIsLocked(IResolvable)
//  .externalId(java.lang.String)
//  .myProfile(IdentityDomainsIdentitySettingMyProfile)
//  .ocid(java.lang.String)
//  .posixGid(IdentityDomainsIdentitySettingPosixGid)
//  .posixUid(IdentityDomainsIdentitySettingPosixUid)
//  .primaryEmailRequired(java.lang.Boolean)
//  .primaryEmailRequired(IResolvable)
//  .resourceTypeSchemaVersion(java.lang.String)
//  .returnInactiveOverLockedMessage(java.lang.Boolean)
//  .returnInactiveOverLockedMessage(IResolvable)
//  .tags(IResolvable)
//  .tags(java.util.List<IdentityDomainsIdentitySettingTags>)
//  .timeouts(IdentityDomainsIdentitySettingTimeouts)
//  .tokens(IResolvable)
//  .tokens(java.util.List<IdentityDomainsIdentitySettingTokens>)
//  .userAllowedToSetRecoveryEmail(java.lang.Boolean)
//  .userAllowedToSetRecoveryEmail(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.idcsEndpoint">idcsEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#idcs_endpoint IdentityDomainsIdentitySetting#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.identitySettingId">identitySettingId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#identity_setting_id IdentityDomainsIdentitySetting#identity_setting_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.schemas">schemas</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#schemas IdentityDomainsIdentitySetting#schemas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.attributes">attributes</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#attributes IdentityDomainsIdentitySetting#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.attributeSets">attributeSets</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#attribute_sets IdentityDomainsIdentitySetting#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.authorization">authorization</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#authorization IdentityDomainsIdentitySetting#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.emitLockedMessageWhenUserIsLocked">emitLockedMessageWhenUserIsLocked</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#emit_locked_message_when_user_is_locked IdentityDomainsIdentitySetting#emit_locked_message_when_user_is_locked}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.externalId">externalId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#external_id IdentityDomainsIdentitySetting#external_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.myProfile">myProfile</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfile">IdentityDomainsIdentitySettingMyProfile</a></code> | my_profile block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.ocid">ocid</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#ocid IdentityDomainsIdentitySetting#ocid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.posixGid">posixGid</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGid">IdentityDomainsIdentitySettingPosixGid</a></code> | posix_gid block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.posixUid">posixUid</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUid">IdentityDomainsIdentitySettingPosixUid</a></code> | posix_uid block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.primaryEmailRequired">primaryEmailRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#primary_email_required IdentityDomainsIdentitySetting#primary_email_required}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#resource_type_schema_version IdentityDomainsIdentitySetting#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.returnInactiveOverLockedMessage">returnInactiveOverLockedMessage</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#return_inactive_over_locked_message IdentityDomainsIdentitySetting#return_inactive_over_locked_message}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.tags">tags</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTags">IdentityDomainsIdentitySettingTags</a>></code> | tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeouts">IdentityDomainsIdentitySettingTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.tokens">tokens</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokens">IdentityDomainsIdentitySettingTokens</a>></code> | tokens block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.userAllowedToSetRecoveryEmail">userAllowedToSetRecoveryEmail</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#user_allowed_to_set_recovery_email IdentityDomainsIdentitySetting#user_allowed_to_set_recovery_email}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.idcsEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#idcs_endpoint IdentityDomainsIdentitySetting#idcs_endpoint}.

---

##### `identitySettingId`<sup>Required</sup> <a name="identitySettingId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.identitySettingId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#identity_setting_id IdentityDomainsIdentitySetting#identity_setting_id}.

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.schemas"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#schemas IdentityDomainsIdentitySetting#schemas}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.attributes"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#attributes IdentityDomainsIdentitySetting#attributes}.

---

##### `attributeSets`<sup>Optional</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.attributeSets"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#attribute_sets IdentityDomainsIdentitySetting#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.authorization"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#authorization IdentityDomainsIdentitySetting#authorization}.

---

##### `emitLockedMessageWhenUserIsLocked`<sup>Optional</sup> <a name="emitLockedMessageWhenUserIsLocked" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.emitLockedMessageWhenUserIsLocked"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#emit_locked_message_when_user_is_locked IdentityDomainsIdentitySetting#emit_locked_message_when_user_is_locked}.

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.externalId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#external_id IdentityDomainsIdentitySetting#external_id}.

---

##### `myProfile`<sup>Optional</sup> <a name="myProfile" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.myProfile"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfile">IdentityDomainsIdentitySettingMyProfile</a>

my_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#my_profile IdentityDomainsIdentitySetting#my_profile}

---

##### `ocid`<sup>Optional</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.ocid"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#ocid IdentityDomainsIdentitySetting#ocid}.

---

##### `posixGid`<sup>Optional</sup> <a name="posixGid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.posixGid"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGid">IdentityDomainsIdentitySettingPosixGid</a>

posix_gid block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#posix_gid IdentityDomainsIdentitySetting#posix_gid}

---

##### `posixUid`<sup>Optional</sup> <a name="posixUid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.posixUid"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUid">IdentityDomainsIdentitySettingPosixUid</a>

posix_uid block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#posix_uid IdentityDomainsIdentitySetting#posix_uid}

---

##### `primaryEmailRequired`<sup>Optional</sup> <a name="primaryEmailRequired" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.primaryEmailRequired"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#primary_email_required IdentityDomainsIdentitySetting#primary_email_required}.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.resourceTypeSchemaVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#resource_type_schema_version IdentityDomainsIdentitySetting#resource_type_schema_version}.

---

##### `returnInactiveOverLockedMessage`<sup>Optional</sup> <a name="returnInactiveOverLockedMessage" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.returnInactiveOverLockedMessage"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#return_inactive_over_locked_message IdentityDomainsIdentitySetting#return_inactive_over_locked_message}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.tags"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTags">IdentityDomainsIdentitySettingTags</a>>

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#tags IdentityDomainsIdentitySetting#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeouts">IdentityDomainsIdentitySettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#timeouts IdentityDomainsIdentitySetting#timeouts}

---

##### `tokens`<sup>Optional</sup> <a name="tokens" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.tokens"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokens">IdentityDomainsIdentitySettingTokens</a>>

tokens block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#tokens IdentityDomainsIdentitySetting#tokens}

---

##### `userAllowedToSetRecoveryEmail`<sup>Optional</sup> <a name="userAllowedToSetRecoveryEmail" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.userAllowedToSetRecoveryEmail"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#user_allowed_to_set_recovery_email IdentityDomainsIdentitySetting#user_allowed_to_set_recovery_email}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putMyProfile">putMyProfile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putPosixGid">putPosixGid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putPosixUid">putPosixUid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putTags">putTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putTokens">putTokens</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetAttributeSets">resetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetEmitLockedMessageWhenUserIsLocked">resetEmitLockedMessageWhenUserIsLocked</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetExternalId">resetExternalId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetMyProfile">resetMyProfile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetOcid">resetOcid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetPosixGid">resetPosixGid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetPosixUid">resetPosixUid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetPrimaryEmailRequired">resetPrimaryEmailRequired</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetResourceTypeSchemaVersion">resetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetReturnInactiveOverLockedMessage">resetReturnInactiveOverLockedMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetTokens">resetTokens</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetUserAllowedToSetRecoveryEmail">resetUserAllowedToSetRecoveryEmail</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMyProfile` <a name="putMyProfile" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putMyProfile"></a>

```java
public void putMyProfile(IdentityDomainsIdentitySettingMyProfile value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putMyProfile.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfile">IdentityDomainsIdentitySettingMyProfile</a>

---

##### `putPosixGid` <a name="putPosixGid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putPosixGid"></a>

```java
public void putPosixGid(IdentityDomainsIdentitySettingPosixGid value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putPosixGid.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGid">IdentityDomainsIdentitySettingPosixGid</a>

---

##### `putPosixUid` <a name="putPosixUid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putPosixUid"></a>

```java
public void putPosixUid(IdentityDomainsIdentitySettingPosixUid value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putPosixUid.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUid">IdentityDomainsIdentitySettingPosixUid</a>

---

##### `putTags` <a name="putTags" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putTags"></a>

```java
public void putTags(IResolvable OR java.util.List<IdentityDomainsIdentitySettingTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putTags.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTags">IdentityDomainsIdentitySettingTags</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putTimeouts"></a>

```java
public void putTimeouts(IdentityDomainsIdentitySettingTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeouts">IdentityDomainsIdentitySettingTimeouts</a>

---

##### `putTokens` <a name="putTokens" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putTokens"></a>

```java
public void putTokens(IResolvable OR java.util.List<IdentityDomainsIdentitySettingTokens> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putTokens.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokens">IdentityDomainsIdentitySettingTokens</a>>

---

##### `resetAttributes` <a name="resetAttributes" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetAttributes"></a>

```java
public void resetAttributes()
```

##### `resetAttributeSets` <a name="resetAttributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetAttributeSets"></a>

```java
public void resetAttributeSets()
```

##### `resetAuthorization` <a name="resetAuthorization" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetAuthorization"></a>

```java
public void resetAuthorization()
```

##### `resetEmitLockedMessageWhenUserIsLocked` <a name="resetEmitLockedMessageWhenUserIsLocked" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetEmitLockedMessageWhenUserIsLocked"></a>

```java
public void resetEmitLockedMessageWhenUserIsLocked()
```

##### `resetExternalId` <a name="resetExternalId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetExternalId"></a>

```java
public void resetExternalId()
```

##### `resetMyProfile` <a name="resetMyProfile" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetMyProfile"></a>

```java
public void resetMyProfile()
```

##### `resetOcid` <a name="resetOcid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetOcid"></a>

```java
public void resetOcid()
```

##### `resetPosixGid` <a name="resetPosixGid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetPosixGid"></a>

```java
public void resetPosixGid()
```

##### `resetPosixUid` <a name="resetPosixUid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetPosixUid"></a>

```java
public void resetPosixUid()
```

##### `resetPrimaryEmailRequired` <a name="resetPrimaryEmailRequired" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetPrimaryEmailRequired"></a>

```java
public void resetPrimaryEmailRequired()
```

##### `resetResourceTypeSchemaVersion` <a name="resetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetResourceTypeSchemaVersion"></a>

```java
public void resetResourceTypeSchemaVersion()
```

##### `resetReturnInactiveOverLockedMessage` <a name="resetReturnInactiveOverLockedMessage" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetReturnInactiveOverLockedMessage"></a>

```java
public void resetReturnInactiveOverLockedMessage()
```

##### `resetTags` <a name="resetTags" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTokens` <a name="resetTokens" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetTokens"></a>

```java
public void resetTokens()
```

##### `resetUserAllowedToSetRecoveryEmail` <a name="resetUserAllowedToSetRecoveryEmail" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetUserAllowedToSetRecoveryEmail"></a>

```java
public void resetUserAllowedToSetRecoveryEmail()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityDomainsIdentitySetting resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_identity_setting.IdentityDomainsIdentitySetting;

IdentityDomainsIdentitySetting.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_identity_setting.IdentityDomainsIdentitySetting;

IdentityDomainsIdentitySetting.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_identity_setting.IdentityDomainsIdentitySetting;

IdentityDomainsIdentitySetting.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_identity_setting.IdentityDomainsIdentitySetting;

IdentityDomainsIdentitySetting.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IdentityDomainsIdentitySetting.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a IdentityDomainsIdentitySetting resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IdentityDomainsIdentitySetting to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IdentityDomainsIdentitySetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the IdentityDomainsIdentitySetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.compartmentOcid">compartmentOcid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.deleteInProgress">deleteInProgress</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.domainOcid">domainOcid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.idcsCreatedBy">idcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList">IdentityDomainsIdentitySettingIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.idcsLastModifiedBy">idcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList">IdentityDomainsIdentitySettingIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.idcsLastUpgradedInRelease">idcsLastUpgradedInRelease</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.idcsPreventedOperations">idcsPreventedOperations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList">IdentityDomainsIdentitySettingMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.myProfile">myProfile</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference">IdentityDomainsIdentitySettingMyProfileOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.posixGid">posixGid</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference">IdentityDomainsIdentitySettingPosixGidOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.posixUid">posixUid</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference">IdentityDomainsIdentitySettingPosixUidOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.removeInvalidEmails">removeInvalidEmails</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList">IdentityDomainsIdentitySettingTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.tenancyOcid">tenancyOcid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference">IdentityDomainsIdentitySettingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.tokens">tokens</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList">IdentityDomainsIdentitySettingTokensList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.attributeSetsInput">attributeSetsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.attributesInput">attributesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.authorizationInput">authorizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.emitLockedMessageWhenUserIsLockedInput">emitLockedMessageWhenUserIsLockedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.externalIdInput">externalIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.idcsEndpointInput">idcsEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.identitySettingIdInput">identitySettingIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.myProfileInput">myProfileInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfile">IdentityDomainsIdentitySettingMyProfile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.ocidInput">ocidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.posixGidInput">posixGidInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGid">IdentityDomainsIdentitySettingPosixGid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.posixUidInput">posixUidInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUid">IdentityDomainsIdentitySettingPosixUid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.primaryEmailRequiredInput">primaryEmailRequiredInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.resourceTypeSchemaVersionInput">resourceTypeSchemaVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.returnInactiveOverLockedMessageInput">returnInactiveOverLockedMessageInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.schemasInput">schemasInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.tagsInput">tagsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTags">IdentityDomainsIdentitySettingTags</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeouts">IdentityDomainsIdentitySettingTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.tokensInput">tokensInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokens">IdentityDomainsIdentitySettingTokens</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.userAllowedToSetRecoveryEmailInput">userAllowedToSetRecoveryEmailInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.attributes">attributes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.attributeSets">attributeSets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.authorization">authorization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.emitLockedMessageWhenUserIsLocked">emitLockedMessageWhenUserIsLocked</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.externalId">externalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.idcsEndpoint">idcsEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.identitySettingId">identitySettingId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.primaryEmailRequired">primaryEmailRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.returnInactiveOverLockedMessage">returnInactiveOverLockedMessage</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.schemas">schemas</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.userAllowedToSetRecoveryEmail">userAllowedToSetRecoveryEmail</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentOcid`<sup>Required</sup> <a name="compartmentOcid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.compartmentOcid"></a>

```java
public java.lang.String getCompartmentOcid();
```

- *Type:* java.lang.String

---

##### `deleteInProgress`<sup>Required</sup> <a name="deleteInProgress" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.deleteInProgress"></a>

```java
public IResolvable getDeleteInProgress();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `domainOcid`<sup>Required</sup> <a name="domainOcid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.domainOcid"></a>

```java
public java.lang.String getDomainOcid();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `idcsCreatedBy`<sup>Required</sup> <a name="idcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.idcsCreatedBy"></a>

```java
public IdentityDomainsIdentitySettingIdcsCreatedByList getIdcsCreatedBy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList">IdentityDomainsIdentitySettingIdcsCreatedByList</a>

---

##### `idcsLastModifiedBy`<sup>Required</sup> <a name="idcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.idcsLastModifiedBy"></a>

```java
public IdentityDomainsIdentitySettingIdcsLastModifiedByList getIdcsLastModifiedBy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList">IdentityDomainsIdentitySettingIdcsLastModifiedByList</a>

---

##### `idcsLastUpgradedInRelease`<sup>Required</sup> <a name="idcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.idcsLastUpgradedInRelease"></a>

```java
public java.lang.String getIdcsLastUpgradedInRelease();
```

- *Type:* java.lang.String

---

##### `idcsPreventedOperations`<sup>Required</sup> <a name="idcsPreventedOperations" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.idcsPreventedOperations"></a>

```java
public java.util.List<java.lang.String> getIdcsPreventedOperations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.meta"></a>

```java
public IdentityDomainsIdentitySettingMetaList getMeta();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList">IdentityDomainsIdentitySettingMetaList</a>

---

##### `myProfile`<sup>Required</sup> <a name="myProfile" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.myProfile"></a>

```java
public IdentityDomainsIdentitySettingMyProfileOutputReference getMyProfile();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference">IdentityDomainsIdentitySettingMyProfileOutputReference</a>

---

##### `posixGid`<sup>Required</sup> <a name="posixGid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.posixGid"></a>

```java
public IdentityDomainsIdentitySettingPosixGidOutputReference getPosixGid();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference">IdentityDomainsIdentitySettingPosixGidOutputReference</a>

---

##### `posixUid`<sup>Required</sup> <a name="posixUid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.posixUid"></a>

```java
public IdentityDomainsIdentitySettingPosixUidOutputReference getPosixUid();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference">IdentityDomainsIdentitySettingPosixUidOutputReference</a>

---

##### `removeInvalidEmails`<sup>Required</sup> <a name="removeInvalidEmails" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.removeInvalidEmails"></a>

```java
public IResolvable getRemoveInvalidEmails();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.tags"></a>

```java
public IdentityDomainsIdentitySettingTagsList getTags();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList">IdentityDomainsIdentitySettingTagsList</a>

---

##### `tenancyOcid`<sup>Required</sup> <a name="tenancyOcid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.tenancyOcid"></a>

```java
public java.lang.String getTenancyOcid();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.timeouts"></a>

```java
public IdentityDomainsIdentitySettingTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference">IdentityDomainsIdentitySettingTimeoutsOutputReference</a>

---

##### `tokens`<sup>Required</sup> <a name="tokens" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.tokens"></a>

```java
public IdentityDomainsIdentitySettingTokensList getTokens();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList">IdentityDomainsIdentitySettingTokensList</a>

---

##### `attributeSetsInput`<sup>Optional</sup> <a name="attributeSetsInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.attributeSetsInput"></a>

```java
public java.util.List<java.lang.String> getAttributeSetsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.attributesInput"></a>

```java
public java.lang.String getAttributesInput();
```

- *Type:* java.lang.String

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.authorizationInput"></a>

```java
public java.lang.String getAuthorizationInput();
```

- *Type:* java.lang.String

---

##### `emitLockedMessageWhenUserIsLockedInput`<sup>Optional</sup> <a name="emitLockedMessageWhenUserIsLockedInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.emitLockedMessageWhenUserIsLockedInput"></a>

```java
public java.lang.Object getEmitLockedMessageWhenUserIsLockedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `externalIdInput`<sup>Optional</sup> <a name="externalIdInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.externalIdInput"></a>

```java
public java.lang.String getExternalIdInput();
```

- *Type:* java.lang.String

---

##### `idcsEndpointInput`<sup>Optional</sup> <a name="idcsEndpointInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.idcsEndpointInput"></a>

```java
public java.lang.String getIdcsEndpointInput();
```

- *Type:* java.lang.String

---

##### `identitySettingIdInput`<sup>Optional</sup> <a name="identitySettingIdInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.identitySettingIdInput"></a>

```java
public java.lang.String getIdentitySettingIdInput();
```

- *Type:* java.lang.String

---

##### `myProfileInput`<sup>Optional</sup> <a name="myProfileInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.myProfileInput"></a>

```java
public IdentityDomainsIdentitySettingMyProfile getMyProfileInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfile">IdentityDomainsIdentitySettingMyProfile</a>

---

##### `ocidInput`<sup>Optional</sup> <a name="ocidInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.ocidInput"></a>

```java
public java.lang.String getOcidInput();
```

- *Type:* java.lang.String

---

##### `posixGidInput`<sup>Optional</sup> <a name="posixGidInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.posixGidInput"></a>

```java
public IdentityDomainsIdentitySettingPosixGid getPosixGidInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGid">IdentityDomainsIdentitySettingPosixGid</a>

---

##### `posixUidInput`<sup>Optional</sup> <a name="posixUidInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.posixUidInput"></a>

```java
public IdentityDomainsIdentitySettingPosixUid getPosixUidInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUid">IdentityDomainsIdentitySettingPosixUid</a>

---

##### `primaryEmailRequiredInput`<sup>Optional</sup> <a name="primaryEmailRequiredInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.primaryEmailRequiredInput"></a>

```java
public java.lang.Object getPrimaryEmailRequiredInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `resourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="resourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.resourceTypeSchemaVersionInput"></a>

```java
public java.lang.String getResourceTypeSchemaVersionInput();
```

- *Type:* java.lang.String

---

##### `returnInactiveOverLockedMessageInput`<sup>Optional</sup> <a name="returnInactiveOverLockedMessageInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.returnInactiveOverLockedMessageInput"></a>

```java
public java.lang.Object getReturnInactiveOverLockedMessageInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `schemasInput`<sup>Optional</sup> <a name="schemasInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.schemasInput"></a>

```java
public java.util.List<java.lang.String> getSchemasInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.tagsInput"></a>

```java
public java.lang.Object getTagsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTags">IdentityDomainsIdentitySettingTags</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeouts">IdentityDomainsIdentitySettingTimeouts</a>

---

##### `tokensInput`<sup>Optional</sup> <a name="tokensInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.tokensInput"></a>

```java
public java.lang.Object getTokensInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokens">IdentityDomainsIdentitySettingTokens</a>>

---

##### `userAllowedToSetRecoveryEmailInput`<sup>Optional</sup> <a name="userAllowedToSetRecoveryEmailInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.userAllowedToSetRecoveryEmailInput"></a>

```java
public java.lang.Object getUserAllowedToSetRecoveryEmailInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.attributes"></a>

```java
public java.lang.String getAttributes();
```

- *Type:* java.lang.String

---

##### `attributeSets`<sup>Required</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.attributeSets"></a>

```java
public java.util.List<java.lang.String> getAttributeSets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.authorization"></a>

```java
public java.lang.String getAuthorization();
```

- *Type:* java.lang.String

---

##### `emitLockedMessageWhenUserIsLocked`<sup>Required</sup> <a name="emitLockedMessageWhenUserIsLocked" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.emitLockedMessageWhenUserIsLocked"></a>

```java
public java.lang.Object getEmitLockedMessageWhenUserIsLocked();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.idcsEndpoint"></a>

```java
public java.lang.String getIdcsEndpoint();
```

- *Type:* java.lang.String

---

##### `identitySettingId`<sup>Required</sup> <a name="identitySettingId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.identitySettingId"></a>

```java
public java.lang.String getIdentitySettingId();
```

- *Type:* java.lang.String

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `primaryEmailRequired`<sup>Required</sup> <a name="primaryEmailRequired" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.primaryEmailRequired"></a>

```java
public java.lang.Object getPrimaryEmailRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.resourceTypeSchemaVersion"></a>

```java
public java.lang.String getResourceTypeSchemaVersion();
```

- *Type:* java.lang.String

---

##### `returnInactiveOverLockedMessage`<sup>Required</sup> <a name="returnInactiveOverLockedMessage" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.returnInactiveOverLockedMessage"></a>

```java
public java.lang.Object getReturnInactiveOverLockedMessage();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.schemas"></a>

```java
public java.util.List<java.lang.String> getSchemas();
```

- *Type:* java.util.List<java.lang.String>

---

##### `userAllowedToSetRecoveryEmail`<sup>Required</sup> <a name="userAllowedToSetRecoveryEmail" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.userAllowedToSetRecoveryEmail"></a>

```java
public java.lang.Object getUserAllowedToSetRecoveryEmail();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityDomainsIdentitySettingConfig <a name="IdentityDomainsIdentitySettingConfig" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_identity_setting.IdentityDomainsIdentitySettingConfig;

IdentityDomainsIdentitySettingConfig.builder()
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
    .identitySettingId(java.lang.String)
    .schemas(java.util.List<java.lang.String>)
//  .attributes(java.lang.String)
//  .attributeSets(java.util.List<java.lang.String>)
//  .authorization(java.lang.String)
//  .emitLockedMessageWhenUserIsLocked(java.lang.Boolean)
//  .emitLockedMessageWhenUserIsLocked(IResolvable)
//  .externalId(java.lang.String)
//  .myProfile(IdentityDomainsIdentitySettingMyProfile)
//  .ocid(java.lang.String)
//  .posixGid(IdentityDomainsIdentitySettingPosixGid)
//  .posixUid(IdentityDomainsIdentitySettingPosixUid)
//  .primaryEmailRequired(java.lang.Boolean)
//  .primaryEmailRequired(IResolvable)
//  .resourceTypeSchemaVersion(java.lang.String)
//  .returnInactiveOverLockedMessage(java.lang.Boolean)
//  .returnInactiveOverLockedMessage(IResolvable)
//  .tags(IResolvable)
//  .tags(java.util.List<IdentityDomainsIdentitySettingTags>)
//  .timeouts(IdentityDomainsIdentitySettingTimeouts)
//  .tokens(IResolvable)
//  .tokens(java.util.List<IdentityDomainsIdentitySettingTokens>)
//  .userAllowedToSetRecoveryEmail(java.lang.Boolean)
//  .userAllowedToSetRecoveryEmail(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.idcsEndpoint">idcsEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#idcs_endpoint IdentityDomainsIdentitySetting#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.identitySettingId">identitySettingId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#identity_setting_id IdentityDomainsIdentitySetting#identity_setting_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.schemas">schemas</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#schemas IdentityDomainsIdentitySetting#schemas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.attributes">attributes</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#attributes IdentityDomainsIdentitySetting#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.attributeSets">attributeSets</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#attribute_sets IdentityDomainsIdentitySetting#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.authorization">authorization</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#authorization IdentityDomainsIdentitySetting#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.emitLockedMessageWhenUserIsLocked">emitLockedMessageWhenUserIsLocked</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#emit_locked_message_when_user_is_locked IdentityDomainsIdentitySetting#emit_locked_message_when_user_is_locked}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.externalId">externalId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#external_id IdentityDomainsIdentitySetting#external_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.myProfile">myProfile</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfile">IdentityDomainsIdentitySettingMyProfile</a></code> | my_profile block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.ocid">ocid</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#ocid IdentityDomainsIdentitySetting#ocid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.posixGid">posixGid</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGid">IdentityDomainsIdentitySettingPosixGid</a></code> | posix_gid block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.posixUid">posixUid</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUid">IdentityDomainsIdentitySettingPosixUid</a></code> | posix_uid block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.primaryEmailRequired">primaryEmailRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#primary_email_required IdentityDomainsIdentitySetting#primary_email_required}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#resource_type_schema_version IdentityDomainsIdentitySetting#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.returnInactiveOverLockedMessage">returnInactiveOverLockedMessage</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#return_inactive_over_locked_message IdentityDomainsIdentitySetting#return_inactive_over_locked_message}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.tags">tags</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTags">IdentityDomainsIdentitySettingTags</a>></code> | tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeouts">IdentityDomainsIdentitySettingTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.tokens">tokens</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokens">IdentityDomainsIdentitySettingTokens</a>></code> | tokens block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.userAllowedToSetRecoveryEmail">userAllowedToSetRecoveryEmail</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#user_allowed_to_set_recovery_email IdentityDomainsIdentitySetting#user_allowed_to_set_recovery_email}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.idcsEndpoint"></a>

```java
public java.lang.String getIdcsEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#idcs_endpoint IdentityDomainsIdentitySetting#idcs_endpoint}.

---

##### `identitySettingId`<sup>Required</sup> <a name="identitySettingId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.identitySettingId"></a>

```java
public java.lang.String getIdentitySettingId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#identity_setting_id IdentityDomainsIdentitySetting#identity_setting_id}.

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.schemas"></a>

```java
public java.util.List<java.lang.String> getSchemas();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#schemas IdentityDomainsIdentitySetting#schemas}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.attributes"></a>

```java
public java.lang.String getAttributes();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#attributes IdentityDomainsIdentitySetting#attributes}.

---

##### `attributeSets`<sup>Optional</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.attributeSets"></a>

```java
public java.util.List<java.lang.String> getAttributeSets();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#attribute_sets IdentityDomainsIdentitySetting#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.authorization"></a>

```java
public java.lang.String getAuthorization();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#authorization IdentityDomainsIdentitySetting#authorization}.

---

##### `emitLockedMessageWhenUserIsLocked`<sup>Optional</sup> <a name="emitLockedMessageWhenUserIsLocked" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.emitLockedMessageWhenUserIsLocked"></a>

```java
public java.lang.Object getEmitLockedMessageWhenUserIsLocked();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#emit_locked_message_when_user_is_locked IdentityDomainsIdentitySetting#emit_locked_message_when_user_is_locked}.

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#external_id IdentityDomainsIdentitySetting#external_id}.

---

##### `myProfile`<sup>Optional</sup> <a name="myProfile" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.myProfile"></a>

```java
public IdentityDomainsIdentitySettingMyProfile getMyProfile();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfile">IdentityDomainsIdentitySettingMyProfile</a>

my_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#my_profile IdentityDomainsIdentitySetting#my_profile}

---

##### `ocid`<sup>Optional</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#ocid IdentityDomainsIdentitySetting#ocid}.

---

##### `posixGid`<sup>Optional</sup> <a name="posixGid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.posixGid"></a>

```java
public IdentityDomainsIdentitySettingPosixGid getPosixGid();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGid">IdentityDomainsIdentitySettingPosixGid</a>

posix_gid block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#posix_gid IdentityDomainsIdentitySetting#posix_gid}

---

##### `posixUid`<sup>Optional</sup> <a name="posixUid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.posixUid"></a>

```java
public IdentityDomainsIdentitySettingPosixUid getPosixUid();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUid">IdentityDomainsIdentitySettingPosixUid</a>

posix_uid block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#posix_uid IdentityDomainsIdentitySetting#posix_uid}

---

##### `primaryEmailRequired`<sup>Optional</sup> <a name="primaryEmailRequired" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.primaryEmailRequired"></a>

```java
public java.lang.Object getPrimaryEmailRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#primary_email_required IdentityDomainsIdentitySetting#primary_email_required}.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.resourceTypeSchemaVersion"></a>

```java
public java.lang.String getResourceTypeSchemaVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#resource_type_schema_version IdentityDomainsIdentitySetting#resource_type_schema_version}.

---

##### `returnInactiveOverLockedMessage`<sup>Optional</sup> <a name="returnInactiveOverLockedMessage" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.returnInactiveOverLockedMessage"></a>

```java
public java.lang.Object getReturnInactiveOverLockedMessage();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#return_inactive_over_locked_message IdentityDomainsIdentitySetting#return_inactive_over_locked_message}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.tags"></a>

```java
public java.lang.Object getTags();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTags">IdentityDomainsIdentitySettingTags</a>>

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#tags IdentityDomainsIdentitySetting#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.timeouts"></a>

```java
public IdentityDomainsIdentitySettingTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeouts">IdentityDomainsIdentitySettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#timeouts IdentityDomainsIdentitySetting#timeouts}

---

##### `tokens`<sup>Optional</sup> <a name="tokens" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.tokens"></a>

```java
public java.lang.Object getTokens();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokens">IdentityDomainsIdentitySettingTokens</a>>

tokens block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#tokens IdentityDomainsIdentitySetting#tokens}

---

##### `userAllowedToSetRecoveryEmail`<sup>Optional</sup> <a name="userAllowedToSetRecoveryEmail" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.userAllowedToSetRecoveryEmail"></a>

```java
public java.lang.Object getUserAllowedToSetRecoveryEmail();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#user_allowed_to_set_recovery_email IdentityDomainsIdentitySetting#user_allowed_to_set_recovery_email}.

---

### IdentityDomainsIdentitySettingIdcsCreatedBy <a name="IdentityDomainsIdentitySettingIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedBy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_identity_setting.IdentityDomainsIdentitySettingIdcsCreatedBy;

IdentityDomainsIdentitySettingIdcsCreatedBy.builder()
    .build();
```


### IdentityDomainsIdentitySettingIdcsLastModifiedBy <a name="IdentityDomainsIdentitySettingIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedBy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_identity_setting.IdentityDomainsIdentitySettingIdcsLastModifiedBy;

IdentityDomainsIdentitySettingIdcsLastModifiedBy.builder()
    .build();
```


### IdentityDomainsIdentitySettingMeta <a name="IdentityDomainsIdentitySettingMeta" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMeta.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_identity_setting.IdentityDomainsIdentitySettingMeta;

IdentityDomainsIdentitySettingMeta.builder()
    .build();
```


### IdentityDomainsIdentitySettingMyProfile <a name="IdentityDomainsIdentitySettingMyProfile" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfile"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfile.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_identity_setting.IdentityDomainsIdentitySettingMyProfile;

IdentityDomainsIdentitySettingMyProfile.builder()
//  .allowEndUsersToChangeTheirPassword(java.lang.Boolean)
//  .allowEndUsersToChangeTheirPassword(IResolvable)
//  .allowEndUsersToLinkTheirSupportAccount(java.lang.Boolean)
//  .allowEndUsersToLinkTheirSupportAccount(IResolvable)
//  .allowEndUsersToManageTheirCapabilities(java.lang.Boolean)
//  .allowEndUsersToManageTheirCapabilities(IResolvable)
//  .allowEndUsersToUpdateTheirSecuritySettings(java.lang.Boolean)
//  .allowEndUsersToUpdateTheirSecuritySettings(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfile.property.allowEndUsersToChangeTheirPassword">allowEndUsersToChangeTheirPassword</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#allow_end_users_to_change_their_password IdentityDomainsIdentitySetting#allow_end_users_to_change_their_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfile.property.allowEndUsersToLinkTheirSupportAccount">allowEndUsersToLinkTheirSupportAccount</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#allow_end_users_to_link_their_support_account IdentityDomainsIdentitySetting#allow_end_users_to_link_their_support_account}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfile.property.allowEndUsersToManageTheirCapabilities">allowEndUsersToManageTheirCapabilities</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#allow_end_users_to_manage_their_capabilities IdentityDomainsIdentitySetting#allow_end_users_to_manage_their_capabilities}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfile.property.allowEndUsersToUpdateTheirSecuritySettings">allowEndUsersToUpdateTheirSecuritySettings</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#allow_end_users_to_update_their_security_settings IdentityDomainsIdentitySetting#allow_end_users_to_update_their_security_settings}. |

---

##### `allowEndUsersToChangeTheirPassword`<sup>Optional</sup> <a name="allowEndUsersToChangeTheirPassword" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfile.property.allowEndUsersToChangeTheirPassword"></a>

```java
public java.lang.Object getAllowEndUsersToChangeTheirPassword();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#allow_end_users_to_change_their_password IdentityDomainsIdentitySetting#allow_end_users_to_change_their_password}.

---

##### `allowEndUsersToLinkTheirSupportAccount`<sup>Optional</sup> <a name="allowEndUsersToLinkTheirSupportAccount" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfile.property.allowEndUsersToLinkTheirSupportAccount"></a>

```java
public java.lang.Object getAllowEndUsersToLinkTheirSupportAccount();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#allow_end_users_to_link_their_support_account IdentityDomainsIdentitySetting#allow_end_users_to_link_their_support_account}.

---

##### `allowEndUsersToManageTheirCapabilities`<sup>Optional</sup> <a name="allowEndUsersToManageTheirCapabilities" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfile.property.allowEndUsersToManageTheirCapabilities"></a>

```java
public java.lang.Object getAllowEndUsersToManageTheirCapabilities();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#allow_end_users_to_manage_their_capabilities IdentityDomainsIdentitySetting#allow_end_users_to_manage_their_capabilities}.

---

##### `allowEndUsersToUpdateTheirSecuritySettings`<sup>Optional</sup> <a name="allowEndUsersToUpdateTheirSecuritySettings" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfile.property.allowEndUsersToUpdateTheirSecuritySettings"></a>

```java
public java.lang.Object getAllowEndUsersToUpdateTheirSecuritySettings();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#allow_end_users_to_update_their_security_settings IdentityDomainsIdentitySetting#allow_end_users_to_update_their_security_settings}.

---

### IdentityDomainsIdentitySettingPosixGid <a name="IdentityDomainsIdentitySettingPosixGid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGid"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGid.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_identity_setting.IdentityDomainsIdentitySettingPosixGid;

IdentityDomainsIdentitySettingPosixGid.builder()
//  .manualAssignmentEndsAt(java.lang.Number)
//  .manualAssignmentStartsFrom(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGid.property.manualAssignmentEndsAt">manualAssignmentEndsAt</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#manual_assignment_ends_at IdentityDomainsIdentitySetting#manual_assignment_ends_at}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGid.property.manualAssignmentStartsFrom">manualAssignmentStartsFrom</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#manual_assignment_starts_from IdentityDomainsIdentitySetting#manual_assignment_starts_from}. |

---

##### `manualAssignmentEndsAt`<sup>Optional</sup> <a name="manualAssignmentEndsAt" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGid.property.manualAssignmentEndsAt"></a>

```java
public java.lang.Number getManualAssignmentEndsAt();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#manual_assignment_ends_at IdentityDomainsIdentitySetting#manual_assignment_ends_at}.

---

##### `manualAssignmentStartsFrom`<sup>Optional</sup> <a name="manualAssignmentStartsFrom" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGid.property.manualAssignmentStartsFrom"></a>

```java
public java.lang.Number getManualAssignmentStartsFrom();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#manual_assignment_starts_from IdentityDomainsIdentitySetting#manual_assignment_starts_from}.

---

### IdentityDomainsIdentitySettingPosixUid <a name="IdentityDomainsIdentitySettingPosixUid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUid"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUid.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_identity_setting.IdentityDomainsIdentitySettingPosixUid;

IdentityDomainsIdentitySettingPosixUid.builder()
//  .manualAssignmentEndsAt(java.lang.Number)
//  .manualAssignmentStartsFrom(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUid.property.manualAssignmentEndsAt">manualAssignmentEndsAt</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#manual_assignment_ends_at IdentityDomainsIdentitySetting#manual_assignment_ends_at}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUid.property.manualAssignmentStartsFrom">manualAssignmentStartsFrom</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#manual_assignment_starts_from IdentityDomainsIdentitySetting#manual_assignment_starts_from}. |

---

##### `manualAssignmentEndsAt`<sup>Optional</sup> <a name="manualAssignmentEndsAt" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUid.property.manualAssignmentEndsAt"></a>

```java
public java.lang.Number getManualAssignmentEndsAt();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#manual_assignment_ends_at IdentityDomainsIdentitySetting#manual_assignment_ends_at}.

---

##### `manualAssignmentStartsFrom`<sup>Optional</sup> <a name="manualAssignmentStartsFrom" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUid.property.manualAssignmentStartsFrom"></a>

```java
public java.lang.Number getManualAssignmentStartsFrom();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#manual_assignment_starts_from IdentityDomainsIdentitySetting#manual_assignment_starts_from}.

---

### IdentityDomainsIdentitySettingTags <a name="IdentityDomainsIdentitySettingTags" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_identity_setting.IdentityDomainsIdentitySettingTags;

IdentityDomainsIdentitySettingTags.builder()
    .key(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#key IdentityDomainsIdentitySetting#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#value IdentityDomainsIdentitySetting#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#key IdentityDomainsIdentitySetting#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#value IdentityDomainsIdentitySetting#value}.

---

### IdentityDomainsIdentitySettingTimeouts <a name="IdentityDomainsIdentitySettingTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_identity_setting.IdentityDomainsIdentitySettingTimeouts;

IdentityDomainsIdentitySettingTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#create IdentityDomainsIdentitySetting#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#delete IdentityDomainsIdentitySetting#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#update IdentityDomainsIdentitySetting#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#create IdentityDomainsIdentitySetting#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#delete IdentityDomainsIdentitySetting#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#update IdentityDomainsIdentitySetting#update}.

---

### IdentityDomainsIdentitySettingTokens <a name="IdentityDomainsIdentitySettingTokens" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokens"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokens.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_identity_setting.IdentityDomainsIdentitySettingTokens;

IdentityDomainsIdentitySettingTokens.builder()
    .type(java.lang.String)
//  .expiresAfter(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokens.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#type IdentityDomainsIdentitySetting#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokens.property.expiresAfter">expiresAfter</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#expires_after IdentityDomainsIdentitySetting#expires_after}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokens.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#type IdentityDomainsIdentitySetting#type}.

---

##### `expiresAfter`<sup>Optional</sup> <a name="expiresAfter" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokens.property.expiresAfter"></a>

```java
public java.lang.Number getExpiresAfter();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#expires_after IdentityDomainsIdentitySetting#expires_after}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityDomainsIdentitySettingIdcsCreatedByList <a name="IdentityDomainsIdentitySettingIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_identity_setting.IdentityDomainsIdentitySettingIdcsCreatedByList;

new IdentityDomainsIdentitySettingIdcsCreatedByList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.get"></a>

```java
public IdentityDomainsIdentitySettingIdcsCreatedByOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### IdentityDomainsIdentitySettingIdcsCreatedByOutputReference <a name="IdentityDomainsIdentitySettingIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_identity_setting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference;

new IdentityDomainsIdentitySettingIdcsCreatedByOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.property.display">display</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedBy">IdentityDomainsIdentitySettingIdcsCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.property.display"></a>

```java
public java.lang.String getDisplay();
```

- *Type:* java.lang.String

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.property.internalValue"></a>

```java
public IdentityDomainsIdentitySettingIdcsCreatedBy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedBy">IdentityDomainsIdentitySettingIdcsCreatedBy</a>

---


### IdentityDomainsIdentitySettingIdcsLastModifiedByList <a name="IdentityDomainsIdentitySettingIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_identity_setting.IdentityDomainsIdentitySettingIdcsLastModifiedByList;

new IdentityDomainsIdentitySettingIdcsLastModifiedByList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.get"></a>

```java
public IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference <a name="IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_identity_setting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference;

new IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedBy">IdentityDomainsIdentitySettingIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.property.display"></a>

```java
public java.lang.String getDisplay();
```

- *Type:* java.lang.String

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.property.internalValue"></a>

```java
public IdentityDomainsIdentitySettingIdcsLastModifiedBy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedBy">IdentityDomainsIdentitySettingIdcsLastModifiedBy</a>

---


### IdentityDomainsIdentitySettingMetaList <a name="IdentityDomainsIdentitySettingMetaList" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_identity_setting.IdentityDomainsIdentitySettingMetaList;

new IdentityDomainsIdentitySettingMetaList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.get"></a>

```java
public IdentityDomainsIdentitySettingMetaOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### IdentityDomainsIdentitySettingMetaOutputReference <a name="IdentityDomainsIdentitySettingMetaOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_identity_setting.IdentityDomainsIdentitySettingMetaOutputReference;

new IdentityDomainsIdentitySettingMetaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.property.created">created</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.property.lastModified">lastModified</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMeta">IdentityDomainsIdentitySettingMeta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.property.created"></a>

```java
public java.lang.String getCreated();
```

- *Type:* java.lang.String

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.property.lastModified"></a>

```java
public java.lang.String getLastModified();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.property.internalValue"></a>

```java
public IdentityDomainsIdentitySettingMeta getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMeta">IdentityDomainsIdentitySettingMeta</a>

---


### IdentityDomainsIdentitySettingMyProfileOutputReference <a name="IdentityDomainsIdentitySettingMyProfileOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_identity_setting.IdentityDomainsIdentitySettingMyProfileOutputReference;

new IdentityDomainsIdentitySettingMyProfileOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.resetAllowEndUsersToChangeTheirPassword">resetAllowEndUsersToChangeTheirPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.resetAllowEndUsersToLinkTheirSupportAccount">resetAllowEndUsersToLinkTheirSupportAccount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.resetAllowEndUsersToManageTheirCapabilities">resetAllowEndUsersToManageTheirCapabilities</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.resetAllowEndUsersToUpdateTheirSecuritySettings">resetAllowEndUsersToUpdateTheirSecuritySettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowEndUsersToChangeTheirPassword` <a name="resetAllowEndUsersToChangeTheirPassword" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.resetAllowEndUsersToChangeTheirPassword"></a>

```java
public void resetAllowEndUsersToChangeTheirPassword()
```

##### `resetAllowEndUsersToLinkTheirSupportAccount` <a name="resetAllowEndUsersToLinkTheirSupportAccount" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.resetAllowEndUsersToLinkTheirSupportAccount"></a>

```java
public void resetAllowEndUsersToLinkTheirSupportAccount()
```

##### `resetAllowEndUsersToManageTheirCapabilities` <a name="resetAllowEndUsersToManageTheirCapabilities" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.resetAllowEndUsersToManageTheirCapabilities"></a>

```java
public void resetAllowEndUsersToManageTheirCapabilities()
```

##### `resetAllowEndUsersToUpdateTheirSecuritySettings` <a name="resetAllowEndUsersToUpdateTheirSecuritySettings" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.resetAllowEndUsersToUpdateTheirSecuritySettings"></a>

```java
public void resetAllowEndUsersToUpdateTheirSecuritySettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.allowEndUsersToChangeTheirPasswordInput">allowEndUsersToChangeTheirPasswordInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.allowEndUsersToLinkTheirSupportAccountInput">allowEndUsersToLinkTheirSupportAccountInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.allowEndUsersToManageTheirCapabilitiesInput">allowEndUsersToManageTheirCapabilitiesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.allowEndUsersToUpdateTheirSecuritySettingsInput">allowEndUsersToUpdateTheirSecuritySettingsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.allowEndUsersToChangeTheirPassword">allowEndUsersToChangeTheirPassword</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.allowEndUsersToLinkTheirSupportAccount">allowEndUsersToLinkTheirSupportAccount</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.allowEndUsersToManageTheirCapabilities">allowEndUsersToManageTheirCapabilities</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.allowEndUsersToUpdateTheirSecuritySettings">allowEndUsersToUpdateTheirSecuritySettings</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfile">IdentityDomainsIdentitySettingMyProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowEndUsersToChangeTheirPasswordInput`<sup>Optional</sup> <a name="allowEndUsersToChangeTheirPasswordInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.allowEndUsersToChangeTheirPasswordInput"></a>

```java
public java.lang.Object getAllowEndUsersToChangeTheirPasswordInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowEndUsersToLinkTheirSupportAccountInput`<sup>Optional</sup> <a name="allowEndUsersToLinkTheirSupportAccountInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.allowEndUsersToLinkTheirSupportAccountInput"></a>

```java
public java.lang.Object getAllowEndUsersToLinkTheirSupportAccountInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowEndUsersToManageTheirCapabilitiesInput`<sup>Optional</sup> <a name="allowEndUsersToManageTheirCapabilitiesInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.allowEndUsersToManageTheirCapabilitiesInput"></a>

```java
public java.lang.Object getAllowEndUsersToManageTheirCapabilitiesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowEndUsersToUpdateTheirSecuritySettingsInput`<sup>Optional</sup> <a name="allowEndUsersToUpdateTheirSecuritySettingsInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.allowEndUsersToUpdateTheirSecuritySettingsInput"></a>

```java
public java.lang.Object getAllowEndUsersToUpdateTheirSecuritySettingsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowEndUsersToChangeTheirPassword`<sup>Required</sup> <a name="allowEndUsersToChangeTheirPassword" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.allowEndUsersToChangeTheirPassword"></a>

```java
public java.lang.Object getAllowEndUsersToChangeTheirPassword();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowEndUsersToLinkTheirSupportAccount`<sup>Required</sup> <a name="allowEndUsersToLinkTheirSupportAccount" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.allowEndUsersToLinkTheirSupportAccount"></a>

```java
public java.lang.Object getAllowEndUsersToLinkTheirSupportAccount();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowEndUsersToManageTheirCapabilities`<sup>Required</sup> <a name="allowEndUsersToManageTheirCapabilities" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.allowEndUsersToManageTheirCapabilities"></a>

```java
public java.lang.Object getAllowEndUsersToManageTheirCapabilities();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowEndUsersToUpdateTheirSecuritySettings`<sup>Required</sup> <a name="allowEndUsersToUpdateTheirSecuritySettings" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.allowEndUsersToUpdateTheirSecuritySettings"></a>

```java
public java.lang.Object getAllowEndUsersToUpdateTheirSecuritySettings();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.internalValue"></a>

```java
public IdentityDomainsIdentitySettingMyProfile getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfile">IdentityDomainsIdentitySettingMyProfile</a>

---


### IdentityDomainsIdentitySettingPosixGidOutputReference <a name="IdentityDomainsIdentitySettingPosixGidOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_identity_setting.IdentityDomainsIdentitySettingPosixGidOutputReference;

new IdentityDomainsIdentitySettingPosixGidOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.resetManualAssignmentEndsAt">resetManualAssignmentEndsAt</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.resetManualAssignmentStartsFrom">resetManualAssignmentStartsFrom</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetManualAssignmentEndsAt` <a name="resetManualAssignmentEndsAt" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.resetManualAssignmentEndsAt"></a>

```java
public void resetManualAssignmentEndsAt()
```

##### `resetManualAssignmentStartsFrom` <a name="resetManualAssignmentStartsFrom" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.resetManualAssignmentStartsFrom"></a>

```java
public void resetManualAssignmentStartsFrom()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.property.manualAssignmentEndsAtInput">manualAssignmentEndsAtInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.property.manualAssignmentStartsFromInput">manualAssignmentStartsFromInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.property.manualAssignmentEndsAt">manualAssignmentEndsAt</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.property.manualAssignmentStartsFrom">manualAssignmentStartsFrom</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGid">IdentityDomainsIdentitySettingPosixGid</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `manualAssignmentEndsAtInput`<sup>Optional</sup> <a name="manualAssignmentEndsAtInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.property.manualAssignmentEndsAtInput"></a>

```java
public java.lang.Number getManualAssignmentEndsAtInput();
```

- *Type:* java.lang.Number

---

##### `manualAssignmentStartsFromInput`<sup>Optional</sup> <a name="manualAssignmentStartsFromInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.property.manualAssignmentStartsFromInput"></a>

```java
public java.lang.Number getManualAssignmentStartsFromInput();
```

- *Type:* java.lang.Number

---

##### `manualAssignmentEndsAt`<sup>Required</sup> <a name="manualAssignmentEndsAt" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.property.manualAssignmentEndsAt"></a>

```java
public java.lang.Number getManualAssignmentEndsAt();
```

- *Type:* java.lang.Number

---

##### `manualAssignmentStartsFrom`<sup>Required</sup> <a name="manualAssignmentStartsFrom" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.property.manualAssignmentStartsFrom"></a>

```java
public java.lang.Number getManualAssignmentStartsFrom();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.property.internalValue"></a>

```java
public IdentityDomainsIdentitySettingPosixGid getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGid">IdentityDomainsIdentitySettingPosixGid</a>

---


### IdentityDomainsIdentitySettingPosixUidOutputReference <a name="IdentityDomainsIdentitySettingPosixUidOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_identity_setting.IdentityDomainsIdentitySettingPosixUidOutputReference;

new IdentityDomainsIdentitySettingPosixUidOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.resetManualAssignmentEndsAt">resetManualAssignmentEndsAt</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.resetManualAssignmentStartsFrom">resetManualAssignmentStartsFrom</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetManualAssignmentEndsAt` <a name="resetManualAssignmentEndsAt" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.resetManualAssignmentEndsAt"></a>

```java
public void resetManualAssignmentEndsAt()
```

##### `resetManualAssignmentStartsFrom` <a name="resetManualAssignmentStartsFrom" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.resetManualAssignmentStartsFrom"></a>

```java
public void resetManualAssignmentStartsFrom()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.property.manualAssignmentEndsAtInput">manualAssignmentEndsAtInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.property.manualAssignmentStartsFromInput">manualAssignmentStartsFromInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.property.manualAssignmentEndsAt">manualAssignmentEndsAt</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.property.manualAssignmentStartsFrom">manualAssignmentStartsFrom</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUid">IdentityDomainsIdentitySettingPosixUid</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `manualAssignmentEndsAtInput`<sup>Optional</sup> <a name="manualAssignmentEndsAtInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.property.manualAssignmentEndsAtInput"></a>

```java
public java.lang.Number getManualAssignmentEndsAtInput();
```

- *Type:* java.lang.Number

---

##### `manualAssignmentStartsFromInput`<sup>Optional</sup> <a name="manualAssignmentStartsFromInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.property.manualAssignmentStartsFromInput"></a>

```java
public java.lang.Number getManualAssignmentStartsFromInput();
```

- *Type:* java.lang.Number

---

##### `manualAssignmentEndsAt`<sup>Required</sup> <a name="manualAssignmentEndsAt" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.property.manualAssignmentEndsAt"></a>

```java
public java.lang.Number getManualAssignmentEndsAt();
```

- *Type:* java.lang.Number

---

##### `manualAssignmentStartsFrom`<sup>Required</sup> <a name="manualAssignmentStartsFrom" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.property.manualAssignmentStartsFrom"></a>

```java
public java.lang.Number getManualAssignmentStartsFrom();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.property.internalValue"></a>

```java
public IdentityDomainsIdentitySettingPosixUid getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUid">IdentityDomainsIdentitySettingPosixUid</a>

---


### IdentityDomainsIdentitySettingTagsList <a name="IdentityDomainsIdentitySettingTagsList" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_identity_setting.IdentityDomainsIdentitySettingTagsList;

new IdentityDomainsIdentitySettingTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.get"></a>

```java
public IdentityDomainsIdentitySettingTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTags">IdentityDomainsIdentitySettingTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTags">IdentityDomainsIdentitySettingTags</a>>

---


### IdentityDomainsIdentitySettingTagsOutputReference <a name="IdentityDomainsIdentitySettingTagsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_identity_setting.IdentityDomainsIdentitySettingTagsOutputReference;

new IdentityDomainsIdentitySettingTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTags">IdentityDomainsIdentitySettingTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTags">IdentityDomainsIdentitySettingTags</a>

---


### IdentityDomainsIdentitySettingTimeoutsOutputReference <a name="IdentityDomainsIdentitySettingTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_identity_setting.IdentityDomainsIdentitySettingTimeoutsOutputReference;

new IdentityDomainsIdentitySettingTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeouts">IdentityDomainsIdentitySettingTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeouts">IdentityDomainsIdentitySettingTimeouts</a>

---


### IdentityDomainsIdentitySettingTokensList <a name="IdentityDomainsIdentitySettingTokensList" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_identity_setting.IdentityDomainsIdentitySettingTokensList;

new IdentityDomainsIdentitySettingTokensList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.get"></a>

```java
public IdentityDomainsIdentitySettingTokensOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokens">IdentityDomainsIdentitySettingTokens</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokens">IdentityDomainsIdentitySettingTokens</a>>

---


### IdentityDomainsIdentitySettingTokensOutputReference <a name="IdentityDomainsIdentitySettingTokensOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_identity_setting.IdentityDomainsIdentitySettingTokensOutputReference;

new IdentityDomainsIdentitySettingTokensOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.resetExpiresAfter">resetExpiresAfter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExpiresAfter` <a name="resetExpiresAfter" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.resetExpiresAfter"></a>

```java
public void resetExpiresAfter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.property.expiresAfterInput">expiresAfterInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.property.expiresAfter">expiresAfter</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokens">IdentityDomainsIdentitySettingTokens</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expiresAfterInput`<sup>Optional</sup> <a name="expiresAfterInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.property.expiresAfterInput"></a>

```java
public java.lang.Number getExpiresAfterInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `expiresAfter`<sup>Required</sup> <a name="expiresAfter" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.property.expiresAfter"></a>

```java
public java.lang.Number getExpiresAfter();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokens">IdentityDomainsIdentitySettingTokens</a>

---



