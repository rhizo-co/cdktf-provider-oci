# `identityDomainsOauthPartnerCertificate` Submodule <a name="`identityDomainsOauthPartnerCertificate` Submodule" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityDomainsOauthPartnerCertificate <a name="IdentityDomainsOauthPartnerCertificate" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate oci_identity_domains_oauth_partner_certificate}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_oauth_partner_certificate

identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate(
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
  authorization: str = None,
  external_id: str = None,
  key_store_id: str = None,
  key_store_name: str = None,
  key_store_password: str = None,
  map: str = None,
  ocid: str = None,
  resource_type_schema_version: str = None,
  tags: typing.Union[IResolvable, typing.List[IdentityDomainsOauthPartnerCertificateTags]] = None,
  timeouts: IdentityDomainsOauthPartnerCertificateTimeouts = None,
  x509_base64_certificate: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.certificateAlias">certificate_alias</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#certificate_alias IdentityDomainsOauthPartnerCertificate#certificate_alias}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#idcs_endpoint IdentityDomainsOauthPartnerCertificate#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.schemas">schemas</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#schemas IdentityDomainsOauthPartnerCertificate#schemas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#authorization IdentityDomainsOauthPartnerCertificate#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.externalId">external_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#external_id IdentityDomainsOauthPartnerCertificate#external_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.keyStoreId">key_store_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#key_store_id IdentityDomainsOauthPartnerCertificate#key_store_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.keyStoreName">key_store_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#key_store_name IdentityDomainsOauthPartnerCertificate#key_store_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.keyStorePassword">key_store_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#key_store_password IdentityDomainsOauthPartnerCertificate#key_store_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.map">map</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#map IdentityDomainsOauthPartnerCertificate#map}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.ocid">ocid</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#ocid IdentityDomainsOauthPartnerCertificate#ocid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#resource_type_schema_version IdentityDomainsOauthPartnerCertificate#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.tags">tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTags">IdentityDomainsOauthPartnerCertificateTags</a>]]</code> | tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeouts">IdentityDomainsOauthPartnerCertificateTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.x509Base64Certificate">x509_base64_certificate</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#x509base64certificate IdentityDomainsOauthPartnerCertificate#x509base64certificate}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `certificate_alias`<sup>Required</sup> <a name="certificate_alias" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.certificateAlias"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#certificate_alias IdentityDomainsOauthPartnerCertificate#certificate_alias}.

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.idcsEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#idcs_endpoint IdentityDomainsOauthPartnerCertificate#idcs_endpoint}.

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.schemas"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#schemas IdentityDomainsOauthPartnerCertificate#schemas}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.authorization"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#authorization IdentityDomainsOauthPartnerCertificate#authorization}.

---

##### `external_id`<sup>Optional</sup> <a name="external_id" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.externalId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#external_id IdentityDomainsOauthPartnerCertificate#external_id}.

---

##### `key_store_id`<sup>Optional</sup> <a name="key_store_id" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.keyStoreId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#key_store_id IdentityDomainsOauthPartnerCertificate#key_store_id}.

---

##### `key_store_name`<sup>Optional</sup> <a name="key_store_name" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.keyStoreName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#key_store_name IdentityDomainsOauthPartnerCertificate#key_store_name}.

---

##### `key_store_password`<sup>Optional</sup> <a name="key_store_password" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.keyStorePassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#key_store_password IdentityDomainsOauthPartnerCertificate#key_store_password}.

---

##### `map`<sup>Optional</sup> <a name="map" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.map"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#map IdentityDomainsOauthPartnerCertificate#map}.

---

##### `ocid`<sup>Optional</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.ocid"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#ocid IdentityDomainsOauthPartnerCertificate#ocid}.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.resourceTypeSchemaVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#resource_type_schema_version IdentityDomainsOauthPartnerCertificate#resource_type_schema_version}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.tags"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTags">IdentityDomainsOauthPartnerCertificateTags</a>]]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#tags IdentityDomainsOauthPartnerCertificate#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeouts">IdentityDomainsOauthPartnerCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#timeouts IdentityDomainsOauthPartnerCertificate#timeouts}

---

##### `x509_base64_certificate`<sup>Optional</sup> <a name="x509_base64_certificate" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.x509Base64Certificate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#x509base64certificate IdentityDomainsOauthPartnerCertificate#x509base64certificate}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.resetAuthorization">reset_authorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.resetExternalId">reset_external_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.resetKeyStoreId">reset_key_store_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.resetKeyStoreName">reset_key_store_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.resetKeyStorePassword">reset_key_store_password</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.resetMap">reset_map</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.resetOcid">reset_ocid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.resetResourceTypeSchemaVersion">reset_resource_type_schema_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.resetX509Base64Certificate">reset_x509_base64_certificate</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.putTags"></a>

```python
def put_tags(
  value: typing.Union[IResolvable, typing.List[IdentityDomainsOauthPartnerCertificateTags]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.putTags.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTags">IdentityDomainsOauthPartnerCertificateTags</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#create IdentityDomainsOauthPartnerCertificate#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#delete IdentityDomainsOauthPartnerCertificate#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#update IdentityDomainsOauthPartnerCertificate#update}.

---

##### `reset_authorization` <a name="reset_authorization" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.resetAuthorization"></a>

```python
def reset_authorization() -> None
```

##### `reset_external_id` <a name="reset_external_id" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.resetExternalId"></a>

```python
def reset_external_id() -> None
```

##### `reset_key_store_id` <a name="reset_key_store_id" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.resetKeyStoreId"></a>

```python
def reset_key_store_id() -> None
```

##### `reset_key_store_name` <a name="reset_key_store_name" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.resetKeyStoreName"></a>

```python
def reset_key_store_name() -> None
```

##### `reset_key_store_password` <a name="reset_key_store_password" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.resetKeyStorePassword"></a>

```python
def reset_key_store_password() -> None
```

##### `reset_map` <a name="reset_map" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.resetMap"></a>

```python
def reset_map() -> None
```

##### `reset_ocid` <a name="reset_ocid" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.resetOcid"></a>

```python
def reset_ocid() -> None
```

##### `reset_resource_type_schema_version` <a name="reset_resource_type_schema_version" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.resetResourceTypeSchemaVersion"></a>

```python
def reset_resource_type_schema_version() -> None
```

##### `reset_tags` <a name="reset_tags" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_x509_base64_certificate` <a name="reset_x509_base64_certificate" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.resetX509Base64Certificate"></a>

```python
def reset_x509_base64_certificate() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IdentityDomainsOauthPartnerCertificate resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_oauth_partner_certificate

identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_oauth_partner_certificate

identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_oauth_partner_certificate

identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_oauth_partner_certificate

identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IdentityDomainsOauthPartnerCertificate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IdentityDomainsOauthPartnerCertificate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IdentityDomainsOauthPartnerCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IdentityDomainsOauthPartnerCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.certEndDate">cert_end_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.certStartDate">cert_start_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.compartmentOcid">compartment_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.deleteInProgress">delete_in_progress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.domainOcid">domain_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.idcsCreatedBy">idcs_created_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByList">IdentityDomainsOauthPartnerCertificateIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.idcsLastModifiedBy">idcs_last_modified_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList">IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.idcsLastUpgradedInRelease">idcs_last_upgraded_in_release</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.idcsPreventedOperations">idcs_prevented_operations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaList">IdentityDomainsOauthPartnerCertificateMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.sha1Thumbprint">sha1_thumbprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.sha256Thumbprint">sha256_thumbprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsList">IdentityDomainsOauthPartnerCertificateTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.tenancyOcid">tenancy_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference">IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.authorizationInput">authorization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.certificateAliasInput">certificate_alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.externalIdInput">external_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.idcsEndpointInput">idcs_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.keyStoreIdInput">key_store_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.keyStoreNameInput">key_store_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.keyStorePasswordInput">key_store_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.mapInput">map_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.ocidInput">ocid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.resourceTypeSchemaVersionInput">resource_type_schema_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.schemasInput">schemas_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.tagsInput">tags_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTags">IdentityDomainsOauthPartnerCertificateTags</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeouts">IdentityDomainsOauthPartnerCertificateTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.x509Base64CertificateInput">x509_base64_certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.certificateAlias">certificate_alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.keyStoreId">key_store_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.keyStoreName">key_store_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.keyStorePassword">key_store_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.map">map</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.x509Base64Certificate">x509_base64_certificate</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cert_end_date`<sup>Required</sup> <a name="cert_end_date" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.certEndDate"></a>

```python
cert_end_date: str
```

- *Type:* str

---

##### `cert_start_date`<sup>Required</sup> <a name="cert_start_date" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.certStartDate"></a>

```python
cert_start_date: str
```

- *Type:* str

---

##### `compartment_ocid`<sup>Required</sup> <a name="compartment_ocid" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.compartmentOcid"></a>

```python
compartment_ocid: str
```

- *Type:* str

---

##### `delete_in_progress`<sup>Required</sup> <a name="delete_in_progress" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.deleteInProgress"></a>

```python
delete_in_progress: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `domain_ocid`<sup>Required</sup> <a name="domain_ocid" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.domainOcid"></a>

```python
domain_ocid: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_created_by`<sup>Required</sup> <a name="idcs_created_by" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.idcsCreatedBy"></a>

```python
idcs_created_by: IdentityDomainsOauthPartnerCertificateIdcsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByList">IdentityDomainsOauthPartnerCertificateIdcsCreatedByList</a>

---

##### `idcs_last_modified_by`<sup>Required</sup> <a name="idcs_last_modified_by" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.idcsLastModifiedBy"></a>

```python
idcs_last_modified_by: IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList">IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList</a>

---

##### `idcs_last_upgraded_in_release`<sup>Required</sup> <a name="idcs_last_upgraded_in_release" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.idcsLastUpgradedInRelease"></a>

```python
idcs_last_upgraded_in_release: str
```

- *Type:* str

---

##### `idcs_prevented_operations`<sup>Required</sup> <a name="idcs_prevented_operations" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.idcsPreventedOperations"></a>

```python
idcs_prevented_operations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.meta"></a>

```python
meta: IdentityDomainsOauthPartnerCertificateMetaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaList">IdentityDomainsOauthPartnerCertificateMetaList</a>

---

##### `sha1_thumbprint`<sup>Required</sup> <a name="sha1_thumbprint" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.sha1Thumbprint"></a>

```python
sha1_thumbprint: str
```

- *Type:* str

---

##### `sha256_thumbprint`<sup>Required</sup> <a name="sha256_thumbprint" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.sha256Thumbprint"></a>

```python
sha256_thumbprint: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.tags"></a>

```python
tags: IdentityDomainsOauthPartnerCertificateTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsList">IdentityDomainsOauthPartnerCertificateTagsList</a>

---

##### `tenancy_ocid`<sup>Required</sup> <a name="tenancy_ocid" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.tenancyOcid"></a>

```python
tenancy_ocid: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.timeouts"></a>

```python
timeouts: IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference">IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference</a>

---

##### `authorization_input`<sup>Optional</sup> <a name="authorization_input" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.authorizationInput"></a>

```python
authorization_input: str
```

- *Type:* str

---

##### `certificate_alias_input`<sup>Optional</sup> <a name="certificate_alias_input" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.certificateAliasInput"></a>

```python
certificate_alias_input: str
```

- *Type:* str

---

##### `external_id_input`<sup>Optional</sup> <a name="external_id_input" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.externalIdInput"></a>

```python
external_id_input: str
```

- *Type:* str

---

##### `idcs_endpoint_input`<sup>Optional</sup> <a name="idcs_endpoint_input" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.idcsEndpointInput"></a>

```python
idcs_endpoint_input: str
```

- *Type:* str

---

##### `key_store_id_input`<sup>Optional</sup> <a name="key_store_id_input" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.keyStoreIdInput"></a>

```python
key_store_id_input: str
```

- *Type:* str

---

##### `key_store_name_input`<sup>Optional</sup> <a name="key_store_name_input" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.keyStoreNameInput"></a>

```python
key_store_name_input: str
```

- *Type:* str

---

##### `key_store_password_input`<sup>Optional</sup> <a name="key_store_password_input" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.keyStorePasswordInput"></a>

```python
key_store_password_input: str
```

- *Type:* str

---

##### `map_input`<sup>Optional</sup> <a name="map_input" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.mapInput"></a>

```python
map_input: str
```

- *Type:* str

---

##### `ocid_input`<sup>Optional</sup> <a name="ocid_input" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.ocidInput"></a>

```python
ocid_input: str
```

- *Type:* str

---

##### `resource_type_schema_version_input`<sup>Optional</sup> <a name="resource_type_schema_version_input" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.resourceTypeSchemaVersionInput"></a>

```python
resource_type_schema_version_input: str
```

- *Type:* str

---

##### `schemas_input`<sup>Optional</sup> <a name="schemas_input" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.schemasInput"></a>

```python
schemas_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.tagsInput"></a>

```python
tags_input: typing.Union[IResolvable, typing.List[IdentityDomainsOauthPartnerCertificateTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTags">IdentityDomainsOauthPartnerCertificateTags</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, IdentityDomainsOauthPartnerCertificateTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeouts">IdentityDomainsOauthPartnerCertificateTimeouts</a>]

---

##### `x509_base64_certificate_input`<sup>Optional</sup> <a name="x509_base64_certificate_input" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.x509Base64CertificateInput"></a>

```python
x509_base64_certificate_input: str
```

- *Type:* str

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `certificate_alias`<sup>Required</sup> <a name="certificate_alias" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.certificateAlias"></a>

```python
certificate_alias: str
```

- *Type:* str

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

---

##### `key_store_id`<sup>Required</sup> <a name="key_store_id" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.keyStoreId"></a>

```python
key_store_id: str
```

- *Type:* str

---

##### `key_store_name`<sup>Required</sup> <a name="key_store_name" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.keyStoreName"></a>

```python
key_store_name: str
```

- *Type:* str

---

##### `key_store_password`<sup>Required</sup> <a name="key_store_password" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.keyStorePassword"></a>

```python
key_store_password: str
```

- *Type:* str

---

##### `map`<sup>Required</sup> <a name="map" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.map"></a>

```python
map: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `resource_type_schema_version`<sup>Required</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x509_base64_certificate`<sup>Required</sup> <a name="x509_base64_certificate" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.x509Base64Certificate"></a>

```python
x509_base64_certificate: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityDomainsOauthPartnerCertificateConfig <a name="IdentityDomainsOauthPartnerCertificateConfig" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_oauth_partner_certificate

identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig(
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
  authorization: str = None,
  external_id: str = None,
  key_store_id: str = None,
  key_store_name: str = None,
  key_store_password: str = None,
  map: str = None,
  ocid: str = None,
  resource_type_schema_version: str = None,
  tags: typing.Union[IResolvable, typing.List[IdentityDomainsOauthPartnerCertificateTags]] = None,
  timeouts: IdentityDomainsOauthPartnerCertificateTimeouts = None,
  x509_base64_certificate: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.certificateAlias">certificate_alias</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#certificate_alias IdentityDomainsOauthPartnerCertificate#certificate_alias}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#idcs_endpoint IdentityDomainsOauthPartnerCertificate#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#schemas IdentityDomainsOauthPartnerCertificate#schemas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#authorization IdentityDomainsOauthPartnerCertificate#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.externalId">external_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#external_id IdentityDomainsOauthPartnerCertificate#external_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.keyStoreId">key_store_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#key_store_id IdentityDomainsOauthPartnerCertificate#key_store_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.keyStoreName">key_store_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#key_store_name IdentityDomainsOauthPartnerCertificate#key_store_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.keyStorePassword">key_store_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#key_store_password IdentityDomainsOauthPartnerCertificate#key_store_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.map">map</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#map IdentityDomainsOauthPartnerCertificate#map}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.ocid">ocid</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#ocid IdentityDomainsOauthPartnerCertificate#ocid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#resource_type_schema_version IdentityDomainsOauthPartnerCertificate#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.tags">tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTags">IdentityDomainsOauthPartnerCertificateTags</a>]]</code> | tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeouts">IdentityDomainsOauthPartnerCertificateTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.x509Base64Certificate">x509_base64_certificate</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#x509base64certificate IdentityDomainsOauthPartnerCertificate#x509base64certificate}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `certificate_alias`<sup>Required</sup> <a name="certificate_alias" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.certificateAlias"></a>

```python
certificate_alias: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#certificate_alias IdentityDomainsOauthPartnerCertificate#certificate_alias}.

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#idcs_endpoint IdentityDomainsOauthPartnerCertificate#idcs_endpoint}.

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#schemas IdentityDomainsOauthPartnerCertificate#schemas}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#authorization IdentityDomainsOauthPartnerCertificate#authorization}.

---

##### `external_id`<sup>Optional</sup> <a name="external_id" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#external_id IdentityDomainsOauthPartnerCertificate#external_id}.

---

##### `key_store_id`<sup>Optional</sup> <a name="key_store_id" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.keyStoreId"></a>

```python
key_store_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#key_store_id IdentityDomainsOauthPartnerCertificate#key_store_id}.

---

##### `key_store_name`<sup>Optional</sup> <a name="key_store_name" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.keyStoreName"></a>

```python
key_store_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#key_store_name IdentityDomainsOauthPartnerCertificate#key_store_name}.

---

##### `key_store_password`<sup>Optional</sup> <a name="key_store_password" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.keyStorePassword"></a>

```python
key_store_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#key_store_password IdentityDomainsOauthPartnerCertificate#key_store_password}.

---

##### `map`<sup>Optional</sup> <a name="map" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.map"></a>

```python
map: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#map IdentityDomainsOauthPartnerCertificate#map}.

---

##### `ocid`<sup>Optional</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#ocid IdentityDomainsOauthPartnerCertificate#ocid}.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#resource_type_schema_version IdentityDomainsOauthPartnerCertificate#resource_type_schema_version}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.tags"></a>

```python
tags: typing.Union[IResolvable, typing.List[IdentityDomainsOauthPartnerCertificateTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTags">IdentityDomainsOauthPartnerCertificateTags</a>]]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#tags IdentityDomainsOauthPartnerCertificate#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.timeouts"></a>

```python
timeouts: IdentityDomainsOauthPartnerCertificateTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeouts">IdentityDomainsOauthPartnerCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#timeouts IdentityDomainsOauthPartnerCertificate#timeouts}

---

##### `x509_base64_certificate`<sup>Optional</sup> <a name="x509_base64_certificate" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.x509Base64Certificate"></a>

```python
x509_base64_certificate: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#x509base64certificate IdentityDomainsOauthPartnerCertificate#x509base64certificate}.

---

### IdentityDomainsOauthPartnerCertificateIdcsCreatedBy <a name="IdentityDomainsOauthPartnerCertificateIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_oauth_partner_certificate

identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedBy()
```


### IdentityDomainsOauthPartnerCertificateIdcsLastModifiedBy <a name="IdentityDomainsOauthPartnerCertificateIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_oauth_partner_certificate

identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedBy()
```


### IdentityDomainsOauthPartnerCertificateMeta <a name="IdentityDomainsOauthPartnerCertificateMeta" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMeta.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_oauth_partner_certificate

identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMeta()
```


### IdentityDomainsOauthPartnerCertificateTags <a name="IdentityDomainsOauthPartnerCertificateTags" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTags.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_oauth_partner_certificate

identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTags(
  key: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#key IdentityDomainsOauthPartnerCertificate#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#value IdentityDomainsOauthPartnerCertificate#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#key IdentityDomainsOauthPartnerCertificate#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#value IdentityDomainsOauthPartnerCertificate#value}.

---

### IdentityDomainsOauthPartnerCertificateTimeouts <a name="IdentityDomainsOauthPartnerCertificateTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_oauth_partner_certificate

identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#create IdentityDomainsOauthPartnerCertificate#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#delete IdentityDomainsOauthPartnerCertificate#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#update IdentityDomainsOauthPartnerCertificate#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#create IdentityDomainsOauthPartnerCertificate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#delete IdentityDomainsOauthPartnerCertificate#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#update IdentityDomainsOauthPartnerCertificate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityDomainsOauthPartnerCertificateIdcsCreatedByList <a name="IdentityDomainsOauthPartnerCertificateIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_oauth_partner_certificate

identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference <a name="IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_oauth_partner_certificate

identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedBy">IdentityDomainsOauthPartnerCertificateIdcsCreatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsOauthPartnerCertificateIdcsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedBy">IdentityDomainsOauthPartnerCertificateIdcsCreatedBy</a>

---


### IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList <a name="IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_oauth_partner_certificate

identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference <a name="IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_oauth_partner_certificate

identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedBy">IdentityDomainsOauthPartnerCertificateIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsOauthPartnerCertificateIdcsLastModifiedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedBy">IdentityDomainsOauthPartnerCertificateIdcsLastModifiedBy</a>

---


### IdentityDomainsOauthPartnerCertificateMetaList <a name="IdentityDomainsOauthPartnerCertificateMetaList" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_oauth_partner_certificate

identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsOauthPartnerCertificateMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IdentityDomainsOauthPartnerCertificateMetaOutputReference <a name="IdentityDomainsOauthPartnerCertificateMetaOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_oauth_partner_certificate

identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.property.lastModified">last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMeta">IdentityDomainsOauthPartnerCertificateMeta</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `last_modified`<sup>Required</sup> <a name="last_modified" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.property.lastModified"></a>

```python
last_modified: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsOauthPartnerCertificateMeta
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMeta">IdentityDomainsOauthPartnerCertificateMeta</a>

---


### IdentityDomainsOauthPartnerCertificateTagsList <a name="IdentityDomainsOauthPartnerCertificateTagsList" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_oauth_partner_certificate

identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsOauthPartnerCertificateTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTags">IdentityDomainsOauthPartnerCertificateTags</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[IdentityDomainsOauthPartnerCertificateTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTags">IdentityDomainsOauthPartnerCertificateTags</a>]]

---


### IdentityDomainsOauthPartnerCertificateTagsOutputReference <a name="IdentityDomainsOauthPartnerCertificateTagsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_oauth_partner_certificate

identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTags">IdentityDomainsOauthPartnerCertificateTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IdentityDomainsOauthPartnerCertificateTags]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTags">IdentityDomainsOauthPartnerCertificateTags</a>]

---


### IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference <a name="IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_oauth_partner_certificate

identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeouts">IdentityDomainsOauthPartnerCertificateTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IdentityDomainsOauthPartnerCertificateTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeouts">IdentityDomainsOauthPartnerCertificateTimeouts</a>]

---



