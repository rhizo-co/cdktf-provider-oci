# `identityDomainsOauthClientCertificate` Submodule <a name="`identityDomainsOauthClientCertificate` Submodule" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityDomainsOauthClientCertificate <a name="IdentityDomainsOauthClientCertificate" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate oci_identity_domains_oauth_client_certificate}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_oauth_client_certificate

identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  certificate_alias: str,
  idcs_endpoint: str,
  schemas: typing.List[str],
  x509_base64_certificate: str,
  authorization: str = None,
  external_id: str = None,
  key_store_id: str = None,
  key_store_name: str = None,
  key_store_password: str = None,
  map: str = None,
  ocid: str = None,
  resource_type_schema_version: str = None,
  tags: typing.Union[IResolvable, typing.List[IdentityDomainsOauthClientCertificateTags]] = None,
  timeouts: IdentityDomainsOauthClientCertificateTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.Initializer.parameter.certificateAlias">certificate_alias</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#certificate_alias IdentityDomainsOauthClientCertificate#certificate_alias}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.Initializer.parameter.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#idcs_endpoint IdentityDomainsOauthClientCertificate#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.Initializer.parameter.schemas">schemas</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#schemas IdentityDomainsOauthClientCertificate#schemas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.Initializer.parameter.x509Base64Certificate">x509_base64_certificate</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#x509base64certificate IdentityDomainsOauthClientCertificate#x509base64certificate}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.Initializer.parameter.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#authorization IdentityDomainsOauthClientCertificate#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.Initializer.parameter.externalId">external_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#external_id IdentityDomainsOauthClientCertificate#external_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.Initializer.parameter.keyStoreId">key_store_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#key_store_id IdentityDomainsOauthClientCertificate#key_store_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.Initializer.parameter.keyStoreName">key_store_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#key_store_name IdentityDomainsOauthClientCertificate#key_store_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.Initializer.parameter.keyStorePassword">key_store_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#key_store_password IdentityDomainsOauthClientCertificate#key_store_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.Initializer.parameter.map">map</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#map IdentityDomainsOauthClientCertificate#map}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.Initializer.parameter.ocid">ocid</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#ocid IdentityDomainsOauthClientCertificate#ocid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.Initializer.parameter.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#resource_type_schema_version IdentityDomainsOauthClientCertificate#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.Initializer.parameter.tags">tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTags">IdentityDomainsOauthClientCertificateTags</a>]]</code> | tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeouts">IdentityDomainsOauthClientCertificateTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `certificate_alias`<sup>Required</sup> <a name="certificate_alias" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.Initializer.parameter.certificateAlias"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#certificate_alias IdentityDomainsOauthClientCertificate#certificate_alias}.

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.Initializer.parameter.idcsEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#idcs_endpoint IdentityDomainsOauthClientCertificate#idcs_endpoint}.

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.Initializer.parameter.schemas"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#schemas IdentityDomainsOauthClientCertificate#schemas}.

---

##### `x509_base64_certificate`<sup>Required</sup> <a name="x509_base64_certificate" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.Initializer.parameter.x509Base64Certificate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#x509base64certificate IdentityDomainsOauthClientCertificate#x509base64certificate}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.Initializer.parameter.authorization"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#authorization IdentityDomainsOauthClientCertificate#authorization}.

---

##### `external_id`<sup>Optional</sup> <a name="external_id" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.Initializer.parameter.externalId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#external_id IdentityDomainsOauthClientCertificate#external_id}.

---

##### `key_store_id`<sup>Optional</sup> <a name="key_store_id" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.Initializer.parameter.keyStoreId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#key_store_id IdentityDomainsOauthClientCertificate#key_store_id}.

---

##### `key_store_name`<sup>Optional</sup> <a name="key_store_name" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.Initializer.parameter.keyStoreName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#key_store_name IdentityDomainsOauthClientCertificate#key_store_name}.

---

##### `key_store_password`<sup>Optional</sup> <a name="key_store_password" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.Initializer.parameter.keyStorePassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#key_store_password IdentityDomainsOauthClientCertificate#key_store_password}.

---

##### `map`<sup>Optional</sup> <a name="map" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.Initializer.parameter.map"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#map IdentityDomainsOauthClientCertificate#map}.

---

##### `ocid`<sup>Optional</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.Initializer.parameter.ocid"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#ocid IdentityDomainsOauthClientCertificate#ocid}.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.Initializer.parameter.resourceTypeSchemaVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#resource_type_schema_version IdentityDomainsOauthClientCertificate#resource_type_schema_version}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.Initializer.parameter.tags"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTags">IdentityDomainsOauthClientCertificateTags</a>]]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#tags IdentityDomainsOauthClientCertificate#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeouts">IdentityDomainsOauthClientCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#timeouts IdentityDomainsOauthClientCertificate#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.resetAuthorization">reset_authorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.resetExternalId">reset_external_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.resetKeyStoreId">reset_key_store_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.resetKeyStoreName">reset_key_store_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.resetKeyStorePassword">reset_key_store_password</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.resetMap">reset_map</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.resetOcid">reset_ocid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.resetResourceTypeSchemaVersion">reset_resource_type_schema_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.putTags"></a>

```python
def put_tags(
  value: typing.Union[IResolvable, typing.List[IdentityDomainsOauthClientCertificateTags]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.putTags.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTags">IdentityDomainsOauthClientCertificateTags</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#create IdentityDomainsOauthClientCertificate#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#delete IdentityDomainsOauthClientCertificate#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#update IdentityDomainsOauthClientCertificate#update}.

---

##### `reset_authorization` <a name="reset_authorization" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.resetAuthorization"></a>

```python
def reset_authorization() -> None
```

##### `reset_external_id` <a name="reset_external_id" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.resetExternalId"></a>

```python
def reset_external_id() -> None
```

##### `reset_key_store_id` <a name="reset_key_store_id" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.resetKeyStoreId"></a>

```python
def reset_key_store_id() -> None
```

##### `reset_key_store_name` <a name="reset_key_store_name" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.resetKeyStoreName"></a>

```python
def reset_key_store_name() -> None
```

##### `reset_key_store_password` <a name="reset_key_store_password" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.resetKeyStorePassword"></a>

```python
def reset_key_store_password() -> None
```

##### `reset_map` <a name="reset_map" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.resetMap"></a>

```python
def reset_map() -> None
```

##### `reset_ocid` <a name="reset_ocid" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.resetOcid"></a>

```python
def reset_ocid() -> None
```

##### `reset_resource_type_schema_version` <a name="reset_resource_type_schema_version" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.resetResourceTypeSchemaVersion"></a>

```python
def reset_resource_type_schema_version() -> None
```

##### `reset_tags` <a name="reset_tags" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IdentityDomainsOauthClientCertificate resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_oauth_client_certificate

identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_oauth_client_certificate

identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_oauth_client_certificate

identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_oauth_client_certificate

identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IdentityDomainsOauthClientCertificate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IdentityDomainsOauthClientCertificate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IdentityDomainsOauthClientCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IdentityDomainsOauthClientCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.certEndDate">cert_end_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.certStartDate">cert_start_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.compartmentOcid">compartment_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.deleteInProgress">delete_in_progress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.domainOcid">domain_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.idcsCreatedBy">idcs_created_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByList">IdentityDomainsOauthClientCertificateIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.idcsLastModifiedBy">idcs_last_modified_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByList">IdentityDomainsOauthClientCertificateIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.idcsLastUpgradedInRelease">idcs_last_upgraded_in_release</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.idcsPreventedOperations">idcs_prevented_operations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaList">IdentityDomainsOauthClientCertificateMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.sha1Thumbprint">sha1_thumbprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.sha256Thumbprint">sha256_thumbprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsList">IdentityDomainsOauthClientCertificateTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.tenancyOcid">tenancy_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference">IdentityDomainsOauthClientCertificateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.authorizationInput">authorization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.certificateAliasInput">certificate_alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.externalIdInput">external_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.idcsEndpointInput">idcs_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.keyStoreIdInput">key_store_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.keyStoreNameInput">key_store_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.keyStorePasswordInput">key_store_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.mapInput">map_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.ocidInput">ocid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.resourceTypeSchemaVersionInput">resource_type_schema_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.schemasInput">schemas_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.tagsInput">tags_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTags">IdentityDomainsOauthClientCertificateTags</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeouts">IdentityDomainsOauthClientCertificateTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.x509Base64CertificateInput">x509_base64_certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.certificateAlias">certificate_alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.keyStoreId">key_store_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.keyStoreName">key_store_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.keyStorePassword">key_store_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.map">map</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.x509Base64Certificate">x509_base64_certificate</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cert_end_date`<sup>Required</sup> <a name="cert_end_date" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.certEndDate"></a>

```python
cert_end_date: str
```

- *Type:* str

---

##### `cert_start_date`<sup>Required</sup> <a name="cert_start_date" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.certStartDate"></a>

```python
cert_start_date: str
```

- *Type:* str

---

##### `compartment_ocid`<sup>Required</sup> <a name="compartment_ocid" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.compartmentOcid"></a>

```python
compartment_ocid: str
```

- *Type:* str

---

##### `delete_in_progress`<sup>Required</sup> <a name="delete_in_progress" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.deleteInProgress"></a>

```python
delete_in_progress: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `domain_ocid`<sup>Required</sup> <a name="domain_ocid" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.domainOcid"></a>

```python
domain_ocid: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_created_by`<sup>Required</sup> <a name="idcs_created_by" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.idcsCreatedBy"></a>

```python
idcs_created_by: IdentityDomainsOauthClientCertificateIdcsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByList">IdentityDomainsOauthClientCertificateIdcsCreatedByList</a>

---

##### `idcs_last_modified_by`<sup>Required</sup> <a name="idcs_last_modified_by" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.idcsLastModifiedBy"></a>

```python
idcs_last_modified_by: IdentityDomainsOauthClientCertificateIdcsLastModifiedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByList">IdentityDomainsOauthClientCertificateIdcsLastModifiedByList</a>

---

##### `idcs_last_upgraded_in_release`<sup>Required</sup> <a name="idcs_last_upgraded_in_release" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.idcsLastUpgradedInRelease"></a>

```python
idcs_last_upgraded_in_release: str
```

- *Type:* str

---

##### `idcs_prevented_operations`<sup>Required</sup> <a name="idcs_prevented_operations" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.idcsPreventedOperations"></a>

```python
idcs_prevented_operations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.meta"></a>

```python
meta: IdentityDomainsOauthClientCertificateMetaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaList">IdentityDomainsOauthClientCertificateMetaList</a>

---

##### `sha1_thumbprint`<sup>Required</sup> <a name="sha1_thumbprint" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.sha1Thumbprint"></a>

```python
sha1_thumbprint: str
```

- *Type:* str

---

##### `sha256_thumbprint`<sup>Required</sup> <a name="sha256_thumbprint" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.sha256Thumbprint"></a>

```python
sha256_thumbprint: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.tags"></a>

```python
tags: IdentityDomainsOauthClientCertificateTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsList">IdentityDomainsOauthClientCertificateTagsList</a>

---

##### `tenancy_ocid`<sup>Required</sup> <a name="tenancy_ocid" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.tenancyOcid"></a>

```python
tenancy_ocid: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.timeouts"></a>

```python
timeouts: IdentityDomainsOauthClientCertificateTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference">IdentityDomainsOauthClientCertificateTimeoutsOutputReference</a>

---

##### `authorization_input`<sup>Optional</sup> <a name="authorization_input" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.authorizationInput"></a>

```python
authorization_input: str
```

- *Type:* str

---

##### `certificate_alias_input`<sup>Optional</sup> <a name="certificate_alias_input" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.certificateAliasInput"></a>

```python
certificate_alias_input: str
```

- *Type:* str

---

##### `external_id_input`<sup>Optional</sup> <a name="external_id_input" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.externalIdInput"></a>

```python
external_id_input: str
```

- *Type:* str

---

##### `idcs_endpoint_input`<sup>Optional</sup> <a name="idcs_endpoint_input" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.idcsEndpointInput"></a>

```python
idcs_endpoint_input: str
```

- *Type:* str

---

##### `key_store_id_input`<sup>Optional</sup> <a name="key_store_id_input" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.keyStoreIdInput"></a>

```python
key_store_id_input: str
```

- *Type:* str

---

##### `key_store_name_input`<sup>Optional</sup> <a name="key_store_name_input" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.keyStoreNameInput"></a>

```python
key_store_name_input: str
```

- *Type:* str

---

##### `key_store_password_input`<sup>Optional</sup> <a name="key_store_password_input" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.keyStorePasswordInput"></a>

```python
key_store_password_input: str
```

- *Type:* str

---

##### `map_input`<sup>Optional</sup> <a name="map_input" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.mapInput"></a>

```python
map_input: str
```

- *Type:* str

---

##### `ocid_input`<sup>Optional</sup> <a name="ocid_input" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.ocidInput"></a>

```python
ocid_input: str
```

- *Type:* str

---

##### `resource_type_schema_version_input`<sup>Optional</sup> <a name="resource_type_schema_version_input" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.resourceTypeSchemaVersionInput"></a>

```python
resource_type_schema_version_input: str
```

- *Type:* str

---

##### `schemas_input`<sup>Optional</sup> <a name="schemas_input" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.schemasInput"></a>

```python
schemas_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.tagsInput"></a>

```python
tags_input: typing.Union[IResolvable, typing.List[IdentityDomainsOauthClientCertificateTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTags">IdentityDomainsOauthClientCertificateTags</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, IdentityDomainsOauthClientCertificateTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeouts">IdentityDomainsOauthClientCertificateTimeouts</a>]

---

##### `x509_base64_certificate_input`<sup>Optional</sup> <a name="x509_base64_certificate_input" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.x509Base64CertificateInput"></a>

```python
x509_base64_certificate_input: str
```

- *Type:* str

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `certificate_alias`<sup>Required</sup> <a name="certificate_alias" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.certificateAlias"></a>

```python
certificate_alias: str
```

- *Type:* str

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

---

##### `key_store_id`<sup>Required</sup> <a name="key_store_id" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.keyStoreId"></a>

```python
key_store_id: str
```

- *Type:* str

---

##### `key_store_name`<sup>Required</sup> <a name="key_store_name" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.keyStoreName"></a>

```python
key_store_name: str
```

- *Type:* str

---

##### `key_store_password`<sup>Required</sup> <a name="key_store_password" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.keyStorePassword"></a>

```python
key_store_password: str
```

- *Type:* str

---

##### `map`<sup>Required</sup> <a name="map" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.map"></a>

```python
map: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `resource_type_schema_version`<sup>Required</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x509_base64_certificate`<sup>Required</sup> <a name="x509_base64_certificate" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.x509Base64Certificate"></a>

```python
x509_base64_certificate: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityDomainsOauthClientCertificateConfig <a name="IdentityDomainsOauthClientCertificateConfig" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_oauth_client_certificate

identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  certificate_alias: str,
  idcs_endpoint: str,
  schemas: typing.List[str],
  x509_base64_certificate: str,
  authorization: str = None,
  external_id: str = None,
  key_store_id: str = None,
  key_store_name: str = None,
  key_store_password: str = None,
  map: str = None,
  ocid: str = None,
  resource_type_schema_version: str = None,
  tags: typing.Union[IResolvable, typing.List[IdentityDomainsOauthClientCertificateTags]] = None,
  timeouts: IdentityDomainsOauthClientCertificateTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.certificateAlias">certificate_alias</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#certificate_alias IdentityDomainsOauthClientCertificate#certificate_alias}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#idcs_endpoint IdentityDomainsOauthClientCertificate#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#schemas IdentityDomainsOauthClientCertificate#schemas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.x509Base64Certificate">x509_base64_certificate</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#x509base64certificate IdentityDomainsOauthClientCertificate#x509base64certificate}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#authorization IdentityDomainsOauthClientCertificate#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.externalId">external_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#external_id IdentityDomainsOauthClientCertificate#external_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.keyStoreId">key_store_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#key_store_id IdentityDomainsOauthClientCertificate#key_store_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.keyStoreName">key_store_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#key_store_name IdentityDomainsOauthClientCertificate#key_store_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.keyStorePassword">key_store_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#key_store_password IdentityDomainsOauthClientCertificate#key_store_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.map">map</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#map IdentityDomainsOauthClientCertificate#map}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.ocid">ocid</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#ocid IdentityDomainsOauthClientCertificate#ocid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#resource_type_schema_version IdentityDomainsOauthClientCertificate#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.tags">tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTags">IdentityDomainsOauthClientCertificateTags</a>]]</code> | tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeouts">IdentityDomainsOauthClientCertificateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `certificate_alias`<sup>Required</sup> <a name="certificate_alias" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.certificateAlias"></a>

```python
certificate_alias: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#certificate_alias IdentityDomainsOauthClientCertificate#certificate_alias}.

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#idcs_endpoint IdentityDomainsOauthClientCertificate#idcs_endpoint}.

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#schemas IdentityDomainsOauthClientCertificate#schemas}.

---

##### `x509_base64_certificate`<sup>Required</sup> <a name="x509_base64_certificate" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.x509Base64Certificate"></a>

```python
x509_base64_certificate: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#x509base64certificate IdentityDomainsOauthClientCertificate#x509base64certificate}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#authorization IdentityDomainsOauthClientCertificate#authorization}.

---

##### `external_id`<sup>Optional</sup> <a name="external_id" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#external_id IdentityDomainsOauthClientCertificate#external_id}.

---

##### `key_store_id`<sup>Optional</sup> <a name="key_store_id" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.keyStoreId"></a>

```python
key_store_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#key_store_id IdentityDomainsOauthClientCertificate#key_store_id}.

---

##### `key_store_name`<sup>Optional</sup> <a name="key_store_name" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.keyStoreName"></a>

```python
key_store_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#key_store_name IdentityDomainsOauthClientCertificate#key_store_name}.

---

##### `key_store_password`<sup>Optional</sup> <a name="key_store_password" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.keyStorePassword"></a>

```python
key_store_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#key_store_password IdentityDomainsOauthClientCertificate#key_store_password}.

---

##### `map`<sup>Optional</sup> <a name="map" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.map"></a>

```python
map: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#map IdentityDomainsOauthClientCertificate#map}.

---

##### `ocid`<sup>Optional</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#ocid IdentityDomainsOauthClientCertificate#ocid}.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#resource_type_schema_version IdentityDomainsOauthClientCertificate#resource_type_schema_version}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.tags"></a>

```python
tags: typing.Union[IResolvable, typing.List[IdentityDomainsOauthClientCertificateTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTags">IdentityDomainsOauthClientCertificateTags</a>]]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#tags IdentityDomainsOauthClientCertificate#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.timeouts"></a>

```python
timeouts: IdentityDomainsOauthClientCertificateTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeouts">IdentityDomainsOauthClientCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#timeouts IdentityDomainsOauthClientCertificate#timeouts}

---

### IdentityDomainsOauthClientCertificateIdcsCreatedBy <a name="IdentityDomainsOauthClientCertificateIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_oauth_client_certificate

identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedBy()
```


### IdentityDomainsOauthClientCertificateIdcsLastModifiedBy <a name="IdentityDomainsOauthClientCertificateIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_oauth_client_certificate

identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedBy()
```


### IdentityDomainsOauthClientCertificateMeta <a name="IdentityDomainsOauthClientCertificateMeta" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMeta.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_oauth_client_certificate

identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMeta()
```


### IdentityDomainsOauthClientCertificateTags <a name="IdentityDomainsOauthClientCertificateTags" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTags.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_oauth_client_certificate

identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTags(
  key: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#key IdentityDomainsOauthClientCertificate#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#value IdentityDomainsOauthClientCertificate#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#key IdentityDomainsOauthClientCertificate#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#value IdentityDomainsOauthClientCertificate#value}.

---

### IdentityDomainsOauthClientCertificateTimeouts <a name="IdentityDomainsOauthClientCertificateTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_oauth_client_certificate

identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#create IdentityDomainsOauthClientCertificate#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#delete IdentityDomainsOauthClientCertificate#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#update IdentityDomainsOauthClientCertificate#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#create IdentityDomainsOauthClientCertificate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#delete IdentityDomainsOauthClientCertificate#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#update IdentityDomainsOauthClientCertificate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityDomainsOauthClientCertificateIdcsCreatedByList <a name="IdentityDomainsOauthClientCertificateIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_oauth_client_certificate

identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference <a name="IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_oauth_client_certificate

identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedBy">IdentityDomainsOauthClientCertificateIdcsCreatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsOauthClientCertificateIdcsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedBy">IdentityDomainsOauthClientCertificateIdcsCreatedBy</a>

---


### IdentityDomainsOauthClientCertificateIdcsLastModifiedByList <a name="IdentityDomainsOauthClientCertificateIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_oauth_client_certificate

identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference <a name="IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_oauth_client_certificate

identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedBy">IdentityDomainsOauthClientCertificateIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsOauthClientCertificateIdcsLastModifiedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedBy">IdentityDomainsOauthClientCertificateIdcsLastModifiedBy</a>

---


### IdentityDomainsOauthClientCertificateMetaList <a name="IdentityDomainsOauthClientCertificateMetaList" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_oauth_client_certificate

identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsOauthClientCertificateMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IdentityDomainsOauthClientCertificateMetaOutputReference <a name="IdentityDomainsOauthClientCertificateMetaOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_oauth_client_certificate

identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.property.lastModified">last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMeta">IdentityDomainsOauthClientCertificateMeta</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `last_modified`<sup>Required</sup> <a name="last_modified" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.property.lastModified"></a>

```python
last_modified: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsOauthClientCertificateMeta
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMeta">IdentityDomainsOauthClientCertificateMeta</a>

---


### IdentityDomainsOauthClientCertificateTagsList <a name="IdentityDomainsOauthClientCertificateTagsList" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_oauth_client_certificate

identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsOauthClientCertificateTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTags">IdentityDomainsOauthClientCertificateTags</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[IdentityDomainsOauthClientCertificateTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTags">IdentityDomainsOauthClientCertificateTags</a>]]

---


### IdentityDomainsOauthClientCertificateTagsOutputReference <a name="IdentityDomainsOauthClientCertificateTagsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_oauth_client_certificate

identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTags">IdentityDomainsOauthClientCertificateTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IdentityDomainsOauthClientCertificateTags]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTags">IdentityDomainsOauthClientCertificateTags</a>]

---


### IdentityDomainsOauthClientCertificateTimeoutsOutputReference <a name="IdentityDomainsOauthClientCertificateTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_oauth_client_certificate

identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeouts">IdentityDomainsOauthClientCertificateTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IdentityDomainsOauthClientCertificateTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeouts">IdentityDomainsOauthClientCertificateTimeouts</a>]

---



