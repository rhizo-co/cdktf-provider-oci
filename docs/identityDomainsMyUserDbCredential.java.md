# `identityDomainsMyUserDbCredential` Submodule <a name="`identityDomainsMyUserDbCredential` Submodule" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityDomainsMyUserDbCredential <a name="IdentityDomainsMyUserDbCredential" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_user_db_credential oci_identity_domains_my_user_db_credential}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_my_user_db_credential.IdentityDomainsMyUserDbCredential;

IdentityDomainsMyUserDbCredential.Builder.create(Construct scope, java.lang.String id)
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
    .dbPassword(java.lang.String)
    .idcsEndpoint(java.lang.String)
    .schemas(java.util.List<java.lang.String>)
//  .authorization(java.lang.String)
//  .description(java.lang.String)
//  .expiresOn(java.lang.String)
//  .ocid(java.lang.String)
//  .resourceTypeSchemaVersion(java.lang.String)
//  .status(java.lang.String)
//  .tags(IResolvable)
//  .tags(java.util.List<IdentityDomainsMyUserDbCredentialTags>)
//  .timeouts(IdentityDomainsMyUserDbCredentialTimeouts)
//  .user(IdentityDomainsMyUserDbCredentialUser)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.Initializer.parameter.dbPassword">dbPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_user_db_credential#db_password IdentityDomainsMyUserDbCredential#db_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.Initializer.parameter.idcsEndpoint">idcsEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_user_db_credential#idcs_endpoint IdentityDomainsMyUserDbCredential#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.Initializer.parameter.schemas">schemas</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_user_db_credential#schemas IdentityDomainsMyUserDbCredential#schemas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.Initializer.parameter.authorization">authorization</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_user_db_credential#authorization IdentityDomainsMyUserDbCredential#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_user_db_credential#description IdentityDomainsMyUserDbCredential#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.Initializer.parameter.expiresOn">expiresOn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_user_db_credential#expires_on IdentityDomainsMyUserDbCredential#expires_on}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.Initializer.parameter.ocid">ocid</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_user_db_credential#ocid IdentityDomainsMyUserDbCredential#ocid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.Initializer.parameter.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_user_db_credential#resource_type_schema_version IdentityDomainsMyUserDbCredential#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_user_db_credential#status IdentityDomainsMyUserDbCredential#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.Initializer.parameter.tags">tags</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTags">IdentityDomainsMyUserDbCredentialTags</a>></code> | tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeouts">IdentityDomainsMyUserDbCredentialTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.Initializer.parameter.user">user</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUser">IdentityDomainsMyUserDbCredentialUser</a></code> | user block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dbPassword`<sup>Required</sup> <a name="dbPassword" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.Initializer.parameter.dbPassword"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_user_db_credential#db_password IdentityDomainsMyUserDbCredential#db_password}.

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.Initializer.parameter.idcsEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_user_db_credential#idcs_endpoint IdentityDomainsMyUserDbCredential#idcs_endpoint}.

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.Initializer.parameter.schemas"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_user_db_credential#schemas IdentityDomainsMyUserDbCredential#schemas}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.Initializer.parameter.authorization"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_user_db_credential#authorization IdentityDomainsMyUserDbCredential#authorization}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_user_db_credential#description IdentityDomainsMyUserDbCredential#description}.

---

##### `expiresOn`<sup>Optional</sup> <a name="expiresOn" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.Initializer.parameter.expiresOn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_user_db_credential#expires_on IdentityDomainsMyUserDbCredential#expires_on}.

---

##### `ocid`<sup>Optional</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.Initializer.parameter.ocid"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_user_db_credential#ocid IdentityDomainsMyUserDbCredential#ocid}.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.Initializer.parameter.resourceTypeSchemaVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_user_db_credential#resource_type_schema_version IdentityDomainsMyUserDbCredential#resource_type_schema_version}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_user_db_credential#status IdentityDomainsMyUserDbCredential#status}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.Initializer.parameter.tags"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTags">IdentityDomainsMyUserDbCredentialTags</a>>

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_user_db_credential#tags IdentityDomainsMyUserDbCredential#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeouts">IdentityDomainsMyUserDbCredentialTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_user_db_credential#timeouts IdentityDomainsMyUserDbCredential#timeouts}

---

##### `user`<sup>Optional</sup> <a name="user" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.Initializer.parameter.user"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUser">IdentityDomainsMyUserDbCredentialUser</a>

user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_user_db_credential#user IdentityDomainsMyUserDbCredential#user}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.putTags">putTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.putUser">putUser</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.resetExpiresOn">resetExpiresOn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.resetOcid">resetOcid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.resetResourceTypeSchemaVersion">resetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.resetUser">resetUser</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.putTags"></a>

```java
public void putTags(IResolvable OR java.util.List<IdentityDomainsMyUserDbCredentialTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.putTags.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTags">IdentityDomainsMyUserDbCredentialTags</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.putTimeouts"></a>

```java
public void putTimeouts(IdentityDomainsMyUserDbCredentialTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeouts">IdentityDomainsMyUserDbCredentialTimeouts</a>

---

##### `putUser` <a name="putUser" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.putUser"></a>

```java
public void putUser(IdentityDomainsMyUserDbCredentialUser value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.putUser.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUser">IdentityDomainsMyUserDbCredentialUser</a>

---

##### `resetAuthorization` <a name="resetAuthorization" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.resetAuthorization"></a>

```java
public void resetAuthorization()
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetExpiresOn` <a name="resetExpiresOn" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.resetExpiresOn"></a>

```java
public void resetExpiresOn()
```

##### `resetOcid` <a name="resetOcid" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.resetOcid"></a>

```java
public void resetOcid()
```

##### `resetResourceTypeSchemaVersion` <a name="resetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.resetResourceTypeSchemaVersion"></a>

```java
public void resetResourceTypeSchemaVersion()
```

##### `resetStatus` <a name="resetStatus" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetTags` <a name="resetTags" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUser` <a name="resetUser" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.resetUser"></a>

```java
public void resetUser()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityDomainsMyUserDbCredential resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_my_user_db_credential.IdentityDomainsMyUserDbCredential;

IdentityDomainsMyUserDbCredential.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_my_user_db_credential.IdentityDomainsMyUserDbCredential;

IdentityDomainsMyUserDbCredential.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_my_user_db_credential.IdentityDomainsMyUserDbCredential;

IdentityDomainsMyUserDbCredential.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_my_user_db_credential.IdentityDomainsMyUserDbCredential;

IdentityDomainsMyUserDbCredential.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IdentityDomainsMyUserDbCredential.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a IdentityDomainsMyUserDbCredential resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IdentityDomainsMyUserDbCredential to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IdentityDomainsMyUserDbCredential that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_user_db_credential#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the IdentityDomainsMyUserDbCredential to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.compartmentOcid">compartmentOcid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.deleteInProgress">deleteInProgress</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.domainOcid">domainOcid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.expired">expired</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.idcsCreatedBy">idcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByList">IdentityDomainsMyUserDbCredentialIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.idcsLastModifiedBy">idcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByList">IdentityDomainsMyUserDbCredentialIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.idcsLastUpgradedInRelease">idcsLastUpgradedInRelease</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.idcsPreventedOperations">idcsPreventedOperations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.lastSetDate">lastSetDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaList">IdentityDomainsMyUserDbCredentialMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.mixedDbPassword">mixedDbPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.mixedSalt">mixedSalt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.salt">salt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsList">IdentityDomainsMyUserDbCredentialTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.tenancyOcid">tenancyOcid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeoutsOutputReference">IdentityDomainsMyUserDbCredentialTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.user">user</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUserOutputReference">IdentityDomainsMyUserDbCredentialUserOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.authorizationInput">authorizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.dbPasswordInput">dbPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.expiresOnInput">expiresOnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.idcsEndpointInput">idcsEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.ocidInput">ocidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.resourceTypeSchemaVersionInput">resourceTypeSchemaVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.schemasInput">schemasInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.tagsInput">tagsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTags">IdentityDomainsMyUserDbCredentialTags</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeouts">IdentityDomainsMyUserDbCredentialTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.userInput">userInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUser">IdentityDomainsMyUserDbCredentialUser</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.authorization">authorization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.dbPassword">dbPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.expiresOn">expiresOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.idcsEndpoint">idcsEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.schemas">schemas</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentOcid`<sup>Required</sup> <a name="compartmentOcid" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.compartmentOcid"></a>

```java
public java.lang.String getCompartmentOcid();
```

- *Type:* java.lang.String

---

##### `deleteInProgress`<sup>Required</sup> <a name="deleteInProgress" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.deleteInProgress"></a>

```java
public IResolvable getDeleteInProgress();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `domainOcid`<sup>Required</sup> <a name="domainOcid" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.domainOcid"></a>

```java
public java.lang.String getDomainOcid();
```

- *Type:* java.lang.String

---

##### `expired`<sup>Required</sup> <a name="expired" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.expired"></a>

```java
public IResolvable getExpired();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `idcsCreatedBy`<sup>Required</sup> <a name="idcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.idcsCreatedBy"></a>

```java
public IdentityDomainsMyUserDbCredentialIdcsCreatedByList getIdcsCreatedBy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByList">IdentityDomainsMyUserDbCredentialIdcsCreatedByList</a>

---

##### `idcsLastModifiedBy`<sup>Required</sup> <a name="idcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.idcsLastModifiedBy"></a>

```java
public IdentityDomainsMyUserDbCredentialIdcsLastModifiedByList getIdcsLastModifiedBy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByList">IdentityDomainsMyUserDbCredentialIdcsLastModifiedByList</a>

---

##### `idcsLastUpgradedInRelease`<sup>Required</sup> <a name="idcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.idcsLastUpgradedInRelease"></a>

```java
public java.lang.String getIdcsLastUpgradedInRelease();
```

- *Type:* java.lang.String

---

##### `idcsPreventedOperations`<sup>Required</sup> <a name="idcsPreventedOperations" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.idcsPreventedOperations"></a>

```java
public java.util.List<java.lang.String> getIdcsPreventedOperations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `lastSetDate`<sup>Required</sup> <a name="lastSetDate" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.lastSetDate"></a>

```java
public java.lang.String getLastSetDate();
```

- *Type:* java.lang.String

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.meta"></a>

```java
public IdentityDomainsMyUserDbCredentialMetaList getMeta();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaList">IdentityDomainsMyUserDbCredentialMetaList</a>

---

##### `mixedDbPassword`<sup>Required</sup> <a name="mixedDbPassword" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.mixedDbPassword"></a>

```java
public java.lang.String getMixedDbPassword();
```

- *Type:* java.lang.String

---

##### `mixedSalt`<sup>Required</sup> <a name="mixedSalt" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.mixedSalt"></a>

```java
public java.lang.String getMixedSalt();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `salt`<sup>Required</sup> <a name="salt" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.salt"></a>

```java
public java.lang.String getSalt();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.tags"></a>

```java
public IdentityDomainsMyUserDbCredentialTagsList getTags();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsList">IdentityDomainsMyUserDbCredentialTagsList</a>

---

##### `tenancyOcid`<sup>Required</sup> <a name="tenancyOcid" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.tenancyOcid"></a>

```java
public java.lang.String getTenancyOcid();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.timeouts"></a>

```java
public IdentityDomainsMyUserDbCredentialTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeoutsOutputReference">IdentityDomainsMyUserDbCredentialTimeoutsOutputReference</a>

---

##### `user`<sup>Required</sup> <a name="user" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.user"></a>

```java
public IdentityDomainsMyUserDbCredentialUserOutputReference getUser();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUserOutputReference">IdentityDomainsMyUserDbCredentialUserOutputReference</a>

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.authorizationInput"></a>

```java
public java.lang.String getAuthorizationInput();
```

- *Type:* java.lang.String

---

##### `dbPasswordInput`<sup>Optional</sup> <a name="dbPasswordInput" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.dbPasswordInput"></a>

```java
public java.lang.String getDbPasswordInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expiresOnInput`<sup>Optional</sup> <a name="expiresOnInput" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.expiresOnInput"></a>

```java
public java.lang.String getExpiresOnInput();
```

- *Type:* java.lang.String

---

##### `idcsEndpointInput`<sup>Optional</sup> <a name="idcsEndpointInput" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.idcsEndpointInput"></a>

```java
public java.lang.String getIdcsEndpointInput();
```

- *Type:* java.lang.String

---

##### `ocidInput`<sup>Optional</sup> <a name="ocidInput" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.ocidInput"></a>

```java
public java.lang.String getOcidInput();
```

- *Type:* java.lang.String

---

##### `resourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="resourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.resourceTypeSchemaVersionInput"></a>

```java
public java.lang.String getResourceTypeSchemaVersionInput();
```

- *Type:* java.lang.String

---

##### `schemasInput`<sup>Optional</sup> <a name="schemasInput" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.schemasInput"></a>

```java
public java.util.List<java.lang.String> getSchemasInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.tagsInput"></a>

```java
public java.lang.Object getTagsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTags">IdentityDomainsMyUserDbCredentialTags</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeouts">IdentityDomainsMyUserDbCredentialTimeouts</a>

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.userInput"></a>

```java
public IdentityDomainsMyUserDbCredentialUser getUserInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUser">IdentityDomainsMyUserDbCredentialUser</a>

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.authorization"></a>

```java
public java.lang.String getAuthorization();
```

- *Type:* java.lang.String

---

##### `dbPassword`<sup>Required</sup> <a name="dbPassword" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.dbPassword"></a>

```java
public java.lang.String getDbPassword();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expiresOn`<sup>Required</sup> <a name="expiresOn" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.expiresOn"></a>

```java
public java.lang.String getExpiresOn();
```

- *Type:* java.lang.String

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.idcsEndpoint"></a>

```java
public java.lang.String getIdcsEndpoint();
```

- *Type:* java.lang.String

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.resourceTypeSchemaVersion"></a>

```java
public java.lang.String getResourceTypeSchemaVersion();
```

- *Type:* java.lang.String

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.schemas"></a>

```java
public java.util.List<java.lang.String> getSchemas();
```

- *Type:* java.util.List<java.lang.String>

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredential.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityDomainsMyUserDbCredentialConfig <a name="IdentityDomainsMyUserDbCredentialConfig" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_my_user_db_credential.IdentityDomainsMyUserDbCredentialConfig;

IdentityDomainsMyUserDbCredentialConfig.builder()
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
    .dbPassword(java.lang.String)
    .idcsEndpoint(java.lang.String)
    .schemas(java.util.List<java.lang.String>)
//  .authorization(java.lang.String)
//  .description(java.lang.String)
//  .expiresOn(java.lang.String)
//  .ocid(java.lang.String)
//  .resourceTypeSchemaVersion(java.lang.String)
//  .status(java.lang.String)
//  .tags(IResolvable)
//  .tags(java.util.List<IdentityDomainsMyUserDbCredentialTags>)
//  .timeouts(IdentityDomainsMyUserDbCredentialTimeouts)
//  .user(IdentityDomainsMyUserDbCredentialUser)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialConfig.property.dbPassword">dbPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_user_db_credential#db_password IdentityDomainsMyUserDbCredential#db_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialConfig.property.idcsEndpoint">idcsEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_user_db_credential#idcs_endpoint IdentityDomainsMyUserDbCredential#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialConfig.property.schemas">schemas</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_user_db_credential#schemas IdentityDomainsMyUserDbCredential#schemas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialConfig.property.authorization">authorization</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_user_db_credential#authorization IdentityDomainsMyUserDbCredential#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_user_db_credential#description IdentityDomainsMyUserDbCredential#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialConfig.property.expiresOn">expiresOn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_user_db_credential#expires_on IdentityDomainsMyUserDbCredential#expires_on}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialConfig.property.ocid">ocid</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_user_db_credential#ocid IdentityDomainsMyUserDbCredential#ocid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialConfig.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_user_db_credential#resource_type_schema_version IdentityDomainsMyUserDbCredential#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialConfig.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_user_db_credential#status IdentityDomainsMyUserDbCredential#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialConfig.property.tags">tags</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTags">IdentityDomainsMyUserDbCredentialTags</a>></code> | tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeouts">IdentityDomainsMyUserDbCredentialTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialConfig.property.user">user</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUser">IdentityDomainsMyUserDbCredentialUser</a></code> | user block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dbPassword`<sup>Required</sup> <a name="dbPassword" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialConfig.property.dbPassword"></a>

```java
public java.lang.String getDbPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_user_db_credential#db_password IdentityDomainsMyUserDbCredential#db_password}.

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialConfig.property.idcsEndpoint"></a>

```java
public java.lang.String getIdcsEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_user_db_credential#idcs_endpoint IdentityDomainsMyUserDbCredential#idcs_endpoint}.

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialConfig.property.schemas"></a>

```java
public java.util.List<java.lang.String> getSchemas();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_user_db_credential#schemas IdentityDomainsMyUserDbCredential#schemas}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialConfig.property.authorization"></a>

```java
public java.lang.String getAuthorization();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_user_db_credential#authorization IdentityDomainsMyUserDbCredential#authorization}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_user_db_credential#description IdentityDomainsMyUserDbCredential#description}.

---

##### `expiresOn`<sup>Optional</sup> <a name="expiresOn" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialConfig.property.expiresOn"></a>

```java
public java.lang.String getExpiresOn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_user_db_credential#expires_on IdentityDomainsMyUserDbCredential#expires_on}.

---

##### `ocid`<sup>Optional</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialConfig.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_user_db_credential#ocid IdentityDomainsMyUserDbCredential#ocid}.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialConfig.property.resourceTypeSchemaVersion"></a>

```java
public java.lang.String getResourceTypeSchemaVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_user_db_credential#resource_type_schema_version IdentityDomainsMyUserDbCredential#resource_type_schema_version}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_user_db_credential#status IdentityDomainsMyUserDbCredential#status}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialConfig.property.tags"></a>

```java
public java.lang.Object getTags();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTags">IdentityDomainsMyUserDbCredentialTags</a>>

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_user_db_credential#tags IdentityDomainsMyUserDbCredential#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialConfig.property.timeouts"></a>

```java
public IdentityDomainsMyUserDbCredentialTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeouts">IdentityDomainsMyUserDbCredentialTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_user_db_credential#timeouts IdentityDomainsMyUserDbCredential#timeouts}

---

##### `user`<sup>Optional</sup> <a name="user" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialConfig.property.user"></a>

```java
public IdentityDomainsMyUserDbCredentialUser getUser();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUser">IdentityDomainsMyUserDbCredentialUser</a>

user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_user_db_credential#user IdentityDomainsMyUserDbCredential#user}

---

### IdentityDomainsMyUserDbCredentialIdcsCreatedBy <a name="IdentityDomainsMyUserDbCredentialIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedBy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_my_user_db_credential.IdentityDomainsMyUserDbCredentialIdcsCreatedBy;

IdentityDomainsMyUserDbCredentialIdcsCreatedBy.builder()
    .build();
```


### IdentityDomainsMyUserDbCredentialIdcsLastModifiedBy <a name="IdentityDomainsMyUserDbCredentialIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedBy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_my_user_db_credential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedBy;

IdentityDomainsMyUserDbCredentialIdcsLastModifiedBy.builder()
    .build();
```


### IdentityDomainsMyUserDbCredentialMeta <a name="IdentityDomainsMyUserDbCredentialMeta" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMeta.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_my_user_db_credential.IdentityDomainsMyUserDbCredentialMeta;

IdentityDomainsMyUserDbCredentialMeta.builder()
    .build();
```


### IdentityDomainsMyUserDbCredentialTags <a name="IdentityDomainsMyUserDbCredentialTags" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_my_user_db_credential.IdentityDomainsMyUserDbCredentialTags;

IdentityDomainsMyUserDbCredentialTags.builder()
    .key(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_user_db_credential#key IdentityDomainsMyUserDbCredential#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_user_db_credential#value IdentityDomainsMyUserDbCredential#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_user_db_credential#key IdentityDomainsMyUserDbCredential#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_user_db_credential#value IdentityDomainsMyUserDbCredential#value}.

---

### IdentityDomainsMyUserDbCredentialTimeouts <a name="IdentityDomainsMyUserDbCredentialTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_my_user_db_credential.IdentityDomainsMyUserDbCredentialTimeouts;

IdentityDomainsMyUserDbCredentialTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_user_db_credential#create IdentityDomainsMyUserDbCredential#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_user_db_credential#delete IdentityDomainsMyUserDbCredential#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_user_db_credential#update IdentityDomainsMyUserDbCredential#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_user_db_credential#create IdentityDomainsMyUserDbCredential#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_user_db_credential#delete IdentityDomainsMyUserDbCredential#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_user_db_credential#update IdentityDomainsMyUserDbCredential#update}.

---

### IdentityDomainsMyUserDbCredentialUser <a name="IdentityDomainsMyUserDbCredentialUser" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUser"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUser.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_my_user_db_credential.IdentityDomainsMyUserDbCredentialUser;

IdentityDomainsMyUserDbCredentialUser.builder()
    .value(java.lang.String)
//  .ocid(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUser.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_user_db_credential#value IdentityDomainsMyUserDbCredential#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUser.property.ocid">ocid</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_user_db_credential#ocid IdentityDomainsMyUserDbCredential#ocid}. |

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUser.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_user_db_credential#value IdentityDomainsMyUserDbCredential#value}.

---

##### `ocid`<sup>Optional</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUser.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_user_db_credential#ocid IdentityDomainsMyUserDbCredential#ocid}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityDomainsMyUserDbCredentialIdcsCreatedByList <a name="IdentityDomainsMyUserDbCredentialIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_my_user_db_credential.IdentityDomainsMyUserDbCredentialIdcsCreatedByList;

new IdentityDomainsMyUserDbCredentialIdcsCreatedByList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByList.get"></a>

```java
public IdentityDomainsMyUserDbCredentialIdcsCreatedByOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### IdentityDomainsMyUserDbCredentialIdcsCreatedByOutputReference <a name="IdentityDomainsMyUserDbCredentialIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_my_user_db_credential.IdentityDomainsMyUserDbCredentialIdcsCreatedByOutputReference;

new IdentityDomainsMyUserDbCredentialIdcsCreatedByOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByOutputReference.property.display">display</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedBy">IdentityDomainsMyUserDbCredentialIdcsCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByOutputReference.property.display"></a>

```java
public java.lang.String getDisplay();
```

- *Type:* java.lang.String

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByOutputReference.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByOutputReference.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedByOutputReference.property.internalValue"></a>

```java
public IdentityDomainsMyUserDbCredentialIdcsCreatedBy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsCreatedBy">IdentityDomainsMyUserDbCredentialIdcsCreatedBy</a>

---


### IdentityDomainsMyUserDbCredentialIdcsLastModifiedByList <a name="IdentityDomainsMyUserDbCredentialIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_my_user_db_credential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByList;

new IdentityDomainsMyUserDbCredentialIdcsLastModifiedByList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByList.get"></a>

```java
public IdentityDomainsMyUserDbCredentialIdcsLastModifiedByOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### IdentityDomainsMyUserDbCredentialIdcsLastModifiedByOutputReference <a name="IdentityDomainsMyUserDbCredentialIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_my_user_db_credential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByOutputReference;

new IdentityDomainsMyUserDbCredentialIdcsLastModifiedByOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedBy">IdentityDomainsMyUserDbCredentialIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByOutputReference.property.display"></a>

```java
public java.lang.String getDisplay();
```

- *Type:* java.lang.String

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByOutputReference.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByOutputReference.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedByOutputReference.property.internalValue"></a>

```java
public IdentityDomainsMyUserDbCredentialIdcsLastModifiedBy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialIdcsLastModifiedBy">IdentityDomainsMyUserDbCredentialIdcsLastModifiedBy</a>

---


### IdentityDomainsMyUserDbCredentialMetaList <a name="IdentityDomainsMyUserDbCredentialMetaList" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_my_user_db_credential.IdentityDomainsMyUserDbCredentialMetaList;

new IdentityDomainsMyUserDbCredentialMetaList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaList.get"></a>

```java
public IdentityDomainsMyUserDbCredentialMetaOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### IdentityDomainsMyUserDbCredentialMetaOutputReference <a name="IdentityDomainsMyUserDbCredentialMetaOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_my_user_db_credential.IdentityDomainsMyUserDbCredentialMetaOutputReference;

new IdentityDomainsMyUserDbCredentialMetaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaOutputReference.property.created">created</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaOutputReference.property.lastModified">lastModified</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaOutputReference.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMeta">IdentityDomainsMyUserDbCredentialMeta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaOutputReference.property.created"></a>

```java
public java.lang.String getCreated();
```

- *Type:* java.lang.String

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaOutputReference.property.lastModified"></a>

```java
public java.lang.String getLastModified();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaOutputReference.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMetaOutputReference.property.internalValue"></a>

```java
public IdentityDomainsMyUserDbCredentialMeta getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialMeta">IdentityDomainsMyUserDbCredentialMeta</a>

---


### IdentityDomainsMyUserDbCredentialTagsList <a name="IdentityDomainsMyUserDbCredentialTagsList" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_my_user_db_credential.IdentityDomainsMyUserDbCredentialTagsList;

new IdentityDomainsMyUserDbCredentialTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsList.get"></a>

```java
public IdentityDomainsMyUserDbCredentialTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTags">IdentityDomainsMyUserDbCredentialTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTags">IdentityDomainsMyUserDbCredentialTags</a>>

---


### IdentityDomainsMyUserDbCredentialTagsOutputReference <a name="IdentityDomainsMyUserDbCredentialTagsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_my_user_db_credential.IdentityDomainsMyUserDbCredentialTagsOutputReference;

new IdentityDomainsMyUserDbCredentialTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTags">IdentityDomainsMyUserDbCredentialTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTagsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTags">IdentityDomainsMyUserDbCredentialTags</a>

---


### IdentityDomainsMyUserDbCredentialTimeoutsOutputReference <a name="IdentityDomainsMyUserDbCredentialTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_my_user_db_credential.IdentityDomainsMyUserDbCredentialTimeoutsOutputReference;

new IdentityDomainsMyUserDbCredentialTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeouts">IdentityDomainsMyUserDbCredentialTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialTimeouts">IdentityDomainsMyUserDbCredentialTimeouts</a>

---


### IdentityDomainsMyUserDbCredentialUserOutputReference <a name="IdentityDomainsMyUserDbCredentialUserOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUserOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUserOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_domains_my_user_db_credential.IdentityDomainsMyUserDbCredentialUserOutputReference;

new IdentityDomainsMyUserDbCredentialUserOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUserOutputReference.resetOcid">resetOcid</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUserOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUserOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUserOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUserOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUserOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUserOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUserOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUserOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUserOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUserOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUserOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUserOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUserOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUserOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOcid` <a name="resetOcid" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUserOutputReference.resetOcid"></a>

```java
public void resetOcid()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUserOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUserOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUserOutputReference.property.display">display</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUserOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUserOutputReference.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUserOutputReference.property.ocidInput">ocidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUserOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUserOutputReference.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUserOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUserOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUser">IdentityDomainsMyUserDbCredentialUser</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUserOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUserOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUserOutputReference.property.display"></a>

```java
public java.lang.String getDisplay();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUserOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUserOutputReference.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

##### `ocidInput`<sup>Optional</sup> <a name="ocidInput" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUserOutputReference.property.ocidInput"></a>

```java
public java.lang.String getOcidInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUserOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUserOutputReference.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUserOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUserOutputReference.property.internalValue"></a>

```java
public IdentityDomainsMyUserDbCredentialUser getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyUserDbCredential.IdentityDomainsMyUserDbCredentialUser">IdentityDomainsMyUserDbCredentialUser</a>

---



