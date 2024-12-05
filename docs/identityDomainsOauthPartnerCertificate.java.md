# `identityDomainsOauthPartnerCertificate` Submodule <a name="`identityDomainsOauthPartnerCertificate` Submodule" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityDomainsOauthPartnerCertificate <a name="IdentityDomainsOauthPartnerCertificate" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate oci_identity_domains_oauth_partner_certificate}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_oauth_partner_certificate.IdentityDomainsOauthPartnerCertificate;

IdentityDomainsOauthPartnerCertificate.Builder.create(Construct scope, java.lang.String id)
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
    .certificateAlias(java.lang.String)
    .idcsEndpoint(java.lang.String)
    .schemas(java.util.List<java.lang.String>)
//  .authorization(java.lang.String)
//  .externalId(java.lang.String)
//  .keyStoreId(java.lang.String)
//  .keyStoreName(java.lang.String)
//  .keyStorePassword(java.lang.String)
//  .map(java.lang.String)
//  .ocid(java.lang.String)
//  .resourceTypeSchemaVersion(java.lang.String)
//  .tags(IResolvable)
//  .tags(java.util.List<IdentityDomainsOauthPartnerCertificateTags>)
//  .timeouts(IdentityDomainsOauthPartnerCertificateTimeouts)
//  .x509Base64Certificate(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.certificateAlias">certificateAlias</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#certificate_alias IdentityDomainsOauthPartnerCertificate#certificate_alias}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.idcsEndpoint">idcsEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#idcs_endpoint IdentityDomainsOauthPartnerCertificate#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.schemas">schemas</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#schemas IdentityDomainsOauthPartnerCertificate#schemas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.authorization">authorization</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#authorization IdentityDomainsOauthPartnerCertificate#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.externalId">externalId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#external_id IdentityDomainsOauthPartnerCertificate#external_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.keyStoreId">keyStoreId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#key_store_id IdentityDomainsOauthPartnerCertificate#key_store_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.keyStoreName">keyStoreName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#key_store_name IdentityDomainsOauthPartnerCertificate#key_store_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.keyStorePassword">keyStorePassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#key_store_password IdentityDomainsOauthPartnerCertificate#key_store_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.map">map</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#map IdentityDomainsOauthPartnerCertificate#map}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.ocid">ocid</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#ocid IdentityDomainsOauthPartnerCertificate#ocid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#resource_type_schema_version IdentityDomainsOauthPartnerCertificate#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.tags">tags</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTags">IdentityDomainsOauthPartnerCertificateTags</a>></code> | tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeouts">IdentityDomainsOauthPartnerCertificateTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.x509Base64Certificate">x509Base64Certificate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#x509base64certificate IdentityDomainsOauthPartnerCertificate#x509base64certificate}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `certificateAlias`<sup>Required</sup> <a name="certificateAlias" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.certificateAlias"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#certificate_alias IdentityDomainsOauthPartnerCertificate#certificate_alias}.

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.idcsEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#idcs_endpoint IdentityDomainsOauthPartnerCertificate#idcs_endpoint}.

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.schemas"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#schemas IdentityDomainsOauthPartnerCertificate#schemas}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.authorization"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#authorization IdentityDomainsOauthPartnerCertificate#authorization}.

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.externalId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#external_id IdentityDomainsOauthPartnerCertificate#external_id}.

---

##### `keyStoreId`<sup>Optional</sup> <a name="keyStoreId" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.keyStoreId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#key_store_id IdentityDomainsOauthPartnerCertificate#key_store_id}.

---

##### `keyStoreName`<sup>Optional</sup> <a name="keyStoreName" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.keyStoreName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#key_store_name IdentityDomainsOauthPartnerCertificate#key_store_name}.

---

##### `keyStorePassword`<sup>Optional</sup> <a name="keyStorePassword" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.keyStorePassword"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#key_store_password IdentityDomainsOauthPartnerCertificate#key_store_password}.

---

##### `map`<sup>Optional</sup> <a name="map" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.map"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#map IdentityDomainsOauthPartnerCertificate#map}.

---

##### `ocid`<sup>Optional</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.ocid"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#ocid IdentityDomainsOauthPartnerCertificate#ocid}.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.resourceTypeSchemaVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#resource_type_schema_version IdentityDomainsOauthPartnerCertificate#resource_type_schema_version}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.tags"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTags">IdentityDomainsOauthPartnerCertificateTags</a>>

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#tags IdentityDomainsOauthPartnerCertificate#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeouts">IdentityDomainsOauthPartnerCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#timeouts IdentityDomainsOauthPartnerCertificate#timeouts}

---

##### `x509Base64Certificate`<sup>Optional</sup> <a name="x509Base64Certificate" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.Initializer.parameter.x509Base64Certificate"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#x509base64certificate IdentityDomainsOauthPartnerCertificate#x509base64certificate}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.putTags">putTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.resetExternalId">resetExternalId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.resetKeyStoreId">resetKeyStoreId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.resetKeyStoreName">resetKeyStoreName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.resetKeyStorePassword">resetKeyStorePassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.resetMap">resetMap</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.resetOcid">resetOcid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.resetResourceTypeSchemaVersion">resetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.resetX509Base64Certificate">resetX509Base64Certificate</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.putTags"></a>

```java
public void putTags(IResolvable OR java.util.List<IdentityDomainsOauthPartnerCertificateTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.putTags.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTags">IdentityDomainsOauthPartnerCertificateTags</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.putTimeouts"></a>

```java
public void putTimeouts(IdentityDomainsOauthPartnerCertificateTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeouts">IdentityDomainsOauthPartnerCertificateTimeouts</a>

---

##### `resetAuthorization` <a name="resetAuthorization" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.resetAuthorization"></a>

```java
public void resetAuthorization()
```

##### `resetExternalId` <a name="resetExternalId" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.resetExternalId"></a>

```java
public void resetExternalId()
```

##### `resetKeyStoreId` <a name="resetKeyStoreId" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.resetKeyStoreId"></a>

```java
public void resetKeyStoreId()
```

##### `resetKeyStoreName` <a name="resetKeyStoreName" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.resetKeyStoreName"></a>

```java
public void resetKeyStoreName()
```

##### `resetKeyStorePassword` <a name="resetKeyStorePassword" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.resetKeyStorePassword"></a>

```java
public void resetKeyStorePassword()
```

##### `resetMap` <a name="resetMap" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.resetMap"></a>

```java
public void resetMap()
```

##### `resetOcid` <a name="resetOcid" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.resetOcid"></a>

```java
public void resetOcid()
```

##### `resetResourceTypeSchemaVersion` <a name="resetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.resetResourceTypeSchemaVersion"></a>

```java
public void resetResourceTypeSchemaVersion()
```

##### `resetTags` <a name="resetTags" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetX509Base64Certificate` <a name="resetX509Base64Certificate" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.resetX509Base64Certificate"></a>

```java
public void resetX509Base64Certificate()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityDomainsOauthPartnerCertificate resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_oauth_partner_certificate.IdentityDomainsOauthPartnerCertificate;

IdentityDomainsOauthPartnerCertificate.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_oauth_partner_certificate.IdentityDomainsOauthPartnerCertificate;

IdentityDomainsOauthPartnerCertificate.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_oauth_partner_certificate.IdentityDomainsOauthPartnerCertificate;

IdentityDomainsOauthPartnerCertificate.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_oauth_partner_certificate.IdentityDomainsOauthPartnerCertificate;

IdentityDomainsOauthPartnerCertificate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IdentityDomainsOauthPartnerCertificate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a IdentityDomainsOauthPartnerCertificate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IdentityDomainsOauthPartnerCertificate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IdentityDomainsOauthPartnerCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the IdentityDomainsOauthPartnerCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.certEndDate">certEndDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.certStartDate">certStartDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.compartmentOcid">compartmentOcid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.deleteInProgress">deleteInProgress</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.domainOcid">domainOcid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.idcsCreatedBy">idcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByList">IdentityDomainsOauthPartnerCertificateIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.idcsLastModifiedBy">idcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList">IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.idcsLastUpgradedInRelease">idcsLastUpgradedInRelease</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.idcsPreventedOperations">idcsPreventedOperations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaList">IdentityDomainsOauthPartnerCertificateMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.sha1Thumbprint">sha1Thumbprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.sha256Thumbprint">sha256Thumbprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsList">IdentityDomainsOauthPartnerCertificateTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.tenancyOcid">tenancyOcid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference">IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.authorizationInput">authorizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.certificateAliasInput">certificateAliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.externalIdInput">externalIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.idcsEndpointInput">idcsEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.keyStoreIdInput">keyStoreIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.keyStoreNameInput">keyStoreNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.keyStorePasswordInput">keyStorePasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.mapInput">mapInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.ocidInput">ocidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.resourceTypeSchemaVersionInput">resourceTypeSchemaVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.schemasInput">schemasInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.tagsInput">tagsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTags">IdentityDomainsOauthPartnerCertificateTags</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeouts">IdentityDomainsOauthPartnerCertificateTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.x509Base64CertificateInput">x509Base64CertificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.authorization">authorization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.certificateAlias">certificateAlias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.externalId">externalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.idcsEndpoint">idcsEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.keyStoreId">keyStoreId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.keyStoreName">keyStoreName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.keyStorePassword">keyStorePassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.map">map</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.schemas">schemas</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.x509Base64Certificate">x509Base64Certificate</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `certEndDate`<sup>Required</sup> <a name="certEndDate" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.certEndDate"></a>

```java
public java.lang.String getCertEndDate();
```

- *Type:* java.lang.String

---

##### `certStartDate`<sup>Required</sup> <a name="certStartDate" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.certStartDate"></a>

```java
public java.lang.String getCertStartDate();
```

- *Type:* java.lang.String

---

##### `compartmentOcid`<sup>Required</sup> <a name="compartmentOcid" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.compartmentOcid"></a>

```java
public java.lang.String getCompartmentOcid();
```

- *Type:* java.lang.String

---

##### `deleteInProgress`<sup>Required</sup> <a name="deleteInProgress" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.deleteInProgress"></a>

```java
public IResolvable getDeleteInProgress();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `domainOcid`<sup>Required</sup> <a name="domainOcid" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.domainOcid"></a>

```java
public java.lang.String getDomainOcid();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `idcsCreatedBy`<sup>Required</sup> <a name="idcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.idcsCreatedBy"></a>

```java
public IdentityDomainsOauthPartnerCertificateIdcsCreatedByList getIdcsCreatedBy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByList">IdentityDomainsOauthPartnerCertificateIdcsCreatedByList</a>

---

##### `idcsLastModifiedBy`<sup>Required</sup> <a name="idcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.idcsLastModifiedBy"></a>

```java
public IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList getIdcsLastModifiedBy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList">IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList</a>

---

##### `idcsLastUpgradedInRelease`<sup>Required</sup> <a name="idcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.idcsLastUpgradedInRelease"></a>

```java
public java.lang.String getIdcsLastUpgradedInRelease();
```

- *Type:* java.lang.String

---

##### `idcsPreventedOperations`<sup>Required</sup> <a name="idcsPreventedOperations" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.idcsPreventedOperations"></a>

```java
public java.util.List<java.lang.String> getIdcsPreventedOperations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.meta"></a>

```java
public IdentityDomainsOauthPartnerCertificateMetaList getMeta();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaList">IdentityDomainsOauthPartnerCertificateMetaList</a>

---

##### `sha1Thumbprint`<sup>Required</sup> <a name="sha1Thumbprint" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.sha1Thumbprint"></a>

```java
public java.lang.String getSha1Thumbprint();
```

- *Type:* java.lang.String

---

##### `sha256Thumbprint`<sup>Required</sup> <a name="sha256Thumbprint" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.sha256Thumbprint"></a>

```java
public java.lang.String getSha256Thumbprint();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.tags"></a>

```java
public IdentityDomainsOauthPartnerCertificateTagsList getTags();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsList">IdentityDomainsOauthPartnerCertificateTagsList</a>

---

##### `tenancyOcid`<sup>Required</sup> <a name="tenancyOcid" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.tenancyOcid"></a>

```java
public java.lang.String getTenancyOcid();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.timeouts"></a>

```java
public IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference">IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference</a>

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.authorizationInput"></a>

```java
public java.lang.String getAuthorizationInput();
```

- *Type:* java.lang.String

---

##### `certificateAliasInput`<sup>Optional</sup> <a name="certificateAliasInput" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.certificateAliasInput"></a>

```java
public java.lang.String getCertificateAliasInput();
```

- *Type:* java.lang.String

---

##### `externalIdInput`<sup>Optional</sup> <a name="externalIdInput" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.externalIdInput"></a>

```java
public java.lang.String getExternalIdInput();
```

- *Type:* java.lang.String

---

##### `idcsEndpointInput`<sup>Optional</sup> <a name="idcsEndpointInput" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.idcsEndpointInput"></a>

```java
public java.lang.String getIdcsEndpointInput();
```

- *Type:* java.lang.String

---

##### `keyStoreIdInput`<sup>Optional</sup> <a name="keyStoreIdInput" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.keyStoreIdInput"></a>

```java
public java.lang.String getKeyStoreIdInput();
```

- *Type:* java.lang.String

---

##### `keyStoreNameInput`<sup>Optional</sup> <a name="keyStoreNameInput" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.keyStoreNameInput"></a>

```java
public java.lang.String getKeyStoreNameInput();
```

- *Type:* java.lang.String

---

##### `keyStorePasswordInput`<sup>Optional</sup> <a name="keyStorePasswordInput" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.keyStorePasswordInput"></a>

```java
public java.lang.String getKeyStorePasswordInput();
```

- *Type:* java.lang.String

---

##### `mapInput`<sup>Optional</sup> <a name="mapInput" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.mapInput"></a>

```java
public java.lang.String getMapInput();
```

- *Type:* java.lang.String

---

##### `ocidInput`<sup>Optional</sup> <a name="ocidInput" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.ocidInput"></a>

```java
public java.lang.String getOcidInput();
```

- *Type:* java.lang.String

---

##### `resourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="resourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.resourceTypeSchemaVersionInput"></a>

```java
public java.lang.String getResourceTypeSchemaVersionInput();
```

- *Type:* java.lang.String

---

##### `schemasInput`<sup>Optional</sup> <a name="schemasInput" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.schemasInput"></a>

```java
public java.util.List<java.lang.String> getSchemasInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.tagsInput"></a>

```java
public java.lang.Object getTagsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTags">IdentityDomainsOauthPartnerCertificateTags</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeouts">IdentityDomainsOauthPartnerCertificateTimeouts</a>

---

##### `x509Base64CertificateInput`<sup>Optional</sup> <a name="x509Base64CertificateInput" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.x509Base64CertificateInput"></a>

```java
public java.lang.String getX509Base64CertificateInput();
```

- *Type:* java.lang.String

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.authorization"></a>

```java
public java.lang.String getAuthorization();
```

- *Type:* java.lang.String

---

##### `certificateAlias`<sup>Required</sup> <a name="certificateAlias" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.certificateAlias"></a>

```java
public java.lang.String getCertificateAlias();
```

- *Type:* java.lang.String

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.idcsEndpoint"></a>

```java
public java.lang.String getIdcsEndpoint();
```

- *Type:* java.lang.String

---

##### `keyStoreId`<sup>Required</sup> <a name="keyStoreId" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.keyStoreId"></a>

```java
public java.lang.String getKeyStoreId();
```

- *Type:* java.lang.String

---

##### `keyStoreName`<sup>Required</sup> <a name="keyStoreName" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.keyStoreName"></a>

```java
public java.lang.String getKeyStoreName();
```

- *Type:* java.lang.String

---

##### `keyStorePassword`<sup>Required</sup> <a name="keyStorePassword" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.keyStorePassword"></a>

```java
public java.lang.String getKeyStorePassword();
```

- *Type:* java.lang.String

---

##### `map`<sup>Required</sup> <a name="map" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.map"></a>

```java
public java.lang.String getMap();
```

- *Type:* java.lang.String

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.resourceTypeSchemaVersion"></a>

```java
public java.lang.String getResourceTypeSchemaVersion();
```

- *Type:* java.lang.String

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.schemas"></a>

```java
public java.util.List<java.lang.String> getSchemas();
```

- *Type:* java.util.List<java.lang.String>

---

##### `x509Base64Certificate`<sup>Required</sup> <a name="x509Base64Certificate" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.x509Base64Certificate"></a>

```java
public java.lang.String getX509Base64Certificate();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificate.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityDomainsOauthPartnerCertificateConfig <a name="IdentityDomainsOauthPartnerCertificateConfig" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_oauth_partner_certificate.IdentityDomainsOauthPartnerCertificateConfig;

IdentityDomainsOauthPartnerCertificateConfig.builder()
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
    .certificateAlias(java.lang.String)
    .idcsEndpoint(java.lang.String)
    .schemas(java.util.List<java.lang.String>)
//  .authorization(java.lang.String)
//  .externalId(java.lang.String)
//  .keyStoreId(java.lang.String)
//  .keyStoreName(java.lang.String)
//  .keyStorePassword(java.lang.String)
//  .map(java.lang.String)
//  .ocid(java.lang.String)
//  .resourceTypeSchemaVersion(java.lang.String)
//  .tags(IResolvable)
//  .tags(java.util.List<IdentityDomainsOauthPartnerCertificateTags>)
//  .timeouts(IdentityDomainsOauthPartnerCertificateTimeouts)
//  .x509Base64Certificate(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.certificateAlias">certificateAlias</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#certificate_alias IdentityDomainsOauthPartnerCertificate#certificate_alias}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.idcsEndpoint">idcsEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#idcs_endpoint IdentityDomainsOauthPartnerCertificate#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.schemas">schemas</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#schemas IdentityDomainsOauthPartnerCertificate#schemas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.authorization">authorization</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#authorization IdentityDomainsOauthPartnerCertificate#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.externalId">externalId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#external_id IdentityDomainsOauthPartnerCertificate#external_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.keyStoreId">keyStoreId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#key_store_id IdentityDomainsOauthPartnerCertificate#key_store_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.keyStoreName">keyStoreName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#key_store_name IdentityDomainsOauthPartnerCertificate#key_store_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.keyStorePassword">keyStorePassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#key_store_password IdentityDomainsOauthPartnerCertificate#key_store_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.map">map</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#map IdentityDomainsOauthPartnerCertificate#map}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.ocid">ocid</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#ocid IdentityDomainsOauthPartnerCertificate#ocid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#resource_type_schema_version IdentityDomainsOauthPartnerCertificate#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.tags">tags</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTags">IdentityDomainsOauthPartnerCertificateTags</a>></code> | tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeouts">IdentityDomainsOauthPartnerCertificateTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.x509Base64Certificate">x509Base64Certificate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#x509base64certificate IdentityDomainsOauthPartnerCertificate#x509base64certificate}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `certificateAlias`<sup>Required</sup> <a name="certificateAlias" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.certificateAlias"></a>

```java
public java.lang.String getCertificateAlias();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#certificate_alias IdentityDomainsOauthPartnerCertificate#certificate_alias}.

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.idcsEndpoint"></a>

```java
public java.lang.String getIdcsEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#idcs_endpoint IdentityDomainsOauthPartnerCertificate#idcs_endpoint}.

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.schemas"></a>

```java
public java.util.List<java.lang.String> getSchemas();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#schemas IdentityDomainsOauthPartnerCertificate#schemas}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.authorization"></a>

```java
public java.lang.String getAuthorization();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#authorization IdentityDomainsOauthPartnerCertificate#authorization}.

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#external_id IdentityDomainsOauthPartnerCertificate#external_id}.

---

##### `keyStoreId`<sup>Optional</sup> <a name="keyStoreId" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.keyStoreId"></a>

```java
public java.lang.String getKeyStoreId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#key_store_id IdentityDomainsOauthPartnerCertificate#key_store_id}.

---

##### `keyStoreName`<sup>Optional</sup> <a name="keyStoreName" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.keyStoreName"></a>

```java
public java.lang.String getKeyStoreName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#key_store_name IdentityDomainsOauthPartnerCertificate#key_store_name}.

---

##### `keyStorePassword`<sup>Optional</sup> <a name="keyStorePassword" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.keyStorePassword"></a>

```java
public java.lang.String getKeyStorePassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#key_store_password IdentityDomainsOauthPartnerCertificate#key_store_password}.

---

##### `map`<sup>Optional</sup> <a name="map" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.map"></a>

```java
public java.lang.String getMap();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#map IdentityDomainsOauthPartnerCertificate#map}.

---

##### `ocid`<sup>Optional</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#ocid IdentityDomainsOauthPartnerCertificate#ocid}.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.resourceTypeSchemaVersion"></a>

```java
public java.lang.String getResourceTypeSchemaVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#resource_type_schema_version IdentityDomainsOauthPartnerCertificate#resource_type_schema_version}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.tags"></a>

```java
public java.lang.Object getTags();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTags">IdentityDomainsOauthPartnerCertificateTags</a>>

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#tags IdentityDomainsOauthPartnerCertificate#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.timeouts"></a>

```java
public IdentityDomainsOauthPartnerCertificateTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeouts">IdentityDomainsOauthPartnerCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#timeouts IdentityDomainsOauthPartnerCertificate#timeouts}

---

##### `x509Base64Certificate`<sup>Optional</sup> <a name="x509Base64Certificate" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateConfig.property.x509Base64Certificate"></a>

```java
public java.lang.String getX509Base64Certificate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#x509base64certificate IdentityDomainsOauthPartnerCertificate#x509base64certificate}.

---

### IdentityDomainsOauthPartnerCertificateIdcsCreatedBy <a name="IdentityDomainsOauthPartnerCertificateIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedBy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_oauth_partner_certificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedBy;

IdentityDomainsOauthPartnerCertificateIdcsCreatedBy.builder()
    .build();
```


### IdentityDomainsOauthPartnerCertificateIdcsLastModifiedBy <a name="IdentityDomainsOauthPartnerCertificateIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedBy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_oauth_partner_certificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedBy;

IdentityDomainsOauthPartnerCertificateIdcsLastModifiedBy.builder()
    .build();
```


### IdentityDomainsOauthPartnerCertificateMeta <a name="IdentityDomainsOauthPartnerCertificateMeta" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMeta.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_oauth_partner_certificate.IdentityDomainsOauthPartnerCertificateMeta;

IdentityDomainsOauthPartnerCertificateMeta.builder()
    .build();
```


### IdentityDomainsOauthPartnerCertificateTags <a name="IdentityDomainsOauthPartnerCertificateTags" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_oauth_partner_certificate.IdentityDomainsOauthPartnerCertificateTags;

IdentityDomainsOauthPartnerCertificateTags.builder()
    .key(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#key IdentityDomainsOauthPartnerCertificate#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#value IdentityDomainsOauthPartnerCertificate#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#key IdentityDomainsOauthPartnerCertificate#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#value IdentityDomainsOauthPartnerCertificate#value}.

---

### IdentityDomainsOauthPartnerCertificateTimeouts <a name="IdentityDomainsOauthPartnerCertificateTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_oauth_partner_certificate.IdentityDomainsOauthPartnerCertificateTimeouts;

IdentityDomainsOauthPartnerCertificateTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#create IdentityDomainsOauthPartnerCertificate#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#delete IdentityDomainsOauthPartnerCertificate#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#update IdentityDomainsOauthPartnerCertificate#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#create IdentityDomainsOauthPartnerCertificate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#delete IdentityDomainsOauthPartnerCertificate#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_partner_certificate#update IdentityDomainsOauthPartnerCertificate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityDomainsOauthPartnerCertificateIdcsCreatedByList <a name="IdentityDomainsOauthPartnerCertificateIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_oauth_partner_certificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByList;

new IdentityDomainsOauthPartnerCertificateIdcsCreatedByList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByList.get"></a>

```java
public IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference <a name="IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_oauth_partner_certificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference;

new IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.property.display">display</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedBy">IdentityDomainsOauthPartnerCertificateIdcsCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.property.display"></a>

```java
public java.lang.String getDisplay();
```

- *Type:* java.lang.String

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.property.internalValue"></a>

```java
public IdentityDomainsOauthPartnerCertificateIdcsCreatedBy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsCreatedBy">IdentityDomainsOauthPartnerCertificateIdcsCreatedBy</a>

---


### IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList <a name="IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_oauth_partner_certificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList;

new IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList.get"></a>

```java
public IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference <a name="IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_oauth_partner_certificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference;

new IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedBy">IdentityDomainsOauthPartnerCertificateIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.property.display"></a>

```java
public java.lang.String getDisplay();
```

- *Type:* java.lang.String

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.property.internalValue"></a>

```java
public IdentityDomainsOauthPartnerCertificateIdcsLastModifiedBy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateIdcsLastModifiedBy">IdentityDomainsOauthPartnerCertificateIdcsLastModifiedBy</a>

---


### IdentityDomainsOauthPartnerCertificateMetaList <a name="IdentityDomainsOauthPartnerCertificateMetaList" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_oauth_partner_certificate.IdentityDomainsOauthPartnerCertificateMetaList;

new IdentityDomainsOauthPartnerCertificateMetaList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaList.get"></a>

```java
public IdentityDomainsOauthPartnerCertificateMetaOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### IdentityDomainsOauthPartnerCertificateMetaOutputReference <a name="IdentityDomainsOauthPartnerCertificateMetaOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_oauth_partner_certificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference;

new IdentityDomainsOauthPartnerCertificateMetaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.property.created">created</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.property.lastModified">lastModified</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMeta">IdentityDomainsOauthPartnerCertificateMeta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.property.created"></a>

```java
public java.lang.String getCreated();
```

- *Type:* java.lang.String

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.property.lastModified"></a>

```java
public java.lang.String getLastModified();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMetaOutputReference.property.internalValue"></a>

```java
public IdentityDomainsOauthPartnerCertificateMeta getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateMeta">IdentityDomainsOauthPartnerCertificateMeta</a>

---


### IdentityDomainsOauthPartnerCertificateTagsList <a name="IdentityDomainsOauthPartnerCertificateTagsList" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_oauth_partner_certificate.IdentityDomainsOauthPartnerCertificateTagsList;

new IdentityDomainsOauthPartnerCertificateTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsList.get"></a>

```java
public IdentityDomainsOauthPartnerCertificateTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTags">IdentityDomainsOauthPartnerCertificateTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTags">IdentityDomainsOauthPartnerCertificateTags</a>>

---


### IdentityDomainsOauthPartnerCertificateTagsOutputReference <a name="IdentityDomainsOauthPartnerCertificateTagsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_oauth_partner_certificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference;

new IdentityDomainsOauthPartnerCertificateTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTags">IdentityDomainsOauthPartnerCertificateTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTagsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTags">IdentityDomainsOauthPartnerCertificateTags</a>

---


### IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference <a name="IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_oauth_partner_certificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference;

new IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeouts">IdentityDomainsOauthPartnerCertificateTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthPartnerCertificate.IdentityDomainsOauthPartnerCertificateTimeouts">IdentityDomainsOauthPartnerCertificateTimeouts</a>

---



