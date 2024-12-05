# `dataOciIdentityDomainsMyUserDbCredentials` Submodule <a name="`dataOciIdentityDomainsMyUserDbCredentials` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsMyUserDbCredentials <a name="DataOciIdentityDomainsMyUserDbCredentials" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials oci_identity_domains_my_user_db_credentials}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_my_user_db_credentials.DataOciIdentityDomainsMyUserDbCredentials;

DataOciIdentityDomainsMyUserDbCredentials.Builder.create(Construct scope, java.lang.String id)
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
//  .authorization(java.lang.String)
//  .compartmentId(java.lang.String)
//  .id(java.lang.String)
//  .myUserDbCredentialCount(java.lang.Number)
//  .myUserDbCredentialFilter(java.lang.String)
//  .resourceTypeSchemaVersion(java.lang.String)
//  .sortBy(java.lang.String)
//  .sortOrder(java.lang.String)
//  .startIndex(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.idcsEndpoint">idcsEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#idcs_endpoint DataOciIdentityDomainsMyUserDbCredentials#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.authorization">authorization</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#authorization DataOciIdentityDomainsMyUserDbCredentials#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#compartment_id DataOciIdentityDomainsMyUserDbCredentials#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#id DataOciIdentityDomainsMyUserDbCredentials#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.myUserDbCredentialCount">myUserDbCredentialCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#my_user_db_credential_count DataOciIdentityDomainsMyUserDbCredentials#my_user_db_credential_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.myUserDbCredentialFilter">myUserDbCredentialFilter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#my_user_db_credential_filter DataOciIdentityDomainsMyUserDbCredentials#my_user_db_credential_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#resource_type_schema_version DataOciIdentityDomainsMyUserDbCredentials#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.sortBy">sortBy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#sort_by DataOciIdentityDomainsMyUserDbCredentials#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.sortOrder">sortOrder</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#sort_order DataOciIdentityDomainsMyUserDbCredentials#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.startIndex">startIndex</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#start_index DataOciIdentityDomainsMyUserDbCredentials#start_index}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.idcsEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#idcs_endpoint DataOciIdentityDomainsMyUserDbCredentials#idcs_endpoint}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.authorization"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#authorization DataOciIdentityDomainsMyUserDbCredentials#authorization}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#compartment_id DataOciIdentityDomainsMyUserDbCredentials#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#id DataOciIdentityDomainsMyUserDbCredentials#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `myUserDbCredentialCount`<sup>Optional</sup> <a name="myUserDbCredentialCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.myUserDbCredentialCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#my_user_db_credential_count DataOciIdentityDomainsMyUserDbCredentials#my_user_db_credential_count}.

---

##### `myUserDbCredentialFilter`<sup>Optional</sup> <a name="myUserDbCredentialFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.myUserDbCredentialFilter"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#my_user_db_credential_filter DataOciIdentityDomainsMyUserDbCredentials#my_user_db_credential_filter}.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.resourceTypeSchemaVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#resource_type_schema_version DataOciIdentityDomainsMyUserDbCredentials#resource_type_schema_version}.

---

##### `sortBy`<sup>Optional</sup> <a name="sortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.sortBy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#sort_by DataOciIdentityDomainsMyUserDbCredentials#sort_by}.

---

##### `sortOrder`<sup>Optional</sup> <a name="sortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.sortOrder"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#sort_order DataOciIdentityDomainsMyUserDbCredentials#sort_order}.

---

##### `startIndex`<sup>Optional</sup> <a name="startIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.startIndex"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#start_index DataOciIdentityDomainsMyUserDbCredentials#start_index}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetMyUserDbCredentialCount">resetMyUserDbCredentialCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetMyUserDbCredentialFilter">resetMyUserDbCredentialFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetResourceTypeSchemaVersion">resetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetSortBy">resetSortBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetSortOrder">resetSortOrder</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetStartIndex">resetStartIndex</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAuthorization` <a name="resetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetAuthorization"></a>

```java
public void resetAuthorization()
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetCompartmentId"></a>

```java
public void resetCompartmentId()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetId"></a>

```java
public void resetId()
```

##### `resetMyUserDbCredentialCount` <a name="resetMyUserDbCredentialCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetMyUserDbCredentialCount"></a>

```java
public void resetMyUserDbCredentialCount()
```

##### `resetMyUserDbCredentialFilter` <a name="resetMyUserDbCredentialFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetMyUserDbCredentialFilter"></a>

```java
public void resetMyUserDbCredentialFilter()
```

##### `resetResourceTypeSchemaVersion` <a name="resetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetResourceTypeSchemaVersion"></a>

```java
public void resetResourceTypeSchemaVersion()
```

##### `resetSortBy` <a name="resetSortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetSortBy"></a>

```java
public void resetSortBy()
```

##### `resetSortOrder` <a name="resetSortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetSortOrder"></a>

```java
public void resetSortOrder()
```

##### `resetStartIndex` <a name="resetStartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetStartIndex"></a>

```java
public void resetStartIndex()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsMyUserDbCredentials resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_my_user_db_credentials.DataOciIdentityDomainsMyUserDbCredentials;

DataOciIdentityDomainsMyUserDbCredentials.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_my_user_db_credentials.DataOciIdentityDomainsMyUserDbCredentials;

DataOciIdentityDomainsMyUserDbCredentials.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_my_user_db_credentials.DataOciIdentityDomainsMyUserDbCredentials;

DataOciIdentityDomainsMyUserDbCredentials.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_my_user_db_credentials.DataOciIdentityDomainsMyUserDbCredentials;

DataOciIdentityDomainsMyUserDbCredentials.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciIdentityDomainsMyUserDbCredentials.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciIdentityDomainsMyUserDbCredentials resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciIdentityDomainsMyUserDbCredentials to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciIdentityDomainsMyUserDbCredentials that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsMyUserDbCredentials to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.itemsPerPage">itemsPerPage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.myUserDbCredentials">myUserDbCredentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.schemas">schemas</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.totalResults">totalResults</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.authorizationInput">authorizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.idcsEndpointInput">idcsEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.myUserDbCredentialCountInput">myUserDbCredentialCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.myUserDbCredentialFilterInput">myUserDbCredentialFilterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.resourceTypeSchemaVersionInput">resourceTypeSchemaVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.sortByInput">sortByInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.sortOrderInput">sortOrderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.startIndexInput">startIndexInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.authorization">authorization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.idcsEndpoint">idcsEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.myUserDbCredentialCount">myUserDbCredentialCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.myUserDbCredentialFilter">myUserDbCredentialFilter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.sortBy">sortBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.sortOrder">sortOrder</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.startIndex">startIndex</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `itemsPerPage`<sup>Required</sup> <a name="itemsPerPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.itemsPerPage"></a>

```java
public java.lang.Number getItemsPerPage();
```

- *Type:* java.lang.Number

---

##### `myUserDbCredentials`<sup>Required</sup> <a name="myUserDbCredentials" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.myUserDbCredentials"></a>

```java
public DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList getMyUserDbCredentials();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList</a>

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.schemas"></a>

```java
public java.util.List<java.lang.String> getSchemas();
```

- *Type:* java.util.List<java.lang.String>

---

##### `totalResults`<sup>Required</sup> <a name="totalResults" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.totalResults"></a>

```java
public java.lang.Number getTotalResults();
```

- *Type:* java.lang.Number

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.authorizationInput"></a>

```java
public java.lang.String getAuthorizationInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `idcsEndpointInput`<sup>Optional</sup> <a name="idcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.idcsEndpointInput"></a>

```java
public java.lang.String getIdcsEndpointInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `myUserDbCredentialCountInput`<sup>Optional</sup> <a name="myUserDbCredentialCountInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.myUserDbCredentialCountInput"></a>

```java
public java.lang.Number getMyUserDbCredentialCountInput();
```

- *Type:* java.lang.Number

---

##### `myUserDbCredentialFilterInput`<sup>Optional</sup> <a name="myUserDbCredentialFilterInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.myUserDbCredentialFilterInput"></a>

```java
public java.lang.String getMyUserDbCredentialFilterInput();
```

- *Type:* java.lang.String

---

##### `resourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="resourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.resourceTypeSchemaVersionInput"></a>

```java
public java.lang.String getResourceTypeSchemaVersionInput();
```

- *Type:* java.lang.String

---

##### `sortByInput`<sup>Optional</sup> <a name="sortByInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.sortByInput"></a>

```java
public java.lang.String getSortByInput();
```

- *Type:* java.lang.String

---

##### `sortOrderInput`<sup>Optional</sup> <a name="sortOrderInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.sortOrderInput"></a>

```java
public java.lang.String getSortOrderInput();
```

- *Type:* java.lang.String

---

##### `startIndexInput`<sup>Optional</sup> <a name="startIndexInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.startIndexInput"></a>

```java
public java.lang.Number getStartIndexInput();
```

- *Type:* java.lang.Number

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.authorization"></a>

```java
public java.lang.String getAuthorization();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.idcsEndpoint"></a>

```java
public java.lang.String getIdcsEndpoint();
```

- *Type:* java.lang.String

---

##### `myUserDbCredentialCount`<sup>Required</sup> <a name="myUserDbCredentialCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.myUserDbCredentialCount"></a>

```java
public java.lang.Number getMyUserDbCredentialCount();
```

- *Type:* java.lang.Number

---

##### `myUserDbCredentialFilter`<sup>Required</sup> <a name="myUserDbCredentialFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.myUserDbCredentialFilter"></a>

```java
public java.lang.String getMyUserDbCredentialFilter();
```

- *Type:* java.lang.String

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.resourceTypeSchemaVersion"></a>

```java
public java.lang.String getResourceTypeSchemaVersion();
```

- *Type:* java.lang.String

---

##### `sortBy`<sup>Required</sup> <a name="sortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.sortBy"></a>

```java
public java.lang.String getSortBy();
```

- *Type:* java.lang.String

---

##### `sortOrder`<sup>Required</sup> <a name="sortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.sortOrder"></a>

```java
public java.lang.String getSortOrder();
```

- *Type:* java.lang.String

---

##### `startIndex`<sup>Required</sup> <a name="startIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.startIndex"></a>

```java
public java.lang.Number getStartIndex();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsMyUserDbCredentialsConfig <a name="DataOciIdentityDomainsMyUserDbCredentialsConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_my_user_db_credentials.DataOciIdentityDomainsMyUserDbCredentialsConfig;

DataOciIdentityDomainsMyUserDbCredentialsConfig.builder()
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
//  .authorization(java.lang.String)
//  .compartmentId(java.lang.String)
//  .id(java.lang.String)
//  .myUserDbCredentialCount(java.lang.Number)
//  .myUserDbCredentialFilter(java.lang.String)
//  .resourceTypeSchemaVersion(java.lang.String)
//  .sortBy(java.lang.String)
//  .sortOrder(java.lang.String)
//  .startIndex(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.idcsEndpoint">idcsEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#idcs_endpoint DataOciIdentityDomainsMyUserDbCredentials#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.authorization">authorization</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#authorization DataOciIdentityDomainsMyUserDbCredentials#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#compartment_id DataOciIdentityDomainsMyUserDbCredentials#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#id DataOciIdentityDomainsMyUserDbCredentials#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.myUserDbCredentialCount">myUserDbCredentialCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#my_user_db_credential_count DataOciIdentityDomainsMyUserDbCredentials#my_user_db_credential_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.myUserDbCredentialFilter">myUserDbCredentialFilter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#my_user_db_credential_filter DataOciIdentityDomainsMyUserDbCredentials#my_user_db_credential_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#resource_type_schema_version DataOciIdentityDomainsMyUserDbCredentials#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.sortBy">sortBy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#sort_by DataOciIdentityDomainsMyUserDbCredentials#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.sortOrder">sortOrder</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#sort_order DataOciIdentityDomainsMyUserDbCredentials#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.startIndex">startIndex</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#start_index DataOciIdentityDomainsMyUserDbCredentials#start_index}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.idcsEndpoint"></a>

```java
public java.lang.String getIdcsEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#idcs_endpoint DataOciIdentityDomainsMyUserDbCredentials#idcs_endpoint}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.authorization"></a>

```java
public java.lang.String getAuthorization();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#authorization DataOciIdentityDomainsMyUserDbCredentials#authorization}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#compartment_id DataOciIdentityDomainsMyUserDbCredentials#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#id DataOciIdentityDomainsMyUserDbCredentials#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `myUserDbCredentialCount`<sup>Optional</sup> <a name="myUserDbCredentialCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.myUserDbCredentialCount"></a>

```java
public java.lang.Number getMyUserDbCredentialCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#my_user_db_credential_count DataOciIdentityDomainsMyUserDbCredentials#my_user_db_credential_count}.

---

##### `myUserDbCredentialFilter`<sup>Optional</sup> <a name="myUserDbCredentialFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.myUserDbCredentialFilter"></a>

```java
public java.lang.String getMyUserDbCredentialFilter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#my_user_db_credential_filter DataOciIdentityDomainsMyUserDbCredentials#my_user_db_credential_filter}.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.resourceTypeSchemaVersion"></a>

```java
public java.lang.String getResourceTypeSchemaVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#resource_type_schema_version DataOciIdentityDomainsMyUserDbCredentials#resource_type_schema_version}.

---

##### `sortBy`<sup>Optional</sup> <a name="sortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.sortBy"></a>

```java
public java.lang.String getSortBy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#sort_by DataOciIdentityDomainsMyUserDbCredentials#sort_by}.

---

##### `sortOrder`<sup>Optional</sup> <a name="sortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.sortOrder"></a>

```java
public java.lang.String getSortOrder();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#sort_order DataOciIdentityDomainsMyUserDbCredentials#sort_order}.

---

##### `startIndex`<sup>Optional</sup> <a name="startIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.startIndex"></a>

```java
public java.lang.Number getStartIndex();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#start_index DataOciIdentityDomainsMyUserDbCredentials#start_index}.

---

### DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentials <a name="DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentials" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentials.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_my_user_db_credentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentials;

DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentials.builder()
    .build();
```


### DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedBy <a name="DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedBy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_my_user_db_credentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedBy;

DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedBy.builder()
    .build();
```


### DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedBy <a name="DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedBy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_my_user_db_credentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedBy;

DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedBy.builder()
    .build();
```


### DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMeta <a name="DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMeta.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_my_user_db_credentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMeta;

DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMeta.builder()
    .build();
```


### DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTags <a name="DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_my_user_db_credentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTags;

DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTags.builder()
    .build();
```


### DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUser <a name="DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUser" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUser"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUser.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_my_user_db_credentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUser;

DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUser.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList <a name="DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_my_user_db_credentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList;

new DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.get"></a>

```java
public DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_my_user_db_credentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference;

new DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.property.display">display</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedBy">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.property.display"></a>

```java
public java.lang.String getDisplay();
```

- *Type:* java.lang.String

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedBy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedBy">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedBy</a>

---


### DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList <a name="DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_my_user_db_credentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList;

new DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.get"></a>

```java
public DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_my_user_db_credentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference;

new DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedBy">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.property.display"></a>

```java
public java.lang.String getDisplay();
```

- *Type:* java.lang.String

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedBy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedBy">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList <a name="DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_my_user_db_credentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList;

new DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.get"></a>

```java
public DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList <a name="DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_my_user_db_credentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList;

new DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.get"></a>

```java
public DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference <a name="DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_my_user_db_credentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference;

new DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.property.created">created</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.property.lastModified">lastModified</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMeta">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMeta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.property.created"></a>

```java
public java.lang.String getCreated();
```

- *Type:* java.lang.String

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.property.lastModified"></a>

```java
public java.lang.String getLastModified();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMeta getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMeta">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMeta</a>

---


### DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference <a name="DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_my_user_db_credentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference;

new DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.authorization">authorization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.compartmentOcid">compartmentOcid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.dbPassword">dbPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.deleteInProgress">deleteInProgress</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.domainOcid">domainOcid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.expired">expired</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.expiresOn">expiresOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.idcsCreatedBy">idcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.idcsEndpoint">idcsEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.idcsLastModifiedBy">idcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.idcsLastUpgradedInRelease">idcsLastUpgradedInRelease</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.idcsPreventedOperations">idcsPreventedOperations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.lastSetDate">lastSetDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.mixedDbPassword">mixedDbPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.mixedSalt">mixedSalt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.salt">salt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.schemas">schemas</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.tenancyOcid">tenancyOcid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.user">user</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentials">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.authorization"></a>

```java
public java.lang.String getAuthorization();
```

- *Type:* java.lang.String

---

##### `compartmentOcid`<sup>Required</sup> <a name="compartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.compartmentOcid"></a>

```java
public java.lang.String getCompartmentOcid();
```

- *Type:* java.lang.String

---

##### `dbPassword`<sup>Required</sup> <a name="dbPassword" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.dbPassword"></a>

```java
public java.lang.String getDbPassword();
```

- *Type:* java.lang.String

---

##### `deleteInProgress`<sup>Required</sup> <a name="deleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.deleteInProgress"></a>

```java
public IResolvable getDeleteInProgress();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `domainOcid`<sup>Required</sup> <a name="domainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.domainOcid"></a>

```java
public java.lang.String getDomainOcid();
```

- *Type:* java.lang.String

---

##### `expired`<sup>Required</sup> <a name="expired" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.expired"></a>

```java
public IResolvable getExpired();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `expiresOn`<sup>Required</sup> <a name="expiresOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.expiresOn"></a>

```java
public java.lang.String getExpiresOn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `idcsCreatedBy`<sup>Required</sup> <a name="idcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.idcsCreatedBy"></a>

```java
public DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList getIdcsCreatedBy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList</a>

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.idcsEndpoint"></a>

```java
public java.lang.String getIdcsEndpoint();
```

- *Type:* java.lang.String

---

##### `idcsLastModifiedBy`<sup>Required</sup> <a name="idcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.idcsLastModifiedBy"></a>

```java
public DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList getIdcsLastModifiedBy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList</a>

---

##### `idcsLastUpgradedInRelease`<sup>Required</sup> <a name="idcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.idcsLastUpgradedInRelease"></a>

```java
public java.lang.String getIdcsLastUpgradedInRelease();
```

- *Type:* java.lang.String

---

##### `idcsPreventedOperations`<sup>Required</sup> <a name="idcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.idcsPreventedOperations"></a>

```java
public java.util.List<java.lang.String> getIdcsPreventedOperations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `lastSetDate`<sup>Required</sup> <a name="lastSetDate" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.lastSetDate"></a>

```java
public java.lang.String getLastSetDate();
```

- *Type:* java.lang.String

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.meta"></a>

```java
public DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList getMeta();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList</a>

---

##### `mixedDbPassword`<sup>Required</sup> <a name="mixedDbPassword" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.mixedDbPassword"></a>

```java
public java.lang.String getMixedDbPassword();
```

- *Type:* java.lang.String

---

##### `mixedSalt`<sup>Required</sup> <a name="mixedSalt" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.mixedSalt"></a>

```java
public java.lang.String getMixedSalt();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.resourceTypeSchemaVersion"></a>

```java
public java.lang.String getResourceTypeSchemaVersion();
```

- *Type:* java.lang.String

---

##### `salt`<sup>Required</sup> <a name="salt" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.salt"></a>

```java
public java.lang.String getSalt();
```

- *Type:* java.lang.String

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.schemas"></a>

```java
public java.util.List<java.lang.String> getSchemas();
```

- *Type:* java.util.List<java.lang.String>

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.tags"></a>

```java
public DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList getTags();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList</a>

---

##### `tenancyOcid`<sup>Required</sup> <a name="tenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.tenancyOcid"></a>

```java
public java.lang.String getTenancyOcid();
```

- *Type:* java.lang.String

---

##### `user`<sup>Required</sup> <a name="user" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.user"></a>

```java
public DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList getUser();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentials getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentials">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentials</a>

---


### DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList <a name="DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_my_user_db_credentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList;

new DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.get"></a>

```java
public DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference <a name="DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_my_user_db_credentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference;

new DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTags">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTags getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTags">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTags</a>

---


### DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList <a name="DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_my_user_db_credentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList;

new DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.get"></a>

```java
public DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference <a name="DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_my_user_db_credentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference;

new DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.property.display">display</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUser">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUser</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.property.display"></a>

```java
public java.lang.String getDisplay();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUser getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUser">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUser</a>

---



