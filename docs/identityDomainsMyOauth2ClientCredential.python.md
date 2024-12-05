# `identityDomainsMyOauth2ClientCredential` Submodule <a name="`identityDomainsMyOauth2ClientCredential` Submodule" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityDomainsMyOauth2ClientCredential <a name="IdentityDomainsMyOauth2ClientCredential" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_oauth2client_credential oci_identity_domains_my_oauth2client_credential}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_my_oauth2_client_credential

identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential(
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
  scopes: typing.Union[IResolvable, typing.List[IdentityDomainsMyOauth2ClientCredentialScopes]],
  authorization: str = None,
  description: str = None,
  expires_on: str = None,
  is_reset_secret: typing.Union[bool, IResolvable] = None,
  ocid: str = None,
  resource_type_schema_version: str = None,
  status: str = None,
  tags: typing.Union[IResolvable, typing.List[IdentityDomainsMyOauth2ClientCredentialTags]] = None,
  timeouts: IdentityDomainsMyOauth2ClientCredentialTimeouts = None,
  user: IdentityDomainsMyOauth2ClientCredentialUser = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.Initializer.parameter.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_oauth2client_credential#idcs_endpoint IdentityDomainsMyOauth2ClientCredential#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_oauth2client_credential#name IdentityDomainsMyOauth2ClientCredential#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.Initializer.parameter.schemas">schemas</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_oauth2client_credential#schemas IdentityDomainsMyOauth2ClientCredential#schemas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.Initializer.parameter.scopes">scopes</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopes">IdentityDomainsMyOauth2ClientCredentialScopes</a>]]</code> | scopes block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.Initializer.parameter.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_oauth2client_credential#authorization IdentityDomainsMyOauth2ClientCredential#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_oauth2client_credential#description IdentityDomainsMyOauth2ClientCredential#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.Initializer.parameter.expiresOn">expires_on</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_oauth2client_credential#expires_on IdentityDomainsMyOauth2ClientCredential#expires_on}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.Initializer.parameter.isResetSecret">is_reset_secret</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_oauth2client_credential#is_reset_secret IdentityDomainsMyOauth2ClientCredential#is_reset_secret}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.Initializer.parameter.ocid">ocid</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_oauth2client_credential#ocid IdentityDomainsMyOauth2ClientCredential#ocid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.Initializer.parameter.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_oauth2client_credential#resource_type_schema_version IdentityDomainsMyOauth2ClientCredential#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_oauth2client_credential#status IdentityDomainsMyOauth2ClientCredential#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.Initializer.parameter.tags">tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTags">IdentityDomainsMyOauth2ClientCredentialTags</a>]]</code> | tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeouts">IdentityDomainsMyOauth2ClientCredentialTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.Initializer.parameter.user">user</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUser">IdentityDomainsMyOauth2ClientCredentialUser</a></code> | user block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.Initializer.parameter.idcsEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_oauth2client_credential#idcs_endpoint IdentityDomainsMyOauth2ClientCredential#idcs_endpoint}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_oauth2client_credential#name IdentityDomainsMyOauth2ClientCredential#name}.

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.Initializer.parameter.schemas"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_oauth2client_credential#schemas IdentityDomainsMyOauth2ClientCredential#schemas}.

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.Initializer.parameter.scopes"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopes">IdentityDomainsMyOauth2ClientCredentialScopes</a>]]

scopes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_oauth2client_credential#scopes IdentityDomainsMyOauth2ClientCredential#scopes}

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.Initializer.parameter.authorization"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_oauth2client_credential#authorization IdentityDomainsMyOauth2ClientCredential#authorization}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_oauth2client_credential#description IdentityDomainsMyOauth2ClientCredential#description}.

---

##### `expires_on`<sup>Optional</sup> <a name="expires_on" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.Initializer.parameter.expiresOn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_oauth2client_credential#expires_on IdentityDomainsMyOauth2ClientCredential#expires_on}.

---

##### `is_reset_secret`<sup>Optional</sup> <a name="is_reset_secret" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.Initializer.parameter.isResetSecret"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_oauth2client_credential#is_reset_secret IdentityDomainsMyOauth2ClientCredential#is_reset_secret}.

---

##### `ocid`<sup>Optional</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.Initializer.parameter.ocid"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_oauth2client_credential#ocid IdentityDomainsMyOauth2ClientCredential#ocid}.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.Initializer.parameter.resourceTypeSchemaVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_oauth2client_credential#resource_type_schema_version IdentityDomainsMyOauth2ClientCredential#resource_type_schema_version}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_oauth2client_credential#status IdentityDomainsMyOauth2ClientCredential#status}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.Initializer.parameter.tags"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTags">IdentityDomainsMyOauth2ClientCredentialTags</a>]]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_oauth2client_credential#tags IdentityDomainsMyOauth2ClientCredential#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeouts">IdentityDomainsMyOauth2ClientCredentialTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_oauth2client_credential#timeouts IdentityDomainsMyOauth2ClientCredential#timeouts}

---

##### `user`<sup>Optional</sup> <a name="user" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.Initializer.parameter.user"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUser">IdentityDomainsMyOauth2ClientCredentialUser</a>

user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_oauth2client_credential#user IdentityDomainsMyOauth2ClientCredential#user}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.putScopes">put_scopes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.putUser">put_user</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.resetAuthorization">reset_authorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.resetExpiresOn">reset_expires_on</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.resetIsResetSecret">reset_is_reset_secret</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.resetOcid">reset_ocid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.resetResourceTypeSchemaVersion">reset_resource_type_schema_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.resetUser">reset_user</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_scopes` <a name="put_scopes" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.putScopes"></a>

```python
def put_scopes(
  value: typing.Union[IResolvable, typing.List[IdentityDomainsMyOauth2ClientCredentialScopes]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.putScopes.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopes">IdentityDomainsMyOauth2ClientCredentialScopes</a>]]

---

##### `put_tags` <a name="put_tags" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.putTags"></a>

```python
def put_tags(
  value: typing.Union[IResolvable, typing.List[IdentityDomainsMyOauth2ClientCredentialTags]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.putTags.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTags">IdentityDomainsMyOauth2ClientCredentialTags</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_oauth2client_credential#create IdentityDomainsMyOauth2ClientCredential#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_oauth2client_credential#delete IdentityDomainsMyOauth2ClientCredential#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_oauth2client_credential#update IdentityDomainsMyOauth2ClientCredential#update}.

---

##### `put_user` <a name="put_user" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.putUser"></a>

```python
def put_user(
  ocid: str = None,
  value: str = None
) -> None
```

###### `ocid`<sup>Optional</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.putUser.parameter.ocid"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_oauth2client_credential#ocid IdentityDomainsMyOauth2ClientCredential#ocid}.

---

###### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.putUser.parameter.value"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_oauth2client_credential#value IdentityDomainsMyOauth2ClientCredential#value}.

---

##### `reset_authorization` <a name="reset_authorization" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.resetAuthorization"></a>

```python
def reset_authorization() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_expires_on` <a name="reset_expires_on" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.resetExpiresOn"></a>

```python
def reset_expires_on() -> None
```

##### `reset_is_reset_secret` <a name="reset_is_reset_secret" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.resetIsResetSecret"></a>

```python
def reset_is_reset_secret() -> None
```

##### `reset_ocid` <a name="reset_ocid" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.resetOcid"></a>

```python
def reset_ocid() -> None
```

##### `reset_resource_type_schema_version` <a name="reset_resource_type_schema_version" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.resetResourceTypeSchemaVersion"></a>

```python
def reset_resource_type_schema_version() -> None
```

##### `reset_status` <a name="reset_status" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_tags` <a name="reset_tags" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_user` <a name="reset_user" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.resetUser"></a>

```python
def reset_user() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IdentityDomainsMyOauth2ClientCredential resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_my_oauth2_client_credential

identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_my_oauth2_client_credential

identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_my_oauth2_client_credential

identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_my_oauth2_client_credential

identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IdentityDomainsMyOauth2ClientCredential resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IdentityDomainsMyOauth2ClientCredential to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IdentityDomainsMyOauth2ClientCredential that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_oauth2client_credential#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IdentityDomainsMyOauth2ClientCredential to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.compartmentOcid">compartment_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.deleteInProgress">delete_in_progress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.domainOcid">domain_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.idcsCreatedBy">idcs_created_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByList">IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.idcsLastModifiedBy">idcs_last_modified_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByList">IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.idcsLastUpgradedInRelease">idcs_last_upgraded_in_release</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.idcsPreventedOperations">idcs_prevented_operations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaList">IdentityDomainsMyOauth2ClientCredentialMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.scopes">scopes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesList">IdentityDomainsMyOauth2ClientCredentialScopesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsList">IdentityDomainsMyOauth2ClientCredentialTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.tenancyOcid">tenancy_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeoutsOutputReference">IdentityDomainsMyOauth2ClientCredentialTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.user">user</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUserOutputReference">IdentityDomainsMyOauth2ClientCredentialUserOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.authorizationInput">authorization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.expiresOnInput">expires_on_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.idcsEndpointInput">idcs_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.isResetSecretInput">is_reset_secret_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.ocidInput">ocid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.resourceTypeSchemaVersionInput">resource_type_schema_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.schemasInput">schemas_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.scopesInput">scopes_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopes">IdentityDomainsMyOauth2ClientCredentialScopes</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.tagsInput">tags_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTags">IdentityDomainsMyOauth2ClientCredentialTags</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeouts">IdentityDomainsMyOauth2ClientCredentialTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.userInput">user_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUser">IdentityDomainsMyOauth2ClientCredentialUser</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.expiresOn">expires_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.isResetSecret">is_reset_secret</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.status">status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_ocid`<sup>Required</sup> <a name="compartment_ocid" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.compartmentOcid"></a>

```python
compartment_ocid: str
```

- *Type:* str

---

##### `delete_in_progress`<sup>Required</sup> <a name="delete_in_progress" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.deleteInProgress"></a>

```python
delete_in_progress: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `domain_ocid`<sup>Required</sup> <a name="domain_ocid" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.domainOcid"></a>

```python
domain_ocid: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_created_by`<sup>Required</sup> <a name="idcs_created_by" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.idcsCreatedBy"></a>

```python
idcs_created_by: IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByList">IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByList</a>

---

##### `idcs_last_modified_by`<sup>Required</sup> <a name="idcs_last_modified_by" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.idcsLastModifiedBy"></a>

```python
idcs_last_modified_by: IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByList">IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByList</a>

---

##### `idcs_last_upgraded_in_release`<sup>Required</sup> <a name="idcs_last_upgraded_in_release" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.idcsLastUpgradedInRelease"></a>

```python
idcs_last_upgraded_in_release: str
```

- *Type:* str

---

##### `idcs_prevented_operations`<sup>Required</sup> <a name="idcs_prevented_operations" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.idcsPreventedOperations"></a>

```python
idcs_prevented_operations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.meta"></a>

```python
meta: IdentityDomainsMyOauth2ClientCredentialMetaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaList">IdentityDomainsMyOauth2ClientCredentialMetaList</a>

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.scopes"></a>

```python
scopes: IdentityDomainsMyOauth2ClientCredentialScopesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesList">IdentityDomainsMyOauth2ClientCredentialScopesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.tags"></a>

```python
tags: IdentityDomainsMyOauth2ClientCredentialTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsList">IdentityDomainsMyOauth2ClientCredentialTagsList</a>

---

##### `tenancy_ocid`<sup>Required</sup> <a name="tenancy_ocid" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.tenancyOcid"></a>

```python
tenancy_ocid: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.timeouts"></a>

```python
timeouts: IdentityDomainsMyOauth2ClientCredentialTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeoutsOutputReference">IdentityDomainsMyOauth2ClientCredentialTimeoutsOutputReference</a>

---

##### `user`<sup>Required</sup> <a name="user" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.user"></a>

```python
user: IdentityDomainsMyOauth2ClientCredentialUserOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUserOutputReference">IdentityDomainsMyOauth2ClientCredentialUserOutputReference</a>

---

##### `authorization_input`<sup>Optional</sup> <a name="authorization_input" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.authorizationInput"></a>

```python
authorization_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expires_on_input`<sup>Optional</sup> <a name="expires_on_input" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.expiresOnInput"></a>

```python
expires_on_input: str
```

- *Type:* str

---

##### `idcs_endpoint_input`<sup>Optional</sup> <a name="idcs_endpoint_input" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.idcsEndpointInput"></a>

```python
idcs_endpoint_input: str
```

- *Type:* str

---

##### `is_reset_secret_input`<sup>Optional</sup> <a name="is_reset_secret_input" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.isResetSecretInput"></a>

```python
is_reset_secret_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `ocid_input`<sup>Optional</sup> <a name="ocid_input" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.ocidInput"></a>

```python
ocid_input: str
```

- *Type:* str

---

##### `resource_type_schema_version_input`<sup>Optional</sup> <a name="resource_type_schema_version_input" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.resourceTypeSchemaVersionInput"></a>

```python
resource_type_schema_version_input: str
```

- *Type:* str

---

##### `schemas_input`<sup>Optional</sup> <a name="schemas_input" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.schemasInput"></a>

```python
schemas_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scopes_input`<sup>Optional</sup> <a name="scopes_input" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.scopesInput"></a>

```python
scopes_input: typing.Union[IResolvable, typing.List[IdentityDomainsMyOauth2ClientCredentialScopes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopes">IdentityDomainsMyOauth2ClientCredentialScopes</a>]]

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.tagsInput"></a>

```python
tags_input: typing.Union[IResolvable, typing.List[IdentityDomainsMyOauth2ClientCredentialTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTags">IdentityDomainsMyOauth2ClientCredentialTags</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, IdentityDomainsMyOauth2ClientCredentialTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeouts">IdentityDomainsMyOauth2ClientCredentialTimeouts</a>]

---

##### `user_input`<sup>Optional</sup> <a name="user_input" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.userInput"></a>

```python
user_input: IdentityDomainsMyOauth2ClientCredentialUser
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUser">IdentityDomainsMyOauth2ClientCredentialUser</a>

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expires_on`<sup>Required</sup> <a name="expires_on" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.expiresOn"></a>

```python
expires_on: str
```

- *Type:* str

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

---

##### `is_reset_secret`<sup>Required</sup> <a name="is_reset_secret" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.isResetSecret"></a>

```python
is_reset_secret: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `resource_type_schema_version`<sup>Required</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.status"></a>

```python
status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredential.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityDomainsMyOauth2ClientCredentialConfig <a name="IdentityDomainsMyOauth2ClientCredentialConfig" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_my_oauth2_client_credential

identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialConfig(
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
  scopes: typing.Union[IResolvable, typing.List[IdentityDomainsMyOauth2ClientCredentialScopes]],
  authorization: str = None,
  description: str = None,
  expires_on: str = None,
  is_reset_secret: typing.Union[bool, IResolvable] = None,
  ocid: str = None,
  resource_type_schema_version: str = None,
  status: str = None,
  tags: typing.Union[IResolvable, typing.List[IdentityDomainsMyOauth2ClientCredentialTags]] = None,
  timeouts: IdentityDomainsMyOauth2ClientCredentialTimeouts = None,
  user: IdentityDomainsMyOauth2ClientCredentialUser = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialConfig.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_oauth2client_credential#idcs_endpoint IdentityDomainsMyOauth2ClientCredential#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_oauth2client_credential#name IdentityDomainsMyOauth2ClientCredential#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialConfig.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_oauth2client_credential#schemas IdentityDomainsMyOauth2ClientCredential#schemas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialConfig.property.scopes">scopes</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopes">IdentityDomainsMyOauth2ClientCredentialScopes</a>]]</code> | scopes block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialConfig.property.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_oauth2client_credential#authorization IdentityDomainsMyOauth2ClientCredential#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_oauth2client_credential#description IdentityDomainsMyOauth2ClientCredential#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialConfig.property.expiresOn">expires_on</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_oauth2client_credential#expires_on IdentityDomainsMyOauth2ClientCredential#expires_on}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialConfig.property.isResetSecret">is_reset_secret</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_oauth2client_credential#is_reset_secret IdentityDomainsMyOauth2ClientCredential#is_reset_secret}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialConfig.property.ocid">ocid</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_oauth2client_credential#ocid IdentityDomainsMyOauth2ClientCredential#ocid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialConfig.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_oauth2client_credential#resource_type_schema_version IdentityDomainsMyOauth2ClientCredential#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialConfig.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_oauth2client_credential#status IdentityDomainsMyOauth2ClientCredential#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialConfig.property.tags">tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTags">IdentityDomainsMyOauth2ClientCredentialTags</a>]]</code> | tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeouts">IdentityDomainsMyOauth2ClientCredentialTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialConfig.property.user">user</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUser">IdentityDomainsMyOauth2ClientCredentialUser</a></code> | user block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialConfig.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_oauth2client_credential#idcs_endpoint IdentityDomainsMyOauth2ClientCredential#idcs_endpoint}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_oauth2client_credential#name IdentityDomainsMyOauth2ClientCredential#name}.

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialConfig.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_oauth2client_credential#schemas IdentityDomainsMyOauth2ClientCredential#schemas}.

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialConfig.property.scopes"></a>

```python
scopes: typing.Union[IResolvable, typing.List[IdentityDomainsMyOauth2ClientCredentialScopes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopes">IdentityDomainsMyOauth2ClientCredentialScopes</a>]]

scopes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_oauth2client_credential#scopes IdentityDomainsMyOauth2ClientCredential#scopes}

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialConfig.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_oauth2client_credential#authorization IdentityDomainsMyOauth2ClientCredential#authorization}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_oauth2client_credential#description IdentityDomainsMyOauth2ClientCredential#description}.

---

##### `expires_on`<sup>Optional</sup> <a name="expires_on" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialConfig.property.expiresOn"></a>

```python
expires_on: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_oauth2client_credential#expires_on IdentityDomainsMyOauth2ClientCredential#expires_on}.

---

##### `is_reset_secret`<sup>Optional</sup> <a name="is_reset_secret" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialConfig.property.isResetSecret"></a>

```python
is_reset_secret: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_oauth2client_credential#is_reset_secret IdentityDomainsMyOauth2ClientCredential#is_reset_secret}.

---

##### `ocid`<sup>Optional</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialConfig.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_oauth2client_credential#ocid IdentityDomainsMyOauth2ClientCredential#ocid}.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialConfig.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_oauth2client_credential#resource_type_schema_version IdentityDomainsMyOauth2ClientCredential#resource_type_schema_version}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_oauth2client_credential#status IdentityDomainsMyOauth2ClientCredential#status}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialConfig.property.tags"></a>

```python
tags: typing.Union[IResolvable, typing.List[IdentityDomainsMyOauth2ClientCredentialTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTags">IdentityDomainsMyOauth2ClientCredentialTags</a>]]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_oauth2client_credential#tags IdentityDomainsMyOauth2ClientCredential#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialConfig.property.timeouts"></a>

```python
timeouts: IdentityDomainsMyOauth2ClientCredentialTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeouts">IdentityDomainsMyOauth2ClientCredentialTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_oauth2client_credential#timeouts IdentityDomainsMyOauth2ClientCredential#timeouts}

---

##### `user`<sup>Optional</sup> <a name="user" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialConfig.property.user"></a>

```python
user: IdentityDomainsMyOauth2ClientCredentialUser
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUser">IdentityDomainsMyOauth2ClientCredentialUser</a>

user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_oauth2client_credential#user IdentityDomainsMyOauth2ClientCredential#user}

---

### IdentityDomainsMyOauth2ClientCredentialIdcsCreatedBy <a name="IdentityDomainsMyOauth2ClientCredentialIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_my_oauth2_client_credential

identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedBy()
```


### IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedBy <a name="IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_my_oauth2_client_credential

identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedBy()
```


### IdentityDomainsMyOauth2ClientCredentialMeta <a name="IdentityDomainsMyOauth2ClientCredentialMeta" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMeta.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_my_oauth2_client_credential

identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMeta()
```


### IdentityDomainsMyOauth2ClientCredentialScopes <a name="IdentityDomainsMyOauth2ClientCredentialScopes" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopes.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_my_oauth2_client_credential

identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopes(
  audience: str,
  scope: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopes.property.audience">audience</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_oauth2client_credential#audience IdentityDomainsMyOauth2ClientCredential#audience}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopes.property.scope">scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_oauth2client_credential#scope IdentityDomainsMyOauth2ClientCredential#scope}. |

---

##### `audience`<sup>Required</sup> <a name="audience" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopes.property.audience"></a>

```python
audience: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_oauth2client_credential#audience IdentityDomainsMyOauth2ClientCredential#audience}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopes.property.scope"></a>

```python
scope: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_oauth2client_credential#scope IdentityDomainsMyOauth2ClientCredential#scope}.

---

### IdentityDomainsMyOauth2ClientCredentialTags <a name="IdentityDomainsMyOauth2ClientCredentialTags" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTags.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_my_oauth2_client_credential

identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTags(
  key: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_oauth2client_credential#key IdentityDomainsMyOauth2ClientCredential#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_oauth2client_credential#value IdentityDomainsMyOauth2ClientCredential#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_oauth2client_credential#key IdentityDomainsMyOauth2ClientCredential#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_oauth2client_credential#value IdentityDomainsMyOauth2ClientCredential#value}.

---

### IdentityDomainsMyOauth2ClientCredentialTimeouts <a name="IdentityDomainsMyOauth2ClientCredentialTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_my_oauth2_client_credential

identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_oauth2client_credential#create IdentityDomainsMyOauth2ClientCredential#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_oauth2client_credential#delete IdentityDomainsMyOauth2ClientCredential#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_oauth2client_credential#update IdentityDomainsMyOauth2ClientCredential#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_oauth2client_credential#create IdentityDomainsMyOauth2ClientCredential#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_oauth2client_credential#delete IdentityDomainsMyOauth2ClientCredential#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_oauth2client_credential#update IdentityDomainsMyOauth2ClientCredential#update}.

---

### IdentityDomainsMyOauth2ClientCredentialUser <a name="IdentityDomainsMyOauth2ClientCredentialUser" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUser"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUser.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_my_oauth2_client_credential

identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUser(
  ocid: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUser.property.ocid">ocid</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_oauth2client_credential#ocid IdentityDomainsMyOauth2ClientCredential#ocid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUser.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_oauth2client_credential#value IdentityDomainsMyOauth2ClientCredential#value}. |

---

##### `ocid`<sup>Optional</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUser.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_oauth2client_credential#ocid IdentityDomainsMyOauth2ClientCredential#ocid}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUser.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_oauth2client_credential#value IdentityDomainsMyOauth2ClientCredential#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByList <a name="IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_my_oauth2_client_credential

identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference <a name="IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_my_oauth2_client_credential

identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedBy">IdentityDomainsMyOauth2ClientCredentialIdcsCreatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedByOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsMyOauth2ClientCredentialIdcsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsCreatedBy">IdentityDomainsMyOauth2ClientCredentialIdcsCreatedBy</a>

---


### IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByList <a name="IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_my_oauth2_client_credential

identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference <a name="IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_my_oauth2_client_credential

identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedBy">IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedByOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedBy">IdentityDomainsMyOauth2ClientCredentialIdcsLastModifiedBy</a>

---


### IdentityDomainsMyOauth2ClientCredentialMetaList <a name="IdentityDomainsMyOauth2ClientCredentialMetaList" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_my_oauth2_client_credential

identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsMyOauth2ClientCredentialMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IdentityDomainsMyOauth2ClientCredentialMetaOutputReference <a name="IdentityDomainsMyOauth2ClientCredentialMetaOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_my_oauth2_client_credential

identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaOutputReference.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaOutputReference.property.lastModified">last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMeta">IdentityDomainsMyOauth2ClientCredentialMeta</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaOutputReference.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `last_modified`<sup>Required</sup> <a name="last_modified" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaOutputReference.property.lastModified"></a>

```python
last_modified: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMetaOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsMyOauth2ClientCredentialMeta
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialMeta">IdentityDomainsMyOauth2ClientCredentialMeta</a>

---


### IdentityDomainsMyOauth2ClientCredentialScopesList <a name="IdentityDomainsMyOauth2ClientCredentialScopesList" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_my_oauth2_client_credential

identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsMyOauth2ClientCredentialScopesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopes">IdentityDomainsMyOauth2ClientCredentialScopes</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[IdentityDomainsMyOauth2ClientCredentialScopes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopes">IdentityDomainsMyOauth2ClientCredentialScopes</a>]]

---


### IdentityDomainsMyOauth2ClientCredentialScopesOutputReference <a name="IdentityDomainsMyOauth2ClientCredentialScopesOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_my_oauth2_client_credential

identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesOutputReference.property.audienceInput">audience_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesOutputReference.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesOutputReference.property.audience">audience</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesOutputReference.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopes">IdentityDomainsMyOauth2ClientCredentialScopes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `audience_input`<sup>Optional</sup> <a name="audience_input" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesOutputReference.property.audienceInput"></a>

```python
audience_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesOutputReference.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `audience`<sup>Required</sup> <a name="audience" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesOutputReference.property.audience"></a>

```python
audience: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesOutputReference.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IdentityDomainsMyOauth2ClientCredentialScopes]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialScopes">IdentityDomainsMyOauth2ClientCredentialScopes</a>]

---


### IdentityDomainsMyOauth2ClientCredentialTagsList <a name="IdentityDomainsMyOauth2ClientCredentialTagsList" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_my_oauth2_client_credential

identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsMyOauth2ClientCredentialTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTags">IdentityDomainsMyOauth2ClientCredentialTags</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[IdentityDomainsMyOauth2ClientCredentialTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTags">IdentityDomainsMyOauth2ClientCredentialTags</a>]]

---


### IdentityDomainsMyOauth2ClientCredentialTagsOutputReference <a name="IdentityDomainsMyOauth2ClientCredentialTagsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_my_oauth2_client_credential

identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTags">IdentityDomainsMyOauth2ClientCredentialTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTagsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IdentityDomainsMyOauth2ClientCredentialTags]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTags">IdentityDomainsMyOauth2ClientCredentialTags</a>]

---


### IdentityDomainsMyOauth2ClientCredentialTimeoutsOutputReference <a name="IdentityDomainsMyOauth2ClientCredentialTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_my_oauth2_client_credential

identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeouts">IdentityDomainsMyOauth2ClientCredentialTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IdentityDomainsMyOauth2ClientCredentialTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialTimeouts">IdentityDomainsMyOauth2ClientCredentialTimeouts</a>]

---


### IdentityDomainsMyOauth2ClientCredentialUserOutputReference <a name="IdentityDomainsMyOauth2ClientCredentialUserOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUserOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUserOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_my_oauth2_client_credential

identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUserOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUserOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUserOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUserOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUserOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUserOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUserOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUserOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUserOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUserOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUserOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUserOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUserOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUserOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUserOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUserOutputReference.resetOcid">reset_ocid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUserOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUserOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUserOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUserOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUserOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUserOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUserOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUserOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUserOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUserOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUserOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUserOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUserOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUserOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ocid` <a name="reset_ocid" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUserOutputReference.resetOcid"></a>

```python
def reset_ocid() -> None
```

##### `reset_value` <a name="reset_value" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUserOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUserOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUserOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUserOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUserOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUserOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUserOutputReference.property.ocidInput">ocid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUserOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUserOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUserOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUserOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUser">IdentityDomainsMyOauth2ClientCredentialUser</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUserOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUserOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUserOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUserOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUserOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `ocid_input`<sup>Optional</sup> <a name="ocid_input" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUserOutputReference.property.ocidInput"></a>

```python
ocid_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUserOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUserOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUserOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUserOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsMyOauth2ClientCredentialUser
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyOauth2ClientCredential.IdentityDomainsMyOauth2ClientCredentialUser">IdentityDomainsMyOauth2ClientCredentialUser</a>

---



